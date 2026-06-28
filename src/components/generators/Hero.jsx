import strings from '@/data/strings.en';

export default function Hero() {
  const s = strings.hero;
  return (
    <section className="w-full hero-wash">
      <div className="max-w-[1200px] mx-auto px-5 py-[60px] md:py-[80px] flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left column */}
        <div className="flex-1 min-w-0">
          <h1 className="m-0 mb-5">
            <span
              className="block text-[28px] md:text-[40px] lg:text-[48px] leading-tight"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', color: '#2E2E2F' }}
            >
              {s.h1Line1}
            </span>
            <span
              className="block text-[28px] md:text-[40px] lg:text-[48px] leading-tight ai-gradient-text"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}
            >
              {s.h1Line2}
            </span>
          </h1>
          <p
            className="text-[14px] md:text-[16px] mb-8 max-w-[480px]"
            style={{ color: '#636972', lineHeight: 1.5 }}
          >
            {s.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px]">
            <a href="/s/ai_site_builder" className="primary-btn">
              {s.primaryCta}
            </a>
            <a href="#all-generators" className="secondary-btn">
              {s.secondaryCta}
            </a>
          </div>
        </div>

        {/* Right column - SVG illustration */}
        <div className="flex-shrink-0 hidden md:flex items-center justify-center" aria-hidden="true">
          <svg width="360" height="280" viewBox="0 0 360 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Browser frame */}
            <rect x="20" y="20" width="320" height="240" rx="8" stroke="#8159BB" strokeWidth="2" fill="white" fillOpacity="0.5" />
            {/* Title bar */}
            <rect x="20" y="20" width="320" height="32" rx="8" fill="#8159BB" fillOpacity="0.08" />
            <rect x="20" y="44" width="320" height="8" fill="#8159BB" fillOpacity="0.08" />
            {/* Dots */}
            <circle cx="38" cy="36" r="4" fill="#7671FF" fillOpacity="0.5" />
            <circle cx="52" cy="36" r="4" fill="#8159BB" fillOpacity="0.5" />
            <circle cx="66" cy="36" r="4" fill="#CB0C9F" fillOpacity="0.5" />
            {/* Content blocks */}
            <rect x="40" y="68" width="140" height="12" rx="2" fill="#8159BB" fillOpacity="0.15" />
            <rect x="40" y="88" width="200" height="8" rx="2" fill="#C6C9CD" fillOpacity="0.4" />
            <rect x="40" y="102" width="180" height="8" rx="2" fill="#C6C9CD" fillOpacity="0.3" />
            {/* Image placeholder */}
            <rect x="40" y="124" width="120" height="80" rx="4" fill="#8159BB" fillOpacity="0.08" stroke="#8159BB" strokeOpacity="0.2" strokeWidth="1" />
            <path d="M70 174 L90 154 L110 168 L130 148 L150 164 L150 198 L70 198Z" fill="#8159BB" fillOpacity="0.12" />
            <circle cx="65" cy="144" r="8" fill="#CB0C9F" fillOpacity="0.15" />
            {/* Sidebar blocks */}
            <rect x="180" y="124" width="140" height="16" rx="2" fill="#8159BB" fillOpacity="0.12" />
            <rect x="180" y="148" width="140" height="8" rx="2" fill="#C6C9CD" fillOpacity="0.3" />
            <rect x="180" y="162" width="120" height="8" rx="2" fill="#C6C9CD" fillOpacity="0.25" />
            <rect x="180" y="176" width="100" height="28" rx="4" fill="url(#heroGrad)" fillOpacity="0.2" />
            {/* CTA button in mockup */}
            <rect x="180" y="216" width="80" height="24" rx="4" fill="url(#heroGrad)" />
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7671FF" />
                <stop offset="100%" stopColor="#CB0C9F" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
