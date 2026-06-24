import strings from '@/data/strings';
import { HeroIllustration } from './Icons';

const s = strings.en.hero;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(123,113,255,0.06) 0%, rgba(203,12,159,0.04) 40%, transparent 70%)' }}>
      <div className="max-w-content mx-auto px-5 py-[60px] md:py-[80px] flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left column */}
        <div className="flex-1 min-w-0 text-center md:text-left">
          <h1 className="font-heading font-bold uppercase leading-[1.15] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] m-0 mb-5">
            <span className="block text-text-hero">{s.h1Line1}</span>
            <span className="block ai-gradient-text">{s.h1Line2}</span>
          </h1>
          <p className="text-text-body text-[15px] md:text-[16px] leading-relaxed max-w-[480px] mx-auto md:mx-0 mb-8">
            {s.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
            <a
              href={s.primaryCtaLink}
              className="inline-flex items-center justify-center h-[44px] px-[22px] rounded-[4px] font-heading font-bold text-[14px] uppercase text-white ai-gradient-bg hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {s.primaryCta}
            </a>
            <a
              href={s.secondaryCtaLink}
              className="inline-flex items-center justify-center h-[36px] px-[18px] rounded-[4px] font-heading font-bold text-[14px] uppercase text-brand-purple border border-brand-purple bg-transparent hover:bg-brand-purple/5 transition-colors whitespace-nowrap"
            >
              {s.secondaryCta}
            </a>
          </div>
        </div>
        {/* Right column */}
        <div className="flex-1 flex justify-center md:justify-end">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
