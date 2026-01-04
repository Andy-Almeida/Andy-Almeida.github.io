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
    tagline: "Founding Engineer | Software Architect | SAP Consultant",
    location: "Southern California 📍",
    description: "Hi, I'm Andy Almeida, a passionate Software Engineer who loves building innovative solutions. From founding engineer at a tech startup to SAP consulting, I thrive on solving complex problems and creating impactful software.",
    email: "andyalmeida191@gmail.com",
    phone: "+1 (949)836-6193",
    links: {
      github: "https://github.com/Andy-Almeida",
      linkedin: "https://www.linkedin.com/in/andy-almeida-9b17a0225/",
      resume: "https://docs.google.com/document/d/1K8HSZur6ldjLA6IUHej0PXEcuaymr9iqOujQ2oFcGho/edit?usp=sharing",
      website: "https://andy-almeida.github.io"
    },
    image: "./static/andyalmeidabestselfie.PNG"
  },

  // ============================================
  // EXPERIENCE - Add new jobs by adding objects to this array
  // ============================================
  experience: [
    {
      title: "Founding Software Engineer",
      company: "The Artisan Edge, Inc.",
      location: "Remote",
      date: "October 2025 - Present",
      type: "Full-time",
      description: "Spin-off startup originating from Madiba.",
      highlights: [
        "Built a CDS documentation engine in Python using depth-first traversal to generate HTML visualizations of view hierarchies and field lineage, cutting debugging and onboarding time by 50%+",
        "Implemented field-level lineage tracking across CDS stacks, tracing query fields to their source views and improving accuracy while accelerating root-cause analysis",
        "Implemented SEO and AI search optimization, enhancing discoverability and increasing qualified inbound online traffic",
        "Enhanced enterprise SAP financial reporting stacks to improve reuse, configurability, and maintainability, enabling multi-client reporting",
        "Owned ticketing and change control processes, delivering production fixes and enhancements without exceeding SLAs",
        "Developed an AI email categorizer using Microsoft Graph API and CLI interface with HTML dashboards, identifying 40% improvement opportunities in timesheet reporting workflows",
        "Built AWS Lambda automation with Trello API integration and custom project management dashboard, providing leadership with real-time visibility into daily team tasks and reducing manual task creation by 75%"
      ],
      skills: ["Python", "SAP CDS", "AWS Lambda", "Microsoft Graph API", "Trello API", "HTML", "SEO", "AI/ML"],
      featured: true
    },
    {
      title: "SAP Software Engineer (Consultant)",
      company: "Madiba Inc.",
      location: "Remote",
      date: "January 2025 - October 2025",
      type: "Full-time",
      highlights: [
        "Implemented SAP CDS Views and ABAP code to provide financial reporting to clients with multi-billion dollar valuations",
        "Saved clients over $130,000 through inventory management, product costing, and sales insights within first 6 months",
        "Led end-to-end deployment for two production releases, ensuring zero-downtime updates for 150+ enterprise users",
        "Automated report generation using Python scripts, eliminating 20+ hours of manual work weekly across 3 teams",
        "Built responsive web application using React and Node.js, deployed on AWS with 99.9% uptime serving 500+ daily users",
        "Maintained critical data pipelines through daily jobs, ensuring 99.9% data accuracy for mission-critical enterprise reporting",
        "Developed clean CDS code with embedded security roles, passing audits with 100% compliance on access controls"
      ],
      skills: ["SAP ABAP", "CDS Views", "Python", "React", "Node.js", "AWS", "SQL"],
      featured: true
    },
    {
      title: "Lead Software Engineer",
      company: "Innova Structural Design Group, Inc.",
      location: "Hybrid",
      date: "December 2022 - Present",
      type: "Full-time",
      highlights: [
        "Produced 20+ .NET Tools and Applications, swiftly mastering the AutoCAD .NET API, with a focus on automating workflows and IT tasks, resulting in 30% reduction in manual processes and 25% increase in overall efficiency",
        "Slashed work time and costs by 80% through customized solutions, saving up to 5 days' worth of work",
        "Implemented comprehensive documentation system and robust SQL Server infrastructure, enhancing project organization by 40% and reducing data retrieval time by 25%",
        "Responded to and remediated a critical malware attack, securing infrastructure with hardened configurations, device lockdowns, and ongoing threat prevention strategies—establishing a security-first IT culture",
        "Improved server security by 80% with automated on-site backups using Raspberry Pi, Python, and Windows Batch Scripts",
        "Architected 15,000+ lines of C# code, built Windows forms, and version controlled a Windows Installer Package"
      ],
      skills: ["C#", ".NET", "AutoCAD API", "SQL Server", "Python", "Windows Forms", "Security", "DevOps"],
      featured: false,
      link: "https://isdg-inc.com/"
    },
    {
      title: "Programming Instructor",
      company: "Coding Minds Academy",
      location: "In-person",
      date: "March 2024 - December 2024",
      type: "Part-time",
      highlights: [
        "Led full stack web development courses that leveraged MySQL, Express.js, React, and Node.js",
        "Produced new curriculum for the Roblox Course, teaching concepts on C#, Roblox Studio, and basic programming skills",
        "Directed advanced coding courses using Python and C#, achieving a 60% boost in student proficiency and decreasing error rates by 20% in final assessments",
        "Composed engaging, culturally responsive coding lessons for a diverse group of 40+ students"
      ],
      skills: ["Teaching", "Full Stack Web Dev", "MySQL", "Express.js", "React", "Node.js", "Python", "C#", "Roblox Studio"],
      featured: false
    },
    {
      title: "Audio/Visual Systems Engineer",
      company: "San Francisco State University",
      location: "San Francisco, CA",
      date: "April 2022 - May 2023",
      type: "Part-time",
      highlights: [
        "Reconfigured and programmed 64 visual headers, enhancing performances for 10,000+ annual event attendees",
        "Developed 60+ C# scripts to create dynamic lighting effects, enabling real-time adjustments and automated sequences via the Martin M1 Lighting Board",
        "Delivered a custom .NET application streamlining header initialization, reducing setup and teardown times by 30%",
        "Collaborated closely with the events team to ensure seamless integration of lighting effects with live performances"
      ],
      skills: ["C#", ".NET", "Event Production", "Systems Engineering", "Automation"],
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
      description: "Utilized a Raspberry Pi 4 and the Acroname USBHub3+ Programmable 8-port USB Hub to automatically swap ports based on the day of the week. Built as a 'Plug-and-Play', long-term, connection-free solution that handles power outages and device disconnections.",
      details: "The RaspberryPi was loaded with an LTS version of Ubuntu, and the programming was built with Python3. The program was then turned into a service and setup to run on startup as well as on any instance of a crash, effectively having it on at all times.",
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
      description: "Developed a small car robot capable of following a tape line on the floor and self-navigation around obstacles. Team of 4 students using Raspberry Pi 3, implementing solutions exclusively in C.",
      details: "Utilized IR Obstacle sensors, Light Level sensors, Sonar Distance sensors, and motors. Our team went through multiple iterations until we landed on our final product, which cleared the course faster than all other teams in our section!",
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
      description: "Led a team of 5 students in developing a comprehensive full-stack food delivery application for our capstone project. Coordinated using agile methodology and project management tools (Trello).",
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
      icon: "🐊"
    },
    {
      school: "Irvine Valley College",
      degree: "Computer Science for Transfer, AS-T",
      location: "Irvine, CA",
      date: "Graduated May 2020",
      icon: "🎓"
    }
  ],

  // ============================================
  // SKILLS - Organized by category
  // ============================================
  skills: {
    languages: [
      { name: "Python", level: "advanced" },
      { name: "C#", level: "advanced" },
      { name: "JavaScript", level: "advanced" },
      { name: "SAP ABAP", level: "intermediate" },
      { name: "C/C++", level: "intermediate" },
      { name: "Java", level: "intermediate" },
      { name: "SQL", level: "advanced" },
      { name: "HTML/CSS", level: "advanced" },
      { name: "R", level: "beginner" },
      { name: "LISP", level: "beginner" }
    ],
    frameworks: [
      { name: "React.js", level: "advanced" },
      { name: "Node.js", level: "advanced" },
      { name: "Express.js", level: "advanced" },
      { name: ".NET Framework", level: "advanced" },
      { name: "Windows Forms", level: "intermediate" }
    ],
    technologies: [
      { name: "AWS (Lambda, EC2, S3)", level: "intermediate" },
      { name: "SAP CDS Views", level: "advanced" },
      { name: "AutoCAD .NET API", level: "advanced" },
      { name: "Microsoft Graph API", level: "intermediate" },
      { name: "Trello API", level: "intermediate" },
      { name: "Git/GitHub", level: "advanced" },
      { name: "MySQL/SQL Server", level: "advanced" },
      { name: "Linux/Ubuntu", level: "intermediate" },
      { name: "Raspberry Pi", level: "intermediate" },
      { name: "Docker", level: "beginner" }
    ],
    softSkills: [
      "Agile/SCRUM Methodology",
      "Team Leadership",
      "Project Management",
      "Technical Documentation",
      "Problem Solving",
      "Client Communication",
      "Mentoring/Teaching"
    ]
  },

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
