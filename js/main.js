/**
 * MAIN INTERACTION SCRIPT - Disha P Portfolio
 * Full Desktop & Mobile Interactive Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  initIntroScreen();
  initThemeSystem();
  initTabFilters();
  initProjectsCarousel();
  initModals();
  initCommandPalette();
  initContactForm();
  initScrollSpy();
  initEasterEgg();
  initQRCode();
  initResumeModal();
  
  // Initialize 3D Hero Scene
  if (window.InteractiveHeroBackground) {
    window.heroBackground = new window.InteractiveHeroBackground('hero-canvas-container');
  }
});

/* ==========================================================================
   FR-01: ANIMATED INTRO SCREEN
   ========================================================================== */
function initIntroScreen() {
  const intro = document.getElementById('intro-screen');
  const progressBar = document.getElementById('intro-progress-bar');
  const percentText = document.getElementById('intro-percent-text');
  const statusText = document.getElementById('intro-status-text');
  const skipBtn = document.getElementById('skip-intro-btn');

  if (!intro) return;

  // Check if visitor already saw intro in this tab
  if (sessionStorage.getItem('disha_intro_dismissed')) {
    intro.style.display = 'none';
    return;
  }

  const steps = [
    { p: 15, msg: "Allocating neural weights and biomedical vectors..." },
    { p: 45, msg: "Calibrating soft-UI depth & WCAG AA contrast..." },
    { p: 75, msg: "Verifying IEEE ATiGB 2026 Best Paper credential..." },
    { p: 95, msg: "Synthesizing interactive 3D hero geometry..." },
    { p: 100, msg: "Welcome to Disha's universe!" }
  ];

  let currentPercent = 0;
  let stepIdx = 0;

  const dismissIntro = () => {
    intro.classList.add('fade-out');
    sessionStorage.setItem('disha_intro_dismissed', 'true');
    setTimeout(() => {
      intro.style.display = 'none';
    }, 550);
  };

  if (skipBtn) {
    skipBtn.addEventListener('click', dismissIntro);
  }

  const timer = setInterval(() => {
    currentPercent += 2;
    if (progressBar) progressBar.style.width = `${currentPercent}%`;
    if (percentText) percentText.textContent = `${currentPercent}%`;

    const nextStep = steps[stepIdx];
    if (nextStep && currentPercent >= nextStep.p) {
      if (statusText) statusText.textContent = nextStep.msg;
      stepIdx++;
    }

    if (currentPercent >= 100) {
      clearInterval(timer);
      setTimeout(dismissIntro, 350);
    }
  }, 25);
}

/* ==========================================================================
   FR-14: THEME SYSTEM (Dark Burgundy, Cream Light & Beige & Burgundy)
   ========================================================================== */
