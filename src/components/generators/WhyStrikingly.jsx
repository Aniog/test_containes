import s from '../../data/strings.js';

function SpeedIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="14" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <path d="M18 10 L18 18 L24 18" stroke="#8159BB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="18" r="2" fill="#8159BB" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="10" y="4" width="16" height="28" rx="3" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <circle cx="18" cy="28" r="1.5" fill="#8159BB" opacity="0.6" />
      <rect x="14" y="9" width="8" height="2" rx="1" fill="#C6C9CD" />
      <rect x="13" y="14" width="10" height="1.5" rx="0.75" fill="#E2E4E7" />
      <rect x="13" y="18" width="8" height="1.5" rx="0.75" fill="#E2E4E7" />
    </svg>
  );
}

function FreeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M18 4 L22 14 L33 14 L24 21 L27 32 L18 25 L9 32 L12 21 L3 14 L14 14 Z" stroke="#8159BB" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

const cells = [
  { Icon: SpeedIcon, claim: s.whyClaim1, body: s.whyBody1 },
  { Icon: MobileIcon, claim: s.whyClaim2, body: s.whyBody2 },
  { Icon: FreeIcon, claim: s.whyClaim3, body: s.whyBody3 },
];

export default function WhyStrikingly() {
  return (
    <section className="bg-white" style={{ paddingTop: 60, paddingBottom: 60 }}>
      <div className="content-container">
        <h2
          className="section-heading text-center m-0 mb-10"
          style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}
        >
          {s.whyHeading}
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cells.map(({ Icon, claim, body }) => (
            <div key={claim} className="flex flex-col items-center text-center gap-4">
              <Icon />
              <div>
                <div
                  style={{
                    fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#4B5056',
                    marginBottom: 8,
                  }}
                >
                  {claim}
                </div>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 14,
                    color: '#636972',
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
