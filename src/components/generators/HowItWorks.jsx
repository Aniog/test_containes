import strings from '../../data/strings';

const StepCircle = ({ number }) => (
  <div
    className="w-[48px] h-[48px] rounded-full flex items-center justify-center text-white font-heading font-bold text-lg shrink-0"
    style={{ background: 'linear-gradient(135deg, #7671FF, #CB0C9F)' }}
    aria-hidden="true"
  >
    {number}
  </div>
);

const HowItWorks = () => {
  const { howItWorks } = strings.en;

  return (
    <section className="py-10 md:py-[40px] bg-surface">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="font-heading uppercase text-h2-mobile md:text-h2-desktop text-heading m-0">
            {howItWorks.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {howItWorks.steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <StepCircle number={step.number} />
              <h3 className="font-heading uppercase text-sm text-heading mt-4 mb-2 tracking-wide">
                {step.title}
              </h3>
              <p className="text-sm text-body m-0 leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
