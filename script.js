/* ============================================================
   XMGZ Portfolio — script.js
   Typing animation, scroll reveals, nav behavior
   ============================================================ */

(function () {
  'use strict';

  // --- Typing Animation ---
  const phrases = [
    'Building AI-powered applications',
    'Crafting beautiful user experiences',
    'Open source contributor & explorer',
    'Full-Stack Developer & AI Explorer',
    'Turning ideas into code',
  ];

  const typingEl = document.getElementById('typingText');
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function typeLoop() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      typingEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 50;
    } else {
      typingEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 80 + Math.random() * 40;
    }

    if (!isDeleting && charIndex === current.length) {
      typingDelay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingDelay = 400;
    }

    setTimeout(typeLoop, typingDelay);
  }

  if (typingEl) typeLoop();

  // --- Navbar scroll behavior ---
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  function handleNavScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // --- Mobile nav toggle ---
  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navMobile.classList.toggle('open');
    });

    // Close mobile nav on link click
    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navMobile.classList.remove('open');
      });
    });
  }

  // --- Scroll Reveal (IntersectionObserver) ---
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // --- Smooth scroll for anchor links (polyfill for older browsers) ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Subtle parallax on hero glows ---
  var heroGlow1 = document.querySelector('.hero-glow-1');
  var heroGlow2 = document.querySelector('.hero-glow-2');
  var heroGlow3 = document.querySelector('.hero-glow-3');

  if (heroGlow1 && window.innerWidth > 768) {
    window.addEventListener(
      'mousemove',
      function (e) {
        var x = (e.clientX / window.innerWidth - 0.5) * 2;
        var y = (e.clientY / window.innerHeight - 0.5) * 2;
        heroGlow1.style.transform =
          'translate(' + x * 20 + 'px, ' + y * 15 + 'px)';
        heroGlow2.style.transform =
          'translate(' + x * -15 + 'px, ' + y * 20 + 'px)';
        heroGlow3.style.transform =
          'translate(' + x * 10 + 'px, ' + y * -10 + 'px)';
      },
      { passive: true }
    );
  }

  // --- Keyboard accessibility for project cards ---
  document.querySelectorAll('.project-card').forEach(function (card) {
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        this.click();
      }
    });
  });
})();
