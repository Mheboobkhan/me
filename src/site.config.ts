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
    'Mheboobkhan Pathan is a Senior Threat Researcher at Microsoft with 10 years of experience in threat hunting and incident response. Writing on probability, Bayesian inference, and hunting.',
  email: 'mheboob4444@gmail.com',
  location: 'Hyderabad, India',
  // GoatCounter site code (the "xyz" in xyz.goatcounter.com). Empty = no tracking and no visit counter.
  goatcounter: 'mheboobkhan',

  hero: {
    kicker: 'senior threat researcher / microsoft',
    headline: 'Hunting threats. Quantifying uncertainty.',
    sub: 'Threat hunter and incident responder with 10 years in cyber security. I hunt for Microsoft’s MXDR service and write about applying probability to real-world security problems.',
  },

  // Also the "Professional summary" on the resume page.
  summary:
    "CISSP-certified cybersecurity professional with 10 years of experience spanning endpoint security, threat hunting, and incident response. Investigates threats across more than 80 MXDR customers and has led a four-member hunting team. Translates adversary intelligence and investigation findings into detection improvements, remediation guidance, and executive recommendations. Develops AI security tools and mentors analysts.",

  // Rendered as the three-column grid under About.
  principles: [
    { label: 'hypothesis, not hunch', body: 'Hunts built on MITRE ATT&CK, the Pyramid of Pain, and the Diamond Model — moving from intel-only hunting to IoA and TTP-based hunting.' },
    { label: 'less noise', body: 'AI and ML where they measurably help the analyst — like cutting alert noise by up to 40%.' },
    { label: 'teach it forward', body: 'Guiding and mentoring junior team members, and leading hunt teams.' },
  ],

  stats: [
    { value: '10', label: 'years in cyber security' },
    { value: '80+', label: 'customers responded for' },
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
      role: 'Senior Threat Researcher',
      org: 'Microsoft',
      location: 'Hyderabad, Telangana',
      summary: 'Incident responder and threat hunter for Microsoft’s MXDR service across 80+ customers; cut alert noise by up to 40% with AI; helped ship 4 major products.',
      highlights: [
        "Own high-severity investigations across more than 80 MXDR customers, conducting threat hunting, assessing customer impact, and providing remediation guidance.",
        "Led investigations into incidents affecting over 1,000 customer tenants, performing threat hunting and impact assessments to support response and recovery.",
        "Partnered with Engineering on an AI-based alert grading solution that reduced false-positive alert volume by approximately 40%.",
        "Built a PII disclosure prevention proof of concept adopted across the business, reducing data privacy incidents to nearly zero; received the DEX Ninja Award.",
        "Collaborated with Engineering and Product Management to deliver four major security products; built an ADX reporting dashboard saving approximately one hour daily.",
        "Investigated ransomware, cloud attacks, identity threats, and sophisticated malware; produced technical reports and mentored analysts in investigation and AI-assisted workflows."
      ],
    },
    {
      when: 'Jun 2022 — Nov 2022',
      role: 'Senior Support Analyst',
      org: 'Nomura Holdings',
      location: 'Mumbai, Maharashtra',
      summary: 'Guided the threat hunting program from purely intel-based to IoA and TTP-based hunting; purple team exercises; detections in Splunk, Elastic, and CrowdStrike.',
      highlights: [
        "Led hypothesis-driven hunting using MITRE ATT&CK, the Diamond Model, and the Pyramid of Pain, advancing the program toward IoA- and TTP-based hunting.",
        "Developed detection logic using CrowdStrike, Splunk, and Elastic; coordinated purple team exercises and supported major incident investigations and containment."
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
        "Led a four-member threat hunting team, coordinating customer engagements and uncovering threats missed by existing security products.",
        "Analyzed emerging attack techniques and APT campaigns to derive actionable IoAs and IoCs, hunting hypotheses, and detection use cases.",
        "Modeled attack surfaces and mapped threats to MITRE ATT&CK; partnered with Incident Response on eradication and root cause analysis.",
        "Presented hunting findings and strategic recommendations to executive management through technical reports and monthly reviews."
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
        "Developed security queries, rules, alerts, dashboards, reports, and workflows; created operational support configuration guides.",
        "Migrated endpoints from Trend Micro to Sophos and resolved complex endpoint and customer technical issues through diagnosis and solution deployment."
      ],
    },
    {
      when: 'Nov 2018 — Mar 2020',
      role: 'Antivirus Admin',
      org: 'IDC Technologies',
      location: 'Mumbai, Maharashtra',
      summary: 'Antivirus patching, signature monitoring, and troubleshooting across endpoints; SOPs and compliance reports.',
      highlights: [
        "Deployed antivirus patches, monitored signature updates, troubleshot endpoint agents, and analyzed logs; maintained SOPs, compliance reports, and risk reports."
      ],
    },
    {
      when: 'Mar 2016 — Jul 2017',
      role: 'Desktop Support Engineer',
      org: 'ITSource Technologies',
      location: 'Mumbai, Maharashtra',
      summary: 'Antivirus compliance, agent troubleshooting, and remote user support.',
      highlights: [
        "Maintained antivirus compliance, resolved agent and user issues remotely, and coordinated troubleshooting with original equipment manufacturers."
      ],
    },
  ],

  skills: [
    {
      "group": "hunting and intelligence",
      "items": [
        "Hypothesis-driven hunting",
        "APT research",
        "IoAs and IoCs",
        "MITRE ATT&CK",
        "Diamond Model",
        "Pyramid of Pain",
        "threat modeling",
        "purple teaming"
      ]
    },
    {
      "group": "investigation and delivery",
      "items": [
        "Incident response",
        "malware analysis",
        "ransomware",
        "cloud and identity threats",
        "root cause analysis",
        "customer engagements",
        "executive reporting"
      ]
    },
    {
      "group": "tools and automation",
      "items": [
        "CrowdStrike Falcon",
        "Microsoft Defender XDR",
        "Sentinel",
        "Splunk",
        "Elastic",
        "QRadar",
        "Cyware TIP",
        "Sysmon",
        "YARA",
        "Python",
        "PowerShell",
        "KQL",
        "AQL",
        "ADX",
        "Security Copilot"
      ]
    }
  ],

  credentials: [
    {
      "kind": "education",
      "name": "Bachelor’s degree in Electronics Engineering | University of Mumbai | 2015"
    },
    {
      "kind": "certification",
      "name": "CISSP"
    },
    {
      "kind": "certification",
      "name": "Probability Foundations for Data Science and AI"
    }
  ],

  research: [
    {
      "name": "ShadowMandate",
      "role": "Creator",
      "href": "https://github.com/Mheboobkhan/ShadowMandate",
      "highlights": [
        "Built an AI agent log analysis tool that evaluates actions against declared objectives, using human-authored JSON rules and explainable probabilistic scoring for analyst review."
      ]
    },
    {
      "name": "garak",
      "role": "Submitted Pull Request",
      "href": "https://github.com/Mheboobkhan/garak",
      "highlights": [
        "Authored hidden-context disclosure probes for LLM tool schemas, retrieved documents, and workflow rules; validated exposure through exact recall of planted canaries."
      ]
    },
    {
      "name": "pproxy — Privacy-Aware LLM Proxy",
      "role": "Creator",
      "href": "https://github.com/Mheboobkhan/pproxy",
      "highlights": [
        "Built a Python proxy using local Ollama models to remove or generalize sensitive prompt details before cloud submission, with optional local answer synthesis using the original context.",
        "Integrated OpenAI, Hugging Face, and Anthropic APIs; implemented baseline-versus-rephrase comparisons, resumable JSONL experiment logging, and dry-run support to evaluate privacy–utility tradeoffs."
      ]
    }
  ],

  researchWriting: {
    "name": "Probabilistic Threat Hunting",
    "role": "Research Project",
    "description": "Researching probability theory and statistical modeling for threat hunting, focusing on behavioral baselining, Bayesian reasoning, anomaly detection, and prioritization; developing a practical guide for SOC analysts with R-based analysis."
  },

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