function initThemeSystem() {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('disha_portfolio_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme (default: dark)
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark');
  setTheme(initialTheme);

  // Bind all toggle buttons (Cycles: dark -> light -> beige -> dark)
  const toggleButtons = document.querySelectorAll('.theme-toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'dark';
      let next;
      if (current === 'dark') {
        next = 'light';
      } else if (current === 'light') {
        next = 'beige';
      } else {
        next = 'dark';
      }
      setTheme(next);
      const label = next === 'dark' ? 'Dark Burgundy' : next === 'light' ? 'Cream Light' : 'Beige & Burgundy';
      showToast('🎨 Theme: ' + label);
      if (window.soundController) window.soundController.playClick();
    });
  });

  // Listen for system theme changes if user hasn't explicitly set preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('disha_portfolio_theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function setTheme(theme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  localStorage.setItem('disha_portfolio_theme', theme);

  const toggleButtons = document.querySelectorAll('.theme-toggle-btn');
  toggleButtons.forEach(btn => {
    const nextLabel = theme === 'dark' ? 'Cream Light' : theme === 'light' ? 'Beige & Burgundy' : 'Dark Burgundy';
    btn.title = `Theme: ${theme.toUpperCase()} (Click for ${nextLabel})`;
  });

  // Update theme icons
  document.querySelectorAll('.theme-icon').forEach(icon => {
    if (theme === 'dark') {
      // Sun icon to switch to Light
      icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    } else if (theme === 'light') {
      // Palette icon to switch to Beige
      icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>`;
    } else {
      // Moon icon to switch to Dark
      icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    }
  });

  if (window.heroBackground) {
    window.heroBackground.updateThemeColors(theme === 'dark');
  }
}

/* ==========================================================================
   INTERACTIVE TAB FILTERS FOR ALL SECTIONS
   ========================================================================== */
function initTabFilters() {
  // 1. Project Category Tabs
  const projButtons = document.querySelectorAll('[data-proj-filter]');
  const projCards = document.querySelectorAll('#projects-track .project-card');

  projButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      projButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-proj-filter');

      projCards.forEach(card => {
        const type = card.getAttribute('data-proj-type');
        if (filter === 'all' || type === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
      if (window.soundController) window.soundController.playTabSwitch();
    });
  });

  // 2. Research Tabs
  const resButtons = document.querySelectorAll('[data-res-filter]');
  const resCards = document.querySelectorAll('#research-grid-container .research-card');

  resButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      resButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-res-filter');

      resCards.forEach(card => {
        const cat = card.getAttribute('data-res-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
      if (window.soundController) window.soundController.playTabSwitch();
    });
  });

  // 3. Certifications & Hackathons Filter Tabs
  const certButtons = document.querySelectorAll('.certs-filter-bar .filter-pill');
  const certCards = document.querySelectorAll('#certs-grid-container .cert-card');

  certButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      certButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      certCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
      if (window.soundController) window.soundController.playTabSwitch();
    });
  });

  // 4. Skills Category Tabs
  const skillButtons = document.querySelectorAll('[data-skill-filter]');
  const skillCards = document.querySelectorAll('#skills-grid-container .skill-category-card');

  skillButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      skillButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-skill-filter');

      skillCards.forEach(card => {
        const cat = card.getAttribute('data-skill-cat');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
      if (window.soundController) window.soundController.playTabSwitch();
    });
  });
}

/* ==========================================================================
   FR-05 & FR-13: SWIPEABLE CAROUSEL & VIEW CONTROLS
   ========================================================================== */
function initProjectsCarousel() {
  const track = document.getElementById('projects-track');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  const viewToggleBtns = document.querySelectorAll('.view-toggle-btn');

  if (!track) return;

  const scrollAmount = () => {
    const card = track.querySelector('.project-card');
    return card ? card.offsetWidth + 28 : 340;
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
      if (window.soundController) window.soundController.playClick();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
      if (window.soundController) window.soundController.playClick();
    });
  }

  // Grid / Carousel view switcher
  viewToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewToggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.getAttribute('data-view');

      if (view === 'grid') {
        track.classList.add('grid-view');
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
      } else {
        track.classList.remove('grid-view');
        if (prevBtn) prevBtn.style.display = 'flex';
        if (nextBtn) nextBtn.style.display = 'flex';
      }
      if (window.soundController) window.soundController.playTabSwitch();
    });
  });
}

/* ==========================================================================
   MODALS: PROJECT CASE STUDY & CERTIFICATES
   ========================================================================== */
function initModals() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtns = document.querySelectorAll('.modal-close-btn');

  const closeModal = () => {
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal();
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

window.openProjectModal = function(projectId) {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;
  const project = data.projects.find(p => p.id === projectId);
  if (!project) return;

  const overlay = document.getElementById('modal-overlay');
  const modalContainer = document.getElementById('modal-content-container');
  if (!overlay || !modalContainer) return;

  modalContainer.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <div>
          <span class="cert-type-pill">${project.category}</span>
          <h2 class="modal-title" style="margin-top: 0.35rem;">${project.title}</h2>
        </div>
        <button class="modal-close-btn" onclick="document.getElementById('modal-overlay').classList.remove('active'); document.body.style.overflow='';">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <div class="modal-body">
        <p style="font-size: 1.05rem; font-weight: 500; color: var(--text-secondary); margin-bottom: 1.5rem;">${project.subtitle}</p>

        <div style="background: var(--badge-bg); border-left: 3px solid var(--accent); padding: 1rem 1.25rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.82rem; text-transform: uppercase; color: var(--accent); margin-bottom: 0.35rem;">Problem Statement</h4>
          <p style="font-size: 0.92rem; color: var(--text-primary);">${project.problem}</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 1rem; margin-bottom: 0.4rem;">Disha's Role</h4>
          <p style="font-size: 0.92rem; color: var(--text-muted);">${project.role}</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 1rem; margin-bottom: 0.6rem;">Approach & Technical Architecture</h4>
          <ul class="timeline-bullets">
            ${project.approach.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 1rem; margin-bottom: 0.6rem;">Key Results & Impact</h4>
          <ul class="timeline-bullets">
            ${project.results.map(res => `<li>${res}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-bottom: 2rem;">
          <h4 style="font-size: 0.9rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.6rem;">Tech Stack & Frameworks</h4>
          <div class="tech-tags">
            ${project.techStack.map(t => `<span class="tech-tag" style="font-size:0.8rem; padding: 0.3rem 0.75rem;">${t}</span>`).join('')}
          </div>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            View Repository ↗
          </a>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (window.soundController) window.soundController.playPop();
};

window.openCertificateModal = function(certId) {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;
  const cert = data.certifications.find(c => c.id === certId);
  if (!cert) return;

  const overlay = document.getElementById('modal-overlay');
  const modalContainer = document.getElementById('modal-content-container');
  if (!overlay || !modalContainer) return;

  const isImage = /\.(jpe?g|png|webp)$/i.test(cert.verifyUrl);
  const isPdf = cert.verifyUrl.endsWith('.pdf');

  modalContainer.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <div>
          <span class="cert-type-pill">${cert.type}</span>
          <h2 class="modal-title" style="margin-top: 0.35rem; font-size: 1.25rem;">${cert.title}</h2>
        </div>
        <button class="modal-close-btn" onclick="document.getElementById('modal-overlay').classList.remove('active'); document.body.style.overflow='';">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <div class="modal-body" style="text-align: center;">
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0.6rem;">${cert.issuer} • ${cert.date}</p>
        
        ${cert.paperTitle ? `
          <div style="background: var(--badge-bg); border-left: 3px solid var(--accent); padding: 0.75rem 1rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin: 0 auto 1.25rem; text-align: left; max-width: 600px;">
            <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--accent); font-weight: 700; margin-bottom: 0.25rem;">Award-Winning Research Paper</div>
            <div style="font-size: 0.92rem; font-weight: 600; color: var(--text-primary); line-height: 1.4;">${cert.paperTitle}</div>
          </div>
        ` : ''}

        ${isImage ? `
          <div style="border-radius: var(--radius-md); overflow: hidden; border: 1.5px solid var(--accent); max-height: 520px; margin-bottom: 1.25rem; box-shadow: var(--shadow-md); background: #fdfaf6;">
            <img src="${cert.verifyUrl}" alt="${cert.title}" style="width: 100%; height: auto; object-fit: contain; max-height: 500px;" />
          </div>
          <div style="display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
            <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="display: inline-flex; font-size: 0.85rem; padding: 0.45rem 1rem;">
              <span>Open Full Resolution JPG ↗</span>
            </a>
            ${cert.ceremonyPhoto ? `
              <button type="button" class="btn-secondary" style="display: inline-flex; font-size: 0.85rem; padding: 0.45rem 1rem; cursor: pointer;" onclick="openAwardPhotoModal('${cert.ceremonyPhoto}', 'Stage Ceremony: ${cert.title}', '${cert.issuer}')">
                <span>View Stage Photo 📸</span>
              </button>
            ` : ''}
            ${cert.id === 'cert-atigb-award' ? `
              <a href="https://doi.org/10.1109/ATiGB70203.2026.11628256" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="display: inline-flex; font-size: 0.85rem; padding: 0.45rem 1rem;">
                <span>View IEEE DOI ↗</span>
              </a>
              <a href="https://ieeexplore.ieee.org/document/11628256/" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="display: inline-flex; font-size: 0.85rem; padding: 0.45rem 1rem;">
                <span>IEEE Xplore ↗</span>
              </a>
            ` : ''}
          </div>
        ` : isPdf ? `
          <div style="background: var(--badge-bg); border: 2px dashed var(--accent); border-radius: var(--radius-lg); padding: 3rem 2rem; margin-bottom: 1.5rem;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="color: var(--accent); margin: 0 auto 1rem;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Official PDF Credential Available</h4>
            <p style="font-size: 0.88rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 1.5rem;">This official verification certificate document is stored in Disha's verified repository.</p>
            <a href="${cert.verifyUrl}" target="_blank" class="btn-primary" style="display: inline-flex;">
              Open Full PDF in New Tab ↗
            </a>
          </div>
        ` : ''}

        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.55;">${cert.description}</p>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (window.soundController) window.soundController.playPop();
};

window.openAwardPhotoModal = function(imageSrc, title, subtitle) {
  const overlay = document.getElementById('modal-overlay');
  const modalContainer = document.getElementById('modal-content-container');
  if (!overlay || !modalContainer) return;

  modalContainer.innerHTML = `
    <div class="modal-card" style="max-width: 860px;">
      <div class="modal-header">
        <div>
          <span class="cert-type-pill">Stage Ceremony Photo</span>
          <h2 class="modal-title" style="margin-top: 0.35rem; font-size: 1.25rem;">${title}</h2>
        </div>
        <button class="modal-close-btn" onclick="document.getElementById('modal-overlay').classList.remove('active'); document.body.style.overflow='';">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <div class="modal-body" style="text-align: center;">
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.25rem;">${subtitle}</p>
        <div style="border-radius: var(--radius-md); overflow: hidden; border: 1.5px solid var(--accent); max-height: 600px; margin-bottom: 1.5rem; box-shadow: var(--shadow-md); background: #000;">
          <img src="${imageSrc}" alt="${title}" style="width: 100%; height: auto; object-fit: contain; max-height: 560px; display: block; margin: 0 auto;" />
        </div>
        <div style="display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap;">
          <a href="${imageSrc}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="display: inline-flex; font-size: 0.85rem; padding: 0.45rem 1.1rem;">
            <span>Open High-Resolution Photo ↗</span>
          </a>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (window.soundController) window.soundController.playPop();
};

/* ==========================================================================
   COMMAND PALETTE (CTRL+K / SEARCH BAR)
   ========================================================================== */
function initCommandPalette() {
  const modal = document.getElementById('cmd-palette-modal');
  const input = document.getElementById('cmd-input');
  const resultsList = document.getElementById('cmd-results-list');
  const triggers = document.querySelectorAll('.hero-search-bar, .open-cmd-palette-btn');

  if (!modal || !input) return;

  const openPalette = () => {
    modal.classList.add('active');
    input.value = '';
    renderSearchResults('');
    input.focus();
    document.body.style.overflow = 'hidden';
    if (window.soundController) window.soundController.playPop();
  };

  const closePalette = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  triggers.forEach(t => t.addEventListener('click', openPalette));

  // Keyboard shortcut Ctrl+K or Cmd+K
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      modal.classList.contains('active') ? closePalette() : openPalette();
    }
  });

  input.addEventListener('input', e => {
    renderSearchResults(e.target.value.trim().toLowerCase());
  });

  function renderSearchResults(query) {
    const data = window.PORTFOLIO_DATA;
    if (!data || !resultsList) return;

    let items = [];

    // Projects
    data.projects.forEach(p => {
      if (!query || p.title.toLowerCase().includes(query) || p.techStack.some(t => t.toLowerCase().includes(query))) {
        items.push({
          type: "Project",
          title: p.title,
          sub: p.category,
          action: () => { closePalette(); openProjectModal(p.id); }
        });
      }
    });

    // Research
    data.research.forEach(r => {
      if (!query || r.title.toLowerCase().includes(query) || r.domain.toLowerCase().includes(query)) {
        items.push({
          type: "Research",
          title: r.shortTitle,
          sub: r.domain,
          action: () => { closePalette(); document.getElementById('research').scrollIntoView({ behavior: 'smooth' }); }
        });
      }
    });

    // Certifications
    data.certifications.forEach(c => {
      if (!query || c.title.toLowerCase().includes(query) || c.issuer.toLowerCase().includes(query)) {
        items.push({
          type: "Certification",
          title: c.title,
          sub: c.issuer,
          action: () => { closePalette(); openCertificateModal(c.id); }
        });
      }
    });

    if (items.length === 0) {
      resultsList.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">No matching projects, skills or certs found for "${query}"</div>`;
      return;
    }

    resultsList.innerHTML = items.map((item, idx) => `
      <li class="cmd-item" data-idx="${idx}">
        <div>
          <div style="font-weight: 600; font-size: 0.95rem;">${item.title}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">${item.sub}</div>
        </div>
        <span class="cert-type-pill">${item.type}</span>
      </li>
    `).join('');

    // Attach click actions
    resultsList.querySelectorAll('.cmd-item').forEach((elem, idx) => {
      elem.addEventListener('click', () => {
        items[idx].action();
      });
    });
  }
}

