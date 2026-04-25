// =============================================
// CURSOR CUSTOMIZADO
// =============================================
(function () {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');

  // Sem elementos ou dispositivo touch — abort
  if (!cursor || !ring) return;
  if (window.matchMedia('(hover: none)').matches) {
    cursor.style.display = 'none';
    ring.style.display = 'none';
    document.body.style.cursor = 'auto';
    return;
  }

  let mx = 0, my = 0, rx = 0, ry = 0;

  // Começa invisível; aparece somente após o primeiro mousemove real
  cursor.style.opacity = '0';
  ring.style.opacity = '0';

  // Posição imediata do ponto + reveal na primeira interação
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
    cursor.style.opacity = '1';
    ring.style.opacity = '0.6';
  }, { passive: true });

  // Anel com lag suave
  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  // Efeito hover nos elementos interativos
  document.querySelectorAll('a, button, .proj-item, .approach-card, .nav-cta').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      ring.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      ring.classList.remove('hover');
    });
  });

  // Ocultar cursor quando sai da janela
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    ring.style.opacity = '0.6';
  });
})();

// =============================================
// NAV — EFEITO AO SCROLL
// =============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// =============================================
// REVEAL ON SCROLL
// =============================================
const reveals = document.querySelectorAll('.reveal, .reveal-left');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// =============================================
// MENU HAMBÚRGUER MOBILE
// =============================================
(function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!hamburger) return;

  const FOCUSABLE = 'a[href], button:not([disabled])';

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    const focusables = Array.from(mobileMenu.querySelectorAll(FOCUSABLE));
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  function openMenu() {
    hamburger.classList.add('active');
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Move foco para o primeiro link e ativa trap
    const firstLink = mobileMenu.querySelector(FOCUSABLE);
    if (firstLink) firstLink.focus();
    mobileMenu.addEventListener('keydown', trapFocus);
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    mobileMenu.removeEventListener('keydown', trapFocus);
    hamburger.focus();
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('active') ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
})();
