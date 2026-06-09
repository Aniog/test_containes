import React, { useState } from 'react';
import { strings } from '../strings';

export const HowItWorks = () => {
  const s = strings.en.howItWorks;
  return (
    <section className="py-20 bg-[var(--bg-light)]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-2">{s.title}</h2>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {s.steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--brand-purple)] text-white flex items-center justify-center font-bold text-[18px]">
                {idx + 1}
              </div>
              <h3 className="text-[16px]">{step.title}</h3>
              <p className="max-w-[280px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhyStrikingly = () => {
  const s = strings.en.whyStrikingly;
  return (
    <section className="py-20 bg-white border-y border-[var(--divider)]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-2">{s.title}</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {s.features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 gap-4">
              <div className="text-[var(--brand-purple)]">
                <IconForFeature index={idx} />
              </div>
              <h3 className="text-[16px]">{feature.title}</h3>
              <p className="text-[14px] text-[var(--body-text)]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IconForFeature = ({ index }) => {
  if (index === 0) return <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
  if (index === 1) return <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>;
  return <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5 5 0 0 1 0 7.07l-7.07 7.07a5 5 0 0 1-7.07 0 5 5 0 0 1 0-7.07l7.07-7.07a5 5 0 0 1 7.07 0Z"></path><line x1="16.5" y1="3.5" x2="16.5" y2="3.5"></line><line x1="12.5" y1="3.5" x2="12.5" y2="15.5"></line></svg>;
};

export const FAQ = () => {
  const s = strings.en.faq;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom max-w-[800px]">
        <div className="text-center mb-12">
          <h2 className="mb-2">{s.title}</h2>
        </div>
        <div className="space-y-4">
          {s.questions.map((item, idx) => (
            <div key={idx} className="border border-[var(--divider)] rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-[var(--bg-light)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand-purple)] focus:ring-inset"
                onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                aria-expanded={activeIndex === idx}
                aria-controls={`faq-content-${idx}`}
              >
                <span className="font-bold text-[var(--heading-muted)] text-[15px]">{item.q}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn("transition-transform duration-200", activeIndex === idx ? "rotate-180" : "")}
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div
                id={`faq-content-${idx}`}
                className={cn(
                  "px-6 transition-all duration-300 ease-in-out",
                  activeIndex === idx ? "py-5 opacity-100 max-h-[500px]" : "max-h-0 opacity-0 overflow-hidden"
                )}
              >
                <p className="text-[14px] text-[var(--body-text)] leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
