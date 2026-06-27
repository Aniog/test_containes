import { strings } from '../../data/generators';

const s = strings.en;

// Inline SVG illustration — soft purple line-art website mockup
function HeroIllustration() {
  return (
    <svg
      width="480"
      height="360"
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      {/* Background glow */}
      <ellipse cx="240" cy="180" rx="200" ry="150" fill="url(#hero-glow)" opacity="0.18" />

      {/* Browser chrome */}
      <rect x="40" y="40" width="400" height="280" rx="12" fill="white" stroke="#C6C9CD" strokeWidth="1.5" />
      {/* Browser top bar */}
      <rect x="40" y="40" width="400" height="36" rx="12" fill="#F4F6F8" />
      <rect x="40" y="64" width="400" height="12" fill="#F4F6F8" />
      {/* Traffic lights */}
      <circle cx="68" cy="58" r="5" fill="#CB0C9F" opacity="0.5" />
      <circle cx="84" cy="58" r="5" fill="#7671FF" opacity="0.5" />
      <circle cx="100" cy="58" r="5" fill="#8159BB" opacity="0.5" />
      {/* URL bar */}
      <rect x="120" y="50" width="240" height="16" rx="8" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <text x="240" y="62" textAnchor="middle" fontSize="9" fill="#8159BB" fontFamily="monospace">strikingly.com/my-site</text>

      {/* Hero section inside browser */}
      <rect x="40" y="76" width="400" height="80" fill="url(#inner-hero-grad)" opacity="0.12" />
      <rect x="60" y="92" width="180" height="10" rx="5" fill="#8159BB" opacity="0.4" />
      <rect x="60" y="108" width="140" height="8" rx="4" fill="#7671FF" opacity="0.3" />
      <rect x="60" y="122" width="100" height="8" rx="4" fill="#7671FF" opacity="0.3" />
      {/* CTA button inside */}
      <rect x="60" y="136" width="90" height="14" rx="4" fill="url(#btn-grad)" />
      <text x="105" y="147" textAnchor="middle" fontSize="7" fill="white" fontFamily="sans-serif" fontWeight="bold">GET STARTED</text>
      {/* Illustration placeholder inside */}
      <rect x="280" y="88" width="140" height="60" rx="6" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <circle cx="350" cy="118" r="18" fill="#8159BB" opacity="0.15" />
      <rect x="320" y="108" width="60" height="6" rx="3" fill="#8159BB" opacity="0.25" />
      <rect x="330" y="118" width="40" height="6" rx="3" fill="#7671FF" opacity="0.2" />

      {/* Content cards row */}
      <rect x="56" y="168" width="110" height="70" rx="4" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="66" y="178" width="90" height="30" rx="3" fill="#F4F6F8" />
      <rect x="66" y="214" width="60" height="6" rx="3" fill="#4B5056" opacity="0.4" />
      <rect x="66" y="224" width="80" height="5" rx="2.5" fill="#636972" opacity="0.25" />

      <rect x="178" y="168" width="110" height="70" rx="4" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="188" y="178" width="90" height="30" rx="3" fill="#F4F6F8" />
      <rect x="188" y="214" width="60" height="6" rx="3" fill="#4B5056" opacity="0.4" />
      <rect x="188" y="224" width="80" height="5" rx="2.5" fill="#636972" opacity="0.25" />

      <rect x="300" y="168" width="110" height="70" rx="4" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="310" y="178" width="90" height="30" rx="3" fill="#F4F6F8" />
      <rect x="310" y="214" width="60" height="6" rx="3" fill="#4B5056" opacity="0.4" />
      <rect x="310" y="224" width="80" height="5" rx="2.5" fill="#636972" opacity="0.25" />

      {/* Footer bar inside browser */}
      <rect x="40" y="252" width="400" height="68" fill="#F4F6F8" />
      <rect x="60" y="268" width="80" height="6" rx="3" fill="#8159BB" opacity="0.3" />
      <rect x="60" y="280" width="120" height="5" rx="2.5" fill="#636972" opacity="0.2" />
      <rect x="60" y="290" width="100" height="5" rx="2.5" fill="#636972" opacity="0.15" />

      {/* Floating AI badge */}
      <rect x="330" y="28" width="90" height="24" rx="12" fill="url(#badge-grad)" />
      <text x="375" y="44" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="bold">✦ AI BUILT</text>

      <defs>
        <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8159BB" />
          <stop offset="100%" stopColor="#7671FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="inner-hero-grad" x1="0" y1="0" x2="400" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
        <linearGradient id="btn-grad" x1="0" y1="0" x2="90" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
        <linearGradient id="badge-grad" x1="0" y1="0" x2="90" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      style={{
        background: 'radial-gradient(ellipse at 70% 50%, rgba(129,89,187,0.06) 0%, rgba(118,113,255,0.04) 40%, transparent 70%), #ffffff',
        padding: '70px 20px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left column */}
        <div>
          <h1
            className="font-heading"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700,
              lineHeight: 1.15,
              margin: '0 0 16px',
              letterSpacing: '-0.01em',
            }}
          >
            <span style={{ display: 'block', color: '#2E2E2F' }}>
              {s.heroH1Line1}
            </span>
            <span
              className="ai-gradient-text"
              style={{ display: 'block' }}
            >
              {s.heroH1Line2}
            </span>
          </h1>

          <p
            style={{
              fontSize: 16,
              color: '#636972',
              lineHeight: 1.6,
              margin: '0 0 30px',
              maxWidth: 480,
              fontFamily: 'var(--font-body)',
            }}
          >
            {s.heroSubheadline}
          </p>

          <div
            style={{
              display: 'flex',
              gap: 10,
              flexWrap: 'wrap',
            }}
          >
            <a
              href="/s/ai_site_builder"
              className="ai-gradient-btn font-heading"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: 44,
                padding: '0 20px',
                borderRadius: 4,
                fontSize: 14,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {s.heroPrimaryCTA}
            </a>
            <a
              href="#all-generators"
              className="font-heading"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: 44,
                padding: '0 20px',
                borderRadius: 4,
                fontSize: 14,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                textDecoration: 'none',
                color: '#8159BB',
                border: '1px solid #8159BB',
                background: 'transparent',
                whiteSpace: 'nowrap',
              }}
            >
              {s.heroSecondaryCTA}
            </a>
          </div>
        </div>

        {/* Right column — illustration */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="hero-illustration"
        >
          <HeroIllustration />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-illustration {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
