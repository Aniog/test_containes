import React from 'react';
import { t } from '../../data/strings.js';

const wrap = {
  background: 'var(--color-white)',
  paddingBlock: 70,
};

const inner = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: 14,
  maxWidth: 720,
  margin: '0 auto',
};

const headlineStyle = {
  fontSize: 30,
  color: 'var(--color-heading-strong)',
};

const subStyle = {
  color: 'var(--color-body)',
  fontSize: 15,
  lineHeight: 1.5,
  maxWidth: 480,
};

export default function ClosingCta() {
  return (
    <section aria-labelledby="closing-heading" style={wrap}>
      <div className="container" style={inner}>
        <h2 id="closing-heading" style={headlineStyle}>
          {t.closing.heading}
        </h2>
        <p style={subStyle}>{t.closing.sub}</p>
        <a
          className="btn btn--primary btn--big"
          href="/s/ai_site_builder"
          style={{ marginTop: 6 }}
        >
          {t.closing.cta}
        </a>
      </div>
    </section>
  );
}
