import { t } from '@/data/strings';

const steps = [
  { num: '1', titleKey: 'step1Title', descKey: 'step1Desc' },
  { num: '2', titleKey: 'step2Title', descKey: 'step2Desc' },
  { num: '3', titleKey: 'step3Title', descKey: 'step3Desc' },
];

const HowItWorks = () => (
  <section className="py-10 md:py-12 bg-[#F4F6F8]">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="font-[family-name:var(--font-headings)] font-bold uppercase text-[22px] md:text-[26px] text-[#4B5056] leading-[1.2] text-center">
        {t('howItWorksHeading')}
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div key={s.num} className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#8159BB] text-[#8159BB] font-[family-name:var(--font-headings)] font-bold text-[16px]">
              {s.num}
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-headings)] font-bold uppercase text-[14px] text-[#2E2E2F] tracking-wide">
              {t(s.titleKey)}
            </h3>
            <p className="mt-2 text-[13px] text-[#636972] leading-[1.6] max-w-[280px] mx-auto">
              {t(s.descKey)}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
