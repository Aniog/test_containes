import React from "react";
import { strings } from "../strings";

export default function HowItWorks() {
  const s = strings.en.how;
  return (
    <section className="section section--alt" aria-labelledby="how-h2">
      <div className="container">
        <header className="section-heading">
          <h2 id="how-h2" className="section-heading__h">{s.heading}</h2>
          <p className="section-heading__sub">{s.sub}</p>
        </header>
        <ol className="steps" role="list">
          {s.steps.map((step, i) => (
            <li className="step" key={step.title}>
              <span className="step__num" aria-hidden="true">{i + 1}</span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}