//  ===== JS ===== --

// ── Hamburger menu ──────────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    });
});

// // ── Contact form ─────────────────────────────────
// function handleSubmit(e) {
//     e.preventDefault();
//     const btn = e.target.querySelector('.btn-send');
//     btn.textContent = 'Message Sent ✓';
//     btn.style.background = 'rgba(255,255,255,.2)';
//     btn.disabled = true;
//     setTimeout(() => {
//     btn.textContent = 'Send Message';
//     btn.style.background = '';
//     btn.disabled = false;
//     e.target.reset();
//     }, 3000);
// }
