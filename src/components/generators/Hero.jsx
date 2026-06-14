import React from 'react';

// Soft purple line-art illustration of a website mockup
const WebsiteMockupIllustration = () => (
  <svg
    width="480"
    height="360"
    viewBox="0 0 480 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '100%', height: 'auto', maxWidth: '480px' }}
  >
    {/* Browser chrome */}
    <rect x="20" y="20" width="440" height="320" rx="10" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
    {/* Title bar */}
    <rect x="20" y="20" width="440" height="36" rx="10" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1.5" />
    <rect x="20" y="44" width="440" height="12" fill="#ffffff" />
    {/* Traffic lights */}
    <circle cx="44" cy="38" r="5" fill="#CB0C9F" opacity="0.4" />
    <circle cx="60" cy="38" r="5" fill="#7671FF" opacity="0.4" />
    <circle cx="76" cy="38" r="5" fill="#8159BB" opacity="0.4" />
    {/* URL bar */}
    <rect x="96" y="30" width="280" height="16" rx="8" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
    <text x="112" y="42" fontFamily="'Open Sans', sans-serif" fontSize="9" fill="#C6C9CD">strikingly.com/my-site</text>

    {/* Hero section of mockup */}
    <rect x="20" y="56" width="440" height="100" fill="url(#hero-fill)" />
    {/* Gradient overlay */}
    <defs>
      <linearGradient id="hero-fill" x1="20" y1="56" x2="460" y2="156" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7671FF" stopOpacity="0.08" />
        <stop offset="1" stopColor="#CB0C9F" stopOpacity="0.08" />
      </linearGradient>
      <linearGradient id="btn-fill" x1="0" y1="0" x2="80" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7671FF" />
        <stop offset="1" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
    {/* Mockup headline lines */}
    <rect x="120" y="80" width="240" height="12" rx="3" fill="#8159BB" opacity="0.25" />
    <rect x="150" y="100" width="180" height="8" rx="3" fill="#8159BB" opacity="0.15" />
    {/* CTA button in mockup */}
    <rect x="190" y="118" width="100" height="22" rx="4" fill="url(#btn-fill)" opacity="0.7" />
    <rect x="196" y="124" width="88" height="10" rx="2" fill="#ffffff" opacity="0.6" />

    {/* Content section */}
    <rect x="20" y="156" width="440" height="80" fill="#ffffff" />
    {/* Three feature columns */}
    <rect x="40" y="172" width="120" height="8" rx="3" fill="#C6C9CD" />
    <rect x="40" y="186" width="100" height="6" rx="3" fill="#E2E4E7" />
    <rect x="40" y="198" width="110" height="6" rx="3" fill="#E2E4E7" />

    <rect x="180" y="172" width="120" height="8" rx="3" fill="#C6C9CD" />
    <rect x="180" y="186" width="100" height="6" rx="3" fill="#E2E4E7" />
    <rect x="180" y="198" width="110" height="6" rx="3" fill="#E2E4E7" />

    <rect x="320" y="172" width="120" height="8" rx="3" fill="#C6C9CD" />
    <rect x="320" y="186" width="100" height="6" rx="3" fill="#E2E4E7" />
    <rect x="320" y="198" width="110" height="6" rx="3" fill="#E2E4E7" />

    {/* Card grid section */}
    <rect x="20" y="236" width="440" height="104" fill="#F4F6F8" />
    {/* Cards */}
    <rect x="36" y="250" width="120" height="76" rx="3" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="46" y="262" width="80" height="6" rx="2" fill="#8159BB" opacity="0.3" />
    <rect x="46" y="274" width="90" height="5" rx="2" fill="#E2E4E7" />
    <rect x="46" y="284" width="70" height="5" rx="2" fill="#E2E4E7" />
    <rect x="46" y="298" width="50" height="14" rx="3" fill="url(#btn-fill)" opacity="0.5" />

    <rect x="180" y="250" width="120" height="76" rx="3" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="190" y="262" width="80" height="6" rx="2" fill="#8159BB" opacity="0.3" />
    <rect x="190" y="274" width="90" height="5" rx="2" fill="#E2E4E7" />
    <rect x="190" y="284" width="70" height="5" rx="2" fill="#E2E4E7" />
    <rect x="190" y="298" width="50" height="14" rx="3" fill="url(#btn-fill)" opacity="0.5" />

    <rect x="324" y="250" width="120" height="76" rx="3" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="334" y="262" width="80" height="6" rx="2" fill="#8159BB" opacity="0.3" />
    <rect x="334" y="274" width="90" height="5" rx="2" fill="#E2E4E7" />
    <rect x="334" y="284" width="70" height="5" rx="2" fill="#E2E4E7" />
    <rect x="334" y="298" width="50" height="14" rx="3" fill="url(#btn-fill)" opacity="0.5" />

    {/* Sparkle accents */}
    <circle cx="430" cy="70" r="3" fill="#7671FF" opacity="0.5" />
    <circle cx="50" cy="140" r="2" fill="#CB0C9F" opacity="0.4" />
    <circle cx="450" cy="230" r="4" fill="#8159BB" opacity="0.3" />
  </svg>
);

const Hero = () => (
  <section
    style={{
      background: 'radial-gradient(ellipse at 70% 50%, rgba(118,113,255,0.06) 0%, rgba(203,12,159,0.04) 60%, transparent 100%), #ffffff',
      padding: '70px 20px',
    }}
  >
    <div
      style={{
        maxWidth: '1200px',
        marginInline: 'auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
      }}
      className="hero-grid"
    >
      {/* Left: copy */}
      <div>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: 1.15,
            textTransform: 'uppercase',
            margin: '0 0 20px',
          }}
        >
          <span style={{ display: 'block', color: 'var(--color-hero)' }}>
            Build Any Kind of Site
          </span>
          <span className="ai-gradient-text" style={{ display: 'block' }}>
            With AI, In An Instant
          </span>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            lineHeight: 1.6,
            color: 'var(--color-body)',
            margin: '0 0 30px',
            maxWidth: '480px',
          }}
        >
          Browse the right generator for what you're building, or jump straight
          into our AI site builder.
        </p>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            href="/s/ai_site_builder"
            className="btn btn-gradient btn-lg"
          >
            Start Building — It's Free
          </a>
          <a
            href="#all-generators"
            className="btn btn-ghost btn-lg"
          >
            Browse Generators
          </a>
        </div>
      </div>

      {/* Right: illustration */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <WebsiteMockupIllustration />
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

export default Hero;
