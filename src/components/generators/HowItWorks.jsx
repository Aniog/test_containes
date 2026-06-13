import strings from '@/strings.en.js';

const steps = [
  { number: 1, title: strings.howStep1Title, desc: strings.howStep1Desc },
  { number: 2, title: strings.howStep2Title, desc: strings.howStep2Desc },
  { number: 3, title: strings.howStep3Title, desc: strings.howStep3Desc },
];

export default function HowItWorks() {
  return (
    <section className="py-[40px] bg-bg-light">
      <div className="section-container">
        <h2 className="font-heading font-bold uppercase text-[26px] md:text-[30px] text-heading leading-[1.2] mb-[30px]">
          {strings.howHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {steps.map((step) => (
            <div key={step.number} className="text-center md:text-start">
              <div className="w-[40px] h-[40px] rounded-full bg-brand-purple text-white font-heading font-bold text-[18px] flex items-center justify-center mx-auto md:mx-0 mb-[10px]">
                {step.number}
              </div>
              <h3 className="font-heading font-bold uppercase text-[16px] text-heading-dark leading-[1.2] mb-[5px]">
                {step.title}
              </h3>
              <p className="text-body text-[14px] leading-[1.5]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}