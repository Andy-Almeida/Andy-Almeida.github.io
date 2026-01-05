// ============================================
// ANDY ALMEIDA PORTFOLIO - JAVASCRIPT
// Component System & Interactions
// ============================================

// ============================================
// THEME MANAGEMENT
// ============================================
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.themeToggle = document.getElementById('themeToggle');
    this.init();
  }

  init() {
    // Apply saved theme
    document.documentElement.setAttribute('data-theme', this.theme);
    this.updateToggleIcon();

    // Add event listener
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
    this.updateToggleIcon();
  }

  updateToggleIcon() {
    const icon = this.themeToggle.querySelector('i');
    icon.className = this.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  }
}

// ============================================
// MOBILE MENU
// ============================================
class MobileMenu {
  constructor() {
    this.mobileToggle = document.getElementById('mobileToggle');
    this.mobileMenu = document.getElementById('mobileMenu');
    this.mobileLinks = document.querySelectorAll('.mobile-link');
    this.init();
  }

  init() {
    this.mobileToggle.addEventListener('click', () => this.toggle());

    // Close menu when clicking a link
    this.mobileLinks.forEach(link => {
      link.addEventListener('click', () => this.close());
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.mobileToggle.contains(e.target) && !this.mobileMenu.contains(e.target)) {
        this.close();
      }
    });
  }

  toggle() {
    const isActive = this.mobileMenu.classList.toggle('active');
    const icon = this.mobileToggle.querySelector('i');
    icon.className = isActive ? 'fas fa-xmark' : 'fas fa-bars';
  }

  close() {
    this.mobileMenu.classList.remove('active');
    const icon = this.mobileToggle.querySelector('i');
    icon.className = 'fas fa-bars';
  }
}

// ============================================
// SMOOTH SCROLLING
// ============================================
class SmoothScroll {
  constructor() {
    this.links = document.querySelectorAll('a[href^="#"]');
    this.init();
  }

  init() {
    this.links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');

        if (targetId === '#home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const target = document.querySelector(targetId);
          if (target) {
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          }
        }
      });
    });
  }
}

// ============================================
// COMPONENT RENDERER
// ============================================
class ComponentRenderer {
  constructor(data) {
    this.data = data;
  }

  // Render Hero Section
  renderHero() {
    const { personal } = this.data;

    document.getElementById('heroTitle').textContent = personal.name;
    document.getElementById('heroSubtitle').textContent = personal.tagline;
    document.getElementById('heroDescription').textContent = personal.description;
    document.getElementById('heroImage').src = personal.image;

    // Social Links
    const socialLinksHTML = `
      <a href="${personal.links.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="${personal.links.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <a href="${personal.links.resume}" target="_blank" rel="noopener noreferrer" aria-label="Resume">
        <i class="fas fa-file-alt"></i>
      </a>
    `;
    document.getElementById('socialLinks').innerHTML = socialLinksHTML;
  }

  // Render Education Section
  renderEducation() {
    const educationHTML = this.data.education.map(edu => `
      <div class="education-card fade-in">
        <div class="icon">${edu.icon}</div>
        <h3>${edu.school}</h3>
        <p class="degree">${edu.degree}</p>
        <p class="date">${edu.date}</p>
        <p class="location">${edu.location}</p>
      </div>
    `).join('');
    document.getElementById('educationGrid').innerHTML = educationHTML;
  }

  // Render Experience Timeline
  renderExperience() {
    const timelineHTML = this.data.experience.map((exp, index) => {
      const featuredClass = exp.featured ? 'featured' : '';
      const companyDisplay = exp.link
        ? `<a href="${exp.link}" target="_blank" rel="noopener noreferrer">${exp.company}</a>`
        : exp.company;

      const highlightsHTML = exp.highlights.map(h => `<li>${h}</li>`).join('');
      const skillsHTML = exp.skills.map(s => `<span class="timeline-skill">${s}</span>`).join('');

      // Create a unique ID for each experience item
      const expId = `exp-${index}`;

      return `
        <div class="timeline-item fade-in" id="${expId}">
          <div class="timeline-dot"></div>
          <div class="timeline-content ${featuredClass}">
            <h3>${exp.title}</h3>
            <p class="company">${companyDisplay}</p>
            <span class="job-type">${exp.type}</span>
            ${exp.description ? `<p class="description">${exp.description}</p>` : ''}
            <ul>${highlightsHTML}</ul>
            <div class="timeline-skills">${skillsHTML}</div>
          </div>
          <div class="timeline-date">${exp.date}</div>
        </div>
      `;
    }).join('');

    document.getElementById('experienceTimeline').innerHTML = timelineHTML;

    // Populate the navigation dropdown
    this.renderExperienceDropdown();
  }

