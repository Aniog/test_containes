import React from 'react';
import { t } from '../../data/strings.js';
import { WhyIcon } from '../Icons.jsx';

const wrap = {
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
    .why-grid {
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }
  @media (max-width: 700px) {
    .why-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;

const cell = {
  background: 'var(--color-white)',
  border: '1px solid var(--color-card-border)',
  borderRadius: 3,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
};

const titleStyle = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 700,
  fontSize: 16,
  textTransform: 'uppercase',
  color: 'var(--color-heading-strong)',
};

const body = {
  color: 'var(--color-body)',
  fontSize: 14,
  lineHeight: 1.5,
};

const iconKey = ['bolt', 'phone', 'heart'];

export default function WhyStrikingly() {
  return (
    <section aria-labelledby="why-heading" style={wrap}>
      <div className="container">
        <header className="section-heading">
          <h2 id="why-heading">{t.why.heading}</h2>
        </header>
        <div className="why-grid" style={grid}>
          {t.why.items.map((item, i) => (
            <article key={item.title} style={cell}>
              <WhyIcon kind={iconKey[i]} />
              <h3 style={titleStyle}>{item.title}</h3>
              <p style={body}>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
      <style>{responsiveStyle}</style>
    </section>
  );
}
