import { t } from '@/data/strings';
import { WebsiteMockupSVG } from './Illustrations';

const Hero = () => (
  <section className="hero-wash">
    <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20 lg:py-[72px]">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-[family-name:var(--font-headings)] font-bold uppercase leading-[1.2] text-[28px] sm:text-[36px] lg:text-[44px]">
            <span className="block text-[#2E2E2F]">{t('heroH1Line1')}</span>
            <span className="block ai-gradient-text">{t('heroH1Line2')}</span>
          </h1>
          <p className="mt-5 text-[#636972] text-[14px] md:text-[15px] leading-[1.6] max-w-[520px] mx-auto md:mx-0">
            {t('heroSub')}
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
            <a
              href="/s/ai_site_builder"
              className="inline-flex items-center justify-center h-11 md:h-[44px] px-6 rounded ai-gradient-bg text-white font-[family-name:var(--font-headings)] font-bold uppercase text-[14px] tracking-wide hover:opacity-95 transition-opacity"
            >
              {t('heroCtaPrimary')}
            </a>
            <a
              href="#all-generators"
              className="inline-flex items-center justify-center h-11 md:h-[44px] px-6 rounded border border-[#8159BB] text-[#8159BB] bg-transparent font-[family-name:var(--font-headings)] font-bold uppercase text-[14px] tracking-wide hover:bg-[#FAFAFD] transition-colors"
            >
              {t('heroCtaSecondary')}
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 flex justify-center">
          <div className="w-[280px] sm:w-[320px] lg:w-[360px]">
            <WebsiteMockupSVG />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
