/**
 * Strikingly AI Generators Hub — Progressive Enhancement JS
 * Search filter, FAQ accordion, Show All toggles.
 * All content is visible in source; JS enhances only.
 */
(function () {
  'use strict';

  // === Search Filter ===
  var searchInput = document.getElementById('generator-search');
  var searchCount = document.getElementById('search-count');
  var searchEmpty = document.getElementById('search-empty');
  var clearBtn = document.getElementById('clear-search');
  var directorySections = document.getElementById('directory-sections');

  if (searchInput && directorySections) {
    var allCards = directorySections.querySelectorAll('.generator-card');
    var subsections = directorySections.querySelectorAll('.subsection');

    function doSearch() {
      var query = searchInput.value.trim().toLowerCase();
      var totalVisible = 0;

      allCards.forEach(function (card) {
        var name = (card.getAttribute('data-name') || '').toLowerCase();
        var desc = (card.getAttribute('data-desc') || '').toLowerCase();
        var cat = (card.getAttribute('data-cat') || '').toLowerCase();
        var matches = !query || name.indexOf(query) !== -1 || desc.indexOf(query) !== -1 || cat.indexOf(query) !== -1;

        if (matches) {
          card.classList.remove('card-search-hidden');
          totalVisible++;
        } else {
          card.classList.add('card-search-hidden');
        }
      });

      // Show/hide subsections based on whether they have visible cards
      subsections.forEach(function (sub) {
        var visibleCards = sub.querySelectorAll('.generator-card:not(.card-search-hidden)');
        if (visibleCards.length === 0 && query) {
          sub.classList.add('subsection-hidden');
        } else {
          sub.classList.remove('subsection-hidden');
        }
      });

      // Update count
      if (query) {
        searchCount.textContent = totalVisible + ' generator' + (totalVisible !== 1 ? 's' : '') + ' match';
      } else {
        searchCount.textContent = '';
      }

      // Show/hide empty state
      if (query && totalVisible === 0) {
        searchEmpty.classList.add('visible');
      } else {
        searchEmpty.classList.remove('visible');
      }
    }

    searchInput.addEventListener('input', doSearch);

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        searchInput.value = '';
        doSearch();
        searchInput.focus();
      });
    }
  }

  // === FAQ Accordion ===
  var faqButtons = document.querySelectorAll('.faq-button');

  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var answer = btn.nextElementSibling;
      var isOpen = item.classList.contains('faq-item-open');

      if (isOpen) {
        item.classList.remove('faq-item-open');
        btn.setAttribute('aria-expanded', 'false');
        answer.style.display = 'none';
      } else {
        item.classList.add('faq-item-open');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.display = '';
      }
    });
  });

  // === Show All Toggles ===
  var showAllBtns = document.querySelectorAll('.show-all-btn');

  showAllBtns.forEach(function (btn) {
    var target = btn.getAttribute('data-target');
    var subsection = document.getElementById(target);
    if (!subsection) return;

    var grid = subsection.querySelector('.generator-grid');
    if (!grid) return;

    var allCards = grid.querySelectorAll('.generator-card');
    var threshold = 6;

    // Progressive enhancement: collapse cards beyond threshold on load
    allCards.forEach(function (card, i) {
      if (i >= threshold) {
        card.classList.add('card-collapsed');
      }
    });

    btn.classList.add('visible');

    btn.addEventListener('click', function () {
      var isExpanded = btn.getAttribute('aria-expanded') === 'true';
      var collapsedCards = grid.querySelectorAll('.generator-card.card-collapsed');

      if (!isExpanded) {
        // Expand
        collapsedCards.forEach(function (card) {
          card.classList.remove('card-collapsed');
        });
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = 'Show fewer';
      } else {
        // Collapse
        allCards.forEach(function (card, i) {
          if (i >= threshold) {
            card.classList.add('card-collapsed');
          }
        });
        btn.setAttribute('aria-expanded', 'false');
        var total = grid.getAttribute('data-total') || '';
        btn.textContent = 'Show all ' + total + ' generators';
      }
    });
  });

})();
