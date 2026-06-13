import { strings } from '@/data/generators';

const s = strings.en.closing;

export default function ClosingCTA() {
  return (
    <section
      style={{
        padding: '80px 20px',
        background: '#FFFFFF',
        textAlign: 'center',
        borderTop: '1px solid var(--divider)',
      }}
    >
      <div style={{ maxWidth: 600, marginInline: 'auto' }}>
        <h2
          className="font-heading"
          style={{ fontSize: 'clamp(26px, 3vw, 38px)', color: 'var(--hero-heading)', margin: '0 0 16px' }}
        >
          {s.heading}
        </h2>
        <p style={{ fontSize: 16, color: 'var(--body-text)', margin: '0 0 30px', lineHeight: 1.6 }}>
          {s.sub}
        </p>
        <a href="/s/ai_site_builder" className="btn btn-primary" style={{ fontSize: 15, height: 48, padding: '0 28px' }}>
          {s.cta}
        </a>
      </div>
    </section>
  );
}
