import { strings } from '../../data/generatorsData';

const s = strings.en.hero;

// Inline SVG illustration — soft purple line-art website mockup
function HeroIllustration() {
  return (
    <svg
      width="480"
      height="360"
      viewBox="0 0 480 360"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      {/* Browser chrome */}
      <rect x="20" y="20" width="440" height="320" rx="12" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
      {/* Title bar */}
      <rect x="20" y="20" width="440" height="40" rx="12" fill="#EDE8F5" />
      <rect x="20" y="48" width="440" height="12" fill="#EDE8F5" />
      {/* Traffic lights */}
      <circle cx="50" cy="40" r="6" fill="#CB0C9F" opacity="0.5" />
      <circle cx="70" cy="40" r="6" fill="#8159BB" opacity="0.5" />
      <circle cx="90" cy="40" r="6" fill="#7671FF" opacity="0.5" />
      {/* URL bar */}
      <rect x="110" y="30" width="260" height="20" rx="4" fill="#fff" stroke="#C6C9CD" strokeWidth="1" />
      <text x="240" y="44" textAnchor="middle" fontSize="10" fill="#8159BB" fontFamily="'Open Sans', sans-serif">
        yoursite.strikingly.com
      </text>
      {/* Hero block */}
      <rect x="40" y="80" width="400" height="100" rx="6" fill="url(#hero-grad)" opacity="0.15" />
      <rect x="40" y="80" width="400" height="100" rx="6" stroke="#8159BB" strokeWidth="1" strokeDasharray="4 3" />
      {/* Headline lines */}
      <rect x="100" y="105" width="280" height="14" rx="3" fill="#8159BB" opacity="0.4" />
      <rect x="130" y="127" width="220" height="10" rx="3" fill="#8159BB" opacity="0.25" />
      {/* CTA button mock */}
      <rect x="170" y="148" width="140" height="22" rx="4" fill="url(#btn-grad)" opacity="0.7" />
      {/* Content cards row */}
      <rect x="40" y="200" width="120" height="90" rx="6" fill="#fff" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="50" y="210" width="100" height="40" rx="3" fill="#EDE8F5" />
      <rect x="50" y="258" width="70" height="8" rx="2" fill="#C6C9CD" />
      <rect x="50" y="272" width="90" height="6" rx="2" fill="#E2E4E7" />

      <rect x="180" y="200" width="120" height="90" rx="6" fill="#fff" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="190" y="210" width="100" height="40" rx="3" fill="#EDE8F5" />
      <rect x="190" y="258" width="70" height="8" rx="2" fill="#C6C9CD" />
      <rect x="190" y="272" width="90" height="6" rx="2" fill="#E2E4E7" />

      <rect x="320" y="200" width="120" height="90" rx="6" fill="#fff" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="330" y="210" width="100" height="40" rx="3" fill="#EDE8F5" />
      <rect x="330" y="258" width="70" height="8" rx="2" fill="#C6C9CD" />
      <rect x="330" y="272" width="90" height="6" rx="2" fill="#E2E4E7" />

      {/* Footer bar */}
      <rect x="40" y="308" width="400" height="16" rx="3" fill="#E2E4E7" />

      <defs>
        <linearGradient id="hero-grad" x1="40" y1="80" x2="440" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
        <linearGradient id="btn-grad" x1="170" y1="148" x2="310" y2="170" gradientUnits="userSpaceOnUse">
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
        background:
          'radial-gradient(ellipse at 70% 50%, rgba(118,113,255,0.07) 0%, rgba(203,12,159,0.04) 60%, transparent 100%)',
        paddingTop: 70,
        paddingBottom: 70,
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 1200, padding: '0 20px' }}
      >
        <div
          className="flex flex-col-reverse md:flex-row items-center gap-10"
          style={{ gap: 40 }}
        >
          {/* Left: text + CTAs */}
          <div className="flex-1 min-w-0">
            <h1
              className="font-heading m-0"
              style={{ marginBottom: 16 }}
            >
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  color: '#2E2E2F',
                  lineHeight: 1.15,
                }}
              >
                {s.h1Line1}
              </span>
              <span
                className="ai-gradient-text"
                style={{
                  display: 'block',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  lineHeight: 1.15,
                }}
              >
                {s.h1Line2}
              </span>
            </h1>

            <p
              style={{
                fontSize: 16,
                color: '#636972',
                lineHeight: 1.6,
                marginBottom: 30,
                maxWidth: 480,
              }}
            >
              {s.sub}
            </p>

            <div className="flex flex-wrap" style={{ gap: 10 }}>
              <a
                href="/s/ai_site_builder"
                className="btn btn-gradient btn-lg"
              >
                {s.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                className="btn btn-ghost btn-lg"
              >
                {s.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right: illustration */}
          <div
            className="flex-shrink-0 flex justify-center"
            style={{ width: '100%', maxWidth: 480 }}
          >
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
