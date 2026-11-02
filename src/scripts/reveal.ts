/* Calm entrances: heading, text, picture rise 24px with opacity, once, staggered by --i. */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
);

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Safety net: never leave content hidden if the observer is slow (print, screenshots, bfcache).
window.addEventListener('beforeprint', () => document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in')));
