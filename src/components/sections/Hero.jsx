import React from 'react';
import { t } from '../../data/strings.js';
import { WebsiteIllustration } from '../Icons.jsx';

const wrap = {
  position: 'relative',
  background: 'var(--color-white)',
  paddingBlock: 70,
  overflow: 'hidden',
};

const wash = {
  position: 'absolute',
  inset: 0,
  background:
    'radial-gradient(900px 420px at 80% 20%, rgba(118,113,255,0.10) 0%, rgba(203,12,159,0.06) 60%, transparent 80%)',
  pointerEvents: 'none',
};

const inner = {
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '1.05fr 1fr',
  gap: 40,
  alignItems: 'center',
};

const leftCol = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
};

const rightCol = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const h1 = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  fontSize: 46,
  lineHeight: 1.1,
};

const sub = {
  maxWidth: 520,
  color: 'var(--color-body)',
  fontSize: 15,
  lineHeight: 1.6,
};

const ctas = {
  display: 'flex',
  gap: 10,
  flexWrap: 'wrap',
  marginTop: 10,
};

const responsiveStyle = `
  @media (max-width: 900px) {
    .hero-inner {
      grid-template-columns: 1fr !important;
      gap: 30px !important;
    }
    .hero-illustration {
      order: 2;
    }
    .hero-content {
      order: 1;
    }
    .hero-h1 {
      font-size: 30px !important;
    }
  }
`;

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" style={wrap}>
      <div aria-hidden="true" style={wash} />
      <div className="container hero-inner" style={inner}>
        <div className="hero-content" style={leftCol}>
          <h1 id="hero-heading" className="hero-h1" style={h1}>
            <span style={{ color: 'var(--color-heading-strong)' }}>{t.hero.h1Line1}</span>
            <span className="ai-gradient-text" style={{ display: 'inline-block' }}>
              {t.hero.h1Line2}
            </span>
          </h1>
          <p className="section-sub" style={sub}>
            {t.hero.sub}
          </p>
          <div style={ctas}>
            <a className="btn btn--primary btn--big" href="/s/ai_site_builder">
              {t.hero.primaryCta}
            </a>
            <a className="btn btn--ghost btn--big" href="#all-generators">
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero-illustration" style={rightCol}>
          <WebsiteIllustration width={520} height={380} />
        </div>
      </div>
      <style>{responsiveStyle}</style>
    </section>
  );
}
