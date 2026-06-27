import { strings } from '../../data/generators';

const s = strings.en;

export default function ClosingCTA() {
  return (
    <section
      style={{
        background: '#ffffff',
        padding: '70px 20px',
        borderTop: '1px solid #E2E4E7',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <h2
          className="font-heading"
          style={{
            fontSize: 'clamp(26px, 3vw, 40px)',
            fontWeight: 700,
            color: '#2E2E2F',
            margin: '0 0 14px',
            letterSpacing: '0.02em',
          }}
        >
          {s.closingHeading}
        </h2>
        <p
          style={{
            fontSize: 16,
            color: '#636972',
            margin: '0 0 30px',
            lineHeight: 1.6,
            fontFamily: 'var(--font-body)',
          }}
        >
          {s.closingSub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="ai-gradient-btn font-heading"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            height: 44,
            padding: '0 24px',
            borderRadius: 4,
            fontSize: 14,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            textDecoration: 'none',
          }}
        >
          {s.closingCTA}
        </a>
      </div>
    </section>
  );
}
