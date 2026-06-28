import { t } from '@/data/strings';
import { WhyIcon1, WhyIcon2, WhyIcon3 } from './Illustrations';

const reasons = [
  { icon: WhyIcon1, titleKey: 'why1Title', descKey: 'why1Desc' },
  { icon: WhyIcon2, titleKey: 'why2Title', descKey: 'why2Desc' },
  { icon: WhyIcon3, titleKey: 'why3Title', descKey: 'why3Desc' },
];

const WhyStrikingly = () => (
  <section className="py-10 md:py-12">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="font-[family-name:var(--font-headings)] font-bold uppercase text-[22px] md:text-[26px] text-[#4B5056] leading-[1.2] text-center">
        {t('whyHeading')}
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((r) => {
          const Icon = r.icon;
          return (
            <div key={r.titleKey} className="text-center">
              <div className="inline-flex items-center justify-center">
                <Icon />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-headings)] font-bold uppercase text-[14px] text-[#2E2E2F] tracking-wide">
                {t(r.titleKey)}
              </h3>
              <p className="mt-2 text-[13px] text-[#636972] leading-[1.6] max-w-[280px] mx-auto">
                {t(r.descKey)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyStrikingly;
