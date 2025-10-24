document.addEventListener('DOMContentLoaded', function () {
  feather.replace();

  // Fallback scroll progress (for browsers without CSS scroll timeline)
  const fill = document.getElementById('scrollfill');
  if (!CSS.supports('animation-timeline: scroll()')) {
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
      fill.style.width = (scrolled * 100).toFixed(2) + '%';
    }, { passive: true });
  }

  // Animated counters
  function animateValue(el, end, duration=1200) {
    const start = 0, startTime = performance.now();
    function tick(now) {
      const p = Math.min((now - startTime) / duration, 1);
      const val = Math.floor(start + (end - start) * (p < .5 ? 2*p*p : -1 + (4 - 2*p) * p));
      el.textContent = val.toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  animateValue(document.getElementById('stat1'), 3421, 1400);
  animateValue(document.getElementById('stat2'), 128, 1400);
  animateValue(document.getElementById('stat3'), 64, 1400);

  // Horizontal scroll buttons for books section
  const scrollContainer = document.querySelector('.books-scroll-container');
  const scrollLeftBtn = document.getElementById('scroll-left');
  const scrollRightBtn = document.getElementById('scroll-right');

  if (scrollLeftBtn && scrollRightBtn && scrollContainer) {
    scrollLeftBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    });

    scrollRightBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    });
  }
});
