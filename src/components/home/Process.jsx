import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader.jsx';

const steps = [
  {
    n: '01',
    title: 'Consult',
    body: 'Tell us about your fabrication — materials, tolerances, throughput. We map the right machine class to your operation.',
  },
  {
    n: '02',
    title: 'Configure',
    body: 'Choose working length, capacity, control package, and tooling. We confirm lead time and total cost of ownership.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'Your machine is machined, hand-fit, and tested under load at our Suzhou facility. Every unit runs a 200-bend acceptance test.',
  },
  {
    n: '04',
    title: 'Install',
    body: 'A certified field engineer commissions on-site, trains your operators, and stays connected through 24/7 remote support.',
  },
];

const Process = () => {
  return (
    <section className="bg-steel-100 py-20 md:py-28 lg:py-32">
      <div className="container-artitect">
        <SectionHeader
          id="process"
          eyebrow="How we work"
          title="From first call to first fold in 6–10 weeks."
          description="A clear, documented process that takes the guesswork out of buying a folding machine."
        />

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.n}
              id={`step-${i}`}
              className="relative bg-paper border border-steel-200 p-8 md:p-10 flex flex-col h-full"
            >
              <div className="font-mono text-[10px] tracking-wider2 uppercase text-accent-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-500" />
                Step
              </div>
              <div className="mt-4 font-display font-extrabold text-5xl text-ink-900">
                {step.n}
              </div>
              <h3 className="mt-4 font-display font-bold text-xl md:text-2xl text-ink-900">
                {step.title}
              </h3>
              <p className="mt-4 text-ink-500 text-sm md:text-base leading-relaxed flex-1">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
