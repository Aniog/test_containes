import React from 'react';
import { strings } from '@/data/generators';

const s = strings.en;

function WebsiteMockupSVG() {
  return (
    <svg
      width="400"
      height="300"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <rect x="20" y="20" width="360" height="260" rx="8" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="40" y="40" width="120" height="12" rx="3" fill="#C6C9CD" />
      <rect x="40" y="64" width="80" height="8" rx="2" fill="#E2E4E7" />
      <rect x="40" y="88" width="320" height="100" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="56" y="104" width="180" height="10" rx="2" fill="#C6C9CD" />
      <rect x="56" y="124" width="140" height="8" rx="2" fill="#E2E4E7" />
      <rect x="56" y="144" width="100" height="8" rx="2" fill="#E2E4E7" />
      <rect x="56" y="168" width="80" height="28" rx="4" fill="#8159BB" opacity="0.3" />
      <rect x="40" y="204" width="150" height="60" rx="4" stroke="#C6C9CD" strokeWidth="1" fill="none" />
      <rect x="210" y="204" width="150" height="60" rx="4" stroke="#C6C9CD" strokeWidth="1" fill="none" />
      <circle cx="340" cy="56" r="16" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M332 56h16M340 48v16" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      style={{
        padding: '60px 0 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* faint purple-to-pink wash */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '60%',
          height: '140%',
          background: 'radial-gradient(ellipse at center, rgba(118,113,255,0.06) 0%, rgba(203,12,159,0.04) 50%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="section-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '1 1 480px', minWidth: '300px' }}>
          <h1 style={{ marginBottom: '16px' }}>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(28px, 4vw, 48px)',
                color: '#2E2E2F',
                textTransform: 'uppercase',
                lineHeight: 1.2,
              }}
            >
              {s.hero.h1Line1}
            </span>
            <span
              className="ai-gradient-text"
              style={{
                display: 'block',
                fontSize: 'clamp(28px, 4vw, 48px)',
                textTransform: 'uppercase',
                lineHeight: 1.2,
              }}
            >
              {s.hero.h1Line2}
            </span>
          </h1>
          <p
            style={{
              fontSize: '16px',
              color: '#636972',
              lineHeight: 1.6,
              maxWidth: '480px',
              marginBottom: '24px',
            }}
          >
            {s.hero.subheadline}
          </p>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="/s/ai_site_builder"
              className="btn btn-primary btn-large"
              style={{ textDecoration: 'none' }}
            >
              {s.hero.ctaPrimary}
            </a>
            <a
              href="#all-generators"
              className="btn btn-ghost btn-large"
              style={{ textDecoration: 'none' }}
            >
              {s.hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div
          style={{
            flex: '1 1 300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: '280px',
          }}
        >
          <WebsiteMockupSVG />
        </div>
      </div>
    </section>
  );
}
