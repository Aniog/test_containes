import React from "react";
import { process } from "@/data/content";

export default function HomeProcess() {
  return (
    <section className="bg-paper-50 py-24 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow text-copper-600">How we work</span>
          <h2
            id="process-title"
            className="mt-4 font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-ink-900 leading-tight text-balance"
          >
            A clear, four-step path from inquiry to production.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-ink-900/15"
          />
          {process.map((step) => (
            <div
              key={step.step}
              className="relative bg-paper-50 border border-ink-900/8 rounded-2xl p-7"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy-950 text-copper-400 font-display font-bold text-base">
                  {step.step}
                </span>
                <h3
                  id={`process-${step.step}-title`}
                  className="font-display font-semibold text-lg text-ink-900"
                >
                  {step.title}
                </h3>
              </div>
              <p
                id={`process-${step.step}-text`}
                className="mt-4 text-sm text-ink-700 leading-relaxed"
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}