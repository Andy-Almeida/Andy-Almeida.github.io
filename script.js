// ============================================
// ANDY ALMEIDA PORTFOLIO - JAVASCRIPT
// Component System & Interactions
// ============================================

const prefersReducedMotion = window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Height of the fixed header bar, NOT counting the mobile dropdown menu.
// (The menu lives inside .navbar; while it's open or animating closed,
// .navbar.offsetHeight includes it, which made phone links land ~325px high.)
function navBarHeight() {
  const navbar = document.querySelector('.navbar');
  const menu = document.getElementById('mobileMenu');
  return navbar.offsetHeight - (menu ? menu.offsetHeight : 0);
}

// localStorage can throw in private windows / when blocked, so wrap it.
const safeStorage = {
  get(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }
};

// ============================================
// THEME MANAGEMENT
// ============================================
class ThemeManager {
  constructor() {
    // The inline script in <head> already picked a theme (saved or OS preference)
    this.theme = document.documentElement.getAttribute('data-theme') || 'light';
    this.themeToggle = document.getElementById('themeToggle');
    this.init();
  }

  init() {
    this.apply();
    this.themeToggle.addEventListener('click', () => this.toggleTheme());

    // Follow OS theme changes until the visitor picks one explicitly
    if (window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const onChange = (e) => {
        if (!safeStorage.get('theme')) {
          this.theme = e.matches ? 'dark' : 'light';
          this.apply();
        }
      };
      if (mq.addEventListener) mq.addEventListener('change', onChange);
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    safeStorage.set('theme', this.theme);
    this.apply();
  }

  apply() {
    document.documentElement.setAttribute('data-theme', this.theme);
    const icon = this.themeToggle.querySelector('i');
    icon.className = this.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    this.themeToggle.setAttribute('aria-label',
      this.theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
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

    this.mobileLinks.forEach(link => {
      link.addEventListener('click', () => this.close());
    });

    document.addEventListener('click', (e) => {
      if (!this.mobileToggle.contains(e.target) && !this.mobileMenu.contains(e.target)) {
        this.close();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  }

  toggle() {
    const isActive = this.mobileMenu.classList.toggle('active');
    this.setIcon(isActive);
  }

  close() {
    this.mobileMenu.classList.remove('active');
    this.setIcon(false);
  }

  setIcon(isActive) {
    const icon = this.mobileToggle.querySelector('i');
    icon.className = isActive ? 'fas fa-xmark' : 'fas fa-bars';
    this.mobileToggle.setAttribute('aria-expanded', String(isActive));
  }
}

// ============================================
// SMOOTH SCROLLING
// Uses event delegation so links rendered later (e.g. the experience
// dropdown) also scroll smoothly with the correct navbar offset.
// ============================================
class SmoothScroll {
  constructor() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId === '#main') return;

      const behavior = prefersReducedMotion ? 'auto' : 'smooth';

      if (targetId === '#home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior });
        history.replaceState(null, '', ' ');
        return;
      }

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const headerHeight = navBarHeight();
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
      window.scrollTo({ top: targetPosition, behavior });
      history.replaceState(null, '', targetId);
    });
  }
}

// ============================================
// DATE HELPERS
// ============================================
const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july',
  'august', 'september', 'october', 'november', 'december'];

// "June 2026" -> { year: 2026, month: 5 }   "Present" -> now
function parseMonthYear(str) {
  const s = str.trim().toLowerCase();
  if (s === 'present') {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  }
  const [monthName, year] = s.split(/\s+/);
  const month = MONTHS.indexOf(monthName);
  if (month === -1 || isNaN(parseInt(year, 10))) return null;
  return { year: parseInt(year, 10), month };
}

// "June 2026 - Present" -> "6 mos", "December 2022 - January 2025" -> "2 yrs 2 mos"
function formatDuration(range) {
  const parts = range.split(/\s+[-–—]\s+/);
  if (parts.length !== 2) return '';
  const start = parseMonthYear(parts[0]);
  const end = parseMonthYear(parts[1]);
  if (!start || !end) return '';

  // Inclusive month count (matches how LinkedIn counts)
  const total = (end.year - start.year) * 12 + (end.month - start.month) + 1;
  if (total <= 0) return '';

  const years = Math.floor(total / 12);
  const months = total % 12;
  const out = [];
  if (years) out.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (months) out.push(`${months} mo${months > 1 ? 's' : ''}`);
  return out.join(' ');
}

const isCurrent = (range) => /present\s*$/i.test(range);

