import React from 'react';

const ClosingCTA = () => (
  <section
    style={{
      background: '#ffffff',
      padding: '80px 20px',
      borderTop: '1px solid var(--color-divider)',
      textAlign: 'center',
    }}
  >
    <div style={{ maxWidth: '600px', marginInline: 'auto' }}>
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 'clamp(26px, 3vw, 36px)',
          textTransform: 'uppercase',
          color: 'var(--color-heading)',
          margin: '0 0 16px',
          lineHeight: 1.2,
        }}
      >
        Ready to Build?
      </h2>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          color: 'var(--color-body)',
          margin: '0 0 30px',
          lineHeight: 1.6,
        }}
      >
        Pick a generator above, or jump straight into our AI builder.
      </p>
      <a
        href="/s/ai_site_builder"
        className="btn btn-gradient btn-lg"
      >
        Start with AI Builder
      </a>
    </div>
  </section>
);

export default ClosingCTA;
