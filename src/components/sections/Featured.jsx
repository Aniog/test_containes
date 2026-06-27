import React from 'react';
import { t } from '../../data/strings.js';
import { FEATURED_GENERATORS } from '../../data/generators.js';

const sectionWrap = {
  background: 'var(--color-white)',
  paddingBlock: 50,
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 20,
};

const responsiveStyle = `
  @media (max-width: 900px) {
    .featured-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media (max-width: 600px) {
    .featured-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;

const tileLink = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  background: 'var(--color-white)',
  border: '1px solid var(--color-card-border)',
  borderRadius: 3,
  padding: 20,
  color: 'inherit',
  textDecoration: 'none',
  transition: 'box-shadow 150ms ease, border-color 150ms ease',
  minHeight: 130,
};

const tileTitle = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 700,
  fontSize: 18,
  textTransform: 'uppercase',
  color: 'var(--color-heading-strong)',
  lineHeight: 1.2,
};

const tileDesc = {
  color: 'var(--color-body)',
  fontSize: 14,
  lineHeight: 1.5,
};

const tileFoot = {
  marginTop: 'auto',
  display: 'flex',
  alignItems: 'center',
};

export default function Featured() {
  return (
    <section aria-labelledby="featured-heading" style={sectionWrap}>
      <div className="container">
        <header className="section-heading">
          <h2 id="featured-heading">{t.featured.heading}</h2>
          <p className="section-sub">{t.featured.sub}</p>
        </header>
        <div className="featured-grid" style={grid}>
          {FEATURED_GENERATORS.map((g) => (
            <a
              key={g.slug}
              className="featured-tile card-link"
              href={`/generators/${g.slug}`}
              style={tileLink}
            >
              <span style={tileTitle}>{g.name}</span>
              <span style={tileDesc}>{g.description}</span>
              <span style={tileFoot}>
                <span className="tag">{g.category}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
      <style>{responsiveStyle}</style>
    </section>
  );
}