// ============================================
// COMPONENT RENDERER
// ============================================
class ComponentRenderer {
  constructor(data) {
    this.data = data;
  }

  socialLinksHTML() {
    const { links } = this.data.personal;
    return `
      <a href="${links.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="${links.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <a href="${links.resume}" target="_blank" rel="noopener noreferrer" aria-label="Resume" title="Resume">
        <i class="fas fa-file-alt"></i>
      </a>
    `;
  }

  // Render Hero Section
  renderHero() {
    const { personal, stats } = this.data;

    document.getElementById('heroTitle').textContent = personal.name;
    document.getElementById('heroSubtitle').textContent = personal.tagline;
    document.getElementById('heroDescription').textContent = personal.description;
    document.getElementById('heroImage').src = personal.image;
    document.getElementById('socialLinks').innerHTML = this.socialLinksHTML();

    const statusLine = document.getElementById('statusLine');
    if (personal.currently) {
      statusLine.innerHTML = `
        <span class="status-dot" aria-hidden="true"></span>
        <span class="status-label">currently:</span>
        <span class="status-value">${personal.currently.role} @ ${personal.currently.company}</span>
      `;
    } else {
      statusLine.remove();
    }

    const statsEl = document.getElementById('heroStats');
    if (stats && stats.length) {
      statsEl.innerHTML = stats.map(stat => `
        <div class="stat">
          <span class="stat-value" data-value="${stat.value}">${stat.value}</span>
          <span class="stat-label">${stat.label}</span>
        </div>
      `).join('');
    } else {
      statsEl.closest('.hero-stats-block').remove();
    }
  }

  // Render Education Section
  renderEducation() {
    const educationHTML = this.data.education.map(edu => `
      <div class="education-card fade-in">
        ${edu.logo
          ? `<div class="exp-logo edu-logo"><img src="${edu.logo}" alt="${edu.school} logo" loading="lazy" width="72" height="72"></div>`
          : `<div class="icon">${edu.icon}</div>`}
        <div class="edu-text">
          <h3>${edu.school}</h3>
          <p class="degree">${edu.degree}</p>
          <p class="date"><i class="far fa-calendar"></i> ${edu.date}</p>
          <p class="location"><i class="fas fa-location-dot"></i> ${edu.location}</p>
        </div>
      </div>
    `).join('');
    document.getElementById('educationGrid').innerHTML = educationHTML;
  }

  // "65K+ users migrated" -> "<strong>65K+</strong> users migrated"
  metricsHTML(metrics) {
    if (!metrics || !metrics.length) return '';
    return `<div class="metrics">${metrics.map(m => {
      const match = m.match(/^([$\d][^\s]*)\s+(.*)$/);
      return `<span class="metric">${match ? `<strong>${match[1]}</strong> ${match[2]}` : m}</span>`;
    }).join('')}</div>`;
  }

  // Collapsible region + its toggle button (animated via CSS grid rows)
  detailsHTML(id, inner) {
    return `<div class="details" id="${id}"><div class="details-inner">${inner}</div></div>`;
  }

  readMoreButton(id) {
    return `
      <button class="read-more" type="button" aria-expanded="false" aria-controls="${id}">
        <span class="read-more-label">Read more</span><i class="fas fa-chevron-down" aria-hidden="true"></i>
      </button>`;
  }

