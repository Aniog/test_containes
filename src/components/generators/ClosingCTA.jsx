import { strings } from '../../data/generators';

const s = strings.en.closingCta;

export default function ClosingCTA() {
  return (
    <section
      style={{
        background: '#ffffff',
        padding: '80px 20px',
        borderTop: '1px solid var(--color-divider)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 560, marginInline: 'auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(26px, 3vw, 36px)',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            color: 'var(--color-hero-heading)',
            margin: '0 0 14px 0',
            lineHeight: 1.2,
          }}
        >
          {s.heading}
        </h2>
        <p
          style={{
            fontSize: 15,
            color: 'var(--color-body-text)',
            margin: '0 0 30px 0',
            lineHeight: 1.6,
          }}
        >
          {s.sub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="btn-ai btn-ai-lg"
        >
          {s.cta}
        </a>
      </div>
    </section>
  );
}
