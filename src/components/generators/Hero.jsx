import { strings } from '@/data/strings';

const t = strings.en.hero;

const Hero = () => {
  return (
    <section className="py-[60px] md:py-[80px] bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, #8159BB, transparent 70%)' }} />
      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-heading font-bold uppercase leading-[1.2] mb-5">
              <span className="block text-heading-dark text-[28px] md:text-[44px]">{t.h1Line1}</span>
              <span className="block ai-gradient-text text-[28px] md:text-[44px]">{t.h1Line2}</span>
            </h1>
            <p className="text-body-text text-base md:text-lg mb-8 max-w-[480px]">{t.sub}</p>
            <div className="flex flex-col sm:flex-row gap-[10px]">
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-[44px] px-[20px] ai-gradient-bg text-white font-heading font-bold uppercase text-sm rounded no-underline hover:opacity-90 transition-opacity"
              >
                {t.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-[44px] px-[20px] bg-transparent border border-brand-purple text-brand-purple font-heading font-bold uppercase text-sm rounded no-underline hover:bg-brand-purple/5 transition-colors"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="flex justify-center" aria-hidden="true">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[400px] h-auto">
              <rect x="60" y="30" width="280" height="240" rx="8" stroke="#C6C9CD" strokeWidth="1.5" fill="white"/>
              <rect x="60" y="30" width="280" height="40" rx="8" stroke="#C6C9CD" strokeWidth="1.5" fill="#F4F6F8"/>
              <line x1="80" y1="50" x2="160" y2="50" stroke="#C6C9CD" strokeWidth="2" strokeLinecap="round"/>
              <line x1="240" y1="50" x2="320" y2="50" stroke="#C6C9CD" strokeWidth="2" strokeLinecap="round"/>
              <rect x="80" y="90" width="130" height="100" rx="4" stroke="#C6C9CD" strokeWidth="1.5" fill="#F4F6F8"/>
              <circle cx="145" cy="140" r="30" stroke="#C6C9CD" strokeWidth="1.5" fill="white"/>
              <rect x="230" y="90" width="90" height="40" rx="4" stroke="#C6C9CD" strokeWidth="1.5" fill="#F4F6F8"/>
              <line x1="240" y1="105" x2="310" y2="105" stroke="#C6C9CD" strokeWidth="2" strokeLinecap="round"/>
              <line x1="240" y1="120" x2="290" y2="120" stroke="#C6C9CD" strokeWidth="2" strokeLinecap="round"/>
              <rect x="230" y="145" width="90" height="45" rx="4" stroke="#C6C9CD" strokeWidth="1.5" fill="#F4F6F8"/>
              <line x1="240" y1="160" x2="310" y2="160" stroke="#C6C9CD" strokeWidth="2" strokeLinecap="round"/>
              <line x1="240" y1="175" x2="280" y2="175" stroke="#C6C9CD" strokeWidth="2" strokeLinecap="round"/>
              <rect x="80" y="210" width="240" height="10" rx="3" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1"/>
              <rect x="80" y="230" width="180" height="10" rx="3" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1"/>
              <rect x="80" y="250" width="220" height="10" rx="3" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
