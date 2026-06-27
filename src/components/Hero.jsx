const HeroIllustration = () => (
  <svg
    width="480"
    height="360"
    viewBox="0 0 480 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-full h-auto max-w-[480px]"
  >
    {/* Browser window frame */}
    <rect x="40" y="40" width="400" height="280" rx="8" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.6" />
    <rect x="40" y="40" width="400" height="30" rx="8" fill="none" stroke="#8159BB" strokeWidth="1.5" opacity="0.4" />
    <circle cx="62" cy="55" r="5" fill="none" stroke="#CB0C9F" strokeWidth="1.2" opacity="0.5" />
    <circle cx="80" cy="55" r="5" fill="none" stroke="#7671FF" strokeWidth="1.2" opacity="0.5" />
    <circle cx="98" cy="55" r="5" fill="none" stroke="#8159BB" strokeWidth="1.2" opacity="0.5" />
    {/* Header bar */}
    <rect x="60" y="85" width="120" height="8" rx="4" fill="#8159BB" opacity="0.2" />
    <rect x="340" y="85" width="80" height="8" rx="4" fill="#7671FF" opacity="0.3" />
    {/* Hero section mockup */}
    <rect x="60" y="110" width="180" height="12" rx="4" fill="#8159BB" opacity="0.35" />
    <rect x="60" y="130" width="140" height="8" rx="4" fill="#CB0C9F" opacity="0.25" />
    <rect x="60" y="150" width="200" height="6" rx="3" fill="#636972" opacity="0.15" />
    <rect x="60" y="162" width="160" height="6" rx="3" fill="#636972" opacity="0.15" />
    {/* CTA button mockup */}
    <rect x="60" y="182" width="100" height="24" rx="4" fill="url(#heroGrad)" opacity="0.4" />
    {/* Image placeholder */}
    <rect x="280" y="110" width="140" height="96" rx="6" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.3" />
    <path d="M320 158 L340 140 L360 155 L380 135 L400 158" stroke="#CB0C9F" strokeWidth="1" fill="none" opacity="0.3" />
    {/* Content blocks */}
    <rect x="60" y="230" width="100" height="60" rx="4" stroke="#C6C9CD" strokeWidth="1" fill="none" opacity="0.5" />
    <rect x="180" y="230" width="100" height="60" rx="4" stroke="#C6C9CD" strokeWidth="1" fill="none" opacity="0.5" />
    <rect x="300" y="230" width="100" height="60" rx="4" stroke="#C6C9CD" strokeWidth="1" fill="none" opacity="0.5" />
    {/* Small lines inside cards */}
    <rect x="70" y="245" width="60" height="5" rx="2" fill="#8159BB" opacity="0.2" />
    <rect x="70" y="256" width="80" height="4" rx="2" fill="#636972" opacity="0.1" />
    <rect x="190" y="245" width="60" height="5" rx="2" fill="#8159BB" opacity="0.2" />
    <rect x="190" y="256" width="80" height="4" rx="2" fill="#636972" opacity="0.1" />
    <rect x="310" y="245" width="60" height="5" rx="2" fill="#8159BB" opacity="0.2" />
    <rect x="310" y="256" width="80" height="4" rx="2" fill="#636972" opacity="0.1" />
    <defs>
      <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7671FF" />
        <stop offset="100%" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
  </svg>
);

const Hero = ({ t }) => {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Faint purple-to-pink wash */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, #7671FF, transparent 60%), radial-gradient(ellipse at 70% 80%, #CB0C9F, transparent 60%)' }}
        aria-hidden="true"
      />
      <div className="max-w-[1200px] mx-auto px-5 py-[60px] md:py-[80px] relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-[40px]">
          {/* Left column */}
          <div className="flex-1 text-center md:text-start">
            <h1 className="text-[28px] md:text-[44px] leading-[1.2] mb-[20px]">
              <span className="block text-heading-dark">{t.hero.h1Line1}</span>
              <span className="block ai-gradient-text">{t.hero.h1Line2}</span>
            </h1>
            <p className="text-body-text text-[16px] leading-[1.5] mb-[30px] max-w-[480px] mx-auto md:mx-0">
              {t.hero.sub}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-[10px] justify-center md:justify-start">
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-[44px] px-[20px] rounded-[4px] ai-gradient-bg text-white font-heading text-[14px] uppercase tracking-wide hover:opacity-90 transition-opacity focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-[36px] px-[15px] rounded-[4px] border border-brand-purple text-brand-purple font-heading text-[14px] uppercase tracking-wide hover:bg-brand-purple/5 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          {/* Right column */}
          <div className="flex-1 flex justify-center">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
