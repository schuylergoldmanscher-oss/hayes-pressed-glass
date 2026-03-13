(function () {
  const header = document.querySelector('.header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const form = document.querySelector('.contact-form');

  function onScroll() {
    if (window.scrollY > 80) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }

  function toggleNav() {
    navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  }

  function closeNav() {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', toggleNav);
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });
  window.addEventListener('scroll', onScroll, { passive: true });

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var text = btn.textContent;
      btn.textContent = 'Message sent!';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = text;
        btn.disabled = false;
        form.reset();
      }, 2500);
    });
  }
})();
