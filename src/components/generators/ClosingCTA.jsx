import React from 'react';
import { strings } from '@/data/generators';

const s = strings.en;

export default function ClosingCTA() {
  return (
    <section style={{ padding: '60px 0', background: '#FFFFFF', textAlign: 'center' }}>
      <div className="section-container">
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 32px)',
            marginBottom: '12px',
          }}
        >
          {s.closingCta.headline}
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: '#636972',
            marginBottom: '24px',
            maxWidth: '480px',
            marginInline: 'auto',
          }}
        >
          {s.closingCta.sub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="btn btn-primary btn-large"
          style={{ textDecoration: 'none' }}
        >
          {s.closingCta.cta}
        </a>
      </div>
    </section>
  );
}
