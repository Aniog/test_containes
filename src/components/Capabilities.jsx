import React, { useEffect, useRef } from "react";
import { Ruler, Cpu, Wrench, ShieldCheck, Layers, Workflow } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const features = [
  {
    icon: Ruler,
    title: "Sub-millimeter accuracy",
    desc: "Calibrated beam geometry and laser-aligned blades hold ±0.05 mm bend accuracy across the full working length.",
  },
  {
    icon: Cpu,
    title: "Intuitive CNC control",
    desc: "A 15-inch touchscreen with visual programming. Operators are productive within hours, not weeks.",
  },
  {
    icon: Layers,
    title: "True double folding",
    desc: "Up-and-down folds in one cycle eliminate sheet flipping — saving labor and protecting finished surfaces.",
  },
  {
    icon: Wrench,
    title: "Built to be serviced",
    desc: "Modular components, clearly documented. Spare parts and remote diagnostics from our engineers worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Engineered for safety",
    desc: "Light-curtain protection, dual-hand controls, and emergency stop circuits certified to EN ISO 16092.",
  },
  {
    icon: Workflow,
    title: "Connect-ready",
    desc: "Open APIs and ERP integration so each fold is logged, traceable, and ready for industry 4.0 workflows.",
  },
];

export default function Capabilities() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="capabilities"
      ref={containerRef}
      className="relative bg-ink text-white py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16 items-end">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-brass mb-5">
              Capabilities
            </p>
            <h2
              id="capabilities-title"
              className="font-display text-4xl md:text-6xl font-light leading-[1.05]"
            >
              Engineered to be elegant —
              <br />
              <span className="italic text-brass">simple to operate.</span>
            </h2>
          </div>
          <p
            id="capabilities-subtitle"
            className="md:col-span-5 text-white/70 leading-relaxed"
          >
            Every detail of an ARTITECT machine is the result of refusing the
            usual trade-off between industrial power and an operator-friendly
            experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-ink p-8 md:p-10 hover:bg-graphite transition-colors"
              >
                <Icon className="w-7 h-7 text-brass mb-6" strokeWidth={1.25} />
                <h3 className="font-display text-2xl text-white mb-3">
                  {f.title}
                </h3>
                <p className="text-white/65 leading-relaxed text-sm">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
