import React from "react";

const SPECS = [
  {
    label: "Folding length",
    value: "0.8 m – 14 m",
    note: "Across all series",
  },
  {
    label: "Tonnage",
    value: "40 – 1,200 t",
    note: "Beam pressure",
  },
  {
    label: "Materials",
    value: "Mild steel, stainless, aluminium, copper, brass",
    note: "0.4 – 25 mm",
  },
  {
    label: "Repeatability",
    value: "± 0.1°",
    note: "Closed-loop angle control",
  },
  {
    label: "Automation",
    value: "Manual → Robotic load/unload",
    note: "Industry 4.0 ready",
  },
  {
    label: "Certifications",
    value: "CE · ISO 9001 · UL · CSA",
    note: "ANSI B11.3 compliant",
  },
];

export default function SpecificationsSection() {
  return (
    <section
      id="specifications"
      className="bg-paper py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow">At a glance</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] mt-6 text-ink">
              The numbers behind
              <br />
              the precision.
            </h2>
          </div>
          <div className="lg:col-span-5 self-end">
            <p className="text-base md:text-lg text-smoke leading-relaxed">
              A consolidated view of the engineering envelope that defines
              every double folding machine, sheet metal folder, and metal
              folding machine in the ARTITECT catalogue.
            </p>
          </div>
        </div>

        <div className="border-t border-mist">
          {SPECS.map((spec, i) => (
            <div
              key={spec.label}
              className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-mist ${
                i % 2 === 1 ? "bg-sand/50" : ""
              }`}
            >
              <div className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-smoke">
                {spec.label}
              </div>
              <div className="md:col-span-6 font-display text-2xl md:text-3xl text-ink">
                {spec.value}
              </div>
              <div className="md:col-span-3 md:text-right text-sm text-smoke">
                {spec.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
