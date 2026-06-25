export default function Hero({ t }) {
  return (
    <section className="relative py-[60px] md:py-[80px] overflow-hidden">
      {/* Faint purple-to-pink wash */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, #7671FF, transparent 60%), radial-gradient(ellipse at 70% 50%, #CB0C9F, transparent 60%)' }}
        aria-hidden="true"
      />
      <div className="relative max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center">
        {/* Left column */}
        <div>
          <h1 className="font-heading m-0 mb-[20px]">
            <span className="block text-[28px] md:text-[44px] text-heading-dark">
              {t.hero.h1Line1}
            </span>
            <span className="block text-[28px] md:text-[44px] ai-gradient-text">
              {t.hero.h1Line2}
            </span>
          </h1>
          <p className="text-body-text text-[16px] leading-relaxed m-0 mb-[30px] max-w-[480px]">
            {t.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px]">
            <a
              href="/s/ai_site_builder"
              className="inline-flex items-center justify-center h-[44px] px-[20px] rounded-[4px] ai-gradient-bg text-white font-heading text-[14px] tracking-wide"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#all-generators"
              className="inline-flex items-center justify-center h-[44px] px-[20px] rounded-[4px] border border-brand-purple text-brand-purple font-heading text-[14px] tracking-wide bg-transparent"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>
        {/* Right column - SVG illustration */}
        <div className="flex justify-center md:justify-end" aria-hidden="true">
          <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[400px] h-auto">
            {/* Browser window frame */}
            <rect x="40" y="30" width="320" height="240" rx="8" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.6" />
            <rect x="40" y="30" width="320" height="30" rx="8" fill="none" stroke="#8159BB" strokeWidth="1.5" opacity="0.4" />
            <circle cx="60" cy="45" r="4" fill="#8159BB" opacity="0.4" />
            <circle cx="75" cy="45" r="4" fill="#8159BB" opacity="0.3" />
            <circle cx="90" cy="45" r="4" fill="#8159BB" opacity="0.2" />
            {/* Content lines */}
            <rect x="70" y="80" width="120" height="10" rx="3" fill="#8159BB" opacity="0.2" />
            <rect x="70" y="100" width="180" height="6" rx="3" fill="#8159BB" opacity="0.12" />
            <rect x="70" y="115" width="160" height="6" rx="3" fill="#8159BB" opacity="0.12" />
            {/* Image placeholder */}
            <rect x="70" y="140" width="260" height="80" rx="4" fill="#8159BB" opacity="0.08" stroke="#8159BB" strokeWidth="1" opacity="0.2" />
            {/* CTA button */}
            <rect x="70" y="235" width="100" height="20" rx="4" fill="#8159BB" opacity="0.2" />
            {/* Floating elements */}
            <rect x="280" y="80" width="50" height="50" rx="6" fill="none" stroke="#CB0C9F" strokeWidth="1" opacity="0.3" />
            <path d="M295 100 L310 110 L320 95" stroke="#CB0C9F" strokeWidth="1.5" opacity="0.4" fill="none" />
            {/* Sparkle */}
            <path d="M330 40 L333 48 L340 45 L333 50 L336 58 L330 52 L324 58 L327 50 L320 45 L327 48 Z" fill="#7671FF" opacity="0.4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