  // Render Experience Timeline
  renderExperience() {
    let earlierHeaderDone = false;

    const timelineHTML = this.data.experience.map((exp, index) => {
      const current = isCurrent(exp.date);
      const classes = ['timeline-content'];
      if (exp.featured) classes.push('featured');
      if (current) classes.push('current');

      const companyDisplay = exp.link
        ? `<a href="${exp.link}" target="_blank" rel="noopener noreferrer">${exp.company}</a>`
        : exp.company;

      const highlightsHTML = exp.highlights.map(h => `<li>${h}</li>`).join('');
      const skillsHTML = exp.skills.map(s => `<span class="timeline-skill">${s}</span>`).join('');
      const duration = formatDuration(exp.date);

      const expId = `exp-${index}`;
      const detailsId = `${expId}-details`;

      // Everything that hides behind "Read more"
      const fullContent = `
        ${exp.description ? `<p class="description">${exp.description}</p>` : ''}
        <ul>${highlightsHTML}</ul>
        <div class="timeline-skills">${skillsHTML}</div>
      `;

      // ---- Compact row for earlier roles ----
      if (exp.earlier) {
        const subhead = earlierHeaderDone ? '' : `
          <div class="timeline-subhead">
            <span class="prompt">$</span> ls experience/earlier/
          </div>`;
        earlierHeaderDone = true;

        return `
          ${subhead}
          <div class="timeline-item compact fade-in" id="${expId}">
            <div class="timeline-dot"></div>
            <div class="timeline-content compact">
              <button class="compact-toggle" type="button" aria-expanded="false" aria-controls="${detailsId}">
                ${exp.logo ? `<span class="exp-logo small"><img src="${exp.logo}" alt="" loading="lazy" width="40" height="40"></span>` : ''}
                <span class="compact-text">
                  <span class="compact-title">${exp.title}</span>
                  <span class="compact-company">${exp.company} · ${exp.type}</span>
                </span>
                <span class="compact-date">${exp.date}${duration ? `<span class="duration">${duration}</span>` : ''}</span>
                <i class="fas fa-chevron-down compact-chevron" aria-hidden="true"></i>
              </button>
              ${this.detailsHTML(detailsId, `
                ${exp.summary ? `<p class="summary">${exp.summary}</p>` : ''}
                ${this.metricsHTML(exp.metrics)}
                ${fullContent}
              `)}
            </div>
          </div>
        `;
      }

      // Big banner style: dark header strip with one or more white logos
      const bannerHTML = exp.banner && exp.banner.length ? `
        <div class="exp-banner">
          ${exp.banner.map((src, i) => `
            ${i > 0 ? '<span class="exp-banner-sep" aria-hidden="true"></span>' : ''}
            <img src="${src}" alt="${i === 0 ? `${exp.company} logo` : ''}" loading="lazy">
          `).join('')}
        </div>
      ` : '';
      if (bannerHTML) classes.push('has-banner');

      // Small icon style: square logo tile next to the title
      const logoHTML = exp.logo && !bannerHTML ? `
        <div class="exp-logo">
          <img src="${exp.logo}" alt="${exp.company} logo" loading="lazy" width="56" height="56">
        </div>
      ` : '';

      return `
        <div class="timeline-item fade-in" id="${expId}">
          <div class="timeline-dot${current ? ' current' : ''}"></div>
          <div class="timeline-date">
            ${exp.date}${duration ? `<span class="duration">· ${duration}</span>` : ''}
          </div>
          <div class="${classes.join(' ')}">
            ${bannerHTML}
            <div class="exp-header">
              ${logoHTML}
              <div class="exp-header-text">
                <div class="timeline-heading">
                  <h3>${exp.title}</h3>
                  ${current ? '<span class="current-badge"><span class="status-dot" aria-hidden="true"></span>Current</span>' : ''}
                </div>
                <p class="company">${companyDisplay}${exp.via ? ` <span class="via">${exp.via}</span>` : ''}</p>
              </div>
            </div>
            <span class="job-type">${exp.type}</span>
            ${exp.summary ? `
              <p class="summary">${exp.summary}</p>
              ${this.metricsHTML(exp.metrics)}
              ${this.detailsHTML(detailsId, fullContent)}
              ${this.readMoreButton(detailsId)}
            ` : fullContent}
          </div>
        </div>
      `;
    }).join('');

    document.getElementById('experienceTimeline').innerHTML = timelineHTML;
    this.renderExperienceDropdown();
  }

  // Render Experience Dropdown in Navigation
  renderExperienceDropdown() {
    const dropdownHTML = this.data.experience.map((exp, index) => `
      <a href="#exp-${index}" class="nav-dropdown-item">
        <span class="nav-dropdown-item-title">
          ${exp.title}${isCurrent(exp.date) ? '<span class="status-dot small" aria-label="current role"></span>' : ''}
        </span>
        <span class="nav-dropdown-item-company">${exp.company}</span>
      </a>
    `).join('');

    const dropdown = document.getElementById('experienceDropdown');
    if (dropdown) dropdown.innerHTML = dropdownHTML;
  }

