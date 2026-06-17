import React from 'react';
import { strings } from '@/data/strings';

const s = strings.en;

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 70% 30%, rgba(118,113,255,0.06) 0%, rgba(203,12,159,0.04) 40%, transparent 70%)',
      }}
    >
      <div className="section-wrapper py-[60px] md:py-[80px]">
        <div className="flex flex-col-reverse md:flex-row items-center gap-[40px]">
          {/* Left column */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="m-0 mb-[20px]">
              <span className="block text-[28px] md:text-[40px] lg:text-[48px] text-heading-dark leading-[1.2]">
                {s.hero.h1Line1}
              </span>
              <span className="block text-[28px] md:text-[40px] lg:text-[48px] ai-gradient-text leading-[1.2]">
                {s.hero.h1Line2}
              </span>
            </h1>
            <p className="text-body-text text-[15px] md:text-[16px] max-w-[520px] mx-auto md:mx-0 mb-[30px] leading-[1.6]">
              {s.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-[10px] justify-center md:justify-start">
              <a href="/s/ai_site_builder" className="btn-primary no-underline text-center min-w-[220px]">
                {s.hero.primaryCta}
              </a>
              <a href="#all-generators" className="btn-ghost no-underline text-center min-w-[220px]">
                {s.hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Right column - SVG illustration */}
          <div className="flex-1 flex justify-center" aria-hidden="true">
            <svg
              width="480"
              height="360"
              viewBox="0 0 480 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[480px] h-auto"
            >
              {/* Browser frame */}
              <rect x="40" y="20" width="400" height="280" rx="12" stroke="#8159BB" strokeWidth="2" fill="white" opacity="0.9" />
              {/* Title bar */}
              <rect x="40" y="20" width="400" height="36" rx="12" fill="#F4F6F8" />
              <rect x="40" y="44" width="400" height="12" fill="#F4F6F8" />
              {/* Dots */}
              <circle cx="62" cy="38" r="5" fill="#E2E4E7" />
              <circle cx="80" cy="38" r="5" fill="#E2E4E7" />
              <circle cx="98" cy="38" r="5" fill="#E2E4E7" />
              {/* URL bar */}
              <rect x="120" y="30" width="200" height="16" rx="8" fill="white" stroke="#E2E4E7" strokeWidth="1" />
              {/* Hero area */}
              <rect x="60" y="70" width="360" height="80" rx="4" fill="url(#heroGrad)" opacity="0.12" />
              <rect x="80" y="90" width="140" height="10" rx="2" fill="#8159BB" opacity="0.3" />
              <rect x="80" y="110" width="200" height="8" rx="2" fill="#C6C9CD" opacity="0.5" />
              <rect x="80" y="124" width="160" height="8" rx="2" fill="#C6C9CD" opacity="0.4" />
              {/* CTA button */}
              <rect x="80" y="142" width="100" height="24" rx="4" fill="url(#heroGrad)" opacity="0.7" />
              {/* Cards row */}
              <rect x="60" y="170" width="110" height="100" rx="4" fill="white" stroke="#E2E4E7" strokeWidth="1" />
              <rect x="185" y="170" width="110" height="100" rx="4" fill="white" stroke="#E2E4E7" strokeWidth="1" />
              <rect x="310" y="170" width="110" height="100" rx="4" fill="white" stroke="#E2E4E7" strokeWidth="1" />
              {/* Card content */}
              <rect x="72" y="182" width="86" height="8" rx="2" fill="#8159BB" opacity="0.2" />
              <rect x="72" y="198" width="86" height="40" rx="2" fill="#F4F6F8" />
              <rect x="72" y="246" width="60" height="6" rx="2" fill="#C6C9CD" opacity="0.5" />
              <rect x="197" y="182" width="86" height="8" rx="2" fill="#8159BB" opacity="0.2" />
              <rect x="197" y="198" width="86" height="40" rx="2" fill="#F4F6F8" />
              <rect x="197" y="246" width="60" height="6" rx="2" fill="#C6C9CD" opacity="0.5" />
              <rect x="322" y="182" width="86" height="8" rx="2" fill="#8159BB" opacity="0.2" />
              <rect x="322" y="198" width="86" height="40" rx="2" fill="#F4F6F8" />
              <rect x="322" y="246" width="60" height="6" rx="2" fill="#C6C9CD" opacity="0.5" />
              {/* Sparkle accents */}
              <circle cx="420" cy="40" r="3" fill="#7671FF" opacity="0.4" />
              <circle cx="440" cy="60" r="2" fill="#CB0C9F" opacity="0.3" />
              <circle cx="30" cy="280" r="2" fill="#7671FF" opacity="0.3" />
              <circle cx="460" cy="260" r="3" fill="#CB0C9F" opacity="0.2" />
              <defs>
                <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7671FF" />
                  <stop offset="100%" stopColor="#CB0C9F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
