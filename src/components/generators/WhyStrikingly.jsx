import strings from '@/data/strings';
import { LightningIcon, MobileIcon, FreeTagIcon } from './Icons';

const s = strings.en.whyStrikingly;

const icons = [LightningIcon, MobileIcon, FreeTagIcon];

export default function WhyStrikingly() {
  return (
    <section className="bg-white py-10 md:py-[40px]">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-[24px] md:text-[30px] text-text-heading leading-[1.2] m-0 mb-8 text-center">
          {s.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {s.reasons.map((reason, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <Icon className="mb-3" />
                <h3 className="font-heading font-bold text-[14px] uppercase text-text-heading m-0 mb-2 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-text-body text-[14px] m-0 leading-relaxed max-w-[280px]">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
