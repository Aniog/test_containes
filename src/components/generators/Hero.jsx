import { strings } from '@/data/strings'

const t = strings.en.hero

const HeroIllustration = () => (
  <svg
    width="480"
    height="360"
    viewBox="0 0 480 360"
    fill="none"
    aria-hidden="true"
    className="w-full max-w-[480px] h-auto"
  >
    {/* Browser window frame */}
    <rect x="40" y="40" width="400" height="280" rx="8" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.6"/>
    <rect x="40" y="40" width="400" height="30" rx="8" fill="none" stroke="#8159BB" strokeWidth="1.5" opacity="0.4"/>
    <circle cx="62" cy="55" r="5" fill="none" stroke="#CB0C9F" strokeWidth="1.2" opacity="0.5"/>
    <circle cx="80" cy="55" r="5" fill="none" stroke="#7671FF" strokeWidth="1.2" opacity="0.5"/>
    <circle cx="98" cy="55" r="5" fill="none" stroke="#8159BB" strokeWidth="1.2" opacity="0.5"/>
    {/* Content blocks */}
    <rect x="70" y="90" width="160" height="12" rx="3" fill="#8159BB" opacity="0.3"/>
    <rect x="70" y="112" width="120" height="8" rx="2" fill="#C6C9CD" opacity="0.5"/>
    <rect x="70" y="130" width="140" height="8" rx="2" fill="#C6C9CD" opacity="0.4"/>
    <rect x="70" y="160" width="80" height="28" rx="4" fill="none" stroke="#7671FF" strokeWidth="1.2" opacity="0.6"/>
    {/* Image placeholder */}
    <rect x="280" y="90" width="130" height="100" rx="6" fill="none" stroke="#CB0C9F" strokeWidth="1.2" opacity="0.4"/>
    <path d="M310 150 L330 130 L350 145 L370 120 L390 150" stroke="#8159BB" strokeWidth="1.2" fill="none" opacity="0.5"/>
    {/* Cards row */}
    <rect x="70" y="210" width="100" height="80" rx="4" fill="none" stroke="#C6C9CD" strokeWidth="1" opacity="0.6"/>
    <rect x="185" y="210" width="100" height="80" rx="4" fill="none" stroke="#C6C9CD" strokeWidth="1" opacity="0.6"/>
    <rect x="300" y="210" width="100" height="80" rx="4" fill="none" stroke="#C6C9CD" strokeWidth="1" opacity="0.6"/>
    {/* Sparkle accents */}
    <path d="M420 80 L424 90 L420 100 L416 90Z" fill="#7671FF" opacity="0.4"/>
    <path d="M60 300 L63 307 L60 314 L57 307Z" fill="#CB0C9F" opacity="0.3"/>
  </svg>
)

const Hero = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Faint purple-to-pink wash */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, #7671FF, transparent 60%), radial-gradient(ellipse at 70% 80%, #CB0C9F, transparent 60%)' }}
        aria-hidden="true"
      />
      <div className="max-w-[1200px] mx-auto px-5 py-[60px] md:py-[80px] relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left column */}
          <div className="flex-1 text-center md:text-start">
            <h1 className="font-heading text-3xl md:text-5xl mb-5">
              <span className="text-heading-dark block">{t.h1Line1}</span>
              <span className="ai-gradient-text block">{t.h1Line2}</span>
            </h1>
            <p className="text-body-text text-base mb-8 max-w-[480px] mx-auto md:mx-0">
              {t.sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center md:justify-start">
              <a
                href="/s/ai_site_builder"
                className="ai-gradient-bg text-white font-heading text-sm px-6 h-[44px] inline-flex items-center justify-center rounded hover:opacity-90 transition-opacity"
              >
                {t.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                className="border border-brand-purple text-brand-purple font-heading text-sm px-6 h-[36px] inline-flex items-center justify-center rounded hover:bg-brand-purple hover:text-white transition-colors"
              >
                {t.ctaSecondary}
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
  )
}

export default Hero
