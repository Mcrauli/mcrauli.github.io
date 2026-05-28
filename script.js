/* =========================================================
   Portfolio — Lauri Rekola
   Shared behavior: scroll progress, reveal, toast.
   Plus: smooth anchor scroll, active topnav highlight,
   email copy-to-clipboard.
   Vanilla JS, feature-detected.
   ========================================================= */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----- Scroll progress bar ----- */
  const progressFill = document.querySelector('.scroll-progress__fill');
  if (progressFill) {
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      progressFill.style.transform = 'scaleX(' + pct + ')';
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  /* ----- Scroll reveal ----- */
  const revealTargets = document.querySelectorAll('.reveal');
  if (revealTargets.length && 'IntersectionObserver' in window) {
    if (prefersReducedMotion) {
      revealTargets.forEach(el => el.classList.add('revealed'));
    } else {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealTargets.forEach(el => io.observe(el));
    }
  }

  /* ----- Toast notifications ----- */
  const toastHost = document.querySelector('.toast-host');
  function toast(message) {
    if (!toastHost) return;
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = message;
    toastHost.appendChild(el);
    requestAnimationFrame(() => el.classList.add('toast--in'));
    setTimeout(() => {
      el.classList.remove('toast--in');
      el.addEventListener('transitionend', () => el.remove(), { once: true });
      setTimeout(() => el.remove(), 500);
    }, 2200);
  }

  /* ----- Smooth anchor scroll ----- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 70; // topnav-korkeus + pieni puskuri
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      // Päivitä URL-hash ilman jump:ia
      history.replaceState(null, '', href);
    });
  });

  /* ----- Active topnav link via scroll position ----- */
  const navLinks = document.querySelectorAll('.topnav-links a[href^="#"]');
  if (navLinks.length) {
    const sections = Array.from(navLinks).map(link => {
      const id = link.getAttribute('href').slice(1);
      return { id, link, el: document.getElementById(id) };
    }).filter(s => s.el);

    const mobileSectionLabel = document.querySelector('.mobile-section');
    const setActive = (id) => {
      navLinks.forEach(a => {
        const aId = a.getAttribute('href').slice(1);
        if (aId === id) {
          a.classList.add('active');
          if (mobileSectionLabel) mobileSectionLabel.textContent = a.textContent;
        } else {
          a.classList.remove('active');
        }
      });
    };

    const updateActive = () => {
      // At page bottom: always activate last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActive(sections[sections.length - 1].id);
        return;
      }
      // Activate the last section whose top edge is above 35% of viewport height
      const threshold = window.innerHeight * 0.35;
      let current = sections[0];
      for (const s of sections) {
        if (s.el.getBoundingClientRect().top <= threshold) current = s;
      }
      setActive(current.id);
    };

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
  }

  /* ----- Dynamic footer year ----- */
  const yearEl = document.querySelector('.footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----- Hamburger mobile nav ----- */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    const openMenu = () => {
      mobileNav.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      mobileNav.setAttribute('aria-hidden', 'false');
      const firstLink = mobileNav.querySelector('a');
      if (firstLink) firstLink.focus();
    };
    const closeMenu = () => {
      if (!mobileNav.classList.contains('open')) return;
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      hamburger.focus();
    };
    hamburger.addEventListener('click', () => {
      mobileNav.classList.contains('open') ? closeMenu() : openMenu();
    });
    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => { if (window.innerWidth > 540) closeMenu(); }, { passive: true });
    window.addEventListener('scroll', closeMenu, { passive: true });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  /* ----- Email copy-to-clipboard ----- */
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const value = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(value);
        toast('Kopioitu · ' + value);
      } catch (err) {
        // Fallback vanhempiin selaimiin
        const ta = document.createElement('textarea');
        ta.value = value;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); toast('Kopioitu · ' + value); }
        catch (e) { toast('Kopiointi ei onnistunut'); }
        ta.remove();
      }
    });
  });
})();
