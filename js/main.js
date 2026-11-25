const header = document.querySelector('.site-header');
const toggle = header.querySelector('.menu-toggle');
const navigation = document.getElementById('menu-principal');
const desktop = matchMedia('(min-width: 64rem)');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const brand = header.querySelector('.brand');
const crest = brand.querySelector('img');
const sections = [...document.querySelectorAll('main > section[id]')];
const sectionLinks = new Map(
  [...navigation.querySelectorAll('a[href^="#"]:not(.nav-contact)')].map(link => [link.hash.slice(1), link]),
);
let crestMotion;
let activeLink;
let scrollFrame = 0;

function menuIsOpen() {
  return toggle.getAttribute('aria-expanded') === 'true';
}

function setMenuOpen(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  toggle.textContent = open ? 'Fechar' : 'Menu';
  navigation.hidden = !desktop.matches && !open;
}

function updateHeader() {
  const focused = document.activeElement;
  toggle.hidden = desktop.matches;
  setMenuOpen(false);

  if (desktop.matches && (focused === toggle || focused.matches('.nav-contact'))) {
    navigation.querySelector('a').focus({ preventScroll: true });
  } else if (!desktop.matches && (navigation.contains(focused) || focused.matches('.header-contact'))) {
    toggle.focus({ preventScroll: true });
  }
}

toggle.addEventListener('click', () => setMenuOpen(!menuIsOpen()));

header.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || !menuIsOpen()) return;

  const target = document.getElementById(link.hash.slice(1));
  setMenuOpen(false);
  if (target) {
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuIsOpen()) {
    setMenuOpen(false);
    toggle.focus({ preventScroll: true });
  }
});

document.addEventListener('focusin', (event) => {
  if (menuIsOpen() && !header.contains(event.target)) setMenuOpen(false);
});

document.addEventListener('click', (event) => {
  if (!menuIsOpen() || header.contains(event.target)) return;
  const focusWasInMenu = navigation.contains(document.activeElement);
  setMenuOpen(false);
  if (focusWasInMenu) toggle.focus({ preventScroll: true });
});

brand.addEventListener('click', () => {
  if (reducedMotion.matches || !crest.animate) return;
  crestMotion?.cancel();
  crestMotion = crest.animate([{ scale: .94 }, { scale: 1.04 }, { scale: 1 }], {
    duration: 280,
    easing: 'ease-out',
  });
});

reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) crestMotion?.cancel();
});

function updateScrollState() {
  scrollFrame = 0;
  const readingLine = header.offsetHeight + 16;
  let currentSection = sections[0];

  for (const section of sections) {
    if (section.getBoundingClientRect().top > readingLine) break;
    currentSection = section;
  }

  const nextLink = sectionLinks.get(currentSection.id);
  if (nextLink !== activeLink) {
    activeLink?.removeAttribute('aria-current');
    nextLink?.setAttribute('aria-current', 'location');
    activeLink = nextLink;
  }

  header.classList.toggle('is-scrolled', window.scrollY > 8);
}

function requestScrollUpdate() {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollState);
}

desktop.addEventListener('change', updateHeader);
window.addEventListener('scroll', requestScrollUpdate, { passive: true });
window.addEventListener('resize', requestScrollUpdate);
window.addEventListener('pageshow', requestScrollUpdate);
header.classList.add('site-header--enhanced');
updateHeader();
updateScrollState();
