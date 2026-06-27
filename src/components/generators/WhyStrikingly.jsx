import { Zap, Smartphone, CreditCard } from 'lucide-react';

const icons = [Zap, Smartphone, CreditCard];

export default function WhyStrikingly({ t }) {
  return (
    <section className="py-[40px] bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-10">{t.heading}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-[48px] h-[48px] rounded-full border border-brand-purple text-brand-purple mb-4">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-[15px] text-heading-section uppercase mb-2">{item.title}</h3>
                <p className="text-body-text text-[14px]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
