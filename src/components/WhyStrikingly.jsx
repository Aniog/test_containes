import { Zap, Smartphone, Gift } from 'lucide-react';

const icons = [
  <Zap key="zap" className="w-[24px] h-[24px] text-brand-purple" aria-hidden="true" />,
  <Smartphone key="phone" className="w-[24px] h-[24px] text-brand-purple" aria-hidden="true" />,
  <Gift key="gift" className="w-[24px] h-[24px] text-brand-purple" aria-hidden="true" />,
];

const WhyStrikingly = ({ t }) => {
  return (
    <section className="py-[40px] bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-[30px]">
          {t.whyStrikingly.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {t.whyStrikingly.items.map((item, i) => (
            <div key={i} className="text-center p-[20px]">
              <div className="flex justify-center mb-[10px]">
                {icons[i]}
              </div>
              <h3 className="font-heading text-[14px] text-heading-section uppercase mb-[10px]">
                {item.title}
              </h3>
              <p className="text-body-text text-[14px] leading-[1.5]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStrikingly;
