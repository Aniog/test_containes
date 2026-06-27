import React from 'react';
import strings from '../strings';

export default function Hero() {
  const t = strings.en;

  return (
    <section className="relative overflow-hidden" style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 40%, rgba(118,113,255,0.06), rgba(203,12,159,0.03) 50%, transparent 70%)' }}>
      <div className="max-w-[1200px] mx-auto px-5 py-[60px] md:py-[80px] flex flex-col md:flex-row items-center gap-10">
        {/* Left column */}
        <div className="flex-1 text-center md:text-start">
          <h1 className="m-0 mb-5">
            <span className="block text-[32px] md:text-[48px] font-heading font-bold uppercase leading-[1.2] text-[#2E2E2F]">
              {t.heroLine1}
            </span>
            <span className="block text-[32px] md:text-[48px] font-heading font-bold uppercase leading-[1.2] ai-gradient-text">
              {t.heroLine2}
            </span>
          </h1>
          <p className="text-[14px] md:text-[16px] leading-[1.5] text-[#636972] max-w-[480px] mb-[30px]">
            {t.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
            <a href="/s/ai_site_builder" className="btn-primary btn-lg">
              {t.heroPrimaryCta}
            </a>
            <a href="#all-generators" className="btn-ghost btn-lg">
              {t.heroSecondaryCta}
            </a>
          </div>
        </div>

        {/* Right column: SVG illustration */}
        <div className="flex-1 flex justify-center">
          <svg
            aria-hidden="true"
            width="420"
            height="300"
            viewBox="0 0 420 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[420px] h-auto"
          >
            <rect x="40" y="20" width="340" height="240" rx="6" stroke="#8159BB" strokeWidth="1.5" fill="white" />
            <rect x="40" y="20" width="340" height="40" rx="6" fill="url(#heroGrad)" />
            <rect x="40" y="40" width="340" height="20" fill="url(#heroGrad)" />
            <circle cx="65" cy="40" r="5" fill="white" opacity="0.8" />
            <circle cx="80" cy="40" r="5" fill="white" opacity="0.5" />
            <circle cx="95" cy="40" r="5" fill="white" opacity="0.3" />
            <rect x="60" y="80" width="140" height="8" rx="4" fill="#E2E4E7" />
            <rect x="60" y="96" width="200" height="8" rx="4" fill="#E2E4E7" />
            <rect x="60" y="112" width="100" height="8" rx="4" fill="#E2E4E7" />
            <rect x="60" y="140" width="300" height="90" rx="4" fill="#F4F6F8" />
            <rect x="80" y="155" width="120" height="6" rx="3" fill="#C6C9CD" />
            <rect x="80" y="170" width="260" height="6" rx="3" fill="#E2E4E7" />
            <rect x="80" y="185" width="200" height="6" rx="3" fill="#E2E4E7" />
            <rect x="80" y="200" width="160" height="6" rx="3" fill="#E2E4E7" />
            <rect x="280" y="155" width="60" height="16" rx="8" fill="#8159BB" opacity="0.2" />
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#7671FF" />
                <stop offset="1" stopColor="#CB0C9F" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
