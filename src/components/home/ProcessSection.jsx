import React from "react";

const STEPS = [
  {
    n: "01",
    title: "Consultation",
    desc: "Tell us about your materials, tolerances, and throughput. Our application engineers respond within one business day.",
  },
  {
    n: "02",
    title: "Sample Folding",
    desc: "Send us drawings or sample parts. We fold them on the machine that fits your production and document the results in a written report.",
  },
  {
    n: "03",
    title: "Configuration",
    desc: "Choose your machine, tooling, automation level, and financing. Your dedicated project manager coordinates every detail.",
  },
  {
    n: "04",
    title: "Installation & Training",
    desc: "Our service engineers commission the machine on your floor and train your operators — typically within five working days.",
  },
  {
    n: "05",
    title: "Lifetime Support",
    desc: "24/7 remote diagnostics, scheduled preventive maintenance, and a guaranteed 48-hour spare-parts dispatch worldwide.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-sand py-24 md:py-32 border-y border-mist"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">How it works</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1.05] mt-6 text-ink">
              Five steps from
              <br />
              <span className="italic text-brass-deep">inquiry to production.</span>
            </h2>
            <p className="mt-6 text-base text-smoke leading-relaxed">
              We've refined our customer journey over 3,800 machine
              installations. The result: a predictable, transparent process
              that gets you from first call to first part faster.
            </p>
          </div>

          <ol className="lg:col-span-8 space-y-px bg-mist border border-mist">
            {STEPS.map((step) => (
              <li
                key={step.n}
                className="bg-sand flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-8"
              >
                <span className="font-display text-3xl md:text-4xl text-brass-deep shrink-0">
                  {step.n}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-smoke leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
