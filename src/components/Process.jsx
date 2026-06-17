import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "We learn the materials, tolerances, and volumes of your workshop. No two production lines fold the same way.",
  },
  {
    n: "02",
    title: "Configuration",
    desc: "Choose the machine, working length, tooling and CNC package. Our engineers help you specify only what you actually need.",
  },
  {
    n: "03",
    title: "Build & Calibration",
    desc: "Each ARTITECT machine is hand-assembled, bench-tested, and calibrated against a master sheet before it ever leaves the factory.",
  },
  {
    n: "04",
    title: "Install & Train",
    desc: "Onsite installation, operator training and 12 months of remote engineering support — so your team folds confidently from day one.",
  },
];

export default function Process() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-paper py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.3em] text-brass mb-5">
              How we work
            </p>
            <h2
              id="process-title"
              className="font-display text-4xl md:text-5xl font-light text-ink leading-[1.08]"
            >
              From the first drawing to the first perfect fold.
            </h2>
            <p
              id="process-subtitle"
              className="mt-6 text-steel leading-relaxed"
            >
              We don't ship boxes — we ship folding capability. Here is how a
              partnership with ARTITECT typically unfolds.
            </p>

            <div
              className="relative mt-10 aspect-[4/3] bg-mist overflow-hidden"
              data-strk-bg-id="process-bg-2e4f81"
              data-strk-bg="[process-subtitle] [process-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
            />
          </div>

          <ol className="lg:col-span-7 space-y-px bg-ink/10">
            {steps.map((s) => (
              <li
                key={s.n}
                className="bg-paper py-10 md:py-12 px-2 md:px-0 grid grid-cols-12 gap-6 items-start"
              >
                <div className="col-span-3 md:col-span-2">
                  <div className="font-display text-4xl md:text-5xl text-brass leading-none">
                    {s.n}
                  </div>
                </div>
                <div className="col-span-9 md:col-span-10">
                  <h3 className="font-display text-2xl md:text-3xl text-ink mb-3">
                    {s.title}
                  </h3>
                  <p className="text-steel leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
