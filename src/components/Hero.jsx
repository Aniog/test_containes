import React from 'react';
import strings from '@/data/strings.en';

export default function Hero() {
  const s = strings.hero;
  return (
    <section className="w-full relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(118,113,255,0.06) 0%, rgba(203,12,159,0.04) 40%, transparent 70%)' }}>
      <div className="section-container py-[60px] md:py-[80px]">
        <div className="flex flex-col md:flex-row items-center gap-[40px]">
          {/* Left column */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-heading font-bold leading-[1.1] mb-[20px]">
              <span className="block text-[28px] md:text-[40px] lg:text-[48px]" style={{ color: 'var(--hero-text)' }}>
                {s.h1Line1}
              </span>
              <span className="block text-[28px] md:text-[40px] lg:text-[48px] ai-gradient-text">
                {s.h1Line2}
              </span>
            </h1>
            <p className="text-[16px] md:text-[18px] mb-[30px] max-w-[520px] mx-auto md:mx-0" style={{ color: 'var(--body-text)', lineHeight: 1.5 }}>
              {s.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-[10px] justify-center md:justify-start">
              <a href="/s/ai_site_builder" className="btn-primary text-[14px] px-[20px]">
                {s.primaryCta}
              </a>
              <a href="#all-generators" className="btn-ghost text-[14px] px-[20px]">
                {s.secondaryCta}
              </a>
            </div>
          </div>
          {/* Right column - SVG illustration */}
          <div className="flex-1 flex justify-center md:justify-end">
            <svg aria-hidden="true" width="440" height="340" viewBox="0 0 440 340" fill="none" className="w-full max-w-[440px]">
              {/* Browser frame */}
              <rect x="40" y="20" width="360" height="260" rx="8" stroke="#8159BB" strokeWidth="2" fill="white" opacity="0.9" />
              {/* Title bar */}
              <rect x="40" y="20" width="360" height="32" rx="8" fill="#F4F6F8" />
              <rect x="40" y="44" width="360" height="8" fill="#F4F6F8" />
              {/* Dots */}
              <circle cx="60" cy="36" r="5" fill="#E2E4E7" />
              <circle cx="76" cy="36" r="5" fill="#E2E4E7" />
              <circle cx="92" cy="36" r="5" fill="#E2E4E7" />
              {/* URL bar */}
              <rect x="110" y="30" width="200" height="12" rx="6" fill="white" stroke="#E2E4E7" strokeWidth="1" />
              {/* Hero section placeholder */}
              <rect x="60" y="68" width="320" height="60" rx="4" fill="url(#hero-grad1)" opacity="0.15" />
              <rect x="120" y="78" width="200" height="10" rx="2" fill="#8159BB" opacity="0.3" />
              <rect x="150" y="96" width="140" height="8" rx="2" fill="#C6C9CD" opacity="0.5" />
              {/* Content blocks */}
              <rect x="60" y="140" width="150" height="80" rx="4" fill="#F4F6F8" />
              <rect x="230" y="140" width="150" height="80" rx="4" fill="#F4F6F8" />
              <rect x="75" y="155" width="120" height="8" rx="2" fill="#C6C9CD" />
              <rect x="75" y="170" width="100" height="6" rx="2" fill="#E2E4E7" />
              <rect x="75" y="182" width="110" height="6" rx="2" fill="#E2E4E7" />
              <rect x="245" y="155" width="120" height="8" rx="2" fill="#C6C9CD" />
              <rect x="245" y="170" width="100" height="6" rx="2" fill="#E2E4E7" />
              <rect x="245" y="182" width="110" height="6" rx="2" fill="#E2E4E7" />
              {/* CTA button */}
              <rect x="160" y="235" width="120" height="28" rx="4" fill="url(#hero-grad2)" opacity="0.6" />
              {/* Sparkle decorations */}
              <circle cx="30" cy="60" r="3" fill="#7671FF" opacity="0.4" />
              <circle cx="420" cy="100" r="4" fill="#CB0C9F" opacity="0.3" />
              <circle cx="400" cy="280" r="3" fill="#7671FF" opacity="0.3" />
              <circle cx="20" cy="250" r="2" fill="#CB0C9F" opacity="0.4" />
              {/* AI wand */}
              <line x1="380" y1="40" x2="410" y2="10" stroke="#8159BB" strokeWidth="2" opacity="0.5" />
              <circle cx="412" cy="8" r="4" fill="#8159BB" opacity="0.5" />
              <defs>
                <linearGradient id="hero-grad1" x1="60" y1="68" x2="380" y2="128">
                  <stop stopColor="#7671FF" />
                  <stop offset="1" stopColor="#CB0C9F" />
                </linearGradient>
                <linearGradient id="hero-grad2" x1="160" y1="235" x2="280" y2="263">
                  <stop stopColor="#7671FF" />
                  <stop offset="1" stopColor="#CB0C9F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
