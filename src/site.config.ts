// ─────────────────────────────────────────────────────────────
//  Edit this file to update the site's content.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Mheboobkhan Pathan',
  // Short version shown in the loader and labels.
  shortName: 'mheboobkhan',
  version: '9.0',
  title: 'Mheboobkhan Pathan — Senior Threat Researcher',
  description:
    'Mheboobkhan Pathan is a Senior Threat Researcher at Microsoft with 9+ years in security operations, MDR, incident response, and threat hunting. Writing on probability, Bayesian inference, and hunting.',
  email: 'mheboob4444@gmail.com',

  hero: {
    kicker: 'senior threat researcher / microsoft',
    headline: 'Hunting threats. Quantifying uncertainty.',
    sub: 'Nine years across security operations, MDR, incident response, and threat hunting. I lead high-severity investigations at Microsoft and write about probability, Bayesian inference, and the craft of the hunt.',
  },

  about: [
    'I’m a cybersecurity professional who has spent over nine years in Security Operations, Managed Detection & Response, Incident Response, and Threat Hunting — leading complex investigations, sharpening detection capabilities, and mentoring the analysts who come next.',
    'At Microsoft I investigate high-severity incidents across 1,000+ customer tenants — ransomware, cloud attacks, identity threats, and sophisticated malware campaigns — and work with engineering to turn what we learn into products.',
    'Lately I’m most interested in where security meets probability: using AI and Bayesian reasoning to make detections calibrated instead of noisy.',
  ],

  // Rendered as the three-column grid under About.
  principles: [
    { label: 'hypothesis, not hunch', body: 'Hunts built on MITRE ATT&CK, the Pyramid of Pain, and the Diamond Model — chasing TTPs, not just IoCs.' },
    { label: 'calibrated detections', body: 'Fewer false positives, clearer signals. AI and ML where they measurably help the analyst.' },
    { label: 'teach it forward', body: 'Mentoring analysts and running training that raises the team’s AI fluency.' },
  ],

  stats: [
    { value: '9+', label: 'years in security operations' },
    { value: '1,000+', label: 'customer tenants investigated' },
    { value: '~40%', label: 'fewer false-positive alerts' },
  ],

  // "Selected impact" cards. `href` is optional.
  projects: [
    {
      name: 'AI alert grading',
      tag: 'ai / detection',
      description: 'Partnered with engineering to build and deploy an AI-based alert grading solution that cut false-positive alert volume by roughly 40%.',
    },
    {
      name: 'PII leak prevention',
      tag: 'hackathon → prod',
      description: 'A hackathon proof of concept, adopted by leadership and rolled out business-wide, that brought data privacy incidents to nearly zero. Won the DEX Ninja Award.',
    },
    {
      name: 'ADX operations dashboard',
      tag: 'automation',
      description: 'An Azure Data Explorer dashboard that automated operational reporting, surfaced key business metrics, and saves about an hour of manual work every day.',
    },
  ],

  experience: [
    {
      when: 'Nov 2022 — now',
      role: 'Senior Threat Researcher',
      org: 'Microsoft',
      summary: 'High-severity incident investigations for MDR clients; shipped four security products with Engineering and PM; mentor to junior analysts.',
    },
    {
      when: 'Jun 2022 — Nov 2022',
      role: 'Senior Support Analyst',
      org: 'Nomura Holdings',
      summary: 'Ran the threat hunting program, moving it from intel-driven to hypothesis-based hunting; planned Purple Team exercises; wrote detections in Splunk, Elastic, and CrowdStrike.',
    },
    {
      when: 'Mar 2020 — Jun 2022',
      role: 'Security Consultant (Lead)',
      org: 'IBM India',
      summary: 'Led a four-person hunt team; mapped threat landscapes to MITRE ATT&CK; turned CTI and APT research into IoAs, IoCs, and detection use cases.',
    },
  ],

  skills: [
    {
      group: 'hunt & respond',
      items: ['Threat Hunting', 'Incident Response', 'MDR', 'SOC', 'Detection Engineering', 'Threat Intelligence', 'MITRE ATT&CK', 'Purple Teaming', 'Threat Modeling', 'Malware Analysis', 'Ransomware', 'RCA'],
    },
    {
      group: 'platforms',
      items: ['Microsoft Defender XDR', 'Microsoft Sentinel', 'Splunk', 'Elastic', 'CrowdStrike Falcon', 'IBM QRadar', 'Azure Data Explorer', 'Cloud Security'],
    },
    {
      group: 'code, data & ai',
      items: ['KQL', 'Python', 'PowerShell', 'Security Copilot', 'Generative AI', 'Machine Learning', 'Bayesian Inference', 'PyMC'],
    },
  ],

  credentials: [
    { kind: 'certification', name: 'CISSP' },
    { kind: 'certification', name: 'Probability Foundations for Data Science and AI' },
    { kind: 'award', name: 'DEX Ninja Award — hackathon solution that cut org-wide data privacy incidents' },
    { kind: 'education', name: 'Electronics Engineering, Mumbai University — 2015' },
  ],

  // Writing folders. Each one is a directory in src/content/blog/<slug>/ and
  // gets its own page at /blog/<slug>/. Order here is the order on the site.
  writing: [
    {
      slug: 'technical-writing',
      title: 'Technical Writing',
      description: 'Essays and notes on threat hunting, security operations, probability, and AI. Originally published on Medium.',
    },
    {
      slug: 'probabilistic-threat-hunting',
      title: 'Probabilistic Threat Hunting',
      short: 'PTH',
      // A series reads front to back: list oldest first and number the parts.
      series: true,
      description: 'A series on hunting with probability: priors, likelihoods, and Bayesian updates applied to detection and investigation.',
    },
    {
      slug: 'khandhar',
      title: 'खंडहर',
      description: 'Khandhar — Hindi for “ruins”. Fragments, old ideas, and things worth digging through.',
    },
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/Mheboobkhan' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mheboobkhan' },
  ],
};
