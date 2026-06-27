import './index.css';

const strings = {
  en: {
    showAll: (count) => `SHOW ALL ${count} GENERATORS`,
    showFewer: 'SHOW FEWER',
    searchMatch: (count) => `${count} generator${count !== 1 ? 's' : ''} match`
  }
};

const t = strings.en;

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. FAQ Accordions ---
  const accordionBtns = document.querySelectorAll('.accordion-btn');
  accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const controlsId = btn.getAttribute('aria-controls');
      const content = document.getElementById(controlsId);
      
      if (isExpanded) {
        // Collapse
        btn.setAttribute('aria-expanded', 'false');
        content.style.height = content.scrollHeight + 'px';
        content.offsetHeight; // trigger reflow
        content.style.height = '0px';
      } else {
        // Expand
        btn.setAttribute('aria-expanded', 'true');
        content.style.height = content.scrollHeight + 'px';
        
        // After transition, remove hardcoded height so it can naturally flex
        content.addEventListener('transitionend', function handler() {
          if (btn.getAttribute('aria-expanded') === 'true') {
            content.style.height = 'auto';
          }
          content.removeEventListener('transitionend', handler);
        });
      }
    });

    // Initialize properly for initially closed/open ones
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    const controlsId = btn.getAttribute('aria-controls');
    const content = document.getElementById(controlsId);
    if (!isExpanded) {
      if (content) content.style.height = '0px';
    } else {
      if (content) content.style.height = 'auto';
    }
  });

  // --- 2. Show All Toggles ---
  const limit = 6;
  const sections = document.querySelectorAll('.generator-section');

  sections.forEach(section => {
    const list = section.querySelector('.filterable-grid');
    if (!list) return;
    const items = list.querySelectorAll(':scope > li');
    if (items.length > limit) {
      // Hide extras initially
      items.forEach((item, index) => {
        if (index >= limit) {
          item.classList.add('hidden-by-toggle', 'hidden');
        }
      });

      // Add full list toggle
      const toggleBtn = document.createElement('button');
      toggleBtn.className = 'btn btn-ghost mt-[20px] w-full md:w-auto inline-flex';
      toggleBtn.innerHTML = t.showAll(items.length);
      toggleBtn.setAttribute('aria-expanded', 'false');
      
      const toggleContainer = document.createElement('div');
      toggleContainer.className = 'text-center md:text-left mt-[20px] toggle-container';
      toggleContainer.appendChild(toggleBtn);
      
      section.appendChild(toggleContainer);

      toggleBtn.addEventListener('click', () => {
        const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          // Collapse back
          items.forEach((item, index) => {
            if (index >= limit && !item.classList.contains('hidden-by-search')) {
              item.classList.add('hidden-by-toggle', 'hidden');
            }
          });
          toggleBtn.setAttribute('aria-expanded', 'false');
          toggleBtn.innerHTML = t.showAll(items.length);
        } else {
          // Expand all
          items.forEach(item => {
            item.classList.remove('hidden-by-toggle', 'hidden');
          });
          toggleBtn.setAttribute('aria-expanded', 'true');
          toggleBtn.innerHTML = t.showFewer;
        }
      });
    }
  });

  // --- 3. Search Filter ---
  const searchInput = document.getElementById('generator-search');
  const searchCount = document.getElementById('search-count');
  const emptyState = document.getElementById('search-empty-state');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const generatorSubsections = document.getElementById('generator-subsections');

  function getVisibleItemCount(section) {
    const items = section.querySelectorAll('.generator-card-item');
    let count = 0;
    items.forEach(item => {
      if (!item.classList.contains('hidden-by-search')) {
        count++;
      }
    });
    return count;
  }

  function applySearch(query) {
    query = query.toLowerCase().trim();
    let totalMatches = 0;

    sections.forEach(section => {
      const items = section.querySelectorAll('.generator-card-item');
      let sectionMatches = 0;

      items.forEach(item => {
        const text = item.getAttribute('data-search') || '';
        if (!query || text.includes(query)) {
          // Match
          item.classList.remove('hidden-by-search');
          if (!item.classList.contains('hidden-by-toggle')) {
            item.classList.remove('hidden');
          }
          sectionMatches++;
          totalMatches++;
        } else {
          // No match
          item.classList.add('hidden-by-search', 'hidden');
        }
      });

      // Show/hide entire section based on matches
      if (sectionMatches > 0) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }

      // Hide toggle btn if searching
      const toggleContainer = section.querySelector('.toggle-container');
      if (toggleContainer) {
        if (query) toggleContainer.classList.add('hidden');
        else toggleContainer.classList.remove('hidden');
      }
    });

    if (query) {
      searchCount.textContent = t.searchMatch(totalMatches);
      searchCount.classList.remove('hidden');
      
      if (totalMatches === 0) {
        emptyState.classList.remove('hidden');
        generatorSubsections.classList.add('hidden');
      } else {
        emptyState.classList.add('hidden');
        generatorSubsections.classList.remove('hidden');
      }
    } else {
      searchCount.classList.add('hidden');
      emptyState.classList.add('hidden');
      generatorSubsections.classList.remove('hidden');
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      applySearch(e.target.value);
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      applySearch('');
    });
  }
});
