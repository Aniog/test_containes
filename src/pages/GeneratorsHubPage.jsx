import React, { useEffect } from 'react';
import '../styles/generators.css';

import { strings } from '../i18n/strings.js';
import {
  browseCategories,
  categoryGenerators,
  categoryLabels,
  categorySlugs,
  faqItems,
  featuredGenerators,
  totalGeneratorCount,
} from '../data/generators.js';

import TopBar from '../components/generators/TopBar.jsx';
import Breadcrumb from '../components/generators/Breadcrumb.jsx';
import Hero from '../components/generators/Hero.jsx';
import FeaturedGenerators from '../components/generators/FeaturedGenerators.jsx';
import BrowseByCategory from '../components/generators/BrowseByCategory.jsx';
import AllGenerators from '../components/generators/AllGenerators.jsx';
import HowItWorks from '../components/generators/HowItWorks.jsx';
import WhyStrikingly from '../components/generators/WhyStrikingly.jsx';
import FAQ from '../components/generators/FAQ.jsx';
import ClosingCTA from '../components/generators/ClosingCTA.jsx';
import Footer from '../components/generators/Footer.jsx';

const generatorUrl = (slug) => `/generators/${slug}`;

// Vanilla JS interactivity that progressively enhances the static
// markup: search filter, "show all" toggles, FAQ accordion, and the
// "Clear search" empty-state button. All non-essential: the page
// works without it.
const initGeneratorsPage = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  // React StrictMode in development double-invokes effects. Guard against
  // attaching click/input listeners twice on the same node, which would
  // make toggles and search no-ops in dev (a click fires two handlers and
  // toggles twice, leaving aria-expanded unchanged).
  if (document.body && document.body.dataset.strkPageInit === '1') return;
  if (document.body) document.body.dataset.strkPageInit = '1';

  const root = document;
  const searchInput = root.getElementById('generators-search');
  const meta = root.getElementById('generators-search-meta');
  const empty = root.getElementById('all-generators-empty');
  const clearBtn = root.getElementById('generators-clear-search');
  const subsecNodes = Array.from(
    root.querySelectorAll('[data-subsec]'),
  );
  const cardsBySubsec = subsecNodes.map((subsec) => ({
    slug: subsec.getAttribute('data-subsec'),
    el: subsec,
    cards: Array.from(subsec.querySelectorAll('[data-card]')),
  }));

  const collapseNodes = Array.from(root.querySelectorAll('[data-collapse]'));
  const toggleButtons = Array.from(
    root.querySelectorAll('[data-show-all]'),
  );

  const labels = strings.en;
  const showAllLabelFor = (n) => labels.allGenerators.showAll(n);
  const showLessLabel = labels.allGenerators.showLess;
  const countLabelFor = (n) => labels.allGenerators.resultCount(n);

  // === Show all / Show fewer toggles ===
  // CSS height-transition based; expand to scrollHeight on expand,
  // collapse to initial card height on collapse.
  const measureAndSetHeight = (el) => {
    el.style.maxHeight = el.scrollHeight + 'px';
  };
  const setInitialCollapsed = (el, initial) => {
    const cards = el.querySelectorAll('[data-card]');
    cards.forEach((c, i) => {
      if (i >= initial) c.setAttribute('data-overflow', '');
    });
    // measure visible height
    requestAnimationFrame(() => {
      const visibleH = Array.from(cards)
        .filter((c) => !c.hasAttribute('data-overflow'))
        .reduce((acc, c) => acc + c.getBoundingClientRect().height + 20, 0);
      el.style.maxHeight = visibleH + 'px';
    });
  };

  collapseNodes.forEach((el) => {
    const initial = parseInt(el.getAttribute('data-initial') || '6', 10);
    setInitialCollapsed(el, initial);
  });

  toggleButtons.forEach((btn) => {
    const target = btn.getAttribute('data-target');
    const collapse = root.querySelector(
      `[data-collapse][data-initial]`,
    );
    // Find the collapse container inside the matching subsection
    const subsec = btn
      .closest('.strk-subsec');
    if (!subsec) return;
    const subCollapse = subsec.querySelector('[data-collapse]');
    if (!subCollapse) return;
    const initial = parseInt(subCollapse.getAttribute('data-initial') || '6', 10);
    const cards = Array.from(subCollapse.querySelectorAll('[data-card]'));
    const overflowCards = cards.filter((c) =>
      c.hasAttribute('data-overflow'),
    );

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        // Collapse
        const visibleH = cards
          .filter((c) => !c.hasAttribute('data-overflow'))
          .reduce((acc, c) => acc + c.getBoundingClientRect().height + 20, 0);
        subCollapse.style.maxHeight = visibleH + 'px';
        overflowCards.forEach((c) => c.setAttribute('data-overflow', ''));
        btn.setAttribute('aria-expanded', 'false');
        const label = btn.querySelector('[data-label]');
        if (label) label.textContent = showAllLabelFor(cards.length);
      } else {
        // Expand
        overflowCards.forEach((c) => c.removeAttribute('data-overflow'));
        // wait one frame so the new layout has measured heights
        requestAnimationFrame(() => {
          subCollapse.style.maxHeight =
            subCollapse.scrollHeight + 'px';
        });
        btn.setAttribute('aria-expanded', 'true');
        const label = btn.querySelector('[data-label]');
        if (label) label.textContent = showLessLabel;
      }
    });

    // Recalculate max-height on window resize while expanded.
    window.addEventListener('resize', () => {
      if (btn.getAttribute('aria-expanded') === 'true') {
        subCollapse.style.maxHeight = subCollapse.scrollHeight + 'px';
      } else {
        const visibleH = cards
          .filter((c) => !c.hasAttribute('data-overflow'))
          .reduce((acc, c) => acc + c.getBoundingClientRect().height + 20, 0);
        subCollapse.style.maxHeight = visibleH + 'px';
      }
    });
  });

  // === Search filter ===
  const runSearch = (raw) => {
    const q = (raw || '').trim().toLowerCase();
    let totalMatches = 0;
    let anySubsecVisible = false;

    cardsBySubsec.forEach(({ el, cards }) => {
      let visible = 0;
      cards.forEach((card) => {
        const name = card.getAttribute('data-name') || '';
        const desc = card.getAttribute('data-description') || '';
        const cat = card.getAttribute('data-category') || '';
        const categoryLabel =
          (categoryLabels[cat] || '').toLowerCase();
        const matches =
          !q ||
          name.includes(q) ||
          desc.includes(q) ||
          cat === q ||
          categoryLabel.includes(q);
        if (matches) {
          card.classList.remove('strk-card--hidden');
          visible += 1;
        } else {
          card.classList.add('strk-card--hidden');
        }
      });

      if (q && visible === 0) {
        el.classList.add('strk-subsec--hidden');
      } else {
        el.classList.remove('strk-subsec--hidden');
        anySubsecVisible = true;
      }
      totalMatches += visible;
    });

    if (meta) {
      meta.textContent = q ? countLabelFor(totalMatches) : '';
    }

    if (empty) {
      if (q && totalMatches === 0) {
        empty.hidden = false;
      } else {
        empty.hidden = true;
      }
    }
  };

  if (searchInput) {
    searchInput.addEventListener('input', (e) => runSearch(e.target.value));
  }
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        runSearch('');
        searchInput.focus();
      }
    });
  }

  // === FAQ accordion ===
  root.querySelectorAll('.strk-faq__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    });
  });
};

const GeneratorsHubPage = () => {
  const t = (path) => {
    const segments = path.split('.');
    let value = strings.en;
    for (const s of segments) value = value?.[s];
    return value ?? '';
  };

  useEffect(() => {
    initGeneratorsPage();
  }, []);

  return (
    <div className="strk-page">
      <a className="strk-vh" href="#main-content">Skip to content</a>
      <TopBar t={t} />
      <Breadcrumb t={t} />
      <main id="main-content">
        <Hero t={t} />
        <FeaturedGenerators
          t={t}
          featured={featuredGenerators}
          generatorUrl={generatorUrl}
        />
        <BrowseByCategory t={t} categories={browseCategories} />
        <AllGenerators t={t} generatorUrl={generatorUrl} />
        <HowItWorks t={t} />
        <WhyStrikingly t={t} />
        <FAQ t={t} faqItems={faqItems} />
        <ClosingCTA t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
};

export default GeneratorsHubPage;
