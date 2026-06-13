import strings from '../strings.en.js';

const steps = [
  { num: 1, title: strings.step1Title, desc: strings.step1Desc },
  { num: 2, title: strings.step2Title, desc: strings.step2Desc },
  { num: 3, title: strings.step3Title, desc: strings.step3Desc },
];

export default function HowItWorks() {
  return (
    <section className="py-10 md:py-[40px] bg-light-bg">
      <div className="max-w-content mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-gray m-0 mb-[30px] text-center">
          {strings.howItWorksHeading}
        </h2>
        <div className="flex flex-col md:flex-row gap-[30px] md:gap-[40px] justify-center">
          {steps.map((step) => (
            <div key={step.num} className="flex-1 text-center max-w-[320px] mx-auto">
              <div
                className="w-[48px] h-[48px] rounded-full flex items-center justify-center mx-auto mb-[15px]"
                style={{ background: 'linear-gradient(135deg, #7671FF, #CB0C9F)' }}
              >
                <span className="font-heading font-bold text-[20px] text-white">{step.num}</span>
              </div>
              <h3 className="text-[16px] text-heading-gray m-0 mb-[5px]">{step.title}</h3>
              <p className="text-[14px] text-body-gray m-0 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}