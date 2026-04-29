/* =====================================================
   Typing animation
   ===================================================== */
const roles = [
    '풀스택 개발자',
    '백엔드 개발자',
    '프론트엔드 개발자',
    'Spring Boot Developer',
    'Vue · React Developer',
];

let rIdx = 0, cIdx = 0, deleting = false;
const typingEl = document.getElementById('typing');

function type() {
    const word = roles[rIdx];
    typingEl.textContent = deleting ? word.slice(0, cIdx - 1) : word.slice(0, cIdx + 1);
    deleting ? cIdx-- : cIdx++;

    if (!deleting && cIdx === word.length) {
        deleting = true;
        setTimeout(type, 2200);
        return;
    }
    if (deleting && cIdx === 0) {
        deleting = false;
        rIdx = (rIdx + 1) % roles.length;
    }
    setTimeout(type, deleting ? 50 : 80);
}
type();

/* =====================================================
   Header scroll
   ===================================================== */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* =====================================================
   Mobile nav
   ===================================================== */
const hamburger = document.getElementById('nav-hamburger');
const navList   = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navList.classList.toggle('open');
});
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navList.classList.remove('open');
    });
});

/* =====================================================
   Active nav on scroll
   ===================================================== */
const sections = document.querySelectorAll('section[id]');

function updateNav() {
    const y = window.scrollY + 90;
    sections.forEach(sec => {
        const link = document.querySelector(`.nav__link[href="#${sec.id}"]`);
        if (!link) return;
        link.classList.toggle('active', y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight);
    });
}
window.addEventListener('scroll', updateNav, { passive: true });

/* =====================================================
   Reveal on scroll
   ===================================================== */
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 55);
            revealObs.unobserve(entry.target);
        }
    });
}, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* =====================================================
   Stat counter animation
   ===================================================== */
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

function animateStat(el, target, suffix) {
    const duration = 1800;
    const start = performance.now();
    const update = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const val = Math.round(easeOutCubic(t) * target);
        el.innerHTML = `${val}<small>${suffix}</small>`;
        if (t < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}

const statsObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.stat-item__num[data-target]').forEach(el => {
            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix || '';
            animateStat(el, target, suffix);
        });
        statsObs.unobserve(entry.target);
    });
}, { threshold: 0.5 });

const statsGrid = document.querySelector('.stats__grid');
if (statsGrid) statsObs.observe(statsGrid);

/* =====================================================
   Project accordion
   ===================================================== */
function toggleCard(id) {
    const card = document.getElementById(id);
    const isOpen = card.classList.contains('open');
    document.querySelectorAll('.pcard.open').forEach(c => c.classList.remove('open'));
    if (!isOpen) {
        card.classList.add('open');
        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

/* =====================================================
   Scroll-to-top
   ===================================================== */
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
