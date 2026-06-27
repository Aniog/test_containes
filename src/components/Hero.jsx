import React from 'react'

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        paddingBlock: '60px',
        overflow: 'hidden',
      }}
    >
      {/* Faint purple-pink wash */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(118,113,255,0.06) 0%, transparent 70%), radial-gradient(ellipse at 80% 40%, rgba(203,12,159,0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 40,
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <style>{`
          @media (min-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40, alignItems: 'center' }}>
          {/* Left column: copy + CTAs */}
          <div style={{ maxWidth: 520 }}>
            <h1
              style={{
                fontSize: 'clamp(28px, 5vw, 44px)',
                lineHeight: 1.15,
                color: 'var(--color-heading-dark)',
                marginBottom: 16,
                letterSpacing: '0.5px',
              }}
            >
              <span style={{ display: 'block' }}>BUILD ANY KIND OF SITE</span>
              <span
                className="gradient-text"
                style={{ display: 'block', WebkitTextFillColor: 'transparent' }}
              >
                WITH AI, IN AN INSTANT
              </span>
            </h1>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: 'var(--color-body-text)',
                marginBottom: 30,
                maxWidth: 460,
              }}
            >
              Browse the right generator for what you're building, or jump straight into our AI site builder.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="/s/ai_site_builder" className="btn-ai-gradient" style={{ height: 44, fontSize: 14 }}>
                START BUILDING &ndash; IT&rsquo;S FREE
              </a>
              <a href="#all-generators" className="btn-ghost" style={{ height: 44, fontSize: 14 }}>
                BROWSE GENERATORS
              </a>
            </div>
          </div>

          {/* Right column: illustration */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroIllustration() {
  return (
    <svg
      width="440"
      height="320"
      viewBox="0 0 440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      {/* Browser window frame */}
      <rect x="20" y="20" width="400" height="280" rx="12" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2" />
      {/* Title bar */}
      <rect x="20" y="20" width="400" height="40" rx="12" fill="#FFFFFF" />
      <rect x="20" y="48" width="400" height="12" fill="#FFFFFF" />
      {/* Browser dots */}
      <circle cx="44" cy="40" r="5" fill="#FF5F57" />
      <circle cx="62" cy="40" r="5" fill="#FEBC2E" />
      <circle cx="80" cy="40" r="5" fill="#28C840" />
      {/* URL bar */}
      <rect x="100" y="32" width="200" height="16" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
      {/* Hero section inside mockup */}
      <rect x="40" y="80" width="360" height="60" rx="6" fill="#FFFFFF" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="60" y="92" width="180" height="8" rx="4" fill="url(#mockGrad1)" />
      <rect x="60" y="108" width="140" height="6" rx="3" fill="#E2E4E7" />
      <rect x="60" y="122" width="100" height="6" rx="3" fill="#E2E4E7" />
      {/* Button inside mockup */}
      <rect x="60" y="130" width="90" height="18" rx="4" fill="url(#mockGrad2)" />
      {/* Content cards */}
      <rect x="40" y="160" width="110" height="70" rx="6" fill="#FFFFFF" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="56" y="172" width="60" height="4" rx="2" fill="#C6C9CD" />
      <rect x="56" y="182" width="48" height="4" rx="2" fill="#E2E4E7" />
      <rect x="56" y="192" width="54" height="4" rx="2" fill="#E2E4E7" />
      <rect x="56" y="206" width="70" height="14" rx="3" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />

      <rect x="165" y="160" width="110" height="70" rx="6" fill="#FFFFFF" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="181" y="172" width="55" height="4" rx="2" fill="#C6C9CD" />
      <rect x="181" y="182" width="42" height="4" rx="2" fill="#E2E4E7" />
      <rect x="181" y="192" width="50" height="4" rx="2" fill="#E2E4E7" />
      <rect x="181" y="206" width="70" height="14" rx="3" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />

      <rect x="290" y="160" width="110" height="70" rx="6" fill="#FFFFFF" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="306" y="172" width="50" height="4" rx="2" fill="#C6C9CD" />
      <rect x="306" y="182" width="38" height="4" rx="2" fill="#E2E4E7" />
      <rect x="306" y="192" width="44" height="4" rx="2" fill="#E2E4E7" />
      <rect x="306" y="206" width="70" height="14" rx="3" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />

      {/* Bottom section */}
      <rect x="40" y="246" width="360" height="34" rx="6" fill="#FFFFFF" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="60" y="258" width="120" height="6" rx="3" fill="#E2E4E7" />
      <rect x="60" y="268" width="80" height="4" rx="2" fill="#C6C9CD" />

      {/* AI sparkle accent */}
      <circle cx="380" cy="75" r="14" fill="url(#mockGrad2)" opacity="0.15" />
      <path d="M380 66V84M371 75H389" stroke="url(#mockGrad2)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="380" cy="75" r="3" fill="url(#mockGrad2)" />

      <defs>
        <linearGradient id="mockGrad1" x1="60" y1="92" x2="240" y2="92" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
        <linearGradient id="mockGrad2" x1="0" y1="0" x2="90" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  )
}