/* ==========================================================================
   FR-11: CONTACT FORM VALIDATION & INTERACTION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Honeypot check (anti-bot)
    const hp = form.querySelector('.form-hp');
    if (hp && hp.value) {
      console.warn("Spam bot detected via honeypot.");
      return;
    }

    const name = form.querySelector('#contact-name').value.trim();
    const email = form.querySelector('#contact-email').value.trim();
    const message = form.querySelector('#contact-message').value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please fill in all required fields.');
      return;
    }

    // Submit Simulation
    const submitBtn = form.querySelector('.form-submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Sending securely...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = `<span>✓ Message Received!</span>`;
      showToast(`🎉 Thank you, ${name}! Disha will respond shortly.`);
      form.reset();
      if (window.soundController) window.soundController.playChime();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 3000);
    }, 1200);
  });
}

/* ==========================================================================
   FR-03: SCROLL SPY & ACTIVE NAVIGATION
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-bottom-dock .mobile-dock-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
        mobileLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   FR-16: EASTER EGGS (Cat Mascot Dialogue & Haptics)
   ========================================================================== */
function initEasterEgg() {
  const avatar = document.getElementById('interactive-avatar');
  const bubble = document.getElementById('mascot-bubble');
  const data = window.PORTFOLIO_DATA;

  if (!avatar || !bubble || !data) return;

  const quotes = data.easterEggs.catDialogue;
  let quoteIdx = 0;

  avatar.addEventListener('click', () => {
    quoteIdx = (quoteIdx + 1) % quotes.length;
    bubble.textContent = quotes[quoteIdx];
    bubble.style.display = 'block';
    if (window.soundController) window.soundController.playPop();

    // Subtle wobble animation
    avatar.style.transform = 'scale(0.92) rotate(-3deg)';
    setTimeout(() => {
      avatar.style.transform = 'scale(1.05) rotate(2deg)';
      setTimeout(() => avatar.style.transform = '', 250);
    }, 150);
  });
}

