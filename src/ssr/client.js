/**
 * Vanilla JS for the Generators Hub page.
 * Handles search, show-all toggles, and FAQ accordion.
 * Works independently of React hydration.
 */
(function () {
  var VISIBLE_COUNT = 6;
  var isSearching = false;

  // Track expanded state per subsection
  var expandedState = {};

  // ─── Search ───
  var searchInput = document.getElementById('generator-search');
  var searchCount = document.getElementById('search-count');
  var noResults = document.getElementById('no-results');
  var clearBtn = document.getElementById('clear-search-btn');
  var subsections = document.querySelectorAll('div[data-category][id]');

  function applyShowAllState(section) {
    var sectionId = section.id;
    var expanded = !!expandedState[sectionId];
    var wrapper = document.getElementById(sectionId + '-extra');
    var showAllBtn = section.querySelector('.show-all-btn');
    var allCards = section.querySelectorAll('.gen-card[data-name]');

    if (!showAllBtn || !wrapper) return;

    if (expanded) {
      wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
    } else {
      wrapper.style.maxHeight = '0';
    }

    showAllBtn.textContent = expanded
      ? 'Show less'
      : 'Show all ' + allCards.length + ' generators';
    showAllBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var q = this.value.toLowerCase().trim();
      isSearching = !!q;
      var totalMatches = 0;

      subsections.forEach(function (section) {
        var cards = section.querySelectorAll('.gen-card[data-name]');
        var sectionMatches = 0;
        var wrapper = document.getElementById(section.id + '-extra');

        if (!q) {
          // Reset to show-all state
          section.style.display = '';
          cards.forEach(function (card) {
            card.style.display = '';
          });
          // Restore wrapper collapse state
          if (wrapper) {
            wrapper.style.maxHeight = expandedState[section.id] ? wrapper.scrollHeight + 'px' : '0';
            wrapper.style.transition = 'max-height 0.3s ease';
          }
          applyShowAllState(section);
          var showAllBtn = section.querySelector('.show-all-btn');
          if (showAllBtn) showAllBtn.style.display = '';
          return;
        }

        cards.forEach(function (card) {
          var name = (card.getAttribute('data-name') || '').toLowerCase();
          var desc = (card.getAttribute('data-desc') || '').toLowerCase();
          var cat = (card.getAttribute('data-category') || '').toLowerCase();
          var matches = name.includes(q) || desc.includes(q) || cat.includes(q);

          if (matches) {
            card.style.display = '';
            sectionMatches++;
          } else {
            card.style.display = 'none';
          }
        });

        totalMatches += sectionMatches;

        // Hide/show subsection
        section.style.display = (sectionMatches === 0) ? 'none' : '';

        // During search, expand wrapper fully and hide toggle
        if (wrapper) {
          wrapper.style.maxHeight = 'none';
          wrapper.style.transition = 'none';
        }
        var showAllBtn = section.querySelector('.show-all-btn');
        if (showAllBtn) {
          showAllBtn.style.display = 'none';
        }
      });

      // Update count
      if (searchCount) {
        if (q) {
          searchCount.textContent = totalMatches + (totalMatches === 1 ? ' generator match' : ' generators match');
          searchCount.classList.remove('hidden');
        } else {
          searchCount.classList.add('hidden');
        }
      }

      // No results
      if (noResults) {
        if (q && totalMatches === 0) {
          noResults.classList.remove('hidden');
        } else {
          noResults.classList.add('hidden');
        }
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      if (searchInput) {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
      }
    });
  }

  // ─── Show All Toggles ───
  subsections.forEach(function (section) {
    var wrapper = document.getElementById(section.id + '-extra');
    var showAllBtn = section.querySelector('.show-all-btn');

    if (!showAllBtn || !wrapper) return;

    // Initially collapse extra cards with smooth transition
    expandedState[section.id] = false;
    wrapper.style.maxHeight = '0';

    // Show the toggle button
    showAllBtn.classList.remove('hidden');

    showAllBtn.addEventListener('click', function () {
      expandedState[section.id] = !expandedState[section.id];
      applyShowAllState(section);
    });
  });

  // ─── FAQ Accordion ───
  var faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var idx = this.getAttribute('data-faq');
      var isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Close all
      faqToggles.forEach(function (otherBtn) {
        var otherIdx = otherBtn.getAttribute('data-faq');
        var answer = document.getElementById('faq-answer-' + otherIdx);
        otherBtn.setAttribute('aria-expanded', 'false');
        if (answer) {
          answer.classList.remove('max-h-96', 'pb-4');
          answer.classList.add('max-h-0');
        }
        var svg = otherBtn.querySelector('svg');
        if (svg) {
          svg.classList.remove('text-[#8159BB]');
          svg.classList.add('text-[#636972]');
          svg.innerHTML = '<path d="m6 9 6 6 6-6"/>';
        }
      });

      // Open clicked (if it was closed)
      if (!isExpanded) {
        var answer = document.getElementById('faq-answer-' + idx);
        this.setAttribute('aria-expanded', 'true');
        if (answer) {
          answer.classList.remove('max-h-0');
          answer.classList.add('max-h-96', 'pb-4');
        }
        var svg = this.querySelector('svg');
        if (svg) {
          svg.classList.remove('text-[#636972]');
          svg.classList.add('text-[#8159BB]');
          svg.innerHTML = '<path d="m18 15-6-6-6 6"/>';
        }
      }
    });
  });
})();
