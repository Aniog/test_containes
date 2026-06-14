import React from 'react';
import { featuredGenerators } from '../../data/generators';

const FeaturedGenerators = () => (
  <section
    style={{
      background: 'var(--color-surface)',
      padding: '60px 20px',
      borderTop: '1px solid var(--color-divider)',
    }}
  >
    <div style={{ maxWidth: '1200px', marginInline: 'auto' }}>
      <h2 className="section-heading">Featured Generators</h2>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          color: 'var(--color-body)',
          margin: '0 0 40px',
        }}
      >
        A few common starting points.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
        className="featured-grid"
      >
        {featuredGenerators.map((gen) => (
          <article key={gen.slug}>
            <a
              href={`/generators/${gen.slug}`}
              className="card"
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
              }}
              aria-label={gen.name}
            >
              <div style={{ marginBottom: '10px' }}>
                <span className="tag">{gen.category}</span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  color: 'var(--color-heading)',
                  margin: '0 0 8px',
                  lineHeight: 1.3,
                }}
              >
                {gen.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--color-body)',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {gen.desc}
              </p>
            </a>
          </article>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) {
        .featured-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      @media (max-width: 560px) {
        .featured-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </section>
);

export default FeaturedGenerators;
