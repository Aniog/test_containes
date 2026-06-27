import React from "react";
import { strings } from "../../data/strings";

const steps = [
  { num: 1, titleKey: "step1Title", descKey: "step1Desc" },
  { num: 2, titleKey: "step2Title", descKey: "step2Desc" },
  { num: 3, titleKey: "step3Title", descKey: "step3Desc" },
];

export default function HowItWorks() {
  const s = strings.en;
  return (
    <section className="how-it-works" aria-labelledby="how-it-works-heading">
      <div className="container">
        <h2 id="how-it-works-heading" className="section-heading">{s.howItWorksHeading}</h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="step-card">
              <div className="step-number">{step.num}</div>
              <h3 className="step-title">{s[step.titleKey]}</h3>
              <p className="step-desc">{s[step.descKey]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
