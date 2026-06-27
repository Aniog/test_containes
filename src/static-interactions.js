(function(){
  // Show all / show less toggles for generator subsections
  document.querySelectorAll('.show-all-btn').forEach(function(btn){
    var slug = btn.getAttribute('data-toggle');
    var grid = document.getElementById('grid-' + slug);
    if (!grid) return;
    var cards = grid.querySelectorAll('.generator-card');
    var expanded = false;
    function update(){
      cards.forEach(function(card, idx){
        card.style.display = (idx < 6 && !expanded) || expanded ? '' : 'none';
      });
      btn.setAttribute('aria-expanded', String(expanded));
      btn.textContent = expanded ? 'Show less' : 'Show all ' + (cards.length - 6) + ' generators';
    }
    update();
    btn.addEventListener('click', function(){ expanded = !expanded; update(); });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-button').forEach(function(btn){
    btn.addEventListener('click', function(){
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-button').forEach(function(b){
        b.setAttribute('aria-expanded', 'false');
        var p = document.getElementById(b.getAttribute('aria-controls'));
        if (p) p.classList.remove('faq-panel-open');
        var chev = b.querySelector('.faq-chevron svg');
        if (chev) chev.classList.remove('chevron-open');
      });
      if (!isOpen){
        btn.setAttribute('aria-expanded', 'true');
        if (panel) panel.classList.add('faq-panel-open');
        var chev = btn.querySelector('.faq-chevron svg');
        if (chev) chev.classList.add('chevron-open');
      }
    });
  });

  // Search filter
  var searchInput = document.getElementById('gen-search');
  var countEl = document.getElementById('search-count');
  var emptyEl = document.getElementById('empty-state');
  var clearBtn = document.getElementById('clear-search');
  if (searchInput){
    searchInput.addEventListener('input', function(){
      var q = searchInput.value.trim().toLowerCase();
      var total = 0;
      document.querySelectorAll('.generator-subsection').forEach(function(sub){
        var cat = sub.getAttribute('data-category');
        var cards = sub.querySelectorAll('.generator-card');
        var matchCount = 0;
        cards.forEach(function(card){
          var name = card.querySelector('.generator-name').textContent.toLowerCase();
          var desc = card.querySelector('.generator-desc').textContent.toLowerCase();
          var match = !q || name.includes(q) || desc.includes(q) || cat.includes(q);
          card.style.display = match ? '' : 'none';
          if (match) matchCount++;
        });
        var toggle = sub.querySelector('.show-all-btn');
        if (toggle) toggle.style.display = q ? 'none' : '';
        sub.style.display = matchCount > 0 ? '' : 'none';
        total += matchCount;
      });
      if (countEl){
        countEl.style.display = q ? '' : 'none';
        countEl.textContent = total + ' generators match';
      }
      if (emptyEl) emptyEl.style.display = (q && total === 0) ? '' : 'none';
    });
  }
  if (clearBtn){
    clearBtn.addEventListener('click', function(){
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input'));
      searchInput.focus();
    });
  }
})();
