import { strings } from '../../data/strings'

const t = strings.en.hero

function HeroIllustration() {
  return (
    <svg
      width="480"
      height="360"
      viewBox="0 0 480 360"
      fill="none"
      aria-hidden="true"
      className="w-full max-w-[480px] h-auto"
    >
      {/* Browser window frame */}
      <rect x="40" y="30" width="400" height="300" rx="8" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <rect x="40" y="30" width="400" height="30" rx="8" fill="none" stroke="#8159BB" strokeWidth="1.5" opacity="0.4"/>
      <circle cx="62" cy="45" r="5" fill="none" stroke="#8159BB" strokeWidth="1.2" opacity="0.5"/>
      <circle cx="80" cy="45" r="5" fill="none" stroke="#8159BB" strokeWidth="1.2" opacity="0.5"/>
      <circle cx="98" cy="45" r="5" fill="none" stroke="#8159BB" strokeWidth="1.2" opacity="0.5"/>
      {/* Header bar */}
      <rect x="60" y="75" width="360" height="8" rx="4" fill="#8159BB" opacity="0.15"/>
      {/* Hero block */}
      <rect x="60" y="100" width="200" height="12" rx="4" fill="#8159BB" opacity="0.25"/>
      <rect x="60" y="120" width="160" height="8" rx="4" fill="#8159BB" opacity="0.12"/>
      <rect x="60" y="140" width="100" height="24" rx="4" fill="url(#heroGrad)" opacity="0.6"/>
      {/* Image placeholder */}
      <rect x="280" y="95" width="140" height="80" rx="6" stroke="#8159BB" strokeWidth="1.2" fill="none" opacity="0.3"/>
      <path d="M310 155 l25-20 l15 10 l20-25 l25 35" stroke="#8159BB" strokeWidth="1.2" fill="none" opacity="0.4"/>
      {/* Content blocks */}
      <rect x="60" y="195" width="160" height="60" rx="4" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.2"/>
      <rect x="240" y="195" width="160" height="60" rx="4" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.2"/>
      <rect x="60" y="275" width="360" height="8" rx="4" fill="#8159BB" opacity="0.1"/>
      <rect x="60" y="290" width="280" height="8" rx="4" fill="#8159BB" opacity="0.08"/>
      {/* Sparkle accents */}
      <path d="M420 80 l3-8 l3 8 l-8-3 l8-3z" fill="#7671FF" opacity="0.6"/>
      <path d="M70 270 l2-6 l2 6 l-6-2 l6-2z" fill="#CB0C9F" opacity="0.5"/>
      <defs>
        <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7671FF"/>
          <stop offset="100%" stopColor="#CB0C9F"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Faint purple-to-pink wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(118,113,255,0.04) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(203,12,159,0.03) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />
      <div className="max-w-content mx-auto px-5 py-16 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left column */}
          <div className="flex-1 text-center md:text-start">
            <h1 className="font-heading font-bold uppercase leading-tight text-3xl md:text-[44px]">
              <span className="text-heading-dark block">{t.h1Line1}</span>
              <span className="ai-gradient-text block">{t.h1Line2}</span>
            </h1>
            <p className="mt-5 text-body-text font-body text-base max-w-[480px] mx-auto md:mx-0">
              {t.sub}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-2.5 justify-center md:justify-start">
              <a
                href="/s/ai_site_builder"
                className="ai-gradient-bg text-white font-heading font-bold uppercase text-sm h-11 px-6 rounded inline-flex items-center justify-center transition-shadow hover:shadow-lg focus-ring"
              >
                {t.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                className="bg-transparent border border-brand-purple text-brand-purple font-heading font-bold uppercase text-sm h-11 px-6 rounded inline-flex items-center justify-center transition-colors hover:bg-brand-purple hover:text-white focus-ring"
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
