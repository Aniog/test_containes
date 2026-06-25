import { strings } from '@/data/strings';

const t = strings.en.howItWorks;

const HowItWorks = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-[26px] md:text-[30px] leading-[1.2] mb-8 text-center">{t.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-[50px] h-[50px] rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                <span className="font-heading font-bold text-brand-purple text-lg">{i + 1}</span>
              </div>
              <h3 className="font-heading font-bold uppercase text-heading-section text-sm mb-2">{step.title}</h3>
              <p className="text-body-text text-sm m-0">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
