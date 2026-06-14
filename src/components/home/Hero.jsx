import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, ChevronDown } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { brand } from "@/lib/content";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-[100svh] flex items-end overflow-hidden grain"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-9d3a72"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="2000"
        aria-hidden="true"
      />
      {/* Gradient overlay for legibility */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-tr from-steel-deep/95 via-steel-deep/70 to-steel-deep/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-steel-deep/80"
        aria-hidden="true"
      />

      <div className="container-x relative z-20 pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-3xl">
          <p
            id="hero-eyebrow"
            className="rise-in eyebrow text-bronze-light mb-6"
          >
            Precision metal folding · Est. {brand.established}
          </p>
          <h1
            id="hero-title"
            className="rise-in rise-in-delay-1 font-display text-white text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight"
          >
            Engineering the
            <span className="block italic text-bronze-light">art of the fold.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="rise-in rise-in-delay-2 mt-8 text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            {brand.description}
          </p>

          <div className="rise-in rise-in-delay-3 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-bronze hover:bg-bronze-dark text-white px-7 py-3.5 text-[12px] uppercase tracking-eyebrow font-semibold transition-colors"
            >
              Explore the product family
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-bronze-light hover:text-bronze-light text-white px-7 py-3.5 text-[12px] uppercase tracking-eyebrow font-semibold transition-colors"
            >
              Talk to an engineer
            </a>
          </div>

          <div className="rise-in rise-in-delay-4 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl border-t border-white/10 pt-10">
            {[
              { v: "1,400+", l: "Installations" },
              { v: "27+", l: "Years of engineering" },
              { v: "48h", l: "Critical-stop response" },
              { v: "27", l: "Global service partners" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl text-white">{s.v}</div>
                <div className="mt-1 text-[11px] uppercase tracking-eyebrow text-white/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#products"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-white/60 hover:text-bronze-light transition-colors"
        aria-label="Scroll to products"
      >
        <span className="text-[10px] uppercase tracking-eyebrow">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