  // Render Projects
  renderProjects() {
    const projectsHTML = this.data.projects.map((project, index) => {
      const detailsId = `project-${index}-details`;
      const featuredClass = project.featured ? 'featured' : '';
      const skillsHTML = project.skills.map(s => `<span class="project-skill">${s}</span>`).join('');

      // Video: show a poster with a play button; the YouTube player only loads
      // on click. Keeps the card size stable even when a browser or extension
      // blocks YouTube, and skips ~1MB of YouTube scripts on page load.
      const videoId = project.video ? (project.video.match(/(?:embed\/|v=|youtu\.be\/)([\w-]{6,})/) || [])[1] : null;

      let mediaHTML = '';
      if (videoId) {
        const poster = project.image || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
        mediaHTML = `
          <div class="project-media video-poster" data-video-id="${videoId}" data-title="${project.title}">
            <img src="${poster}" alt="${project.title} video preview" class="project-image" loading="lazy">
            <button class="play-btn" type="button" aria-label="Play video: ${project.title}">
              <i class="fas fa-play" aria-hidden="true"></i>
            </button>
          </div>`;
      } else if (project.image) {
        mediaHTML = `<div class="project-media"><img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy"></div>`;
      }

      let linksHTML = '';
      if (project.links || videoId) {
        const linkItems = [];
        if (videoId) {
          linkItems.push(`<a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener noreferrer" class="project-link">
            <i class="fab fa-youtube"></i> Video
          </a>`);
        }
        const links = project.links || {};
        if (links.github) {
          linkItems.push(`<a href="${links.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            <i class="fab fa-github"></i> GitHub
          </a>`);
        }
        if (links.demo) {
          linkItems.push(`<a href="${links.demo}" target="_blank" rel="noopener noreferrer" class="project-link">
            <i class="fas fa-external-link-alt"></i> Demo
          </a>`);
        }
        linksHTML = linkItems.join('');
      }

      const fullContent = `
        <p>${project.description}</p>
        ${project.details ? `<p>${project.details}</p>` : ''}
        <div class="project-skills">${skillsHTML}</div>
      `;

      return `
        <div class="project-card ${featuredClass} fade-in">
          ${mediaHTML}
          <div class="project-content">
            <h3>${project.title}</h3>
            ${project.subtitle ? `<p class="subtitle">${project.subtitle}</p>` : ''}
            <p class="date">${project.date}</p>
            ${project.summary ? `
              <p class="summary">${project.summary}</p>
              ${this.detailsHTML(detailsId, fullContent)}
            ` : fullContent}
            <div class="project-footer">
              ${project.summary ? this.readMoreButton(detailsId) : '<span></span>'}
              ${linksHTML ? `<div class="project-links">${linksHTML}</div>` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');

    document.getElementById('projectsGrid').innerHTML = projectsHTML;
  }

  // Render Skills
  renderSkills() {
    const skillsHTML = this.data.skills.map(group => `
      <div class="skill-category fade-in">
        <h3 class="category-title">
          <i class="fas ${group.icon}"></i> ${group.category}
        </h3>
        <div class="skills-list">
          ${group.items.map(item =>
            `<span class="skill-chip${item.core ? ' core' : ''}">${item.name}</span>`
          ).join('')}
        </div>
      </div>
    `).join('');
    document.getElementById('skillsContainer').innerHTML = skillsHTML;

    document.getElementById('softSkills').innerHTML = this.data.softSkills
      .map(skill => `<div class="soft-skill">${skill}</div>`).join('');

    document.getElementById('spokenLanguages').innerHTML = this.data.spokenLanguages.map(lang => `
      <div class="language-item">
        <div class="language-name">${lang.language}</div>
        <div class="language-proficiency">${lang.proficiency}</div>
      </div>
    `).join('');
  }

  // Render Contact Section
  renderContact() {
    const { personal } = this.data;
    const telHref = personal.phone.replace(/[^\d+]/g, '');

    document.getElementById('contactInfo').innerHTML = `
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <a href="mailto:${personal.email}">${personal.email}</a>
        <button class="copy-btn" type="button" data-copy="${personal.email}" aria-label="Copy email address" title="Copy email">
          <i class="far fa-copy"></i>
        </button>
      </div>
      <div class="contact-item">
        <i class="fas fa-phone"></i>
        <a href="tel:${telHref}">${personal.phone}</a>
      </div>
      <div class="contact-item">
        <i class="fas fa-map-marker-alt"></i>
        <span>${personal.location}</span>
      </div>
    `;

    document.getElementById('contactSocialLinks').innerHTML = this.socialLinksHTML();

    document.getElementById('contactInfo').addEventListener('click', async (e) => {
      const btn = e.target.closest('.copy-btn');
      if (!btn) return;
      const icon = btn.querySelector('i');
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        icon.className = 'fas fa-check';
        btn.classList.add('copied');
      } catch (err) {
        window.location.href = `mailto:${btn.dataset.copy}`;
        return;
      }
      setTimeout(() => {
        icon.className = 'far fa-copy';
        btn.classList.remove('copied');
      }, 1800);
    });
  }

  renderFooter() {
    const year = document.getElementById('footerYear');
    if (year) year.textContent = new Date().getFullYear();
  }

  renderAll() {
    this.renderHero();
    this.renderExperience();
    this.renderProjects();
    this.renderSkills();
    this.renderEducation();
    this.renderContact();
    this.renderFooter();
  }
}

// ============================================
// READ MORE / COMPACT ROW TOGGLES
// One delegated handler for every collapsible block on the page.
// ============================================
class DetailsToggle {
  constructor() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.read-more, .compact-toggle');
      if (!btn) return;

      const region = document.getElementById(btn.getAttribute('aria-controls'));
      if (!region) return;

      const open = region.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.closest('.timeline-content, .project-card')?.classList.toggle('expanded', open);

      const label = btn.querySelector('.read-more-label');
      if (label) label.textContent = open ? 'Show less' : 'Read more';

      // Collapsing a long card can leave the reader scrolled past it;
      // bring the card back into view if its top went above the navbar.
      if (!open) {
        const card = btn.closest('.timeline-content, .project-card');
        const navH = navBarHeight();
        const top = card.getBoundingClientRect().top;
        if (top < navH) {
          window.scrollBy({ top: top - navH - 16, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
      }
    });
  }
}

// ============================================
// VIDEO POSTERS (click to load the YouTube player)
// ============================================
class VideoPoster {
  constructor() {
    document.addEventListener('click', (e) => {
      const poster = e.target.closest('.video-poster');
      if (!poster || poster.classList.contains('playing')) return;

      const id = poster.dataset.videoId;
      const iframe = document.createElement('iframe');
      iframe.className = 'project-video';
      iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      iframe.title = poster.dataset.title || 'Project video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';

      poster.classList.add('playing');
      poster.replaceChildren(iframe);
      iframe.focus();
    });
  }
}

// ============================================
// HERO INTRO
// Types the command like a person, then "prints" the output: status line,
// name, tagline and description. Buttons fade in at the end.
//  - Layout never jumps: each text node is split into a visible "typed" span
//    and an invisible "rest" span, so the full text is laid out from the start.
//  - Any click / key / scroll / touch skips straight to the end.
//  - Reduced-motion users see everything immediately.
// ============================================
class HeroIntro {
  constructor() {
    this.command = document.getElementById('heroCommand');
    this.reveal = document.getElementById('heroReveal');
    this.cursor = document.querySelector('.command-line .cursor');
    this.pairs = [];        // [{ typed, rest }] for every text node we've split
    this.done = false;
    this.skipped = false;

    // [selector, ms per tick, characters per tick]
    this.steps = [
      ['#statusLine', 14, 2],
      ['#heroTitle', 45, 1],
      ['#heroSubtitle', 16, 1],
      ['#heroDescription', 16, 4]
    ];
  }

  start() {
    if (!this.command || !this.reveal) return;

    if (prefersReducedMotion) {
      this.finish();
      return;
    }

    this.reveal.classList.add('typing');

    // Skip on any interaction
    this.skipEvents = ['pointerdown', 'keydown', 'wheel', 'touchstart'];
    this.onSkip = () => this.finish();
    this.skipEvents.forEach(ev => window.addEventListener(ev, this.onSkip, { passive: true }));

    // Safety net: never leave the hero half-typed
    setTimeout(() => this.finish(), 9000);

    this.run();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, this.skipped ? 0 : ms));
  }

  async run() {
    const text = this.command.dataset.text;
    await this.sleep(250);
    for (const ch of text) {
      if (this.skipped) return;
      this.command.textContent += ch;
      await this.sleep(38 + Math.random() * 40);
    }
    await this.sleep(220);

    for (const [selector, ms, perTick] of this.steps) {
      if (this.skipped) return;
      const el = document.querySelector(selector);
      if (!el) continue;
      await this.typeInto(el, ms, perTick);
      await this.sleep(110);
    }
    this.finish();
  }

  // Split every text node in `el` into typed/rest spans, then move characters
  // from rest -> typed, carrying the cursor along.
  async typeInto(el, ms, perTick) {
    // Skip whitespace-only nodes (template indentation): wrapping them in
    // spans would turn them into flex items and add gaps in the status pill.
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
      acceptNode: n => (n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT)
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    const pairs = nodes.map(node => {
      const typed = document.createElement('span');
      const rest = document.createElement('span');
      typed.className = 'tw-typed';
      rest.className = 'tw-rest';
      rest.textContent = node.nodeValue;
      node.replaceWith(typed, rest);
      return { typed, rest };
    });
    this.pairs.push(...pairs);
    el.classList.add('tw-on');

    for (const { typed, rest } of pairs) {
      if (this.skipped) return;
      if (this.cursor) typed.after(this.cursor);
      while (rest.textContent.length) {
        if (this.skipped) return;
        const chunk = rest.textContent.slice(0, perTick);
        typed.textContent += chunk;
        rest.textContent = rest.textContent.slice(perTick);
        if (chunk.trim()) await this.sleep(ms);   // whitespace prints instantly
      }
    }
  }

  finish() {
    if (this.done) return;
    this.done = true;
    this.skipped = true;

    this.command.textContent = this.command.dataset.text;
    this.pairs.forEach(({ typed, rest }) => {
      typed.textContent += rest.textContent;
      rest.textContent = '';
    });
    this.steps.forEach(([selector]) => {
      const el = document.querySelector(selector);
      if (el) el.classList.add('tw-on');
    });

    // Leave the cursor blinking at the end of the description
    const desc = document.getElementById('heroDescription');
    if (this.cursor && desc && !prefersReducedMotion) desc.appendChild(this.cursor);

    this.reveal.classList.remove('typing');
    if (this.skipEvents) {
      this.skipEvents.forEach(ev => window.removeEventListener(ev, this.onSkip));
    }
  }
}

// ============================================
// STAT COUNTERS (count up when scrolled into view)
// ============================================
class StatCounter {
  constructor() {
    this.stats = document.querySelectorAll('.stat-value[data-value]');
  }

  start() {
    if (!this.stats.length || prefersReducedMotion || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        this.animate(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.6 });

    this.stats.forEach(el => observer.observe(el));
  }

  // "$130K+" -> prefix "$", number 130, suffix "K+"
  animate(el) {
    const match = el.dataset.value.match(/^([^\d]*)([\d.,]+)(.*)$/);
    if (!match) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ''));
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = `${prefix}${Math.round(target * eased).toLocaleString()}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = el.dataset.value;
    };
    requestAnimationFrame(tick);
  }
}

// ============================================
// INTERSECTION OBSERVER (Fade-in animations)
// ============================================
class AnimationObserver {
  observe() {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('visible');
          observer.unobserve(el);
          // Hand control back to the element's own hover transitions
          setTimeout(() => el.classList.remove('will-fade', 'visible'), 700);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('will-fade');
      observer.observe(el);
    });
  }
}

