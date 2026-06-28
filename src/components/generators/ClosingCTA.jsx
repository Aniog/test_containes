import { t } from '@/data/strings';

const ClosingCTA = () => (
  <section className="py-16 md:py-20">
    <div className="max-w-[1200px] mx-auto px-5 text-center">
      <h2 className="font-[family-name:var(--font-headings)] font-bold uppercase text-[22px] md:text-[28px] text-[#4B5056] leading-[1.2]">
        {t('closingHeading')}
      </h2>
      <p className="mt-3 text-[14px] md:text-[15px] text-[#636972] max-w-[480px] mx-auto">
        {t('closingSub')}
      </p>
      <div className="mt-6">
        <a
          href="/s/ai_site_builder"
          className="inline-flex items-center justify-center h-[44px] px-8 rounded ai-gradient-bg text-white font-[family-name:var(--font-headings)] font-bold uppercase text-[14px] tracking-wide hover:opacity-95 transition-opacity"
        >
          {t('closingCta')}
        </a>
      </div>
    </div>
  </section>
);

export default ClosingCTA;
