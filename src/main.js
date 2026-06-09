// Initialize interactive elements once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initFAQ();
  initSearch();
  initShowAll();
});

function initFAQ() {
  const buttons = document.querySelectorAll('button[aria-controls^="faq-a-"]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const contentId = btn.getAttribute('aria-controls');
      const content = document.getElementById(contentId);
      
      btn.setAttribute('aria-expanded', (!isExpanded).toString());
      if (content) {
        content.setAttribute('data-expanded', (!isExpanded).toString());
      }
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById('dirSearch');
  const clearSearch = document.getElementById('clearSearch');
  const dirEmpty = document.getElementById('dirEmpty');
  const dirMatches = document.getElementById('dirMatches');
  const sections = document.querySelectorAll('.dir-section');
  
  if (!searchInput) return;

  function throttle(callback, limit) {
    let waiting = false;
    return function() {
      if (!waiting) {
        callback.apply(this, arguments);
        waiting = true;
        setTimeout(function() {
          waiting = false;
        }, limit);
      }
    }
  }

  const performSearch = () => {
    const term = searchInput.value.toLowerCase().trim();
    let totalMatches = 0;
    
    if (term === '') {
      // Clear search
      sections.forEach(section => {
        section.style.display = '';
        const cards = section.querySelectorAll('.dir-card');
        cards.forEach(card => {
          card.style.display = '';
          card.classList.remove('hidden');
        });
        
        // Reset "show all" visibility
        const showAllBtn = section.querySelector('.show-all-container');
        if (showAllBtn) {
          const cardsArray = Array.from(cards);
          if (cardsArray.length > 6) {
            showAllBtn.style.display = '';
            showAllBtn.style.display = 'block'; // Make it show as block
            showAllBtn.classList.remove('hidden');
            
            // Re-apply collapse state
            const btn = showAllBtn.querySelector('button');
            const isExpanded = btn && btn.getAttribute('aria-expanded') === 'true';
            
            if (!isExpanded) {
              cardsArray.slice(6).forEach(card => card.classList.add('hidden'));
            }
          }
        }
      });
      dirEmpty.classList.add('hidden');
      return;
    }
    
    // Active search
    sections.forEach(section => {
      const cards = section.querySelectorAll('.dir-card');
      let sectionMatches = 0;
      
      cards.forEach(card => {
        const name = card.dataset.name || '';
        const desc = card.dataset.desc || '';
        const cat = card.dataset.cat || '';
        
        if (name.includes(term) || desc.includes(term) || cat.includes(term)) {
          card.style.display = ''; // Reset, let grid handle layout
          card.classList.remove('hidden');
          sectionMatches++;
          totalMatches++;
        } else {
          card.style.display = 'none';
        }
      });
      
      // Hide sections with no matches
      if (sectionMatches === 0) {
        section.style.display = 'none';
      } else {
        section.style.display = '';
        // Hide "show all" when searching because we want all matches visible
        const showAllBtn = section.querySelector('.show-all-container');
        if (showAllBtn) {
          showAllBtn.classList.add('hidden');
        }
      }
    });
    
    if (totalMatches === 0) {
      dirEmpty.classList.remove('hidden');
    } else {
      dirEmpty.classList.add('hidden');
      dirMatches.textContent = `${totalMatches} ${totalMatches === 1 ? 'generator matches' : 'generators match'}`;
    }
  };

  searchInput.addEventListener('input', performSearch);
  
  if (clearSearch) {
    clearSearch.addEventListener('click', () => {
      searchInput.value = '';
      performSearch();
      searchInput.focus();
    });
  }
}

function initShowAll() {
  const containers = document.querySelectorAll('.dir-grid-container');
  
  containers.forEach(container => {
    const cards = container.querySelectorAll('.dir-card');
    const showAllBtnContainer = container.querySelector('.show-all-container');
    const btn = container.querySelector('button');
    
    // Only collapse if there are more than 6 cards
    if (cards.length > 6) {
      // Show the button
      if (showAllBtnContainer) {
        showAllBtnContainer.classList.remove('hidden');
      }
      
      // Hide cards beyond 6 by default
      cards.forEach((card, index) => {
        if (index >= 6) {
          card.classList.add('hidden'); // Use class instead of inline style
        }
      });
      
      // Setup toggle
      if (btn) {
        btn.addEventListener('click', () => {
          const isExpanded = btn.getAttribute('aria-expanded') === 'true';
          
          if (isExpanded) {
            // Collapse
            cards.forEach((card, index) => {
              if (index >= 6) {
                card.classList.add('hidden');
              }
            });
            btn.setAttribute('aria-expanded', 'false');
            btn.textContent = `Show all ${cards.length}`;
            
            // Scroll back to top of this section if needed
            const id = container.getAttribute('data-id');
            const targetSection = document.getElementById(id);
            if (targetSection) {
              const rect = targetSection.getBoundingClientRect();
              if (rect.top < 0) {
                const headerOffset = 60; // Approximate height of sticky header
                const elementPosition = rect.top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }
          } else {
            // Expand (show all)
            cards.forEach(card => {
              card.classList.remove('hidden');
            });
            btn.setAttribute('aria-expanded', 'true');
            btn.textContent = 'Show less';
          }
        });
      }
    }
  });
}
