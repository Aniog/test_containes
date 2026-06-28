import { strings } from '@/data/generators';
import { HeroIllustration } from './Icons';

const t = strings.en;

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(118,113,255,0.12) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(203,12,159,0.10) 0%, transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-5 py-[60px] md:py-[80px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-12">
          <div className="flex flex-col gap-5 max-w-[560px]">
            <h1 className="font-heading text-[32px] md:text-[44px] lg:text-[48px] font-bold leading-[1.2] uppercase">
              <span className="block text-[#2E2E2F]">{t.hero.h1Line1}</span>
              <span
                className="block bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: 'text' }}
              >
                {t.hero.h1Line2}
              </span>
            </h1>
            <p className="text-[14px] md:text-[16px] leading-[1.5] text-[#636972] max-w-[480px]">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-[10px] pt-1">
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-[44px] px-[15px] rounded-[4px] font-heading text-[14px] font-bold uppercase text-white bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 transition-shadow"
              >
                {t.hero.primaryCta}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-[44px] px-[15px] rounded-[4px] font-heading text-[14px] font-bold uppercase text-[#8159BB] border border-[#8159BB] bg-transparent hover:bg-[#F4F6F8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 transition-colors"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>
          <div className="w-full max-w-[360px] md:max-w-[420px] lg:max-w-[460px] mx-auto md:mx-0">
            <HeroIllustration className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
