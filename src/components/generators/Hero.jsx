import { strings } from '@/data/generators';

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
      <rect x="20" y="20" width="440" height="320" rx="10" stroke="#8159BB" strokeWidth="1.5" fill="white" fillOpacity="0.6" />
      {/* Top bar */}
      <rect x="20" y="20" width="440" height="44" rx="10" fill="#F4F6F8" />
      <rect x="20" y="52" width="440" height="12" fill="#F4F6F8" />
      <rect x="20" y="63" width="440" height="1" fill="#E2E4E7" />
      {/* Traffic lights */}
      <circle cx="46" cy="42" r="6" fill="#CB0C9F" fillOpacity="0.35" />
      <circle cx="64" cy="42" r="6" fill="#7671FF" fillOpacity="0.35" />
      <circle cx="82" cy="42" r="6" fill="#8159BB" fillOpacity="0.35" />
      {/* URL bar */}
      <rect x="108" y="32" width="244" height="20" rx="10" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <circle cx="122" cy="42" r="4" fill="#8159BB" fillOpacity="0.3" />
      <rect x="132" y="39" width="100" height="6" rx="3" fill="#C6C9CD" fillOpacity="0.6" />
      {/* Hero section */}
      <rect x="40" y="84" width="400" height="110" rx="4" fill="#F4F6F8" />
      <rect x="60" y="100" width="160" height="14" rx="3" fill="#8159BB" fillOpacity="0.4" />
      <rect x="60" y="122" width="200" height="10" rx="3" fill="#7671FF" fillOpacity="0.25" />
      <rect x="60" y="140" width="140" height="10" rx="3" fill="#636972" fillOpacity="0.2" />
      <rect x="60" y="162" width="90" height="24" rx="4" fill="url(#heroGrad)" />
      <rect x="158" y="162" width="70" height="24" rx="4" fill="none" stroke="#8159BB" strokeWidth="1.5" />
      {/* Content cards row */}
      <rect x="40" y="214" width="122" height="90" rx="4" fill="#F4F6F8" />
      <rect x="52" y="224" width="98" height="48" rx="3" fill="#8159BB" fillOpacity="0.12" />
      <rect x="52" y="278" width="70" height="8" rx="2" fill="#636972" fillOpacity="0.25" />
      <rect x="52" y="292" width="50" height="6" rx="2" fill="#636972" fillOpacity="0.15" />

      <rect x="179" y="214" width="122" height="90" rx="4" fill="#F4F6F8" />
      <rect x="191" y="224" width="98" height="48" rx="3" fill="#7671FF" fillOpacity="0.12" />
      <rect x="191" y="278" width="70" height="8" rx="2" fill="#636972" fillOpacity="0.25" />
      <rect x="191" y="292" width="50" height="6" rx="2" fill="#636972" fillOpacity="0.15" />

      <rect x="318" y="214" width="122" height="90" rx="4" fill="#F4F6F8" />
      <rect x="330" y="224" width="98" height="48" rx="3" fill="#CB0C9F" fillOpacity="0.12" />
      <rect x="330" y="278" width="70" height="8" rx="2" fill="#636972" fillOpacity="0.25" />
      <rect x="330" y="292" width="50" height="6" rx="2" fill="#636972" fillOpacity="0.15" />

      {/* Footer bar */}
      <rect x="40" y="320" width="400" height="10" rx="2" fill="#E2E4E7" fillOpacity="0.6" />

      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7671FF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#CB0C9F" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="hero-wash"
      style={{ padding: '70px 20px 70px' }}
    >
      <div
        style={{
          maxWidth: 1200,
          marginInline: 'auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left: copy + CTAs */}
        <div>
          <h1
            className="font-heading"
            style={{ margin: '0 0 16px', padding: 0 }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(28px, 4vw, 46px)',
                color: 'var(--hero-heading)',
                lineHeight: 1.15,
              }}
            >
              {s.h1Line1}
            </span>
            <span
              className="ai-gradient-text font-heading"
              style={{
                display: 'block',
                fontSize: 'clamp(28px, 4vw, 46px)',
                lineHeight: 1.15,
              }}
            >
              {s.h1Line2}
            </span>
          </h1>

          <p
            style={{
              fontSize: 16,
              color: 'var(--body-text)',
              lineHeight: 1.6,
              margin: '0 0 30px',
              maxWidth: 480,
            }}
          >
            {s.sub}
          </p>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="/s/ai_site_builder" className="btn btn-primary">
              {s.primaryCTA}
            </a>
            <a href="#all-generators" className="btn btn-ghost">
              {s.secondaryCTA}
            </a>
          </div>
        </div>

        {/* Right: illustration */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <HeroIllustration />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
