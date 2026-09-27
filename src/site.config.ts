// ─────────────────────────────────────────────────────────────
//  Edit this file to update the site's content.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Mheboobkhan Pathan',
  // Short version shown in the loader and labels.
  shortName: 'mheboobkhan',
  version: '9.0',
  title: 'Mheboobkhan Pathan — Senior Threat Hunter',
  description:
    'Mheboobkhan Pathan is a Senior Threat Hunter at Microsoft with 9+ years of experience in threat hunting and incident response. Writing on probability, Bayesian inference, and hunting.',
  email: 'mheboob4444@gmail.com',
  location: 'Hyderabad, India',

  hero: {
    kicker: 'senior threat hunter / microsoft',
    headline: 'Hunting threats. Quantifying uncertainty.',
    sub: 'Threat hunter and incident responder with 9+ years in cyber security. I hunt for Microsoft’s MXDR service and write about applying probability to real-world security problems.',
  },

  // Also the "Professional summary" on the resume page.
  summary:
    'Seasoned cyber threat hunter and incident responder with over 9 years of experience in identifying, analyzing, and mitigating sophisticated cyber threats. Proficient with advanced threat detection tools, thorough investigations, and robust security measures that safeguard critical information assets. Eager to apply mathematical concepts to solve real-world cyber security problems.',

  // Rendered as the three-column grid under About.
  principles: [
    { label: 'hypothesis, not hunch', body: 'Hunts built on MITRE ATT&CK, the Pyramid of Pain, and the Diamond Model — moving from intel-only hunting to IoA and TTP-based hunting.' },
    { label: 'less noise', body: 'AI and ML where they measurably help the analyst — like cutting alert noise by up to 40%.' },
    { label: 'teach it forward', body: 'Guiding and mentoring junior team members, and leading hunt teams.' },
  ],

  stats: [
    { value: '9+', label: 'years in cyber security' },
    { value: '60+', label: 'customers responded for' },
    { value: '40%', label: 'less alert noise' },
    { value: '4', label: 'major products shipped' },
  ],

  // "Selected impact" cards. `href` is optional.
  projects: [
    {
      name: 'AI false-positive resolution',
      tag: 'ai / detection',
      description: 'Implemented an AI model that resolves known false positives by learning from historic grading, reducing alert noise by up to 40%.',
    },
    {
      name: 'PII delivery prevention',
      tag: 'privacy',
      description: 'Built a proof of concept that prevents PII from being delivered to unintended audiences, reducing data privacy incidents.',
    },
    {
      name: 'Products & solutions',
      tag: 'engineering',
      description: 'Worked with engineering and PMs to ship 4 major products to production; 2 of my solutions were adopted by leadership.',
    },
  ],

  // Pinned GitHub repos, shown under "Selected work". `fork` marks a repo that isn't original work.
  github: [
    { name: 'ShadowMandate', lang: 'Python', href: 'https://github.com/Mheboobkhan/ShadowMandate', description: 'Bayesian-network drift detector for AI agent logs — scores behavior against generic bad-pattern rules and each agent’s own declared mandate.' },
    { name: 'twitter_cti', lang: 'Go', href: 'https://github.com/Mheboobkhan/twitter_cti', description: 'Twitter IOC hunter — parses IPs, URLs (fanged and defanged), and hashes.' },
    { name: 'threathuntingwithpython', lang: 'Jupyter', href: 'https://github.com/Mheboobkhan/threathuntingwithpython', description: 'Machine learning tools for threat hunting, from baselining to threat detection.' },
    { name: 'Sycth', lang: 'Python', href: 'https://github.com/Mheboobkhan/Sycth', description: 'Recovers passwords from crackme binaries using angr symbolic execution.' },
    { name: 'garak', lang: 'fork', fork: true, href: 'https://github.com/Mheboobkhan/garak', description: 'Fork of NVIDIA’s garak, the LLM vulnerability scanner.' },
  ],

  // Homepage shows the first three entries' `summary`; the resume page shows `highlights` and `tools`.
  experience: [
    {
      when: 'Nov 2022 — now',
      role: 'Senior Threat Hunter',
      org: 'Microsoft R&D',
      location: 'Hyderabad, Telangana',
      summary: 'Incident responder and threat hunter for Microsoft’s MXDR service across 60+ customers; cut alert noise by up to 40% with AI; helped ship 4 major products.',
      highlights: [
        'Incident responder and threat hunter for Microsoft’s MXDR service — advanced incident response and threat hunting for customers across many sectors, responding to threats for more than 60 customers.',
        'Reduced alert noise by up to 40% by implementing an AI model that resolves known false positives by learning from historic grading.',
        'Reduced data privacy incidents with a proof of concept that prevents PII from being delivered to unintended audiences.',
        'Collaborate with engineering and PMs to deliver products efficiently; helped ship 4 major products to production.',
        'Provided 2 major solutions to business problems that were adopted by leadership.',
        'Respond to threats ranging from ransomware and cloud attacks to sophisticated malware; write project reports and coordinate with the team.',
        'Guide and mentor junior team members.',
      ],
    },
    {
      when: 'Jun 2022 — Nov 2022',
      role: 'Senior Support Analyst',
      org: 'Nomura Holdings',
      location: 'Mumbai, Maharashtra',
      summary: 'Guided the threat hunting program from purely intel-based to IoA and TTP-based hunting; purple team exercises; detections in Splunk, Elastic, and CrowdStrike.',
      highlights: [
        'Developed advanced threat hunting strategies based on methodologies like the Pyramid of Pain and the Diamond Model.',
        'Guided a team in executing the threat hunting program, moving the organization from purely intel-based hunting to IoA and TTP-based hunting.',
        'Coordinated and executed purple team exercises.',
        'Developed advanced threat detection logic and queries in Splunk, Elastic, and CrowdStrike.',
        'Integrated threat hunting into daily operations using machine learning and AI.',
        'Participated in incident response for major incidents.',
      ],
      tools: ['Splunk', 'SIEM', 'Python'],
    },
    {
      when: 'Mar 2020 — Jun 2022',
      role: 'Security Consultant',
      org: 'IBM India',
      location: 'Mumbai, Maharashtra',
      summary: 'Led a four-person hunt team; mapped threats to MITRE ATT&CK; turned threat intelligence and APT research into IoAs, IoCs, and detection use cases.',
      highlights: [
        'Conducted regular threat hunts that uncovered multiple hidden threats undetected by existing security products, protecting the organization from monetary and reputational loss.',
        'Led a team of four conducting threat hunting in customer environments.',
        'Mapped threats on the MITRE ATT&CK framework against the organization’s threat landscape to keep a constant picture of the attack surface.',
        'Collected and analyzed threat intelligence, including new attack vectors and APT campaigns, extracting indicators of attack (IoA) and compromise (IoC).',
        'Performed threat modeling of external and internal attack surfaces to develop precise hunting hypotheses.',
        'Developed use cases from hunting results to enhance detection capabilities.',
        'Worked with incident response to eradicate threats found during hunts and conduct root cause analysis (RCA).',
        'Prepared detailed reports and monthly presentations of hunt results for executive management.',
      ],
      tools: ['QRadar', 'TIP (Cyware)', 'AQL', 'Sysmon', 'YARA'],
    },
    {
      when: 'Nov 2018 — Mar 2020',
      role: 'InfoSec Admin',
      org: 'NetConnect Pvt Ltd',
      location: 'Mumbai, Maharashtra',
      summary: 'Built security operations content — queries, rules, alerts, dashboards — and migrated endpoints from Trend Micro to Sophos.',
      highlights: [
        'Developed security operations content: queries, templates, reports, rules, alerts, dashboards, and workflows.',
        'Developed, implemented, and configured guides for the operations support team.',
        'Migrated endpoints from Trend Micro to Sophos.',
        'Diagnosed and resolved complex customer issues, designing solutions and facilitating deployment.',
        'Contributed to unit-level and organizational initiatives.',
      ],
    },
    {
      when: 'Nov 2018 — Mar 2020',
      role: 'Antivirus Admin',
      org: 'IDC Technologies',
      location: 'Mumbai, Maharashtra',
      summary: 'Antivirus patching, signature monitoring, and troubleshooting across endpoints; SOPs and compliance reports.',
      highlights: [
        'Deployed antivirus patches on endpoint devices.',
        'Monitored antivirus signature updates on all scoped devices.',
        'Troubleshot antivirus issues via the central console.',
        'Collected and analyzed logs.',
        'Prepared and maintained SOPs, weekly compliance reports, and risk reports.',
      ],
    },
    {
      when: 'Mar 2016 — Jul 2017',
      role: 'Desktop Support Engineer',
      org: 'ITSource Technologies',
      location: 'Mumbai, Maharashtra',
      summary: 'Antivirus compliance, agent troubleshooting, and remote user support.',
      highlights: [
        'Maintained compliance of antivirus systems.',
        'Troubleshot agent issues.',
        'Resolved user issues remotely and coordinated with the OEM.',
      ],
    },
  ],

  skills: [
    {
      group: 'hunt & respond',
      items: ['Threat Hunting', 'Incident Response', 'MXDR', 'Threat Intelligence', 'MITRE ATT&CK', 'Pyramid of Pain', 'Diamond Model', 'Purple Teaming', 'Threat Modeling', 'Detection Use Cases', 'RCA'],
    },
    {
      group: 'platforms',
      items: ['Splunk', 'Elastic', 'CrowdStrike', 'IBM QRadar', 'Cyware TIP', 'Sysmon', 'YARA', 'Sophos', 'Trend Micro'],
    },
    {
      group: 'code, data & ai',
      items: ['Python', 'AQL', 'SIEM queries', 'Machine Learning', 'AI'],
    },
  ],

  credentials: [
    { kind: 'education', name: 'B.Sc., Electronic Engineering — MH Saboo Siddik College of Engineering, Mumbai (2015)' },
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
      // Easter egg: listed under Writing, never on the homepage.
      home: false,
    },
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/Mheboobkhan' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mheboobkhan' },
    { label: 'Medium', href: 'https://whiteheart0.medium.com/' },
  ],
};
