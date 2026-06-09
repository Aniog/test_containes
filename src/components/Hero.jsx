import React from 'react';
import { strings } from '../strings';

export const Hero = () => {
  const s = strings.en.hero;
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:py-20 bg-gradient-to-b from-[#f9f9ff] to-white">
      <div className="container-custom grid gap-12 md:grid-cols-2 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="flex flex-col">
            <span className="text-[var(--heading-dark)]">{s.h1Line1}</span>
            <span className="ai-text-gradient">{s.h1Line2}</span>
          </h1>
          <p className="text-[16px] text-[var(--body-text)] max-w-[480px] mx-auto md:mx-0">
            {s.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
            <a href="/s/ai_site_builder" className="btn btn-big btn-primary">
              {s.ctaPrimary}
            </a>
            <a href="#all-generators" className="btn btn-big btn-ghost">
              {s.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="relative order-first md:order-last">
          <div className="aspect-[4/3] w-full max-w-[500px] mx-auto bg-white rounded-xl shadow-2xl p-4 border border-[var(--divider)]">
            <svg
              width="500"
              height="375"
              viewBox="0 0 500 375"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              aria-hidden="true"
            >
              <rect width="500" height="375" rx="8" fill="#F4F6F8" />
              <rect x="20" y="20" width="460" height="40" rx="4" fill="#E2E4E7" />
              <rect x="20" y="80" width="120" height="120" rx="4" fill="#8159BB" fillOpacity="0.1" />
              <rect x="160" y="80" width="320" height="20" rx="4" fill="#E2E4E7" />
              <rect x="160" y="110" width="280" height="15" rx="4" fill="#E2E4E7" opacity="0.6" />
              <rect x="160" y="135" width="200" height="15" rx="4" fill="#E2E4E7" opacity="0.6" />
              <rect x="20" y="220" width="220" height="135" rx="4" fill="#E2E4E7" opacity="0.4" />
              <rect x="260" y="220" width="220" height="135" rx="4" fill="#E2E4E7" opacity="0.4" />
              <path d="M250 187.5 L260 197.5 L240 197.5 Z" fill="#8159BB" opacity="0.2" />
            </svg>
          </div>
          {/* Subtle line art accents */}
          <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 rounded-full border border-[var(--brand-purple)] opacity-10 animate-pulse"></div>
          <div className="absolute -z-10 -bottom-10 -left-10 w-60 h-60 rounded-full border border-[var(--brand-purple)] opacity-5"></div>
        </div>
      </div>
    </section>
  );
};
