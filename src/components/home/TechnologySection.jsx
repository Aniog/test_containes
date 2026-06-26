import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Cpu, ShieldCheck, Gauge, Wrench, Sparkles, Factory } from "lucide-react";

const FEATURES = [
  {
    icon: Cpu,
    title: "Adaptive CNC Control",
    desc: "A proprietary controller learns material spring-back and adjusts bend angles in real time — no manual compensation required.",
  },
  {
    icon: Gauge,
    title: "Micron Repeatability",
    desc: "Closed-loop angle measurement with laser triangulation holds every fold within ±0.1° of program, shift after shift.",
  },
  {
    icon: ShieldCheck,
    title: "Operator-first Safety",
    desc: "Light curtains, dual-hand hold-to-run, and emergency crowning meet and exceed CE, ANSI, and ISO 12100 standards.",
  },
  {
    icon: Wrench,
    title: "Quick-change Tooling",
    desc: "Segmented upper tools and quick-clamp lower dies let operators reconfigure in under 90 seconds — no heavy lifting.",
  },
  {
    icon: Sparkles,
    title: "Energy-smart Hydraulics",
    desc: "Variable-displacement pumps and regenerative circuits cut energy use by up to 38% compared with conventional folders.",
  },
  {
    icon: Factory,
    title: "Industry 4.0 Ready",
    desc: "OPC-UA, MTConnect, and Modbus-TCP telemetry stream production data directly into your MES or ERP system.",
  },
];

export default function TechnologySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="technology"
      ref={containerRef}
      className="relative bg-ink text-paper py-24 md:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="tech-bg-441b8c"
        data-strk-bg="[tech-eyebrow] [tech-title] [tech-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span id="tech-eyebrow" className="eyebrow eyebrow-light">
              Engineering Philosophy
            </span>
            <h2
              id="tech-title"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] mt-6 text-paper"
            >
              Smarter machines.
              <br />
              Cleaner folds.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p
              id="tech-subtitle"
              className="text-base md:text-lg text-paper/70 leading-relaxed"
            >
              Every ARTITECT machine is built on six engineering pillars that
              together define what a precision metal folding system should
              deliver in 2026 and beyond.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-3 border border-paper/10">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-ink p-8 lg:p-10 flex flex-col"
            >
              <Icon className="h-7 w-7 text-brass" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-2xl font-semibold text-paper">
                {title}
              </h3>
              <p className="mt-3 text-sm text-paper/70 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
