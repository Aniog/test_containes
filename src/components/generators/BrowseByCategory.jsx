import React from 'react';
import { ArrowRight } from './Icons.jsx';
import { BrowseCategoryIllustration } from './Illustrations.jsx';

const BrowseByCategory = ({ t, categories }) => (
  <section
    className="strk-section"
    aria-labelledby="browse-heading"
  >
    <div className="strk-container">
      <h2
        className="strk-section__heading"
        id="browse-heading"
      >
        {t('browseCategories.heading')}
      </h2>

      <div className="strk-grid strk-grid--3" style={{ marginTop: 30 }}>
        {categories.map((cat) => (
          <a
            key={cat.slug}
            className="strk-browse-card"
            href={`/generators#${cat.slug}`}
          >
            <BrowseCategoryIllustration category={cat.slug} />
            <div className="strk-browse-card__body">
              <h3 className="strk-browse-card__name">{cat.name}</h3>
              <p className="strk-browse-card__desc">{cat.description}</p>
            </div>
            <ArrowRight className="strk-browse-card__arrow" size={18} />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BrowseByCategory;
