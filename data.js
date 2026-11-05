// ============================================
// PORTFOLIO DATA - Edit this file to update your portfolio
// ============================================
// This file contains all the content for your portfolio.
// Simply edit the values here and the website will automatically update.

const portfolioData = {
  // ============================================
  // PERSONAL INFO
  // ============================================
  personal: {
    name: "Andy Almeida",
    title: "Software Engineer",
    tagline: "Cloud · Identity · AI Integrations",
    location: "Southern California 📍",
    description: "Hi, I'm Andy. I build secure, cloud-native systems. Right now I own identity and access management for a Fortune 500 agriscience platform spanning 6 Azure tenants and 3 AWS environments. Before that, I was the founding engineer at The Artisan Edge, connecting SAP to LLMs like ChatGPT and Claude through MCP servers.",
    // Shown as a live "status" line in the hero
    currently: {
      role: "Software Engineer",
      company: "Pioneer · Corteva Agriscience"
    },
    email: "andyalmeida191@gmail.com",
    phone: "+1 (949)836-6193",
    links: {
      github: "https://github.com/Andy-Almeida",
      linkedin: "https://www.linkedin.com/in/andy-almeida-9b17a0225/",
      resume: "https://docs.google.com/document/d/1K8HSZur6ldjLA6IUHej0PXEcuaymr9iqOujQ2oFcGho/edit?usp=sharing",
      website: "https://andy-almeida.github.io"
    },
    image: "./static/andy-almeida-headshot.jpg"
  },

  // ============================================
  // IMPACT STATS - Shown in the hero terminal
  // ============================================
  stats: [
    { value: "65K+", label: "users migrated across Azure tenants" },
    { value: "5", label: "production AWS environments shipped" },
    { value: "100+", label: "Lambdas monitored via Datadog" },
    { value: "$130K+", label: "saved for SAP clients" }
  ],

  // ============================================
  // EXPERIENCE - Add new jobs by adding objects to this array
  // Dates must look like "Month YYYY - Month YYYY" or "Month YYYY - Present"
  // so the site can calculate durations automatically.
  //
  // Logos (optional) - two styles:
  //   logo: "./static/logos/x.png"            -> small square tile next to the title
  //   banner: ["./static/logos/x-white.png"]  -> big dark header strip across the
  //                                              top of the card (use white logos)
  //
  // What's visible vs. behind "Read more":
  //   summary  -> one-liner, always visible
  //   metrics  -> 2-3 short wins, always visible ("65K+ users migrated" - a
  //               leading number is bolded automatically)
  //   description, highlights, skills -> revealed by "Read more"
  //   earlier: true -> shown as a compact row under "Earlier experience"
  // ============================================
  experience: [
    {
      title: "Software Engineer",
      company: "Pioneer Hi-Bred International, Inc.",
      via: "via Robert Half",
      banner: [
        "./static/logos/pioneer-wordmark-white.png",
        "./static/logos/corteva-wordmark-white.png"
      ],
      date: "June 2026 - Present",
      type: "Contract",
      summary: "Own identity and access management for a Fortune 500 agriscience platform spanning 6 Azure tenants and 3 AWS environments.",
      metrics: ["65K+ users migrated", "20K+ stale accounts cleaned up", "100+ Lambdas monitored"],
      description: "Fortune 500 agriscience company, operating as a Corteva Agriscience brand.",
      highlights: [
        "Own identity and access management for a flagship agriscience platform used across the US, Canada, and South America, with SSO and JWT-based auth spanning 6 Azure tenants and 3 AWS environments",
        "Execute a tenant-to-tenant migration of 65,000+ users, updating services to preserve access mid-migration and repairing access issues as they surface",
        "Lead cleanup of stale and orphaned accounts impacting 20,000+ users, using Python automation against DynamoDB and RDS to audit and deprovision access",
        "Manage auth infrastructure as code with Terraform and GitLab CI/CD pipelines across all 3 AWS environments",
        "Build React front-end features backed by public-facing AWS Lambda endpoints and Docker services, tracking health, logging, and analytics for 100+ Lambdas through Datadog"
      ],
      skills: ["IAM", "SSO", "JWT", "Azure / Entra", "AWS Lambda", "DynamoDB", "RDS", "MySQL", "Databricks", "Terraform", "GitLab CI/CD", "Datadog", "React", "Docker", "Python"],
      featured: true
    },
    {
      title: "Founding Software Engineer",
      company: "The Artisan Edge, Inc.",
      logo: "./static/logos/artisan-edge.png",
      date: "October 2025 - June 2026",
      type: "Full-time",
      summary: "Founding engineer connecting SAP to LLMs like ChatGPT and Claude through MCP servers I architected and deployed on AWS.",
      metrics: ["5 production AWS environments", "50%+ faster debugging & onboarding", "SAP ↔ Entra SSO"],
      description: "Spin-off startup originating from Madiba.",
      highlights: [
        "Architected and deployed 5 production AWS environments for SAP-integrated MCP servers across multiple clients, containerizing with Docker on Fargate and EC2 with OAuth-based authentication",
        "Extended SAP APIs and the MCP tool surface to expose financial and master data to LLM clients (ChatGPT, Claude), reducing SAP data retrieval from a multi-step GUI workflow to a single conversational query",
        "Built a CDS documentation engine in Python using depth-first traversal to generate HTML visualizations of view hierarchies and field lineage, cutting debugging and onboarding time by 50%+",
        "Developed an AI email categorizer using Microsoft Graph API and a CLI interface with HTML dashboards, identifying 40% improvement opportunities in timesheet reporting workflows",
        "Built and maintained AWS Lambda automation with Trello and Microsoft Graph integration, giving leadership a real-time project management dashboard and automated email-based failure alerts that surface pipeline issues before stakeholders report them",
        "Engineered SSO between SAP S/4HANA and Microsoft Entra via SAML federation and SAP Cloud Identity Services"
      ],
      skills: ["MCP", "LLMs", "AWS Fargate", "EC2", "Docker", "OAuth", "SAML", "SAP S/4HANA", "SAP CDS", "Python", "Microsoft Graph API"],
      featured: true
    },
    {
      title: "SAP Software Engineer (Consultant)",
      company: "Madiba Inc.",
      logo: "./static/logos/madiba.png",
      date: "January 2025 - October 2025",
      type: "Full-time",
      summary: "Built SAP CDS views and ABAP financial reporting for clients with multi-billion dollar valuations.",
      metrics: ["$130K+ saved for clients", "20+ hrs/week automated", "0-downtime releases"],
      highlights: [
        "Implemented SAP CDS Views and ABAP code to provide financial reporting to clients with multi-billion dollar valuations",
        "Saved clients over $130,000 through inventory management, product costing, and sales insights within my first 6 months",
        "Led end-to-end deployment for two production releases, ensuring zero-downtime updates for 150+ enterprise users",
        "Automated report generation using Python scripts, eliminating 20+ hours of manual work weekly across 3 teams",
        "Built a responsive web application using React and Node.js, deployed on AWS with high availability serving 500+ daily users",
        "Maintained critical data pipelines through daily jobs, ensuring 99.9% data accuracy for mission-critical enterprise reporting"
      ],
      skills: ["SAP ABAP", "CDS Views", "Python", "React", "Node.js", "AWS", "SQL"],
      featured: false
    },
    {
      title: "Lead Software Engineer",
      company: "Innova Structural Design Group, Inc.",
      logo: "./static/logos/isdg.png",
      date: "December 2022 - January 2025",
      type: "Full-time",
      summary: "Led software and IT for a structural engineering firm, building .NET tools that automated AutoCAD workflows.",
      metrics: ["20+ .NET tools shipped", "80% less work time", "15K+ lines of C#"],
      highlights: [
        "Produced 20+ .NET tools and applications, swiftly mastering the C#/VB AutoCAD .NET API, with a focus on automating workflows and IT tasks, resulting in a 30% reduction in manual processes and a 25% increase in overall efficiency",
        "Slashed work time and costs by 80% through customized solutions, saving up to 5 days' worth of work",
        "Implemented a comprehensive documentation system and robust SQL Server infrastructure (SSIS)",
        "Responded to and remediated a critical malware attack, securing infrastructure with hardened configurations, device lockdowns, and ongoing threat prevention strategies, establishing a security-first IT culture",
        "Improved server security by 80% with automated on-site backups using Raspberry Pi, Python, and Windows Batch Scripts",
        "Architected 15,000+ lines of C# code, built Windows Forms, and version controlled a Windows Installer Package"
      ],
      skills: ["C#", "VB.NET", ".NET", "AutoCAD API", "SQL Server", "SSIS", "Python", "Windows Forms", "Security"],
      featured: false,
      link: "https://isdg-inc.com/"
    },
    {
      title: "Programming Instructor",
      company: "Coding Minds Academy",
      logo: "./static/logos/coding-minds.png",
      date: "March 2024 - December 2024",
      type: "Part-time",
      earlier: true,
      summary: "Taught full stack web development, Python, and C# to 40+ students and wrote a new Roblox curriculum.",
      highlights: [
        "Led full stack web development courses that leveraged MySQL, Express.js, React, and Node.js",
        "Produced new curriculum for the Roblox course, teaching concepts on C#, Roblox Studio, and basic programming skills",
        "Directed advanced coding courses using Python and C#, achieving a 60% boost in student proficiency and decreasing error rates by 20% in final assessments",
        "Composed engaging, culturally responsive coding lessons for a diverse group of 40+ students"
      ],
      skills: ["Teaching", "MySQL", "Express.js", "React", "Node.js", "Python", "C#"],
      featured: false
    },
    {
      title: "Audio/Visual Systems Engineer",
      company: "San Francisco State University",
      logo: "./static/logos/sfsu.png",
      date: "April 2022 - May 2023",
      type: "Part-time",
      earlier: true,
      summary: "Programmed live-event lighting with 60+ C# scripts and a custom .NET setup tool.",
      highlights: [
        "Developed 60+ C# scripts to create dynamic lighting effects, enabling real-time adjustments and automated sequences via the Martin M1 Lighting Board",
        "Delivered a custom .NET application streamlining header initialization, reducing setup and teardown times by 30%",
        "Reconfigured and programmed 64 visual headers, enhancing performances for 10,000+ annual event attendees"
      ],
      skills: ["C#", ".NET", "Event Production", "Automation"],
      featured: false
    }
  ],

  // ============================================
  // PROJECTS - Add new projects by adding objects to this array
  // ============================================
  projects: [
    {
      title: "Acroname USBHub3+ Automated Port Switching",
      date: "February 2024",
      summary: "A Raspberry Pi service that switches USB hub ports by day of the week and survives power outages and crashes.",
      description: "Utilized a Raspberry Pi 4 and the Acroname USBHub3+ Programmable 8-port USB Hub to automatically swap ports based on the day of the week. Built as a 'Plug-and-Play', long-term, connection-free solution that handles power outages and device disconnections.",
      details: "The Raspberry Pi was loaded with an LTS version of Ubuntu, and the program was built with Python 3. It runs as a service on startup and restarts on any crash, so it's effectively always on.",
      image: "./static/USBHub3p.PNG",
      skills: ["Raspberry Pi", "Python", "Ubuntu", "I2C", "Linux Services", "3rd Party APIs"],
      links: {
        demo: "https://acroname.com/store/programmable-industrial-hub-s79-usbhub-3p"
      },
      featured: true
    },
    {
      title: "Self Driving Car",
      date: "September 2023 - December 2023",
      summary: "A line-following, obstacle-dodging robot car written in C on a Raspberry Pi. Fastest in our section.",
      description: "Developed a small car robot capable of following a tape line on the floor and self-navigating around obstacles. Team of 4 students using a Raspberry Pi 3, implementing solutions exclusively in C.",
      details: "Utilized IR obstacle sensors, light level sensors, sonar distance sensors, and motors. Our team went through multiple iterations until we landed on our final product, which cleared the course faster than all other teams in our section!",
      image: "./static/CarInHand.PNG",
      video: "https://www.youtube.com/embed/O7oypzZl5zw",
      skills: ["Raspberry Pi", "C", "Linux", "I2C", "Hardware Wiring", "Robotics"],
      links: {
        github: "https://github.com/CSC615-2023-Fall/csc615-term-project-devilmanCr0.git"
      },
      featured: true
    },
    {
      title: "GatorEats - Food Delivery App",
      subtitle: "Team Lead",
      date: "January 2023 - May 2023",
      summary: "Led a team of 5 building a full-stack food delivery app on React, Node, and AWS. Highest grade in the class.",
      description: "Led a team of 5 students in developing a full-stack food delivery application for our capstone project. Coordinated using agile methodology and project management tools (Trello).",
      details: "Empowered team members through daily scrum meetings, meticulous documentation, efficient task delegation, and regular progress monitoring. Achieved the highest grade in the class!",
      image: "./static/GatorEatsMain.PNG",
      image2: "./static/GatorEatsSearch.PNG",
      skills: ["Amazon AWS", "Full Stack Web Development", "GitHub", "Express.js", "React.js", "Node.js", "Team Leadership", "Agile"],
      links: {
        github: "https://github.com/Andy-Almeida/GatorEats-FoodDeliveryApp.git"
      },
      featured: true
    },
    {
      title: "@PONCHOS.PCs",
      date: "2018 - 2023",
      summary: "My PC consulting side business: sourced parts for, built, and set up 15 custom PCs for clients.",
      description: "Personal PC consulting and construction service. Offered tailored consulting and construction services, catering to clients' unique PC requirements.",
      details: "Sourced and curated computer components to meet client specifications, ensuring adherence to budgetary constraints and project timelines. Assembled and installed custom hardware, operating systems, and drivers for 15 bespoke PCs.",
      image: "./static/austinspc.PNG",
      skills: ["PC Hardware", "Working within Budget", "Handling Deadlines", "Customer Service"],
      featured: false
    }
  ],

  // ============================================
  // EDUCATION
  // ============================================
  education: [
    {
      school: "San Francisco State University",
      degree: "B.S. in Computer Science",
      location: "San Francisco, CA",
      date: "August 2021 - December 2023",
      logo: "./static/logos/sfsu.png",
      icon: "🐊" // fallback if no logo
    },
    {
      school: "Irvine Valley College",
      degree: "Computer Science for Transfer, AS-T",
      location: "Irvine, CA",
      date: "Graduated May 2020",
      logo: "./static/logos/ivc.png",
      icon: "🎓"
    }
  ],

  // ============================================
  // SKILLS - Grouped by category
  // icon: any Font Awesome solid icon name (https://fontawesome.com/icons)
  // core: true highlights the skill as one you use daily
  // ============================================
  skills: [
    {
      category: "Cloud & DevOps",
      icon: "fa-cloud",
      items: [
        { name: "AWS Lambda", core: true },
        { name: "AWS Fargate & EC2", core: true },
        { name: "Terraform", core: true },
        { name: "Docker", core: true },
        { name: "GitLab CI/CD", core: true },
        { name: "Datadog" },
        { name: "Azure" },
        { name: "S3" },
        { name: "Git / GitHub" },
        { name: "Linux / Ubuntu" }
      ]
    },
    {
      category: "Identity & Security",
      icon: "fa-shield-halved",
      items: [
        { name: "Identity & Access Management", core: true },
        { name: "SSO", core: true },
        { name: "JWT", core: true },
        { name: "OAuth 2.0", core: true },
        { name: "SAML Federation" },
        { name: "Microsoft Entra ID" },
        { name: "SAP Cloud Identity Services" },
        { name: "Access Audits & Deprovisioning" }
      ]
    },
    {
      category: "AI & Integrations",
      icon: "fa-robot",
      items: [
        { name: "MCP Servers", core: true },
        { name: "LLM Integrations (ChatGPT, Claude)", core: true },
        { name: "Microsoft Graph API" },
        { name: "Trello API" },
        { name: "REST APIs" },
        { name: "AI Email Classification" }
      ]
    },
    {
      category: "Languages",
      icon: "fa-code",
      items: [
        { name: "Python", core: true },
        { name: "JavaScript", core: true },
        { name: "C#", core: true },
        { name: "SQL", core: true },
        { name: "SAP ABAP" },
        { name: "VB.NET" },
        { name: "C / C++" },
        { name: "Java" },
        { name: "HTML / CSS" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: "fa-layer-group",
      items: [
        { name: "React", core: true },
        { name: "Node.js", core: true },
        { name: "Express.js" },
        { name: ".NET Framework" },
        { name: "Windows Forms" },
        { name: "AutoCAD .NET API" }
      ]
    },
    {
      category: "Data",
      icon: "fa-database",
      items: [
        { name: "Databricks", core: true },
        { name: "MySQL", core: true },
        { name: "DynamoDB", core: true },
        { name: "RDS", core: true },
        { name: "SQL Server & SSIS" },
        { name: "SAP S/4HANA" },
        { name: "SAP CDS Views" }
      ]
    }
  ],

  softSkills: [
    "Agile/SCRUM Methodology",
    "Team Leadership",
    "Project Management",
    "Technical Documentation",
    "Problem Solving",
    "Client Communication",
    "Mentoring/Teaching"
  ],

  // ============================================
  // LANGUAGES (Human languages)
  // ============================================
  spokenLanguages: [
    { language: "English", proficiency: "Native" },
    { language: "Spanish (Castilian)", proficiency: "Fluent" },
    { language: "French", proficiency: "Conversational" }
  ],

};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
