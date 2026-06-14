import React from 'react';
import { featuredGenerators } from '@/data/generators';

export default function FeaturedGenerators({ s }) {
  return (
    <section className="strk-section" aria-labelledby="featured-heading">
      <div className="strk-container">
        <header className="strk-section-head">
          <h2 id="featured-heading" className="strk-h2">
            {s.featured.heading}
          </h2>
          <p className="strk-section-sub">{s.featured.sub}</p>
        </header>
        <ul className="strk-featured-grid" role="list">
          {featuredGenerators.map((gen) => (
            <li key={gen.slug}>
              <a className="strk-featured-card" href={`/generators/${gen.slug}`}>
                <span className="strk-featured-name">{gen.name}</span>
                <span className="strk-featured-desc">{gen.description}</span>
                <span className="strk-tag strk-tag-ghost">{gen.categoryLabel}</span>
                <span className="strk-sr-only">
                  , {s.featured.cardLabelPrefix} {gen.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
