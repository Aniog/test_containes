export default function Hero({ t }) {
  return (
    <section className="relative overflow-hidden py-[60px] md:py-[80px]">
      {/* Faint purple-to-pink wash */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, #7671FF, transparent 60%), radial-gradient(ellipse at 70% 50%, #CB0C9F, transparent 60%)' }} aria-hidden="true" />
      
      <div className="relative max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row items-center gap-10">
        {/* Left column */}
        <div className="flex-1 text-center md:text-start">
          <h1 className="text-[28px] md:text-[44px] leading-[1.2] mb-5">
            <span className="block text-heading-dark">{t.h1Line1}</span>
            <span className="block ai-gradient-text">{t.h1Line2}</span>
          </h1>
          <p className="text-body-text text-[16px] leading-relaxed mb-8 max-w-[480px] mx-auto md:mx-0">
            {t.sub}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-[10px] justify-center md:justify-start">
            <a
              href="/s/ai_site_builder"
              className="inline-flex items-center justify-center h-[44px] px-[20px] rounded-[4px] ai-gradient-bg text-white font-heading font-bold text-[14px] uppercase tracking-wide hover:opacity-90 transition-opacity focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
            >
              {t.ctaPrimary}
            </a>
            <a
              href="#all-generators"
              className="inline-flex items-center justify-center h-[44px] px-[20px] rounded-[4px] border border-brand-purple text-brand-purple font-heading font-bold text-[14px] uppercase tracking-wide hover:bg-brand-purple/5 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Right column - illustration */}
        <div className="flex-1 flex justify-center" aria-hidden="true">
          <svg width="400" height="300" viewBox="0 0 400 300" fill="none" className="w-full max-w-[400px] h-auto">
            {/* Browser window frame */}
            <rect x="40" y="30" width="320" height="240" rx="8" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.6"/>
            <rect x="40" y="30" width="320" height="28" rx="8" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1.5" opacity="0.4"/>
            <circle cx="60" cy="44" r="4" fill="#CB0C9F" opacity="0.5"/>
            <circle cx="74" cy="44" r="4" fill="#7671FF" opacity="0.5"/>
            <circle cx="88" cy="44" r="4" fill="#8159BB" opacity="0.5"/>
            {/* Content lines */}
            <rect x="70" y="80" width="120" height="10" rx="3" fill="#8159BB" opacity="0.2"/>
            <rect x="70" y="100" width="180" height="6" rx="3" fill="#C6C9CD" opacity="0.4"/>
            <rect x="70" y="114" width="160" height="6" rx="3" fill="#C6C9CD" opacity="0.3"/>
            {/* Cards */}
            <rect x="70" y="140" width="80" height="60" rx="4" stroke="#C6C9CD" strokeWidth="1" fill="white"/>
            <rect x="80" y="152" width="60" height="6" rx="2" fill="#8159BB" opacity="0.3"/>
            <rect x="80" y="164" width="50" height="4" rx="2" fill="#C6C9CD" opacity="0.4"/>
            <rect x="170" y="140" width="80" height="60" rx="4" stroke="#C6C9CD" strokeWidth="1" fill="white"/>
            <rect x="180" y="152" width="60" height="6" rx="2" fill="#7671FF" opacity="0.3"/>
            <rect x="180" y="164" width="50" height="4" rx="2" fill="#C6C9CD" opacity="0.4"/>
            <rect x="270" y="140" width="80" height="60" rx="4" stroke="#C6C9CD" strokeWidth="1" fill="white"/>
            <rect x="280" y="152" width="60" height="6" rx="2" fill="#CB0C9F" opacity="0.3"/>
            <rect x="280" y="164" width="50" height="4" rx="2" fill="#C6C9CD" opacity="0.4"/>
            {/* Sparkle accents */}
            <path d="M330 70l4-8 4 8-4 8z" fill="#7671FF" opacity="0.4"/>
            <path d="M60 240l3-6 3 6-3 6z" fill="#CB0C9F" opacity="0.4"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
