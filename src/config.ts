export const siteConfig = {
  name: "Sara Gul",
  title: "Computer Science Student | Aspiring AI Engineer",
  description: "Portfolio website of Sara Gul",
  accentColor: "#1d4ed8",
  social: {
    email: "fa24b1-cs-001@gmail.com",
    linkedin: "https://www.linkedin.com/in/sara-gul-b347733b4?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/gul-284",
  },
  aboutMe:
    "I am a 4th semester CS student with a strong interest in Artificial Intelligence and emerging technologies. I enjoy solving complex algorithmic problems and building efficient systems.",
  skills: ["Python", "Java", "Prolog", "C", "C++"],
  projects: [
    {
      name: "Restaurant Management System",
      description:
        "A full-stack desktop application for managing restaurant operations, including order processing, billing, and inventory tracking using a relational database.",
      link: "https://github.com/gul-284/restaurant-management-system-java-sql",
      skills: ["Java", "SQL", "Database Management"],
    },
    {
      name: "Multi-Country Digital Clock (8086 Assembly)",
      description:
        "A real-time digital clock developed in 8086 Assembly using system interrupts. It features dynamic time zone switching for Pakistan, Canada, Dubai, and Saudi Arabia through precise offset calculations.",
      link: "https://github.com/gul-284/multi-country-digital-clock-8086",
      skills: ["Assembly", "8086", "System Interrupts"],
    },
    {
      name: "Student Information System",
      description:
        "A menu-driven C program utilizing structures and file handling to perform CRUD operations on student records with persistent data storage.",
      link: "https://github.com/gul-284/my-first-programming-fundamentals-project",
      skills: ["C", "File Handling", "Data Structures"],
    },
    {
      name: "Network Infrastructure Lab",
      description: "Designed and configured a client-server environment in VirtualBox. Successfully implemented FTP servers, Web servers, and managed network communication protocols.",
      skills: ["VirtualBox", "Networking", "FTP", "Servers"],
    },
    {
      name: "Digital Password Unlock System",
      description: "A hardware-based Digital Logic Design project creating a secure password entry system using logic gates and electronic components.",
      skills: ["DLD", "Hardware Design", "Logic Gates"],
    },
  ],
  experience: [
    {
      company: "Systems & Low-Level Programming", // This replaces 'Company'
      title: "Core Developer (Assembly, C, & Linux)", // This replaces 'Job Title'
      dateRange: "2024 - Present",
      bullets: [
        "Architected a Multi-Country Digital Clock in 8086 Assembly using system interrupts for real-time timezone switching.",
        "Simulated 'First Fit' memory allocation strategies using Python multiprocessing on Azure VMs.",
      ],
    },
    {
      company: "Application & Intelligence Systems",
      title: "Software Engineer (Java, SQL, & AI)",
      dateRange: "2024 - Present",
      bullets: [
        "Designed a Java-based Restaurant Management System with a relational SQL database for billing and inventory.",
        "Engineered AI search algorithms including Hill Climbing and NFA to DFA conversion tools.",
        "Built a menu-driven Student Information System in C using file handling for data persistence.",
      ],
    },
    {
      company: "Network & Hardware Infrastructure",
      title: "Lab Engineer (Networking & DLD)",
      dateRange: "2024 - Present",
      bullets: [
        "Configured client-server environments in VirtualBox, deploying FTP and Web servers.",
        "Prototyped a hardware-based Password Unlock System using Digital Logic Design (DLD) and logic gates.",
      ],
    },
  ],
  education: [
    {
      school: "Fatima Jinnah Womwen University Rawalpindi",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2024 - 2028",
      achievements: [
        ""Current Student ID: FA24B1-CS-001",
        "Focused on Operating Systems, AI, and Digital Logic Design",
        "Proficient in low-level programming and system-level development",
      ],
    },
  ],
};   
