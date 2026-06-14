import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, ShieldCheck, Globe2, Cpu } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { BRAND } from "@/data/site";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-brand-ink text-white"
    >
      {/* background image */}
      <img
        alt="Industrial metal folding press in a dim workshop"
        className="absolute inset-0 w-full h-full object-cover"
        data-strk-img-id="hero-bg-o7p3q"
        data-strk-img="[hero-eyebrow] [hero-title] [hero-subtitle] [hero-tagline]"
        data-strk-img-ratio="16x9"
        data-strk-img-width="2000"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      {/* gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/60 via-brand-ink/40 to-brand-ink/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/70 via-transparent to-transparent" />

      {/* hairlines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5" />
      <div className="absolute top-24 left-0 w-24 h-px bg-brand-brass" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-20 lg:pb-28 w-full">
        <div className="max-w-4xl">
          <p
            id="hero-eyebrow"
            className="inline-flex items-center gap-3 text-xs font-medium tracking-eyebrow uppercase text-brand-brass"
          >
            <span className="block w-8 h-px bg-brand-brass" />
            Established {BRAND.established} · Oakland, California
          </p>

          <h1
            id="hero-title"
            className="strk-rise mt-6 font-display font-semibold text-white text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
          >
            Precision metal folding,
            <span className="block text-brand-brass">engineered to hold tolerance.</span>
          </h1>

          <p
            id="hero-subtitle"
            className="strk-rise strk-rise-delay-1 mt-6 text-lg lg:text-xl text-white/75 max-w-2xl leading-relaxed"
          >
            ARTITECT MACHINERY builds industrial sheet metal folders, double
            folding machines, and metal folding systems for fabricators who
            measure accuracy in fractions of a degree.
          </p>

          <div
            id="hero-tagline"
            className="strk-rise strk-rise-delay-2 mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-brass text-brand-ink hover:bg-brand-ember hover:text-white rounded-full px-7 py-3.5 text-sm font-semibold transition-colors"
            >
              Request a quote <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 border border-white/25 text-white hover:border-white rounded-full px-7 py-3.5 text-sm font-medium transition-colors"
            >
              Explore the lineup
            </a>
          </div>

          <div className="strk-rise strk-rise-delay-3 mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-brass" />
              ISO 9001 · CE · UL 508A
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-brand-brass" />
              47 countries · 1,200+ installs
            </span>
            <span className="inline-flex items-center gap-2">
              <Cpu className="w-4 h-4 text-brand-brass" />
              Servo-electric · no hydraulics
            </span>
          </div>
        </div>
      </div>

      {/* bottom corner marks */}
      <div className="hidden md:flex absolute right-10 bottom-10 z-10 flex-col items-end gap-2 text-[10px] tracking-eyebrow uppercase text-white/50">
        <span>Scroll</span>
        <span className="block w-px h-12 bg-white/30" />
      </div>
    </section>
  );
};

export default Hero;