  // Render Experience Dropdown in Navigation
  renderExperienceDropdown() {
    const dropdownHTML = this.data.experience.map((exp, index) => {
      const expId = `exp-${index}`;
      return `
        <a href="#${expId}" class="nav-dropdown-item">
          <span class="nav-dropdown-item-title">${exp.title}</span>
          <span class="nav-dropdown-item-company">${exp.company}</span>
        </a>
      `;
    }).join('');

    const dropdown = document.getElementById('experienceDropdown');
    if (dropdown) {
      dropdown.innerHTML = dropdownHTML;
    }
  }

  // Render Projects
  renderProjects() {
    const projectsHTML = this.data.projects.map(project => {
      const featuredClass = project.featured ? 'featured' : '';
      const skillsHTML = project.skills.map(s => `<span class="project-skill">${s}</span>`).join('');

      // Handle multiple images or video
      let mediaHTML = '';
      if (project.video) {
        mediaHTML = `<iframe class="project-video" src="${project.video}" title="${project.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      } else if (project.image) {
        mediaHTML = `<img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">`;
      }

      // Project links
      let linksHTML = '';
      if (project.links) {
        const linkItems = [];
        if (project.links.github) {
          linkItems.push(`<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            <i class="fab fa-github"></i> GitHub
          </a>`);
        }
        if (project.links.demo) {
          linkItems.push(`<a href="${project.links.demo}" target="_blank" rel="noopener noreferrer" class="project-link">
            <i class="fas fa-external-link-alt"></i> Demo
          </a>`);
        }
        if (linkItems.length > 0) {
          linksHTML = `<div class="project-links">${linkItems.join('')}</div>`;
        }
      }

      return `
        <div class="project-card ${featuredClass} fade-in">
          ${mediaHTML}
          <div class="project-content">
            <h3>${project.title}</h3>
            ${project.subtitle ? `<p class="subtitle">${project.subtitle}</p>` : ''}
            <p class="date">${project.date}</p>
            <p>${project.description}</p>
            ${project.details ? `<p>${project.details}</p>` : ''}
            <div class="project-skills">${skillsHTML}</div>
            ${linksHTML}
          </div>
        </div>
      `;
    }).join('');

    document.getElementById('projectsGrid').innerHTML = projectsHTML;
  }

  // Render Skills
  renderSkills() {
    // Programming Languages
    const languagesHTML = this.data.skills.languages.map(skill => `
      <div class="skill-item">
        <span class="skill-name">${skill.name}</span>
        <div class="skill-bar">
          <div class="skill-progress ${skill.level}"></div>
        </div>
      </div>
    `).join('');
    document.getElementById('languageSkills').innerHTML = languagesHTML;

    // Frameworks
    const frameworksHTML = this.data.skills.frameworks.map(skill => `
      <div class="skill-item">
        <span class="skill-name">${skill.name}</span>
        <div class="skill-bar">
          <div class="skill-progress ${skill.level}"></div>
        </div>
      </div>
    `).join('');
    document.getElementById('frameworkSkills').innerHTML = frameworksHTML;

    // Technologies
    const technologiesHTML = this.data.skills.technologies.map(skill => `
      <div class="skill-item">
        <span class="skill-name">${skill.name}</span>
        <div class="skill-bar">
          <div class="skill-progress ${skill.level}"></div>
        </div>
      </div>
    `).join('');
    document.getElementById('technologySkills').innerHTML = technologiesHTML;

    // Soft Skills
    const softSkillsHTML = this.data.skills.softSkills.map(skill => `
      <div class="soft-skill">${skill}</div>
    `).join('');
    document.getElementById('softSkills').innerHTML = softSkillsHTML;

    // Spoken Languages
    const spokenLanguagesHTML = this.data.spokenLanguages.map(lang => `
      <div class="language-item">
        <div class="language-name">${lang.language}</div>
        <div class="language-proficiency">${lang.proficiency}</div>
      </div>
    `).join('');
    document.getElementById('spokenLanguages').innerHTML = spokenLanguagesHTML;
  }

