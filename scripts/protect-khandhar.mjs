import { webcrypto, randomBytes } from 'node:crypto';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
const { subtle } = webcrypto;
const configPath = new URL('../khandhar-lock.json', import.meta.url);
const b64 = (bytes) => Buffer.from(bytes).toString('base64');
const unb64 = (text) => Buffer.from(text, 'base64');
const iterations = 600000;
async function passwordKey(password, salt) {
  const material = await subtle.importKey('raw', Buffer.from(password), 'PBKDF2', false, ['deriveKey']);
  return subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations }, material, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}
if (process.argv.includes('--init')) {
  let password = '';
  for await (const chunk of process.stdin) password += chunk;
  password = password.trim();
  if (!password) throw new Error('Provide the password on stdin.');
  const pair = await subtle.generateKey({ name: 'RSA-OAEP', modulusLength: 3072, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' }, true, ['encrypt', 'decrypt']);
  const salt = randomBytes(16), iv = randomBytes(12);
  const key = await passwordKey(password, salt);
  const privateKey = await subtle.exportKey('pkcs8', pair.privateKey);
  const lockedKey = await subtle.encrypt({ name: 'AES-GCM', iv }, key, privateKey);
  await writeFile(configPath, JSON.stringify({ publicKey: await subtle.exportKey('jwk', pair.publicKey), salt: b64(salt), iv: b64(iv), lockedKey: b64(lockedKey), iterations }, null, 2) + '\n');
} else {
  const config = JSON.parse(await readFile(configPath, 'utf8'));
  const publicKey = await subtle.importKey('jwk', config.publicKey, { name: 'RSA-OAEP', hash: 'SHA-256' }, false, ['encrypt']);
  async function protect(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const file = join(directory, entry.name);
      if (entry.isDirectory()) { await protect(file); continue; }
      if (!entry.name.endsWith('.html')) throw new Error(`Unexpected unprotected asset: ${file}`);
      const html = await readFile(file, 'utf8');
      const key = await subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt']);
      const iv = randomBytes(12);
      const payload = {
        ...config,
        contentIv: b64(iv),
        wrappedKey: b64(await subtle.encrypt({ name: 'RSA-OAEP' }, publicKey, await subtle.exportKey('raw', key))),
        content: b64(await subtle.encrypt({ name: 'AES-GCM', iv }, key, Buffer.from(html))),
      };
      const template = await readFile(new URL('./khandhar-lock.html', import.meta.url), 'utf8');
      await writeFile(file, template.replace('"__PAYLOAD__"', JSON.stringify(payload)));
    }
  }
  await protect('dist/blog/khandhar');
  console.log('Encrypted Khandhar index and all post pages.');
}
