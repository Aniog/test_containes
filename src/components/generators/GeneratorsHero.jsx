import { strings } from '../../data/generators';

const s = strings.en.hero;

// Soft purple line-art website mockup illustration
function HeroIllustration() {
  return (
    <svg
      width="480"
      height="360"
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', maxWidth: 480, height: 'auto' }}
    >
      {/* Browser chrome */}
      <rect x="20" y="20" width="440" height="320" rx="12" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
      {/* Title bar */}
      <rect x="20" y="20" width="440" height="40" rx="12" fill="#E2E4E7" />
      <rect x="20" y="48" width="440" height="12" fill="#E2E4E7" />
      {/* Traffic lights */}
      <circle cx="48" cy="40" r="6" fill="#CB0C9F" opacity="0.5" />
      <circle cx="66" cy="40" r="6" fill="#7671FF" opacity="0.5" />
      <circle cx="84" cy="40" r="6" fill="#8159BB" opacity="0.5" />
      {/* URL bar */}
      <rect x="110" y="30" width="260" height="20" rx="4" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
      <text x="240" y="44" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#9ca3af">strikingly.com/my-site</text>

      {/* Hero section of mockup */}
      <rect x="40" y="80" width="400" height="100" rx="6" fill="url(#hero-grad)" opacity="0.15" />
      <rect x="40" y="80" width="400" height="100" rx="6" stroke="#8159BB" strokeWidth="1" opacity="0.3" />
      {/* Headline bars */}
      <rect x="80" y="105" width="200" height="14" rx="3" fill="#8159BB" opacity="0.4" />
      <rect x="80" y="125" width="160" height="10" rx="3" fill="#7671FF" opacity="0.3" />
      {/* CTA button */}
      <rect x="80" y="145" width="90" height="22" rx="4" fill="url(#btn-grad)" opacity="0.8" />
      <text x="125" y="160" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#ffffff" fontWeight="700">GET STARTED</text>
      {/* Illustration placeholder */}
      <rect x="300" y="90" width="120" height="80" rx="6" fill="#E2E4E7" />
      <circle cx="360" cy="130" r="25" fill="#C6C9CD" opacity="0.6" />
      <rect x="330" y="148" width="60" height="8" rx="2" fill="#C6C9CD" opacity="0.5" />

      {/* Content section */}
      <rect x="40" y="200" width="120" height="80" rx="6" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="50" y="212" width="80" height="8" rx="2" fill="#8159BB" opacity="0.3" />
      <rect x="50" y="226" width="100" height="6" rx="2" fill="#C6C9CD" opacity="0.5" />
      <rect x="50" y="238" width="90" height="6" rx="2" fill="#C6C9CD" opacity="0.4" />
      <rect x="50" y="250" width="70" height="6" rx="2" fill="#C6C9CD" opacity="0.3" />
      <rect x="50" y="264" width="60" height="14" rx="3" fill="#8159BB" opacity="0.2" />

      <rect x="180" y="200" width="120" height="80" rx="6" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="190" y="212" width="80" height="8" rx="2" fill="#7671FF" opacity="0.3" />
      <rect x="190" y="226" width="100" height="6" rx="2" fill="#C6C9CD" opacity="0.5" />
      <rect x="190" y="238" width="90" height="6" rx="2" fill="#C6C9CD" opacity="0.4" />
      <rect x="190" y="250" width="70" height="6" rx="2" fill="#C6C9CD" opacity="0.3" />
      <rect x="190" y="264" width="60" height="14" rx="3" fill="#7671FF" opacity="0.2" />

      <rect x="320" y="200" width="120" height="80" rx="6" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="330" y="212" width="80" height="8" rx="2" fill="#CB0C9F" opacity="0.3" />
      <rect x="330" y="226" width="100" height="6" rx="2" fill="#C6C9CD" opacity="0.5" />
      <rect x="330" y="238" width="90" height="6" rx="2" fill="#C6C9CD" opacity="0.4" />
      <rect x="330" y="250" width="70" height="6" rx="2" fill="#C6C9CD" opacity="0.3" />
      <rect x="330" y="264" width="60" height="14" rx="3" fill="#CB0C9F" opacity="0.2" />

      {/* Footer bar */}
      <rect x="40" y="300" width="400" height="24" rx="4" fill="#E2E4E7" opacity="0.6" />
      <rect x="60" y="308" width="60" height="8" rx="2" fill="#C6C9CD" opacity="0.6" />
      <rect x="340" y="308" width="80" height="8" rx="2" fill="#C6C9CD" opacity="0.4" />

      <defs>
        <linearGradient id="hero-grad" x1="40" y1="80" x2="440" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
        <linearGradient id="btn-grad" x1="80" y1="145" x2="170" y2="167" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function GeneratorsHero() {
  return (
    <section
      style={{
        background: 'radial-gradient(ellipse at 70% 50%, rgba(118,113,255,0.06) 0%, rgba(203,12,159,0.04) 60%, transparent 100%), #ffffff',
        padding: '70px 0 60px',
      }}
    >
      <div className="content-container">
        <div className="hero-grid">
          {/* Left column */}
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(28px, 4vw, 46px)',
                lineHeight: 1.15,
                textTransform: 'uppercase',
                margin: '0 0 16px 0',
                letterSpacing: '0.01em',
              }}
            >
              <span style={{ color: 'var(--color-hero-heading)', display: 'block' }}>
                {s.h1Line1}
              </span>
              <span className="ai-gradient-text" style={{ display: 'block' }}>
                {s.h1Line2}
              </span>
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                color: 'var(--color-body-text)',
                lineHeight: 1.6,
                margin: '0 0 30px 0',
                maxWidth: 460,
              }}
            >
              {s.subheadline}
            </p>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a
                href="/s/ai_site_builder"
                className="btn-ai btn-ai-lg"
              >
                {s.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                className="btn-ghost btn-ghost-lg"
              >
                {s.ctaSecondary}
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
          >
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
