export default function Hero({ t }) {
  return (
    <section className="relative py-[60px] md:py-[80px] overflow-hidden">
      {/* Faint purple-to-pink wash */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, #7671FF, transparent 60%), radial-gradient(ellipse at 70% 80%, #CB0C9F, transparent 60%)' }}
        aria-hidden="true"
      />
      <div className="relative max-w-[1200px] mx-auto px-[20px] grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center">
        {/* Left column */}
        <div>
          <h1 className="text-[28px] md:text-[44px] leading-[1.2] mb-[20px]">
            <span className="block text-heading-dark">{t.hero.h1Line1}</span>
            <span className="block ai-gradient-text">{t.hero.h1Line2}</span>
          </h1>
          <p className="text-body-text text-[16px] leading-[1.6] mb-[30px] max-w-[480px]">
            {t.hero.sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px]">
            <a
              href="/s/ai_site_builder"
              className="ai-gradient-bg text-white font-heading text-[14px] uppercase h-[44px] px-[20px] rounded-[4px] inline-flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#all-generators"
              className="border border-brand-purple text-brand-purple font-heading text-[14px] uppercase h-[44px] px-[20px] rounded-[4px] inline-flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
        {/* Right column - illustration */}
        <div className="flex justify-center md:justify-end" aria-hidden="true">
          <svg width="400" height="300" viewBox="0 0 400 300" fill="none" className="w-full max-w-[400px] h-auto">
            {/* Browser window frame */}
            <rect x="40" y="30" width="320" height="240" rx="8" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.6"/>
            <rect x="40" y="30" width="320" height="30" rx="8" fill="none" stroke="#8159BB" strokeWidth="1.5" opacity="0.4"/>
            <circle cx="60" cy="45" r="4" fill="#C6C9CD"/>
            <circle cx="75" cy="45" r="4" fill="#C6C9CD"/>
            <circle cx="90" cy="45" r="4" fill="#C6C9CD"/>
            {/* Content lines */}
            <rect x="70" y="80" width="120" height="10" rx="3" fill="#8159BB" opacity="0.3"/>
            <rect x="70" y="100" width="180" height="6" rx="3" fill="#C6C9CD" opacity="0.5"/>
            <rect x="70" y="115" width="160" height="6" rx="3" fill="#C6C9CD" opacity="0.5"/>
            {/* Image placeholder */}
            <rect x="70" y="140" width="260" height="80" rx="4" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.3"/>
            <path d="M150 180 L180 160 L210 185 L240 155 L280 190" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.4"/>
            {/* Sparkle accents */}
            <path d="M320 70 L325 80 L330 70 L325 60 Z" fill="#7671FF" opacity="0.5"/>
            <path d="M350 120 L353 127 L356 120 L353 113 Z" fill="#CB0C9F" opacity="0.5"/>
            <circle cx="55" cy="250" r="3" fill="#7671FF" opacity="0.3"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
