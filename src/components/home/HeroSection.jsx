import React, { useEffect, useRef } from "react";
import { ArrowRight, MoveRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative overflow-hidden bg-ink text-paper"
    >
      <div
        className="absolute inset-0 opacity-50"
        data-strk-bg-id="hero-bg-main-7c4a2f"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(201,169,97,0.18),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-36 md:pt-44 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span id="hero-eyebrow" className="eyebrow eyebrow-light">
              Precision Metal Folding Since 1998
            </span>

            <h1
              id="hero-title"
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mt-6 text-paper"
            >
              Precision in
              <br />
              <span className="italic text-brass">Every Fold.</span>
            </h1>

            <p
              id="hero-subtitle"
              className="mt-8 max-w-xl text-base md:text-lg text-paper/75 leading-relaxed"
            >
              ARTITECT MACHINERY engineers high-tonnage double folding machines,
              sheet metal folders, and automated folding systems for fabricators
              who refuse to compromise on accuracy.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-3 bg-brass text-ink px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-paper transition-colors"
              >
                Explore Machines
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-paper/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] hover:border-brass hover:text-brass transition-colors"
              >
                Request a Quote
                <MoveRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-px bg-paper/10 border border-paper/10">
              {[
                { value: "27+", label: "Years of engineering" },
                { value: "40+", label: "Countries served" },
                { value: "3,800", label: "Machines delivered" },
                { value: "0.01°", label: "Folding repeatability" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-ink p-6 md:p-8 flex flex-col"
                >
                  <span className="font-display text-3xl md:text-4xl text-brass">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-xs uppercase tracking-[0.2em] text-paper/60">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center gap-x-12 gap-y-4 text-xs uppercase tracking-[0.3em] text-paper/50">
          <span>Engineered in</span>
          <span className="text-paper/80">Hangzhou</span>
          <span className="h-px w-8 bg-paper/30" />
          <span className="text-paper/80">Düsseldorf</span>
          <span className="h-px w-8 bg-paper/30" />
          <span className="text-paper/80">Chicago</span>
        </div>
      </div>
    </section>
  );
}
