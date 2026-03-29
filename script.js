(function () {
  const header = document.querySelector('.header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

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

  document.querySelectorAll('.copy-email-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      if (!text) return;
      function markCopied() {
        btn.classList.add('copied');
        var prev = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(function () {
          btn.classList.remove('copied');
          btn.textContent = prev;
        }, 2000);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(markCopied).catch(function () {
          window.prompt('Copy this address:', text);
        });
      } else {
        window.prompt('Copy this address:', text);
      }
    });
  });
})();
