import React from "react";
import { PROCESS } from "@/data/site";

const Eyebrow = ({ children }) => (
  <p className="inline-flex items-center gap-3 text-xs font-medium tracking-eyebrow uppercase text-brand-brass">
    <span className="block w-8 h-px bg-brand-brass" />
    {children}
  </p>
);

const COMPARISON = [
  { feature: "Drive system", artitect: "Direct-drive servo", others: "Hydraulic / pneumatic" },
  { feature: "Repeatability", artitect: "± 0.05° – 0.1°", others: "± 0.3° typical" },
  { feature: "Energy use", artitect: "Up to 60% less", others: "Baseline" },
  { feature: "Oil in the cabinet", artitect: "None", others: "Yes" },
  { feature: "Routine maintenance", artitect: "Grease · annual", others: "Quarterly service" },
  { feature: "HMI recipe library", artitect: "Included", others: "Optional add-on" },
];

const Specs = () => {
  return (
    <section
      id="specs"
      className="bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>From sample part to live cell</Eyebrow>
            <h2 className="mt-5 font-display font-semibold text-brand-ink text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
              A four-step process. One accountable team.
            </h2>
            <p className="mt-5 text-brand-muted text-base lg:text-lg leading-relaxed max-w-md">
              We don't hand off a brochure and disappear. Your project has
              one engineering contact from the first sample fold to the
              final acceptance sign-off.
            </p>
          </div>

          <ol className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-brand-line border border-brand-line rounded-2xl overflow-hidden">
            {PROCESS.map((p) => (
              <li key={p.step} className="bg-white p-7">
                <div className="font-display text-brand-brass text-sm tracking-eyebrow uppercase">
                  Step {p.step}
                </div>
                <h3 className="mt-3 font-display font-semibold text-brand-ink text-lg">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* comparison table */}
        <div className="mt-20 lg:mt-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <Eyebrow>The numbers, side by side</Eyebrow>
              <h3 className="mt-4 font-display font-semibold text-brand-ink text-2xl md:text-3xl">
                ARTITECT vs. a typical hydraulic folder
              </h3>
            </div>
            <p className="text-brand-muted text-sm max-w-sm">
              Independent test data from our pilot bay, 2024. Full report
              available on request.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-brand-line">
                  <th className="py-4 pr-6 text-[11px] tracking-eyebrow uppercase text-brand-muted font-medium">
                    Specification
                  </th>
                  <th className="py-4 pr-6 text-[11px] tracking-eyebrow uppercase text-brand-brass font-semibold">
                    ARTITECT
                  </th>
                  <th className="py-4 pr-6 text-[11px] tracking-eyebrow uppercase text-brand-muted font-medium">
                    Typical competitor
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-brand-line last:border-b-0"
                  >
                    <td className="py-4 pr-6 text-brand-ink font-medium">
                      {row.feature}
                    </td>
                    <td className="py-4 pr-6 text-brand-ink">
                      <span className="inline-flex items-center gap-2">
                        <span className="block w-1.5 h-1.5 rounded-full bg-brand-brass" />
                        {row.artitect}
                      </span>
                    </td>
                    <td className="py-4 pr-6 text-brand-muted">
                      {row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specs;