// ============================================
// SCROLL EFFECTS (navbar shadow, progress bar, indicator, active link)
// ============================================
class ScrollEffects {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.progress = document.getElementById('scrollProgress');
    this.indicator = document.querySelector('.scroll-indicator');
    this.sections = document.querySelectorAll('section[id]');
    this.navLinks = document.querySelectorAll('.nav-link, .mobile-link');
    this.ticking = false;

    window.addEventListener('scroll', () => this.requestUpdate(), { passive: true });
    window.addEventListener('resize', () => this.requestUpdate(), { passive: true });
    this.update();
  }

  requestUpdate() {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      this.update();
      this.ticking = false;
    });
  }

  update() {
    const y = window.pageYOffset;
    const max = document.documentElement.scrollHeight - window.innerHeight;

    this.navbar.classList.toggle('scrolled', y > 50);
    if (this.progress) this.progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    if (this.indicator) this.indicator.style.opacity = y > 100 ? '0' : '1';

    // Active nav link
    const offset = navBarHeight() + 120;
    let current = 'home';
    this.sections.forEach(section => {
      if (y + offset >= section.offsetTop) current = section.id;
    });
    // Bottom of the page: last section wins
    if (max > 0 && y >= max - 4) current = this.sections[this.sections.length - 1].id;

    this.navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  if (typeof portfolioData === 'undefined') {
    console.error('Portfolio data not loaded! Make sure data.js is loaded before script.js');
    return;
  }

  // Start the hero intro first so the hero can never stay hidden
  // if anything later in startup throws.
  new HeroIntro().start();

  new ThemeManager();
  new MobileMenu();
  new SmoothScroll();

  const renderer = new ComponentRenderer(portfolioData);
  renderer.renderAll();

  new DetailsToggle();
  new VideoPoster();
  new StatCounter().start();
  new AnimationObserver().observe();
  new ScrollEffects();
});
