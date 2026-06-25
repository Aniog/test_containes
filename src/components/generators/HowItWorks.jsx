import strings from '@/data/strings';
import { StepCircle } from './Icons';

const s = strings.en.howItWorks;

export default function HowItWorks() {
  return (
    <section className="bg-light-bg py-10 md:py-[40px]">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-[24px] md:text-[30px] text-text-heading leading-[1.2] m-0 mb-8 text-center">
          {s.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {s.steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <StepCircle number={step.number} />
              <h3 className="font-heading font-bold text-[14px] uppercase text-text-heading m-0 mt-4 mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-text-body text-[14px] m-0 leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
