/**
 * PORTFOLIO DATA FILE - Disha P
 * 
 * Single source of truth for portfolio content, projects,
 * research summaries, certificates, skills, and links.
 * Updated with verified repos, DOI links, and internships.
 */

const PORTFOLIO_DATA = {
  profile: {
    fullName: "Disha P",
    preferredName: "Disha",
    title: "AI/ML Researcher • UI/UX Designer • Cybersecurity Enthusiast",
    subtitle: "Third-Year B.E. Computer Science Engineering Student | SIMATS Engineering, Class of 2028",
    statusBadge: "Available for Summer 2026 Internships & Research",
    location: "Chennai, Tamil Nadu, India",
    email: "dishapradeep25@gmail.com",
    github: "https://github.com/DISHA-1125",
    linkedin: "https://linkedin.com/in/disha-p-47231530b",
    avatarImage: "assets/images/avatar-cat.jpg",
    shortBio: "Building practical software and research across AI/ML, UI/UX and cybersecurity. Author of IEEE-published medical deep learning research, recipient of the ATiGB 2026 Best Paper Presentation and Tech Star Summit 2026 Best Poster awards.",
    longBio: "I am a third-year Computer Science Engineering student at SIMATS Engineering (Class of 2028). I develop software and empirical research that connect algorithmic precision with human usability and defensive system security. My published work includes comparative deep learning for breast cancer histopathology (IEEE ATiGB 2026, Da Nang, Vietnam), transformer architectures for heartbeat biometric authentication (Best Poster Award, Tech Star Summit 2026), and accessible community applications such as JEEVA and Lost & Found."
  },

  quickStats: [
    { label: "Major Research Awards", value: "2", suffix: "", detail: "IEEE ATiGB & Tech Star Summit" },
    { label: "Research Papers", value: "4", suffix: "", detail: "Medical AI, Biometrics & Security" },
    { label: "Featured Projects", value: "3", suffix: "", detail: "JEEVA, Lost&Found, Netflix EDA" },
    { label: "Certifications", value: "11", suffix: "+", detail: "Oracle, NPTEL, Forage & GUVI" }
  ],

  education: {
    institution: "SIMATS Engineering",
    fullInstitution: "Saveetha Institute of Medical and Technical Sciences",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    period: "2024 – 2028 (Class of 2028, Third Year)",
    location: "Chennai, India",
    highlights: [
      "Specializing in Artificial Intelligence, Machine Learning, and Information Security",
      "Published IEEE Researcher (DOI: 10.1109/ATiGB70203.2026.11628256)",
      "Campus Leadership: Registration Head at ZyRonix Tech Club (2026 – 2028 · 8 months)"
    ]
  },

  focusAreas: [
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      tagline: "Medical Deep Learning & Sequence Models",
      icon: "brain",
      description: "Training convolutional networks and transformer models on biomedical imagery and cardiac signals. Published author in IEEE Xplore with peer-reviewed medical imaging benchmarks.",
      technologies: ["Python", "Deep Learning", "CNNs", "Transformers", "Pandas", "Matplotlib", "NPTEL DL"]
    },
    {
      id: "ui-ux",
      title: "UI/UX & Web Development",
      tagline: "Accessible, Multilingual & Empathetic Tech",
      icon: "palette",
      description: "Designing tactile, intuitive web applications that solve real community challenges. Architecting responsive layouts, localized language support (JEEVA), and clean design systems.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Firebase", "Supabase", "Neumorphism", "Responsive UX"]
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity & Embedded Systems",
      tagline: "Biometric Verification & Protocol Defense",
      icon: "shield-check",
      description: "Researching heartbeat biometric authentication, comparing SSL vs End-to-End application encryption, and completing industry cyber simulations with Deloitte Australia.",
      technologies: ["Biometric Auth", "SSL vs E2E", "Deloitte Cyber", "ESP32", "Arduino", "IoT Sensors"]
    }
  ],

  projects: [
    {
      id: "jeeva-community",
      title: "JEEVA",
      subtitle: "Multilingual Community-Help Web Application",
      category: "Web • Multilingual • Social Impact",
      coverGradient: "linear-gradient(135deg, #561C24 0%, #C7B7A3 50%, #6D2932 100%)",
      oneLiner: "A multilingual community-help platform designed for localized emergency mutual aid, resource coordination, and urgent public assistance.",
      status: "In Progress",
      metrics: "Multilingual community support",
      githubUrl: "https://github.com/DISHA-1125/JEEVA",
      liveUrl: "#",
      techStack: ["HTML5", "CSS3", "JavaScript", "Firebase", "Supabase", "Git"],
      problem: "During local crises, individuals face critical barriers accessing timely assistance due to language exclusivity, complex user journeys, and unverified aid requests.",
      role: "Lead Creator & Full-Stack Developer. Conceptualized the multilingual user journey, interface accessibility standards, and cloud database integration.",
      approach: [
        "Architected an inclusive, multilingual user interface allowing citizens of diverse linguistic backgrounds to report and request localized assistance with minimal friction.",
        "Integrated Firebase and Supabase for real-time request synchronization, location-based dispatch, and tamper-resistant volunteer coordination.",
        "Designed high-contrast, high-touch UI optimized for mobile devices during low-bandwidth conditions."
      ],
      results: [
        "Working repository established at DISHA-1125/JEEVA with ongoing feature integrations.",
        "Engineered accessible component layouts adhering to WCAG standards.",
        "Featured project in Disha's social-impact engineering portfolio."
      ]
    },
    {
      id: "lost-and-found",
      title: "Lost and Found",
      subtitle: "Web Platform to Report, Search and Manage Lost and Found Items",
      category: "Full-Stack • Web • Campus Utility",
      coverGradient: "linear-gradient(135deg, #561C24 0%, #6D2932 50%, #C7B7A3 100%)",
      oneLiner: "A modern centralized web application enabling students and communities to report, search, match, and securely reclaim misplaced belongings.",
      status: "In Progress",
      metrics: "Automated search & claim workflow",
      githubUrl: "https://github.com/DISHA-1125/lostfound",
      liveUrl: "#",
      techStack: ["HTML", "CSS", "JavaScript", "Firebase", "Supabase", "Git", "GitHub"],
      problem: "Traditional notice boards and ad-hoc chat channels fail to organize lost valuables, leading to high rates of permanent loss and privacy exposure.",
      role: "Full-Stack Developer. Engineered the search query filtering, item reporting workflow, category tagging, and claim verification architecture.",
      approach: [
        "Created a clean, searchable web directory with category filters, date stamps, and location tags for streamlined item retrieval.",
        "Implemented verification challenge mechanisms so claimants must prove ownership before receiving finder contact details.",
        "Built responsive, mobile-first layouts so items can be reported on-the-go immediately after being found."
      ],
      results: [
        "Active development repository hosted at DISHA-1125/lostfound.",
        "Reduced item claim lifecycle through organized cataloging and structured search filters.",
        "Designed with tactile soft-UI visual feedback for rapid user onboarding."
      ]
    },
    {
      id: "netflix-analytics",
      title: "OTT Content Strategy & Trend Analysis",
      subtitle: "Netflix Data Analytics: 8,807 Titles Analysed with Python, Pandas & Matplotlib",
      category: "Data Science • Analytics • Python",
      coverGradient: "linear-gradient(135deg, #6D2932 0%, #561C24 60%, #E8D8C4 100%)",
      oneLiner: "Comprehensive exploratory data analysis and trend investigation across 8,807 streaming titles uncovering genre evolutions, country distributions, and release strategies.",
      status: "Completed (Educational Project)",
      metrics: "8,807 streaming titles analyzed",
      githubUrl: "https://github.com/DISHA-1125/DATAANALYST_NETFLIX",
      liveUrl: "#",
      techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy", "Jupyter"],
      problem: "Understanding content distribution dynamics, TV vs. movie balance, regional production trends, and audience rating shifts in large-scale streaming catalogs.",
      role: "Sole Data Analyst. Handled data ingestion, preprocessing, multi-country split analysis, exploratory visualizations, and statistical summaries.",
      approach: [
        "Ingested and sanitized the 8,807-title Netflix dataset, addressing missing director entries, composite country fields, and date format normalizations.",
        "Generated univariate and bivariate visualizations mapping content additions by year, runtime distributions, and rating concentrations.",
        "Synthesized strategic takeaways on content growth trajectories and international market expansion."
      ],
      results: [
        "Published complete reproducible analysis code and notebooks on DISHA-1125/DATAANALYST_NETFLIX.",
        "Visualized a clear shift toward episodic series and surge in international acquisitions over the past decade.",
        "Demonstrated statistical rigor in handling real-world imperfect catalog datasets."
      ]
    }
  ],

  research: [
    {
      id: "breast-cancer-histopathology",
      title: "Histopathology Images Supported Benign/Malignant Breast Cancer Analysis using Lightweight and Conventional Deep Learning Models",
      shortTitle: "Breast Cancer Histopathology Analysis",
      domain: "Biomedical Deep Learning • Medical Imaging",
      awardBadge: "Best Paper Presentation Award",
      awardSub: "IEEE ATiGB 2026, Da Nang, Vietnam (10-11 July 2026)",
      conference: "11th International Conference on Applying New Technology in Green Buildings (ATiGB 2026)",
      doi: "10.1109/ATiGB70203.2026.11628256",
      doiUrl: "https://doi.org/10.1109/ATiGB70203.2026.11628256",
      ieeeXploreUrl: "https://ieeexplore.ieee.org/document/11628256/",
      coAuthors: "Ragavi V L, Millicent Mabel M, Vickram A S, Kavitha D, Disha P",
      goalSummary: "Classify histopathology images as benign or malignant using lightweight and conventional deep learning models, enabling fast, resource-efficient clinical screening.",
      approachOneLiner: "Comparative deep learning benchmarks evaluating lightweight convolutional architectures against conventional heavy models for edge clinical diagnostic hardware.",
      certificateImg: "assets/certificates/atigb-best-paper.jpg",
      status: "Published in IEEE Xplore (DOI: 10.1109/ATiGB70203.2026.11628256)"
    },
    {
      id: "heartbeat-biometrics",
      title: "Heartbeat-Based Biometric Authentication Using Transformer Models Compared with Hidden Markov Models",
      shortTitle: "Heartbeat-Based Biometric Authentication",
      domain: "AI/ML • Biometric Security • Deep Learning",
      awardBadge: "Best Poster Presentation Award",
      awardSub: "Tech Star Summit 2026",
      conference: "Tech Star Summit 2026 & Department of CSE, SIMATS Engineering",
      repoUrl: "https://github.com/DISHA-1125/RESEARCH_1",
      coAuthors: "Disha P & Collaborators",
      goalSummary: "Explore cardiac signals (ECG) as a spoof-resistant living biometric modality for user authentication, contrasting self-attention Transformer networks against classical Hidden Markov Models.",
      approachOneLiner: "Capturing individual cardiac electrical waveforms with sequence attention mechanisms to evaluate identification accuracy and resistance to synthetic replay attacks.",
      certificateImg: null,
      status: "Won Best Poster Award • Repo: DISHA-1125/RESEARCH_1"
    },
    {
      id: "cognitive-rehabilitation",
      title: "A Comparison of Smartphone-Based Cognitive Rehabilitation and In-Person Therapy on Cognitive Outcomes in Stroke Survivors",
      shortTitle: "Stroke Cognitive Rehabilitation: Smartphone vs In-Person",
      domain: "Digital Health • Human-Computer Interaction",
      awardBadge: "Empirical Research",
      awardSub: "Healthcare Technology Investigation",
      conference: "Research Track, SIMATS Engineering",
      repoUrl: "https://github.com/DISHA-1125/RESEARCH_1",
      coAuthors: "Disha P & Research Team",
      goalSummary: "Investigate whether mobile smartphone-based cognitive training regimens achieve comparable therapeutic outcomes to conventional in-person clinical therapy for post-stroke recovery.",
      approachOneLiner: "Quantitative outcome comparison tracking patient adherence, cognitive task performance scores, and usability factors across digital vs. in-clinic modalities.",
      certificateImg: null,
      status: "Research Active • Repo: DISHA-1125/RESEARCH_1"
    },
    {
      id: "ssl-vs-e2e",
      title: "SSL vs E2E Research: Transport-Layer Encryption vs Application End-to-End Security",
      shortTitle: "SSL vs End-to-End Cryptographic Security",
      domain: "Cybersecurity • Network Protocols",
      awardBadge: "Security Analysis",
      awardSub: "Cryptographic Architecture Study",
      conference: "Cybersecurity Research Track",
      repoUrl: "https://github.com/DISHA-1125/RESEARCH_1",
      coAuthors: "Disha P",
      goalSummary: "Conduct a comparative security analysis between transport-layer SSL/TLS protocols and end-to-end (E2E) application encryption under modern intermediary and man-in-the-middle threat models.",
      approachOneLiner: "Mapping attack vectors, certificate trust chains, and key escrow implications across enterprise transport security vs. zero-trust client-side encryption.",
      certificateImg: null,
      status: "Research Active • Repo: DISHA-1125/RESEARCH_1"
    }
  ],

  awards: [
    {
      awardName: "Best Paper Presentation Award",
      location: "Da Nang, Vietnam (10–11 July 2026)",
      paperTitle: "Histopathology Images Supported Benign/Malignant Breast Cancer Analysis using Lightweight and Conventional deep learning Model",
      conference: "11th International Conference on Applying New Technology in Green Buildings (IEEE ATiGB 2026)",
      paperId: "380",
      doi: "10.1109/ATiGB70203.2026.11628256",
      doiUrl: "https://doi.org/10.1109/ATiGB70203.2026.11628256",
      ieeeXploreUrl: "https://ieeexplore.ieee.org/document/11628256/",
      certificateImg: "assets/certificates/atigb-best-paper.jpg",
      ceremonyPhoto: "assets/images/best-paper-vietnam.jpg"
    },
    {
      awardName: "Best Poster Presentation Award",
      location: "Tech Star Summit 2026",
      paperTitle: "Heartbeat-Based Biometric Authentication Using Transformer Models Compared with Hidden Markov Models",
      conference: "Tech Star Summit 2026 & Department of CSE, SIMATS Engineering",
      repoUrl: "https://github.com/DISHA-1125/RESEARCH_1",
      ceremonyPhoto: "assets/images/best-poster-presentation.jpg"
    }
  ],

  certifications: [
    {
      id: "cert-atigb-award",
      title: "Certificate of Best Paper Presentation (Paper ID: 380)",
      paperTitle: "Histopathology Images Supported Benign/Malignant Breast Cancer Analysis using Lightweight and Conventional deep learning Model",
      issuer: "IEEE ATiGB 2026 (Da Nang, Vietnam)",
      date: "10-11 July 2026",
      category: "awards",
      categoryLabel: "Award & Research",
      type: "Award",
      badgeText: "Best Paper Award",
      verifyUrl: "assets/certificates/atigb-best-paper.jpg",
      ceremonyPhoto: "assets/images/best-paper-vietnam.jpg",
      isLocalFile: true,
      description: "Awarded for outstanding paper presentation on breast cancer histopathology classification using deep learning. Published in IEEE Xplore (DOI: 10.1109/ATiGB70203.2026.11628256)."
    },
    {
      id: "cert-techstar-poster",
      title: "Best Poster Presentation Award",
      issuer: "Tech Star Summit 2026",
      date: "2026",
      category: "awards",
      categoryLabel: "Award & Research",
      type: "Award",
      badgeText: "Best Poster Award",
      verifyUrl: "assets/images/best-poster-presentation.jpg",
      ceremonyPhoto: "assets/images/best-poster-presentation.jpg",
      isLocalFile: true,
      description: "Awarded for research on Heartbeat-Based Biometric Authentication using Transformer models compared with Hidden Markov Models at SIMATS Engineering."
    },
    {
      id: "cert-nptel-dl",
      title: "NPTEL Deep Learning",
      issuer: "NPTEL / Swayam",
      date: "Completed",
      category: "certifications",
      categoryLabel: "Certification",
      type: "Certification",
      badgeText: "NPTEL DL",
      verifyUrl: "#",
      isLocalFile: false,
      description: "Comprehensive national-level curriculum covering neural network theory, backpropagation, CNNs, RNNs, and optimization."
    },
    {
      id: "cert-nptel-iot",
      title: "NPTEL Internet of Things",
      issuer: "NPTEL / Swayam",
      date: "Completed",
      category: "certifications",
      categoryLabel: "Certification",
      type: "Certification",
      badgeText: "NPTEL IoT",
      verifyUrl: "#",
      isLocalFile: false,
      description: "IoT architecture, sensor interfacing, microcontrollers (ESP32/Arduino), wireless protocols, and cloud IoT connectivity."
    },
    {
      id: "cert-oracle-java",
      title: "Oracle SE17 Java Certification",
      issuer: "Oracle",
      date: "2025 – 2026",
      category: "certifications",
      categoryLabel: "Certification",
      type: "Certification",
      badgeText: "Oracle Java SE 17",
      verifyUrl: "#",
      isLocalFile: false,
      description: "Verified competence in Java 17 syntax, object-oriented principles, modular architecture, streams, and collection frameworks."
    },
    {
      id: "cert-deloitte-cyber",
      title: "Deloitte Australia Cyber Job Simulation",
      issuer: "Deloitte Australia via Forage",
      date: "Completed",
      category: "simulations",
      categoryLabel: "Job Simulation",
      type: "Job simulation",
      badgeText: "Deloitte Cyber",
      verifyUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_6965df5c6582267cb3d7780f_1768285664772_completion_certificate.pdf",
      isLocalFile: false,
      description: "Practical simulation of cybersecurity analyst responsibilities: threat vector analysis, client risk briefings, and security controls."
    },
    {
      id: "cert-genai-forage",
      title: "Gen AI Powered Data Analytics Job Simulation",
      issuer: "Forage",
      date: "Completed",
      category: "simulations",
      categoryLabel: "Job Simulation",
      type: "Job simulation",
      badgeText: "GenAI Analytics",
      verifyUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6965df5c6582267cb3d7780f_1769515503243_completion_certificate.pdf",
      isLocalFile: false,
      description: "Applied generative AI models to clean datasets, formulate analytics prompts, and synthesize actionable executive reports."
    },
    {
      id: "cert-guvi-apps",
      title: "Build and Deploy Apps",
      issuer: "HCL GUVI",
      date: "Completed",
      category: "certifications",
      categoryLabel: "Certification",
      type: "Certification",
      badgeText: "App Deployment",
      verifyUrl: "https://www.guvi.in/verify-certificate?id=d1P4v2Ay678J07088h",
      isLocalFile: false,
      description: "Comprehensive training on modern application build pipelines, cloud hosting strategies, and deployment lifecycle."
    },
    {
      id: "cert-efset",
      title: "EF SET English Certificate",
      issuer: "EF Standard English Test",
      date: "Completed",
      category: "certifications",
      categoryLabel: "Certification",
      type: "Certification",
      badgeText: "EF SET C1/C2",
      verifyUrl: "https://cert.efset.org/J2LL69",
      isLocalFile: false,
      description: "Standardized test score confirming high professional English proficiency in complex technical reading and listening."
    },
    {
      id: "hack-neurathon",
      title: "Neurathon'26 (30-Hour National Hackathon)",
      issuer: "New Prince Shri Bhavani College of Engineering & Technology, AI&DS",
      date: "9 – 10 Feb 2026",
      category: "hackathons",
      categoryLabel: "Hackathon",
      type: "30-hour Hackathon",
      badgeText: "Neurathon'26",
      verifyUrl: "assets/certificates/new-prince-neurathon-2026.jpg",
      isLocalFile: true,
      description: "Engineered AI/DS prototypes under an intense 30-hour national hackathon sprint, tackling real-world predictive automation."
    },
    {
      id: "hack-protothon",
      title: "Protothon 2K25 (24-Hour National Hackathon)",
      issuer: "Hindustan Institute of Technology & Science, Dept. of ECE",
      date: "4 – 5 Dec 2025",
      category: "hackathons",
      categoryLabel: "Hackathon",
      type: "24-hour Hackathon",
      badgeText: "Protothon 2K25",
      verifyUrl: "assets/certificates/hindusthan-protothon-2k25.jpg",
      isLocalFile: true,
      description: "Built integrated hardware-software prototypes under a 24-hour continuous development cycle."
    },
    {
      id: "hack-metaverse",
      title: "Metaverse 2025 (24-Hour National Hackathon)",
      issuer: "Mohamed Sathak A J College of Engineering",
      date: "24 – 25 Nov 2025",
      category: "hackathons",
      categoryLabel: "Hackathon",
      type: "24-hour Hackathon",
      badgeText: "Metaverse 2025",
      verifyUrl: "assets/certificates/mohammad-sathak-metaverse-2025.jpg",
      isLocalFile: true,
      description: "Collaborated on modern decentralized interaction paradigms during a 24-hour collegiate hackathon."
    },
    {
      id: "hack-thinkfinity",
      title: "Thinkfinity-2K25 Hackathon",
      issuer: "Sriram Engineering College, School of CSE",
      date: "29 Sep 2025",
      category: "hackathons",
      categoryLabel: "Hackathon",
      type: "One-day Hackathon",
      badgeText: "Thinkfinity 2K25",
      verifyUrl: "assets/certificates/sriram-thinkfinity-2k25.jpg",
      isLocalFile: true,
      description: "Intensive one-day competitive programming and software engineering hackathon sprint."
    }
  ],

  skillsByCategory: [
    {
      category: "Languages & Core",
      icon: "code",
      description: "Core algorithmic languages for machine learning and systems",
      skills: [
        { name: "Python", level: 92, tag: "Primary" },
        { name: "C", level: 85, tag: "Systems" },
        { name: "Java (Oracle SE17)", level: 88, tag: "Certified" }
      ]
    },
    {
      category: "Web & Frontend",
      icon: "layout",
      description: "Modern, responsive, and accessible user interfaces",
      skills: [
        { name: "HTML5", level: 95, tag: "Semantic" },
        { name: "CSS3 / Modern Styling", level: 92, tag: "Soft-UI" },
        { name: "JavaScript (ES6+)", level: 86, tag: "Dynamic" }
      ]
    },
    {
      category: "Databases & Backend",
      icon: "shield",
      description: "Cloud database architectures and real-time state synchronization",
      skills: [
        { name: "Firebase", level: 88, tag: "Realtime" },
        { name: "Supabase", level: 85, tag: "Postgres Cloud" }
      ]
    },
    {
      category: "IoT & Embedded Systems",
      icon: "cpu",
      description: "Hardware interfacing, microcontroller firmware, and sensor integration",
      skills: [
        { name: "ESP32", level: 86, tag: "Microcontroller" },
        { name: "Arduino", level: 88, tag: "Embedded" },
        { name: "Sensors & Hardware Interfacing", level: 84, tag: "IoT" },
        { name: "NPTEL Internet of Things", level: 90, tag: "Certified" }
      ]
    },
    {
      category: "Developer Tools & Workflows",
      icon: "layout",
      description: "Modern development environments, version control, and data tools",
      skills: [
        { name: "Git & GitHub", level: 92, tag: "DISHA-1125" },
        { name: "VS Code", level: 95, tag: "Editor" },
        { name: "MATLAB", level: 82, tag: "Computation" },
        { name: "XAMPP", level: 80, tag: "Local Server" }
      ]
    }
  ],

  experience: [
    {
      id: "exp-amsteel",
      role: "Data Entry & Data Analyst Intern",
      organization: "AMSTEEL Castings Pvt, Hosur",
      department: "Enterprise Resource Planning (ERP) Department",
      period: "Oct 5 – Jan 5",
      type: "Industry Internship",
      badge: "Industry Experience",
      description: "Contributed to data reconciliation, production reporting, and inventory data integrity within the plant's core Enterprise Resource Planning (ERP) systems.",
      bullets: [
        "Analyzed daily manufacturing, inventory, and supply chain records to support data-driven decisions across the ERP department.",
        "Performed systematic data entry and quality verification, ensuring zero discrepancy between shop floor logs and centralized databases.",
        "Collaborated with senior production managers to generate summarized reporting sheets for operational planning."
      ]
    },
    {
      id: "exp-zyronix",
      role: "Registration Head & Event Coordinator",
      organization: "ZyRonix Tech Club, SIMATS Engineering",
      department: "Department of Computer Science and Engineering",
      period: "2026 – 2028 (8 months)",
      type: "Campus Leadership",
      badge: "Club Leadership",
      description: "Led the registration operations, delegate logistics, and participant onboarding for collegiate hackathons and technical symposiums.",
      bullets: [
        "Directed the delegate onboarding and registration desk for 500+ participants across flagship university tech fests.",
        "Streamlined digital check-in workflows, reducing on-ground queue wait times during major campus event launches.",
        "Coordinated with student organizing committees, event judges, and department faculty."
      ]
    }
  ],

  easterEggs: {
    catDialogue: [
      "🐾 Hi! Disha's GitHub is DISHA-1125!",
      "📄 Check out Disha's IEEE ATiGB 2026 paper in IEEE Xplore: DOI 10.1109/ATiGB70203.2026.11628256!",
      "🏆 Won Best Poster Award at Tech Star Summit 2026 for Heartbeat Biometrics!",
      "⚙️ Disha completed an ERP Data Analyst internship at AMSTEEL Castings Pvt, Hosur!",
      "🌱 Check out JEEVA: Disha's multilingual community-help app on GitHub!"
    ],
    funFacts: [
      "Published IEEE deep learning author (Da Nang, Vietnam, 2026).",
      "Specializes in AI/ML, UI/UX, and Cybersecurity at SIMATS Engineering.",
      "Projects: JEEVA, Lost & Found, and Netflix Data Analysis."
    ]
  }
};

window.PORTFOLIO_DATA = PORTFOLIO_DATA;
