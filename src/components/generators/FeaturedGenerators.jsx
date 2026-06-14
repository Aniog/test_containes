import React from 'react';
import { CategoryThumb } from './Illustrations.jsx';
import { categoryLabels } from '../../data/generators.js';

const FeaturedGenerators = ({ t, featured, generatorUrl }) => (
  <section
    className="strk-section"
    aria-labelledby="featured-heading"
  >
    <div className="strk-container">
      <h2
        className="strk-section__heading"
        id="featured-heading"
      >
        {t('featured.heading')}
      </h2>
      <p className="strk-section__sub">{t('featured.sub')}</p>

      <div className="strk-grid strk-grid--3">
        {featured.map((g) => (
          <a
            key={g.slug}
            className="strk-card strk-card--link"
            href={generatorUrl(g.slug)}
          >
            <div className="strk-card__thumb">
              <CategoryThumb category={g.category} />
            </div>
            <span className="strk-tag" aria-label={`Category: ${categoryLabels[g.category]}`}>
              {categoryLabels[g.category]}
            </span>
            <h3 className="strk-card__name" style={{ marginTop: 12 }}>
              {g.name}
            </h3>
            <p className="strk-card__desc">{g.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedGenerators;