/* ==========================================================================
   FR-12: DYNAMIC QR CODE DRAWING
   ========================================================================== */
function initQRCode() {
  const canvas = document.getElementById('qr-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const size = 72;
  canvas.width = size;
  canvas.height = size;

  // Clean stylized modern QR matrix
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, size, size);

  ctx.fillStyle = '#561C24';
  const grid = 9;
  const cellSize = size / grid;

  // QR Corner Markers
  function drawMarker(gx, gy) {
    ctx.fillRect(gx * cellSize, gy * cellSize, 3 * cellSize, 3 * cellSize);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect((gx + 0.5) * cellSize, (gy + 0.5) * cellSize, 2 * cellSize, 2 * cellSize);
    ctx.fillStyle = '#561C24';
    ctx.fillRect((gx + 1) * cellSize, (gy + 1) * cellSize, 1 * cellSize, 1 * cellSize);
  }

  drawMarker(0, 0);
  drawMarker(6, 0);
  drawMarker(0, 6);

  // Decorative data dots
  const pattern = [
    [4,1], [4,2], [3,4], [4,4], [5,4], [1,4],
    [7,3], [8,3], [6,5], [7,5], [3,7], [4,7],
    [5,8], [8,7], [2,5], [5,2]
  ];

  pattern.forEach(([px, py]) => {
    ctx.fillRect(px * cellSize, py * cellSize, cellSize * 0.85, cellSize * 0.85);
  });
}

