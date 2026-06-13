import strings from '@/data/strings';
const s = strings.en;

export default function ClosingCTA() {
  return (
    <section
      style={{
        background: '#FFFFFF',
        padding: '60px 20px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <h2
          className="heading-font"
          style={{
            fontSize: 'clamp(24px, 3vw, 36px)',
            color: '#2E2E2F',
            margin: '0 0 12px',
          }}
        >
          {s.closingHeadline}
        </h2>
        <p
          style={{
            color: '#636972',
            fontSize: 15,
            margin: '0 0 28px',
            lineHeight: 1.6,
          }}
        >
          {s.closingSub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="heading-font ai-gradient-bg"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 44,
            padding: '0 28px',
            borderRadius: 4,
            color: '#FFFFFF',
            textDecoration: 'none',
            fontSize: 14,
            letterSpacing: '0.04em',
            whiteSpace: 'nowrap',
          }}
        >
          {s.closingCta}
        </a>
      </div>
    </section>
  );
}
