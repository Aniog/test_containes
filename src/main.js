document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordions
  const faqBtns = document.querySelectorAll('.faq-toggle');
  faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const controls = btn.getAttribute('aria-controls');
      const answer = document.getElementById(controls);
      const icon = btn.querySelector('svg');
      
      // Close all other accordions (optional, but standard)
      faqBtns.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherAnswer = document.getElementById(otherBtn.getAttribute('aria-controls'));
          if (otherAnswer) {
            otherAnswer.style.display = 'none';
          }
          const otherIcon = otherBtn.querySelector('svg');
          if (otherIcon) {
            otherIcon.classList.remove('rotate-180');
          }
        }
      });
      
      // Toggle current
      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        if (answer) answer.style.display = 'none';
        if (icon) icon.classList.remove('rotate-180');
      } else {
        btn.setAttribute('aria-expanded', 'true');
        if (answer) answer.style.display = 'block';
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });

  // 2. Setup Show All Progressively
  const MAX_VISIBLE = 6;
  const sections = document.querySelectorAll('.directory-category');

  sections.forEach(section => {
    const cards = Array.from(section.querySelectorAll('.generator-card'));
    const toggleContainer = section.querySelector('.js-show-toggle');
    const toggleBtn = toggleContainer ? toggleContainer.querySelector('.toggle-btn') : null;
    
    if (cards.length > MAX_VISIBLE) {
      // Initially collapse
      for (let i = MAX_VISIBLE; i < cards.length; i++) {
         cards[i].classList.add('hidden');
         cards[i].classList.remove('flex');
      }

      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
          
          if (isExpanded) {
            // collapse
            for (let i = MAX_VISIBLE; i < cards.length; i++) {
               cards[i].classList.add('hidden');
               cards[i].classList.remove('flex');
            }
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.querySelector('span').textContent = `SHOW ALL ${cards.length} GENERATORS`;
            toggleBtn.querySelector('svg').classList.remove('rotate-180');
          } else {
            // expand
            for (let i = MAX_VISIBLE; i < cards.length; i++) {
               cards[i].classList.remove('hidden');
               cards[i].classList.add('flex');
            }
            toggleBtn.setAttribute('aria-expanded', 'true');
            toggleBtn.querySelector('span').textContent = 'SHOW LESS';
            toggleBtn.querySelector('svg').classList.add('rotate-180');
          }
        });
      }
    }
  });

  // 3. Search
  const searchInput = document.getElementById('generator-search');
  const searchCount = document.getElementById('search-count');
  const emptyState = document.getElementById('no-results');
  const clearBtn = document.getElementById('clear-search');
  const directorySections = document.querySelector('.directory-sections');

  function performSearch(query) {
    const term = query.toLowerCase().trim();
    
    if (!term) {
      // Reset view
      searchCount.classList.add('hidden');
      emptyState.classList.add('hidden');
      directorySections.classList.remove('hidden');
      
      sections.forEach(section => {
        section.classList.remove('hidden');
        const cards = Array.from(section.querySelectorAll('.generator-card'));
        const toggleContainer = section.querySelector('.js-show-toggle');
        
        cards.forEach((card, i) => {
          card.classList.remove('hidden');
          if (i < MAX_VISIBLE) {
            card.classList.add('flex');
          } else {
            card.classList.remove('flex');
            card.classList.add('hidden');
          }
        });
        
        if (toggleContainer) {
          toggleContainer.classList.remove('hidden');
          const toggleBtn = toggleContainer.querySelector('.toggle-btn');
          if (toggleBtn) {
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.querySelector('span').textContent = `SHOW ALL ${cards.length} GENERATORS`;
            toggleBtn.querySelector('svg').classList.remove('rotate-180');
          }
        }
      });
      return;
    }

    // filtering
    let matchCount = 0;
    sections.forEach(section => {
      let sectionMatches = 0;
      const cards = Array.from(section.querySelectorAll('.generator-card'));
      const toggleContainer = section.querySelector('.js-show-toggle');
      
      cards.forEach(card => {
        const name = (card.getAttribute('data-name') || '').toLowerCase();
        const desc = (card.getAttribute('data-desc') || '').toLowerCase();
        const cat = (card.getAttribute('data-cat') || '').toLowerCase();
        
        const isMatch = name.includes(term) || desc.includes(term) || cat.includes(term);
        
        if (isMatch) {
          card.classList.remove('hidden');
          card.classList.add('flex');
          sectionMatches++;
          matchCount++;
        } else {
          card.classList.add('hidden');
          card.classList.remove('flex');
        }
      });
      
      if (sectionMatches > 0) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
      
      if (toggleContainer) {
        toggleContainer.classList.add('hidden');
      }
    });
    
    if (matchCount > 0) {
      searchCount.classList.remove('hidden');
      searchCount.textContent = `${matchCount} generator${matchCount > 1 || matchCount === 0 ? 's' : ''} match`;
      emptyState.classList.add('hidden');
      directorySections.classList.remove('hidden');
    } else {
      searchCount.classList.add('hidden');
      emptyState.classList.remove('hidden');
      directorySections.classList.add('hidden');
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      performSearch('');
      searchInput.focus();
    });
  }
});
