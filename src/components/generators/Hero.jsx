import { Link } from 'react-router-dom';
import s from '../../data/strings.js';

function HeroIllustration() {
  return (
    <svg
      width="480"
      height="360"
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      style={{ width: '100%', maxWidth: 480, height: 'auto' }}
    >
      {/* Browser window */}
      <rect x="16" y="16" width="448" height="328" rx="10" fill="white" stroke="#C6C9CD" strokeWidth="1.5" />
      {/* Browser chrome bar */}
      <rect x="16" y="16" width="448" height="44" rx="10" fill="#F4F6F8" />
      <rect x="16" y="48" width="448" height="12" fill="#F4F6F8" />
      {/* Traffic lights */}
      <circle cx="42" cy="38" r="6" fill="#FF5F57" />
      <circle cx="62" cy="38" r="6" fill="#FEBC2E" />
      <circle cx="82" cy="38" r="6" fill="#28C840" />
      {/* Address bar */}
      <rect x="104" y="26" width="260" height="24" rx="4" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <circle cx="118" cy="38" r="4" fill="#C6C9CD" />
      <rect x="128" y="34" width="120" height="8" rx="2" fill="#E2E4E7" />
      {/* Hero section gradient */}
      <rect x="26" y="68" width="428" height="110" rx="6" fill="url(#heroSectionGrad)" />
      {/* Hero text blocks */}
      <rect x="46" y="88" width="200" height="14" rx="3" fill="rgba(255,255,255,0.85)" />
      <rect x="46" y="110" width="160" height="10" rx="3" fill="rgba(255,255,255,0.55)" />
      <rect x="46" y="130" width="90" height="28" rx="4" fill="white" />
      <rect x="46" y="130" width="90" height="28" rx="4" fill="rgba(255,255,255,0.9)" />
      {/* CTA button text hint */}
      <rect x="58" y="140" width="66" height="8" rx="2" fill="url(#heroSectionGrad)" />
      {/* Right side illustration in hero */}
      <rect x="300" y="80" width="140" height="90" rx="6" fill="rgba(255,255,255,0.15)" />
      <rect x="312" y="92" width="60" height="60" rx="4" fill="rgba(255,255,255,0.2)" />
      <rect x="380" y="92" width="48" height="8" rx="2" fill="rgba(255,255,255,0.4)" />
      <rect x="380" y="106" width="40" height="6" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="380" y="118" width="44" height="6" rx="2" fill="rgba(255,255,255,0.3)" />
      {/* Content cards row */}
      <rect x="26" y="188" width="134" height="96" rx="6" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="36" y="200" width="60" height="8" rx="2" fill="#C6C9CD" />
      <rect x="36" y="216" width="104" height="6" rx="2" fill="#E2E4E7" />
      <rect x="36" y="228" width="90" height="6" rx="2" fill="#E2E4E7" />
      <rect x="36" y="240" width="76" height="6" rx="2" fill="#E2E4E7" />
      <rect x="36" y="256" width="50" height="18" rx="3" fill="#8159BB" opacity="0.15" />
      <rect x="170" y="188" width="134" height="96" rx="6" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="180" y="200" width="60" height="8" rx="2" fill="#C6C9CD" />
      <rect x="180" y="216" width="104" height="6" rx="2" fill="#E2E4E7" />
      <rect x="180" y="228" width="90" height="6" rx="2" fill="#E2E4E7" />
      <rect x="180" y="240" width="76" height="6" rx="2" fill="#E2E4E7" />
      <rect x="180" y="256" width="50" height="18" rx="3" fill="#7671FF" opacity="0.15" />
      <rect x="314" y="188" width="140" height="96" rx="6" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="324" y="200" width="60" height="8" rx="2" fill="#C6C9CD" />
      <rect x="324" y="216" width="104" height="6" rx="2" fill="#E2E4E7" />
      <rect x="324" y="228" width="90" height="6" rx="2" fill="#E2E4E7" />
      <rect x="324" y="240" width="76" height="6" rx="2" fill="#E2E4E7" />
      <rect x="324" y="256" width="50" height="18" rx="3" fill="#CB0C9F" opacity="0.12" />
      {/* Footer bar */}
      <rect x="26" y="294" width="428" height="36" rx="6" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="40" y="306" width="60" height="8" rx="2" fill="#C6C9CD" />
      <rect x="360" y="306" width="40" height="8" rx="2" fill="#E2E4E7" />
      <rect x="406" y="306" width="30" height="8" rx="2" fill="#E2E4E7" />
      <defs>
        <linearGradient id="heroSectionGrad" x1="26" y1="68" x2="454" y2="68" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 70% 50%, rgba(118,113,255,0.07) 0%, rgba(203,12,159,0.05) 60%, transparent 100%), #ffffff',
        paddingTop: 70,
        paddingBottom: 70,
      }}
    >
      <div className="content-container">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Left: copy + CTAs */}
          <div className="flex-1 min-w-0">
            <h1
              className="m-0 mb-4"
              style={{
                fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '0.03em',
              }}
            >
              <span
                className="block"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#2E2E2F', textTransform: 'uppercase' }}
              >
                {s.heroH1Line1}
              </span>
              <span
                className="block ai-gradient-text"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)', textTransform: 'uppercase' }}
              >
                {s.heroH1Line2}
              </span>
            </h1>
            <p
              className="mt-0 mb-8"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 16,
                color: '#636972',
                lineHeight: 1.6,
                maxWidth: 480,
              }}
            >
              {s.heroSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href="/s/ai_site_builder"
                className="btn-primary btn-primary-lg"
              >
                {s.heroCTAPrimary}
              </a>
              <a
                href="#all-generators"
                className="btn-ghost btn-ghost-lg"
              >
                {s.heroCTASecondary}
              </a>
            </div>
          </div>
          {/* Right: illustration */}
          <div
            className="flex-shrink-0 w-full md:w-auto"
            style={{ maxWidth: 480 }}
          >
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
