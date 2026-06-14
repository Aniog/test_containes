import React from 'react';
import { SearchIcon, ChevronDown } from './Icons.jsx';
import { CategoryThumb } from './Illustrations.jsx';
import {
  categoryLabels,
  categoryShortDescriptions,
  categorySlugs,
  categoryGenerators,
} from '../../data/generators.js';

const INITIAL_VISIBLE = 6;

const AllGenerators = ({ t, generatorUrl }) => {
  const categories = Object.keys(categorySlugs);

  return (
    <section
      className="strk-section"
      id="all-generators"
      aria-labelledby="all-generators-heading"
    >
      <div className="strk-container">
        <h2
          className="strk-section__heading"
          id="all-generators-heading"
        >
          {t('allGenerators.heading')}
        </h2>
        <p className="strk-section__sub">{t('allGenerators.sub')}</p>

        <div className="strk-search">
          <SearchIcon className="strk-search__icon" size={18} />
          <input
            type="search"
            id="generators-search"
            className="strk-search__input"
            placeholder={t('allGenerators.searchPlaceholder')}
            aria-label={t('allGenerators.searchLabel')}
            autoComplete="off"
          />
        </div>
        <p
          className="strk-search__meta"
          id="generators-search-meta"
          aria-live="polite"
        >
          {/* filled by JS when search is active; left empty so JS-off users
              see no stale count. */}
        </p>

        <div id="all-generators-empty" className="strk-empty" hidden>
          <p className="strk-empty__title">
            {t('allGenerators.emptyTitle')}
          </p>
          <button
            type="button"
            className="strk-btn strk-btn--ghost"
            id="generators-clear-search"
          >
            {t('allGenerators.emptyCta')}
          </button>
          <br />
          <a className="strk-empty__link" href="/s/ai_site_builder">
            {t('allGenerators.emptyLink')}
          </a>
        </div>

        {categories.map((slug) => {
          const items = categoryGenerators[slug];
          const initialCount = Math.min(INITIAL_VISIBLE, items.length);
          return (
            <section
              key={slug}
              id={slug}
              className="strk-subsec"
              data-subsec={slug}
              aria-labelledby={`subsec-${slug}-title`}
            >
              <header className="strk-subsec__head">
                <h3
                  className="strk-subsec__title"
                  id={`subsec-${slug}-title`}
                >
                  {categoryLabels[slug]}
                </h3>
                <p className="strk-subsec__desc">
                  {categoryShortDescriptions[slug]}
                </p>
              </header>

              <div
                className="strk-grid strk-grid--3 strk-collapse"
                data-collapse
                data-initial={initialCount}
              >
                {items.map((g) => (
                  <a
                    key={g.slug}
                    className="strk-card strk-card--link"
                    href={generatorUrl(g.slug)}
                    data-card
                    data-name={g.name.toLowerCase()}
                    data-description={g.description.toLowerCase()}
                    data-category={g.category}
                  >
                    <div className="strk-card__thumb">
                      <CategoryThumb category={g.category} />
                    </div>
                    <h4
                      className="strk-card__name"
                      style={{ textTransform: 'none', letterSpacing: 0 }}
                    >
                      {g.name}
                    </h4>
                    <p className="strk-card__desc">{g.description}</p>
                  </a>
                ))}
              </div>

              {items.length > INITIAL_VISIBLE && (
                <div className="strk-toggle-row">
                  <button
                    type="button"
                    className="strk-toggle-btn"
                    data-show-all
                    data-target={slug}
                    aria-expanded="false"
                    aria-controls={`collapse-${slug}`}
                  >
                    <span data-label>
                      {t('allGenerators.showAll')(items.length)}
                    </span>
                    <ChevronDown className="strk-toggle-btn__icon" size={14} />
                  </button>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default AllGenerators;
