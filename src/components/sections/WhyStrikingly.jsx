import strings from '@/data/strings';
const s = strings.en;

const reasons = [
  {
    title: s.whyLiveTitle,
    description: s.whyLiveDesc,
  },
  {
    title: s.whyMobileTitle,
    description: s.whyMobileDesc,
  },
  {
    title: s.whyFreeTitle,
    description: s.whyFreeDesc,
  },
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="#E8DFF5" />
      <path
        d="M6 10L8.5 12.5L14 7"
        stroke="#8159BB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyStrikingly() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '40px 20px',
      }}
    >
      <h2
        className="heading-font"
        style={{
          fontSize: 'clamp(22px, 2.5vw, 32px)',
          color: '#4B5056',
          margin: '0 0 30px',
          textAlign: 'center',
        }}
      >
        {s.whyHeading}
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: 20,
        }}
        className="why-grid"
      >
        {reasons.map((r) => (
          <div
            key={r.title}
            style={{
              padding: 24,
              textAlign: 'center',
            }}
          >
            <div style={{ marginBottom: 14, display: 'inline-flex' }}>
              <CheckIcon />
            </div>
            <h3
              className="heading-font"
              style={{
                fontSize: 15,
                color: '#2E2E2F',
                margin: '0 0 8px',
              }}
            >
              {r.title}
            </h3>
            <p
              style={{
                color: '#636972',
                fontSize: 14,
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              {r.description}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 769px) {
          .why-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
