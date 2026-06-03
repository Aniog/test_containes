


import React from 'react';
import strings from '@/data/strings.en.js';
import { featuredGenerators } from '@/data/generators.js';

const FeaturedGenerators = () => {
  return (
    <section className="section featured-generators">
      <div className="section-container">
        <h2 className="section-heading">{strings.featuredHeading}</h2>
        <p className="section-subheading">{strings.featuredSubheading}</p>
        <div className="featured-grid">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card featured-card"
            >
              <span className="card-tag">{gen.category}</span>
              <h3 className="card-name">{gen.name}</h3>
              <p className="card-desc">{gen.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGenerators;


