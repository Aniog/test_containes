import React from 'react';
import { t } from '../../data/strings.js';
import { StepBadge } from '../Icons.jsx';

const wrap = {
  background: 'var(--color-light-bg)',
  paddingBlock: 50,
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 20,
};

const responsiveStyle = `
  @media (max-width: 800px) {
    .how-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;

const stepCard = {
  background: 'var(--color-white)',
  border: '1px solid var(--color-card-border)',
  borderRadius: 3,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
};

const stepTitle = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 700,
  fontSize: 16,
  textTransform: 'uppercase',
  color: 'var(--color-heading-strong)',
  letterSpacing: '0.02em',
};

const stepBody = {
  color: 'var(--color-body)',
  fontSize: 14,
  lineHeight: 1.5,
};

export default function HowItWorks() {
  const steps = t.howItWorks.steps;
  return (
    <section aria-labelledby="how-heading" style={wrap}>
      <div className="container">
        <header className="section-heading">
          <h2 id="how-heading">{t.howItWorks.heading}</h2>
        </header>
        <div className="how-grid" style={grid}>
          {steps.map((s, i) => (
            <article key={s.title} style={stepCard}>
              <StepBadge index={i + 1} />
              <h3 style={stepTitle}>{s.title}</h3>
              <p style={stepBody}>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
      <style>{responsiveStyle}</style>
    </section>
  );
}
