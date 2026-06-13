import strings from '@/strings.en.js';
import { Zap, Smartphone, HeartHandshake } from 'lucide-react';

const points = [
  { icon: Zap, title: strings.why1Title, desc: strings.why1Desc },
  { icon: Smartphone, title: strings.why2Title, desc: strings.why2Desc },
  { icon: HeartHandshake, title: strings.why3Title, desc: strings.why3Desc },
];

export default function WhyStrikingly() {
  return (
    <section className="py-[40px]">
      <div className="section-container">
        <h2 className="font-heading font-bold uppercase text-[26px] md:text-[30px] text-heading leading-[1.2] mb-[30px]">
          {strings.whyHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <div key={i} className="text-center md:text-start">
                <Icon className="w-[32px] h-[32px] text-brand-purple mb-[10px] mx-auto md:mx-0" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="font-heading font-bold uppercase text-[16px] text-heading-dark leading-[1.2] mb-[5px]">
                  {point.title}
                </h3>
                <p className="text-body text-[14px] leading-[1.5]">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}