/* ==========================================================================
   RESUME MODAL & PRINT VIEW (FR-12)
   ========================================================================== */
function initResumeModal() {
  const resumeBtn = document.querySelectorAll('.view-resume-trigger');
  resumeBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openResumeModal();
    });
  });
}

function openResumeModal() {
  const overlay = document.getElementById('modal-overlay');
  const modalContainer = document.getElementById('modal-content-container');
  const data = window.PORTFOLIO_DATA;
  if (!overlay || !modalContainer || !data) return;

  modalContainer.innerHTML = `
    <div class="modal-card" style="max-width: 820px;">
      <div class="modal-header">
        <div>
          <span class="cert-type-pill">Curriculum Vitae</span>
          <h2 class="modal-title" style="margin-top: 0.35rem;">${data.profile.fullName} — Resume</h2>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <button class="btn-primary" style="padding: 0.4rem 1rem; min-height: 38px; font-size: 0.82rem;" onclick="window.print()">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            Print / Save PDF
          </button>
          <button class="modal-close-btn" onclick="document.getElementById('modal-overlay').classList.remove('active'); document.body.style.overflow='';">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
      <div class="modal-body" style="font-size: 0.92rem; line-height: 1.6;">
        <div style="border-bottom: 2px solid var(--accent); padding-bottom: 1rem; margin-bottom: 1.25rem;">
          <h2 style="font-size: 1.8rem; margin-bottom: 0.2rem;">${data.profile.fullName}</h2>
          <div style="color: var(--accent); font-weight: 600; margin-bottom: 0.4rem;">${data.profile.title}</div>
          <div style="font-size: 0.82rem; color: var(--text-muted);">${data.profile.location} • <a href="mailto:${data.profile.email}" style="text-decoration: underline;">${data.profile.email}</a> • <a href="${data.profile.github}" target="_blank" style="text-decoration: underline;">GitHub (DISHA-1125)</a> • <a href="${data.profile.linkedin}" target="_blank" style="text-decoration: underline;">LinkedIn</a></div>
        </div>

        <h3 style="font-size: 1.15rem; color: var(--accent); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Education</h3>
        <p><strong>${data.education.institution}</strong> (${data.education.fullInstitution})<br/>
        ${data.education.degree} • ${data.education.period}</p>
        
        <h3 style="font-size: 1.15rem; color: var(--accent); margin-top: 1.25rem; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Honors & Awards</h3>
        <p>• <strong>Winner of Best Paper Presentation Award</strong> — IEEE ATiGB 2026, Da Nang, Vietnam (10-11 July 2026). Paper ID: 380, DOI: 10.1109/ATiGB70203.2026.11628256.<br/>
        • <strong>Winner of Best Poster Presentation Award</strong> — Tech Star Summit 2026 (Heartbeat-Based Biometric Authentication).</p>

        <h3 style="font-size: 1.15rem; color: var(--accent); margin-top: 1.25rem; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Featured Engineering Projects</h3>
        ${data.projects.map(p => `
          <div style="margin-bottom: 0.8rem;">
            <strong>${p.title}</strong> [<em>${p.techStack.slice(0, 4).join(', ')}</em>] — <a href="${p.githubUrl}" target="_blank" style="color: var(--accent); text-decoration: underline;">Repository ↗</a><br/>
            <span style="color: var(--text-muted); font-size: 0.88rem;">${p.oneLiner}</span>
          </div>
        `).join('')}

        <h3 style="font-size: 1.15rem; color: var(--accent); margin-top: 1.25rem; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Experience & Leadership</h3>
        ${data.experience.map(e => `
          <div style="margin-bottom: 0.8rem;">
            <strong>${e.role}</strong> — ${e.organization} <em>(${e.period})</em><br/>
            <span style="color: var(--text-muted); font-size: 0.88rem;">${e.description}</span>
          </div>
        `).join('')}

        <h3 style="font-size: 1.15rem; color: var(--accent); margin-top: 1.25rem; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Technical Certifications</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted);">Oracle SE17 Java, NPTEL Deep Learning, NPTEL Internet of Things, Deloitte Australia Cyber Job Simulation, Gen AI Data Analytics (Forage), HCL GUVI Build & Deploy Apps, EF SET C1/C2.</p>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   TOAST HELPER
   ========================================================================== */
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}
