/* =========================================================
   GitHub Pages Project Showcase — Template Interactions
   Based on: GraphRAG Pipeline (graphrag-pipeline)
   ========================================================= */

(function () {
  'use strict';

  // --- TOC toggle ---
  var tocRail = document.getElementById('toc-rail');
  var tocToggle = document.getElementById('toc-toggle');
  var tocLinks = document.getElementById('toc-links');

  if (tocRail && tocToggle) {
    tocToggle.addEventListener('click', function () {
      tocRail.classList.toggle('is-collapsed');
    });
  }

  // --- TOC active section tracking (IntersectionObserver) ---
  if (tocLinks && 'IntersectionObserver' in window) {
    var links = tocLinks.querySelectorAll('.toc-link');
    var sections = [];
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        var section = document.getElementById(href.substring(1));
        if (section) sections.push({ el: section, link: link });
      }
    });

    if (sections.length > 0) {
      var observer = new IntersectionObserver(function () {
        var current = null;
        var currentTop = Infinity;

        sections.forEach(function (item) {
          var rect = item.el.getBoundingClientRect();
          if (rect.top <= 200 && rect.top < currentTop) {
            currentTop = rect.top;
            current = item;
          }
        });

        sections.forEach(function (item) {
          item.link.classList.remove('is-active');
        });
        if (current) {
          current.link.classList.add('is-active');
        }
      }, {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-80px 0px -50% 0px'
      });

      sections.forEach(function (item) {
        observer.observe(item.el);
      });
    }
  }

  // --- Intersection Observer for fade-in animations ---
  function observeFadeIn() {
    var elements = document.querySelectorAll(
      '.pillars, .flow-steps, .pipeline-figure, ' +
      '.results-grid, .quickstart-grid, .abstract-box, .metrics-strip'
    );

    elements.forEach(function (el) {
      el.classList.add('fade-in');
    });

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.fade-in').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeFadeIn);
  } else {
    observeFadeIn();
  }

  // --- Other Works dropdown ---
  window.toggleMoreWorks = function () {
    var dropdown = document.getElementById('moreWorksDropdown');
    var button = document.querySelector('.more-works-btn');
    if (!dropdown || !button) return;
    dropdown.classList.toggle('show');
    button.classList.toggle('active');
  };

  document.addEventListener('click', function (event) {
    var container = document.querySelector('.more-works-container');
    var dropdown = document.getElementById('moreWorksDropdown');
    var button = document.querySelector('.more-works-btn');
    if (container && !container.contains(event.target)) {
      if (dropdown) dropdown.classList.remove('show');
      if (button) button.classList.remove('active');
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      var dropdown = document.getElementById('moreWorksDropdown');
      var button = document.querySelector('.more-works-btn');
      if (dropdown) dropdown.classList.remove('show');
      if (button) button.classList.remove('active');
    }
  });

})();