import { Zap, Smartphone, Gift } from 'lucide-react';
import { strings } from '@/data/strings';

const t = strings.en.whyStrikingly;

const icons = [
  <Zap key="zap" className="w-6 h-6 text-brand-purple" aria-hidden="true" />,
  <Smartphone key="phone" className="w-6 h-6 text-brand-purple" aria-hidden="true" />,
  <Gift key="gift" className="w-6 h-6 text-brand-purple" aria-hidden="true" />,
];

const WhyStrikingly = () => {
  return (
    <section className="py-10 bg-light-bg">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-[26px] md:text-[30px] leading-[1.2] mb-8 text-center">{t.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-4">{icons[i]}</div>
              <h3 className="font-heading font-bold uppercase text-heading-section text-sm mb-2">{item.title}</h3>
              <p className="text-body-text text-sm m-0">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStrikingly;