  // Render Contact Section
  renderContact() {
    const { personal } = this.data;

    const contactInfoHTML = `
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <a href="mailto:${personal.email}">${personal.email}</a>
      </div>
      <div class="contact-item">
        <i class="fas fa-phone"></i>
        <span>${personal.phone}</span>
      </div>
      <div class="contact-item">
        <i class="fas fa-map-marker-alt"></i>
        <span>${personal.location}</span>
      </div>
    `;
    document.getElementById('contactInfo').innerHTML = contactInfoHTML;

    // Social Links (Large)
    const socialLinksHTML = `
      <a href="${personal.links.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="${personal.links.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <a href="${personal.links.resume}" target="_blank" rel="noopener noreferrer" aria-label="Resume">
        <i class="fas fa-file-alt"></i>
      </a>
    `;
    document.getElementById('contactSocialLinks').innerHTML = socialLinksHTML;
  }

  // Render all components
  renderAll() {
    this.renderHero();
    this.renderEducation();
    this.renderExperience();
    this.renderProjects();
    this.renderSkills();
    this.renderContact();
  }
}

// ============================================
// INTERSECTION OBSERVER (Fade-in animations)
// ============================================
class AnimationObserver {
  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
  }

  observe() {
    // Wait a bit for DOM to be fully rendered
    setTimeout(() => {
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        this.observer.observe(el);
      });
    }, 100);
  }
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
class NavbarScroll {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.lastScroll = 0;
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      // Add shadow when scrolled
      if (currentScroll > 50) {
        this.navbar.style.boxShadow = '0 4px 30px var(--shadow)';
      } else {
        this.navbar.style.boxShadow = '0 4px 20px var(--shadow)';
      }

      this.lastScroll = currentScroll;
    });
  }
}

// ============================================
// SCROLL INDICATOR
// ============================================
class ScrollIndicator {
  constructor() {
    this.indicator = document.querySelector('.scroll-indicator');
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        this.indicator.style.opacity = '0';
      } else {
        this.indicator.style.opacity = '1';
      }
    });
  }
}

// ============================================
// TYPING EFFECT (Optional - for hero title)
// ============================================
class TypingEffect {
  constructor(element, text, speed = 100) {
    this.element = element;
    this.text = text;
    this.speed = speed;
    this.index = 0;
  }

  type() {
    if (this.index < this.text.length) {
      this.element.textContent += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), this.speed);
    }
  }

  start() {
    this.element.textContent = '';
    this.type();
  }
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Check if portfolioData is available
  if (typeof portfolioData === 'undefined') {
    console.error('Portfolio data not loaded! Make sure data.js is loaded before script.js');
    return;
  }

  // Initialize all components
  const themeManager = new ThemeManager();
  const mobileMenu = new MobileMenu();
  const smoothScroll = new SmoothScroll();
  const renderer = new ComponentRenderer(portfolioData);

  // Render all content
  renderer.renderAll();

  // Initialize animations and effects
  const animationObserver = new AnimationObserver();
  animationObserver.observe();

  const navbarScroll = new NavbarScroll();
  const scrollIndicator = new ScrollIndicator();

  // Optional: Add typing effect to hero title
  // Uncomment if you want the typing effect
  // setTimeout(() => {
  //   const heroTitle = document.getElementById('heroTitle');
  //   const typingEffect = new TypingEffect(heroTitle, portfolioData.personal.name, 100);
  //   typingEffect.start();
  // }, 500);

  console.log('🚀 Portfolio loaded successfully!');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Prevent default form submission if you add a contact form later
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form handling logic here
  });
});

// Log theme changes for debugging
if (localStorage.getItem('theme')) {
  console.log(`Theme loaded from localStorage: ${localStorage.getItem('theme')}`);
}
