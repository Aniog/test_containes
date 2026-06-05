import strings from '../../data/strings.en.js';

export default function HowItWorks() {
  return (
    <section className="section-padding bg-light-bg">
      <div className="content-container">
        <h2 className="text-heading-gray text-[22px] md:text-[28px] mb-[30px] mt-0 text-center">
          {strings.howHeading}
        </h2>

        <div className="flex flex-col md:flex-row gap-[30px] justify-center">
          {strings.howSteps.map((step, idx) => (
            <div key={idx} className="flex-1 text-center max-w-[360px] mx-auto">
              <div className="w-[56px] h-[56px] rounded-full ai-gradient flex items-center justify-center text-white font-heading font-bold text-[18px] mx-auto mb-[15px]">
                {idx + 1}
              </div>
              <h3 className="text-hero-dark text-[15px] mb-[10px] mt-0">
                {step.title}
              </h3>
              <p className="text-body-gray text-[14px] m-0 leading-[1.5] max-w-[280px] mx-auto">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}