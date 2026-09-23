---
title: "Token Impersonation PrivEsc: C++ Code"
description: "It was suppose to be a part of my malware programming series but unfortunately i am unable to create a whole blog series. Never minds lest…"
pubDate: 2020-10-10
category: "essay"
tags: []
originalURL: "https://medium.com/@whiteheart0/token-impersonation-privesc-c-code-9d0ce3553705"
---

It was suppose to be a part of my malware programming series but unfortunately i am unable to create a whole blog series. Never minds lest see how we can write program to perform token impersonation on windows system and get SYSTEM privileges

### What is token Impersonation exploit?

Token impersonation PrivEsc is technique when attacker steals security token associated with high privilege process or user ans spawn new process with stolen token. Newly created malicious process will have same privileges of victim process.

### Flow of the program ?

I am directly diving into program and skipping theory about token impersonation. Below is steps our program will execute in order to achieve system privilege shell by duplicating the token of system level process.

1.  Take PID from user to open token of the process associated with PID
2.  Opening token of specified process .
3.  Duplicating the process token.
4.  Creating new process from duplicate token of victim process

### Take PID from user to open token of the process associated with PID

Below code will open the handle of process provided by user as PID , we will open process with *PROCESS\_QUERY\_INFORMATION* which is required to open token of the process in next step.

> HANDLE rProcess2= OpenProcess(PROCESS\_QUERY\_INFORMATION,TRUE,pid);

### Opening token of specified process .

Now we will open token of the process handle we retrieved from previous step. Using *OpenProcessToken()* Function.

> OpenProcessToken (rProcess2,TOKEN\_QUERY | TOKEN\_DUPLICATE | TOKEN\_ASSIGN\_PRIMARY | TOKEN\_IMPERSONATE,&pToken);

### Duplicating the process token.

In order to use above token we have extracted and store at pToken we need to duplicate it. We can do this using *DuplicateTokenEx()* function

> DuplicateTokenEx(pToken,MAXIMUM\_ALLOWED, NULL,seImpersonateLevel, tokenType,&pNewToken)

### Creating new process from duplicate token of victim process

Now finale stage of this exploit is to create new process with token we have duplicated. We can achieve it using *CreateProcessWithTokenW()* or *CreateProcessAsUserA().*

Its advisable to user first function, but i wan unable to use it due to some unknown reason to me :( so i decide to user second function. I had to do some manual changes in order to make this program work, but it worked.

> CreateProcessAsUserA(pNewToken,NULL,”C:\\\\Windows\\\\system32\\\\cmd.exe”,NULL,NULL,TRUE,CREATE\_NEW\_CONSOLE,NULL,”c:\\\\windows\\\\system32",&si,&pi)

And boom!!! you will have system privilege shell.

Check my entire [code](https://github.com/Mheboobkhan/Win32-System-Programming/blob/master/TPrivEsc.cpp) here, If you like it please start the project.
