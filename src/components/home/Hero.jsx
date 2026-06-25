import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Globe2, Clock } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#0B2545] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <div
          className="w-full h-full"
          data-strk-bg-id="home-hero-bg-9f2a31"
          data-strk-bg="[home-hero-subtitle] [home-hero-title] container ship cargo port China export"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/85 to-[#0B2545]/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p
            id="home-hero-eyebrow"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70 mb-4"
          >
            China Sourcing Agent
          </p>
          <h1
            id="home-hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="home-hero-subtitle"
            className="mt-5 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl"
          >
            We help importers, brands and Amazon sellers find reliable Chinese
            suppliers, verify factories, inspect quality, follow production,
            and coordinate shipping &mdash; from a single point of contact in
            China.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#C8102E] hover:bg-[#A30D26] text-white text-sm md:text-base font-semibold transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-white/30 text-white hover:bg-white/10 text-sm md:text-base font-semibold transition-colors"
            >
              See how it works
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 mt-0.5 text-white/80 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">Verified suppliers</p>
                <p className="text-xs text-white/70 mt-0.5">On-site factory checks before order placement.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe2 className="w-5 h-5 mt-0.5 text-white/80 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">English-speaking team</p>
                <p className="text-xs text-white/70 mt-0.5">Based in China, working on your time zone.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-0.5 text-white/80 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">One business day reply</p>
                <p className="text-xs text-white/70 mt-0.5">Clear updates from quote to delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
