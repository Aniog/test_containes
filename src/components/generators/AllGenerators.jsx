import React from 'react';
import { allGenerators, categories, totalGenerators } from '@/data/generators';
import { getCategoryThumb } from './Illustrations';

const subsectionDescriptions = {
  websites: 'Business and personal sites for any goal.',
  'landing-pages': 'One-page sites that move visitors to act.',
  portfolios: 'Show your work with a clean, focused layout.',
  blogs: 'Publish-ready blogs with built-in SEO basics.',
  stores: 'Sell products and take payments without code.',
  'link-in-bio': 'One link, all your places. Made for creators.',
};

const subsectionNames = {
  websites: 'Website generators',
  'landing-pages': 'Landing page generators',
  portfolios: 'Portfolio generators',
  blogs: 'Blog generators',
  stores: 'Online store generators',
  'link-in-bio': 'Link-in-bio generators',
};

// "Show all" is a progressive enhancement. All cards are rendered up front.
// On the client, the script below the page collapses everything past the
// 6th card in each subsection behind a "Show all" button so the directory
// reads as a curated grid by default. With JS off, every card stays visible.
const COLLAPSED_VISIBLE_COUNT = 6;

function GeneratorCard({ gen, ThumbComponent }) {
  return (
    <li>
      <a className="strk-gen-card" href={`/generators/${gen.slug}`}>
        <span className="strk-gen-thumb" aria-hidden="true">
          <ThumbComponent />
        </span>
        <span className="strk-gen-body">
          <span className="strk-gen-name">{gen.name}</span>
          <span className="strk-gen-desc">{gen.description}</span>
        </span>
      </a>
    </li>
  );
}

function Subsection({ category }) {
  const items = allGenerators[category.id] || [];
  const Thumb = getCategoryThumb(category.id);
  const total = items.length;
  const collapseClass = total > COLLAPSED_VISIBLE_COUNT ? 'strk-subsection-collapsible' : '';
  const sectionId = `cat-${category.id}-section`;
  const gridId = `cat-${category.id}-grid`;
  const toggleId = `cat-${category.id}-toggle`;
  const buttonId = `cat-${category.id}-button`;

  return (
    <section
      id={category.id}
      className={`strk-subsection ${collapseClass}`}
      aria-labelledby={`${category.id}-heading`}
    >
      <header className="strk-subsection-head">
        <h3 id={`${category.id}-heading`} className="strk-h3">
          {subsectionNames[category.id]}
        </h3>
        <p className="strk-subsection-sub">{subsectionDescriptions[category.id]}</p>
      </header>
      <ul id={gridId} className="strk-gen-grid" role="list">
        {items.map((gen) => (
          <GeneratorCard key={gen.slug} gen={gen} ThumbComponent={Thumb} />
        ))}
      </ul>
      {total > COLLAPSED_VISIBLE_COUNT && (
        <div className="strk-subsection-toggle-row">
          <button
            type="button"
            id={buttonId}
            className="strk-btn strk-btn-ghost strk-btn-sm"
            aria-expanded="false"
            aria-controls={gridId}
            data-toggle-controls={gridId}
            data-toggle-label-show={`Show all ${total} generators`}
            data-toggle-label-hide="Show fewer"
            data-collapsed-visible={COLLAPSED_VISIBLE_COUNT}
          >
            {`Show all ${total} generators`}
          </button>
        </div>
      )}
    </section>
  );
}

export default function AllGenerators({ s }) {
  return (
    <section
      id="all-generators"
      className="strk-section strk-section-directory"
      aria-labelledby="all-generators-heading"
    >
      <div className="strk-container">
        <header className="strk-section-head">
          <h2 id="all-generators-heading" className="strk-h2">
            {s.allGenerators.heading}
          </h2>
          <p className="strk-section-sub">{s.allGenerators.sub}</p>
        </header>

        <div className="strk-directory-search">
          <label htmlFor="generator-search" className="strk-sr-only">
            {s.allGenerators.searchLabel}
          </label>
          <span className="strk-search-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
              <line
                x1="16.5"
                y1="16.5"
                x2="21"
                y2="21"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <input
            id="generator-search"
            type="search"
            className="strk-search-input"
            placeholder={s.allGenerators.searchPlaceholder}
            aria-label={s.allGenerators.searchLabel}
            autoComplete="off"
            data-search-targets=".strk-gen-card"
            data-search-scope=".strk-subsection"
            data-search-result-count="#generator-result-count"
            data-search-empty="#generator-empty-state"
            data-search-collapsed-visible={COLLAPSED_VISIBLE_COUNT}
          />
          <span
            id="generator-result-count"
            className="strk-search-count"
            aria-live="polite"
            aria-atomic="true"
          >
            {`${totalGenerators} generators`}
          </span>
        </div>

        <div id="generator-empty-state" className="strk-empty-state" hidden>
          <p className="strk-empty-title">{s.allGenerators.emptyTitle}</p>
          <p className="strk-empty-body">{s.allGenerators.emptyBody}</p>
          <div className="strk-empty-actions">
            <button
              type="button"
              className="strk-btn strk-btn-ghost strk-btn-sm"
              data-clear-search="#generator-search"
            >
              {s.allGenerators.clearSearch}
            </button>
            <a className="strk-btn strk-btn-ghost strk-btn-sm" href="/s/ai_site_builder">
              {s.allGenerators.emptyBuilderLink}
            </a>
          </div>
        </div>

        <div className="strk-subsections">
          {categories.map((cat) => (
            <Subsection key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
