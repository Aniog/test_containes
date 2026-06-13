import './index.css';

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. FAQ Accordions ---
  const faqToggles = document.querySelectorAll('.js-faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      const contentId = toggle.getAttribute('aria-controls');
      const content = document.getElementById(contentId);
      const icon = toggle.querySelector('.js-faq-icon');

      if (isExpanded) {
        toggle.setAttribute('aria-expanded', 'false');
        icon.classList.remove('rotate-180');
        // Collapse
        content.style.maxHeight = content.scrollHeight + 'px';
        // force reflow
        content.offsetHeight;
        content.style.maxHeight = '0px';
      } else {
        toggle.setAttribute('aria-expanded', 'true');
        icon.classList.add('rotate-180');
        // Expand
        content.style.maxHeight = content.scrollHeight + 'px';
        
        // After transition, clear inline max-height so it adapts
        setTimeout(() => {
          if (toggle.getAttribute('aria-expanded') === 'true') {
            content.style.maxHeight = 'none';
          }
        }, 300);
      }
    });

    // Initialize initial state accurately
    const ans = document.getElementById(toggle.getAttribute('aria-controls'));
    if (toggle.getAttribute('aria-expanded') === 'true') {
      ans.style.maxHeight = 'none';
    } else {
      ans.style.maxHeight = '0px';
    }
  });


  // --- 2. Progressive Collapse for Directories ---
  const VISIBLE_LIMIT = 6;
  const directorySections = document.querySelectorAll('.directory-section');
  
  directorySections.forEach(section => {
    const list = section.querySelector('.directory-list');
    const cards = Array.from(list.querySelectorAll('.directory-card'));
    const container = section.querySelector('.js-show-all-container');
    const btn = section.querySelector('.js-show-all-btn');

    if (cards.length > VISIBLE_LIMIT) {
      // It has extras. Show the button
      container.classList.remove('hidden');

      // We will handle collapse by measuring the height of the first VISIBLE_LIMIT cards
      // However, calculating grid height can be tricky.
      // An easier trick: hide overflow on list, give list a transition on max-height.
      list.style.transition = 'max-height 0.4s ease-in-out';
      list.style.overflow = 'hidden';

      const collapseList = () => {
        // Calculate height of first X elements.
        // We find the Y position of the VISIBLE_LIMIT-th element.
        // But since it's a grid, it's row-based. Let's just find the bottom of the last visible card.
        const lastVisibleCard = cards[VISIBLE_LIMIT - 1];
        if (!lastVisibleCard) return;
        
        const listRect = list.getBoundingClientRect();
        const cardRect = lastVisibleCard.getBoundingClientRect();
        const collapsedHeight = (cardRect.bottom - listRect.top);
        
        list.style.maxHeight = collapsedHeight + 'px';
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = `Show all ${cards.length} generators`;
      };

      const expandList = () => {
        list.style.maxHeight = list.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = 'Show less';
        
        setTimeout(() => {
          if (btn.getAttribute('aria-expanded') === 'true') {
             list.style.maxHeight = 'none';
          }
        }, 400);
      };

      // Initial collapse after a small delay to ensure rendering
      window.requestAnimationFrame(() => {
         collapseList();
      });
      // also recount on resize
      window.addEventListener('resize', () => {
         if (btn.getAttribute('aria-expanded') !== 'true') {
            collapseList();
         }
      });

      btn.addEventListener('click', () => {
        if (btn.getAttribute('aria-expanded') === 'true') {
          // Collapse
          // first set explicitly to scrollHeight so it transitions from a number
          list.style.maxHeight = list.scrollHeight + 'px';
          list.offsetHeight; // reflow
          collapseList();
        } else {
          expandList();
        }
      });
    }
  });

  // --- 3. Search logic ---
  const searchInput = document.getElementById('generatorInfoSearch');
  const searchCount = document.getElementById('searchCount');
  const emptyState = document.getElementById('emptySearchState');
  const clearBtn = document.getElementById('clearSearchBtn');
  
  if (!searchInput) return;

  const performSearch = () => {
    const query = searchInput.value.toLowerCase().trim();
    let totalMatches = 0;

    directorySections.forEach(section => {
      const list = section.querySelector('.directory-list');
      const cards = section.querySelectorAll('.directory-card');
      const showAllContainer = section.querySelector('.js-show-all-container');
      
      let sectionMatches = 0;

      cards.forEach(card => {
        const name = card.getAttribute('data-name') || '';
        const desc = card.getAttribute('data-desc') || '';
        const cat = card.getAttribute('data-cat') || '';
        
        // If matched, we reset max-height logic internally?
        // Wait, if searching is active, we should disable progressive collapse.
        if (query === '' || name.includes(query) || desc.includes(query) || cat.includes(query)) {
          card.style.display = '';
          sectionMatches++;
        } else {
          card.style.display = 'none';
        }
      });

      if (sectionMatches > 0) {
        section.style.display = '';
      } else {
        section.style.display = 'none';
      }
      
      totalMatches += sectionMatches;

      // Handle the "Show all" toggle state during search
      if (query !== '') {
        // Expand the section fully and hide the "show all" button while searching
        list.style.maxHeight = 'none';
        if (showAllContainer) showAllContainer.classList.add('hidden');
      } else {
        // Reset to original state
        if (cards.length > VISIBLE_LIMIT && showAllContainer) {
           showAllContainer.classList.remove('hidden');
           // trigger resize to collapse back
           window.dispatchEvent(new Event('resize'));
        } else if (showAllContainer) {
           showAllContainer.classList.add('hidden');
        }
      }
    });

    if (query !== '') {
      searchCount.textContent = `${totalMatches} generator${totalMatches !== 1 ? 's' : ''} match`;
      if (totalMatches === 0) {
        emptyState.classList.remove('hidden');
      } else {
        emptyState.classList.add('hidden');
      }
    } else {
      searchCount.textContent = '';
      emptyState.classList.add('hidden');
    }
  };

  searchInput.addEventListener('input', performSearch);
  
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      performSearch();
      searchInput.focus();
    });
  }

});
