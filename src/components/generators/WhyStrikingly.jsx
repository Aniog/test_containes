import { strings } from '@/data/generators';
import { LightningIcon, MobileIcon, FreeIcon } from './Icons';

const t = strings.en;

const iconMap = {
  0: LightningIcon,
  1: MobileIcon,
  2: FreeIcon,
};

export default function WhyStrikingly() {
  return (
    <section className="w-full bg-[#F4F6F8]">
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:py-[60px]">
        <h2 className="font-heading text-[26px] md:text-[32px] font-bold leading-[1.2] uppercase text-[#4B5056] mb-8 md:mb-10">
          {t.whyStrikingly.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {t.whyStrikingly.items.map((item, index) => {
            const Icon = iconMap[index];
            return (
              <div key={index} className="flex flex-col gap-3">
                {Icon && <Icon className="w-6 h-6" />}
                <h3 className="font-heading text-[15px] font-bold uppercase text-[#4B5056]">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#636972] leading-[1.5]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
