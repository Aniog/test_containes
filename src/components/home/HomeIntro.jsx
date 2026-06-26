import React from "react";
import { Layers, Ruler, ShieldCheck, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Architectural precision",
    text: "Frames machined from solid billet, with closed-loop encoders that hold tolerance across the entire bed.",
  },
  {
    icon: Cpu,
    title: "Smart by default",
    text: "Every machine ships with the A7 controller — offline programming, recipe memory, and Industry 4.0 ready.",
  },
  {
    icon: ShieldCheck,
    title: "Built to outlast",
    text: "Stress-relieved mono-block frames, oversized bearings, and a 2-year warranty as standard.",
  },
  {
    icon: Ruler,
    title: "Engineered to fit",
    text: "Modular configurations for any shop — from a 480 kg compact folder to 8-meter production cells.",
  },
];

export default function HomeIntro() {
  return (
    <section id="intro" className="bg-paper-50 py-24 md:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="eyebrow text-copper-600">The ARTITECT difference</span>
            <h2
              id="intro-title"
              className="mt-4 font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-ink-900 leading-tight text-balance"
            >
              Two decades of metalwork, refined into every fold.
            </h2>
            <p
              id="intro-subtitle"
              className="mt-5 text-ink-700 text-base md:text-lg leading-relaxed"
            >
              We don't make general-purpose machines. We make folders — built around
              the realities of bending steel, aluminum, and stainless day after day,
              shift after shift.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group relative bg-paper-50 border border-ink-900/8 rounded-2xl p-7 hover-lift"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-copper-100 text-copper-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}