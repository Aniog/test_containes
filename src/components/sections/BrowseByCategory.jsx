import React from 'react';
import { t } from '../../data/strings.js';
import { CATEGORIES } from '../../data/generators.js';
import { CategoryIllustration, ArrowRightIcon } from '../Icons.jsx';

const sectionWrap = {
  background: 'var(--color-light-bg)',
  paddingBlock: 50,
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 20,
};

const responsiveStyle = `
  @media (max-width: 900px) {
    .cat-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media (max-width: 600px) {
    .cat-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;

const cardLink = {
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  background: 'var(--color-white)',
  border: '1px solid var(--color-card-border)',
  borderRadius: 3,
  padding: 20,
  color: 'inherit',
  textDecoration: 'none',
  minHeight: 180,
  transition: 'box-shadow 150ms ease, border-color 150ms ease',
};

const illoBox = {
  width: 56,
  height: 56,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--color-light-bg)',
  borderRadius: 3,
};

const title = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 700,
  fontSize: 18,
  textTransform: 'uppercase',
  color: 'var(--color-heading-strong)',
  lineHeight: 1.2,
};

const desc = {
  color: 'var(--color-body)',
  fontSize: 14,
  lineHeight: 1.5,
};

const foot = {
  marginTop: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  color: 'var(--color-brand-purple)',
  fontFamily: 'var(--font-heading)',
  fontWeight: 700,
  fontSize: 13,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
};

export default function BrowseByCategory() {
  return (
    <section aria-labelledby="browse-by-cat-heading" style={sectionWrap}>
      <div className="container">
        <header className="section-heading">
          <h2 id="browse-by-cat-heading">{t.browseByCategory.heading}</h2>
          <p className="section-sub">{t.browseByCategory.sub}</p>
        </header>
        <div className="cat-grid" style={grid}>
          {CATEGORIES.map((c) => (
            <a
              key={c.slug}
              className="cat-card card-link"
              href={`/generators#${c.slug}`}
              style={cardLink}
            >
              <span style={illoBox} aria-hidden="true">
                <CategoryIllustration kind={c.illustration} size={40} />
              </span>
              <span style={title}>{c.name}</span>
              <span style={desc}>{c.description}</span>
              <span style={foot}>
                Browse {c.name} <ArrowRightIcon size={16} />
              </span>
            </a>
          ))}
        </div>
      </div>
      <style>{responsiveStyle}</style>
    </section>
  );
}
