import { strings } from '@/data/generators';

const s = strings.en.why;

const WHY_ICONS = [
  // Live in seconds — lightning bolt
  <svg key="live" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M18 4L8 18h8l-2 10 14-16h-8l2-8z" stroke="#8159BB" strokeWidth="1.8" strokeLinejoin="round" fill="#8159BB" fillOpacity="0.1" />
  </svg>,
  // Mobile by default — phone
  <svg key="mobile" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="9" y="3" width="14" height="26" rx="3" stroke="#8159BB" strokeWidth="1.8" fill="none" />
    <circle cx="16" cy="25" r="1.5" fill="#8159BB" fillOpacity="0.6" />
    <rect x="13" y="7" width="6" height="1.5" rx="0.75" fill="#8159BB" fillOpacity="0.4" />
  </svg>,
  // Free to start — tag/price
  <svg key="free" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M16 4l12 12-12 12L4 16 16 4z" stroke="#8159BB" strokeWidth="1.8" fill="#8159BB" fillOpacity="0.08" />
    <circle cx="20" cy="12" r="2" fill="#8159BB" fillOpacity="0.5" />
    <path d="M12 16l4 4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
];

export default function WhyStrikingly() {
  return (
    <section style={{ padding: '60px 20px', background: 'var(--light-bg)' }}>
      <div style={{ maxWidth: 1200, marginInline: 'auto' }}>
        <h2
          className="font-heading"
          style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', color: 'var(--heading)', margin: '0 0 40px', textAlign: 'center' }}
        >
          {s.heading}
        </h2>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
          className="why-grid"
        >
          {s.items.map((item, i) => (
            <div
              key={item.title}
              className="gen-card"
              style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}
            >
              {WHY_ICONS[i]}
              <strong
                className="font-heading"
                style={{ fontSize: 14, color: 'var(--hero-heading)', letterSpacing: '0.04em' }}
              >
                {item.title}
              </strong>
              <p style={{ fontSize: 14, color: 'var(--body-text)', lineHeight: 1.6, margin: 0 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
