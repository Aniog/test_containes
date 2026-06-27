import React from "react";
import { strings } from "../strings";

const STEPS = [
  { n: 1, title: strings.en.howStep1Title, body: strings.en.howStep1Body },
  { n: 2, title: strings.en.howStep2Title, body: strings.en.howStep2Body },
  { n: 3, title: strings.en.howStep3Title, body: strings.en.howStep3Body },
];

export default function HowItWorks() {
  return (
    <section className="strk-section" aria-labelledby="how-heading">
      <div className="strk-container">
        <div className="strk-section-heading">
          <h2 id="how-heading">{strings.en.howEyebrow}</h2>
        </div>
        <ol className="strk-steps" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {STEPS.map((step) => (
            <li key={step.n} className="strk-step">
              <span className="strk-step-number" aria-hidden="true">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}