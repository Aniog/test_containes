import { strings } from '../../data/generatorsData.js';

const s = strings.en.closingCta;

export default function ClosingCTA() {
  return (
    <section
      aria-labelledby="closing-heading"
      style={{
        background: '#ffffff',
        padding: '80px 20px',
        borderTop: '1px solid #E2E4E7',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 600, marginInline: 'auto', display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
        <h2
          id="closing-heading"
          style={{
            margin: 0,
            fontFamily: '"Josefin Sans", Poppins, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(26px, 3vw, 38px)',
            color: '#2E2E2F',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            lineHeight: 1.2,
          }}
        >
          {s.heading}
        </h2>
        <p
          style={{
            margin: 0,
            fontFamily: '"Open Sans", sans-serif',
            fontSize: 15,
            color: '#636972',
            lineHeight: 1.6,
          }}
        >
          {s.sub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="ai-gradient-bg"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 44,
            padding: '0 28px',
            borderRadius: 4,
            fontFamily: '"Josefin Sans", Poppins, sans-serif',
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: '#ffffff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {s.cta}
        </a>
      </div>
    </section>
  );
}
