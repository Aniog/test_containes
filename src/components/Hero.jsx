import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-[92vh] flex items-end overflow-hidden bg-ink"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-artitect-7f1c2a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 pt-32 md:pt-40 w-full">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brass mb-6">
            Precision Sheet Metal Solutions
          </p>
          <h1
            id="hero-title"
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.02]"
          >
            Folding metal,
            <br />
            <span className="italic text-brass">redefined.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-8 text-base md:text-lg text-white/75 max-w-xl leading-relaxed"
          >
            ARTITECT MACHINERY designs and builds double folding machines and
            sheet metal folders engineered for architectural fabricators,
            HVAC specialists, and metal artisans who refuse to compromise.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-3 bg-white text-ink hover:bg-brass hover:text-ink px-7 py-4 text-xs uppercase tracking-[0.2em] transition-colors"
            >
              Explore Machines
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white hover:border-white px-7 py-4 text-xs uppercase tracking-[0.2em] transition-colors"
            >
              Speak with an Engineer
            </a>
          </div>
        </div>
      </div>

      {/* metric strip */}
      <div className="relative w-full border-t border-white/10 bg-ink/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: "0.05mm", l: "Bend accuracy" },
            { v: "4.5m", l: "Max sheet length" },
            { v: "180°", l: "Double-fold range" },
            { v: "30+", l: "Countries served" },
          ].map((m) => (
            <div key={m.l}>
              <div className="font-display text-3xl md:text-4xl text-white">
                {m.v}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                {m.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
