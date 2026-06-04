import React from 'react';
import strings from '@/data/strings.en.js';

function HeroIllustration() {
  return (
    <svg
      width="520"
      height="380"
      viewBox="0 0 520 380"
      fill="none"
      aria-hidden="true"
      className="w-full h-auto max-w-[520px]"
    >
      {/* Browser window frame */}
      <rect x="40" y="20" width="440" height="320" rx="8" fill="white" stroke="#D1D5DB" strokeWidth="1.5" />
      {/* Browser toolbar */}
      <rect x="40" y="20" width="440" height="36" rx="8" fill="#F4F6F8" />
      <rect x="40" y="48" width="440" height="8" fill="#F4F6F8" />
      {/* Dots */}
      <circle cx="56" cy="38" r="5" fill="#C6C9CD" />
      <circle cx="72" cy="38" r="5" fill="#C6C9CD" />
      <circle cx="88" cy="38" r="5" fill="#C6C9CD" />
      {/* Address bar */}
      <rect x="110" y="30" width="260" height="16" rx="4" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      {/* Content area: hero section mockup */}
      <rect x="60" y="68" width="400" height="28" rx="3" fill="#E8DEF8" />
      <rect x="60" y="104" width="300" height="16" rx="3" fill="#E2E4E7" />
      <rect x="60" y="126" width="240" height="16" rx="3" fill="#7671FF" opacity="0.18" />
      {/* CTA button */}
      <rect x="60" y="158" width="140" height="32" rx="4" fill="url(#hero-btn-grad)" />
      {/* Image placeholder */}
      <rect x="270" y="104" width="190" height="130" rx="6" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <circle cx="365" cy="155" r="24" fill="#E8DEF8" opacity="0.5" />
      {/* Section 2 */}
      <rect x="60" y="252" width="130" height="18" rx="2" fill="#E2E4E7" />
      <rect x="60" y="278" width="400" height="12" rx="2" fill="#F4F6F8" />
      <rect x="60" y="296" width="360" height="12" rx="2" fill="#F4F6F8" />
      {/* Cards */}
      <rect x="60" y="320" width="120" height="50" rx="4" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="200" y="320" width="120" height="50" rx="4" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="340" y="320" width="120" height="50" rx="4" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <defs>
        <linearGradient id="hero-btn-grad" x1="0" y1="0" x2="1" y2="0">
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
      className="relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(118,113,255,0.06) 0%, rgba(203,12,159,0.03) 50%, transparent 100%)',
        paddingBlock: '60px',
      }}
    >
      <div className="max-content section-padding">
        <div className="flex flex-col md:flex-row items-center gap-[40px]">
          {/* Left column */}
          <div className="flex-1 text-center md:text-start">
            <h1 className="m-0">
              <span
                className="block text-[28px] sm:text-[40px] md:text-[48px] leading-[1.15]"
                style={{ color: '#2E2E2F' }}
              >
                {strings.heroLine1}
              </span>
              <span
                className="ai-gradient-text block text-[28px] sm:text-[40px] md:text-[48px] leading-[1.15]"
              >
                {strings.heroLine2}
              </span>
            </h1>
            <p
              className="mt-[20px] text-[15px] leading-relaxed max-w-[480px] mx-auto md:mx-0"
              style={{ color: '#636972' }}
            >
              {strings.heroSub}
            </p>
            <div className="mt-[30px] flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
              <a href={strings.aiBuilderUrl} className="btn-primary no-underline">
                {strings.heroPrimaryCTA}
              </a>
              <a href="#all-generators" className="btn-ghost no-underline">
                {strings.heroSecondaryCTA}
              </a>
            </div>
          </div>
          {/* Right column - illustration */}
          <div className="flex-1 flex justify-center md:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}