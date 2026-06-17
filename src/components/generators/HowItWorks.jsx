import React from 'react';
import { strings } from '../../strings';

const s = strings.en.howItWorks;

const StepCircle = ({ number }) => (
  <div
    className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
    style={{ backgroundColor: '#8159BB' }}
    aria-hidden="true"
  >
    <span className="font-heading font-bold text-white text-lg">{number}</span>
  </div>
);

export default function HowItWorks() {
  return (
    <section className="py-10 md:py-16 bg-light-bg">
      <div className="max-w-content mx-auto px-5">
        <h2 className="section-heading text-2xl md:text-3xl mb-10">{s.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {s.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center md:items-start md:text-left">
              <StepCircle number={i + 1} />
              <h3 className="font-heading font-bold text-heading text-sm mt-4 mb-2" style={{ textTransform: 'uppercase' }}>
                {step.title}
              </h3>
              <p className="text-body-text text-sm leading-relaxed m-0">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
