import React from 'react';
import strings from '@/data/strings.en.js';
import { featuredGenerators } from '@/data/generators.js';

export default function FeaturedGenerators() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-light-bg)' }}>
      <div className="container">
        <h2 className="section-title">{strings.featuredHeading}</h2>
        <p className="section-subtitle">{strings.featuredSubheading}</p>
        <div className="grid-3">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card-link"
            >
              <div className="card">
                <h3
                  style={{
                    fontSize: '16px',
                    marginBlockEnd: '8px',
                    color: 'var(--color-hero-dark)',
                  }}
                >
                  {gen.name}
                </h3>
                <p style={{ color: 'var(--color-body)', fontSize: '14px', marginBlockEnd: '12px' }}>
                  {gen.description}
                </p>
                <span className="tag">{gen.category}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}