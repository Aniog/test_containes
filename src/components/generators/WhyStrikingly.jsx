import { strings } from '../../data/generators';

const s = strings.en;

const icons = [
  // Lightning bolt — Live in seconds
  <svg key="lightning" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4L8 18h8l-2 10 12-16h-8L18 4Z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
  </svg>,
  // Mobile phone — Mobile by default
  <svg key="mobile" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="3" width="14" height="26" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
    <circle cx="16" cy="25" r="1.5" fill="#8159BB" opacity="0.5" />
    <rect x="13" y="7" width="6" height="1.5" rx="0.75" fill="#8159BB" opacity="0.4" />
  </svg>,
  // Tag / price — Free to start
  <svg key="tag" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h10l14 14-10 10L4 14V4Z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <circle cx="10" cy="10" r="2" fill="#8159BB" opacity="0.5" />
  </svg>,
];

export default function WhyStrikingly() {
  return (
    <section
      style={{
        background: '#F4F6F8',
        padding: '60px 20px',
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2
          className="font-heading"
          style={{
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            fontWeight: 700,
            color: '#4B5056',
            margin: '0 0 40px',
            letterSpacing: '0.02em',
            textAlign: 'center',
          }}
        >
          {s.whyHeading}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
          className="why-grid"
        >
          {s.whyItems.map((item, i) => (
            <div
              key={item.title}
              className="strk-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 8,
                  background: 'rgba(129,89,187,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {icons[i]}
              </div>
              <div>
                <p
                  className="font-heading"
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#2E2E2F',
                    margin: '0 0 8px',
                    letterSpacing: '0.04em',
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: '#636972',
                    margin: 0,
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
