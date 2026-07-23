import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
      ref={containerRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso-900"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8c2e4f"
        data-strk-bg="[hero-subtitle] [hero-headline] [homepage-section-title]"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(31,26,23,0.55) 0%, rgba(31,26,23,0.15) 35%, rgba(31,26,23,0.65) 100%)",
        }}
      >
        <div
          className="absolute inset-0 img-placeholder"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-site mx-auto px-5 md:px-8 lg:px-12 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="eyebrow text-champagne-300 mb-5">Demi-Fine · 18K Gold Plated</p>
          <h1
            id="homepage-section-title"
            className="font-display text-ivory-50 text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-[-0.01em] font-medium"
          >
            Crafted to be{" "}
            <span className="italic font-normal text-champagne-300">Treasured</span>
          </h1>
          <p
            id="hero-headline"
            className="mt-6 text-ivory-50/85 text-base md:text-lg max-w-md leading-relaxed"
          >
            Hand-finished demi-fine jewelry, made in small batches, designed to live in your everyday.
          </p>
          <p id="hero-subtitle" className="sr-only">
            Velmora Fine Jewelry homepage hero
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link to="/shop" className="btn-accent">
              Shop the Collection
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/about"
              className="text-[12px] tracking-button uppercase text-ivory-50/80 hover:text-champagne-300 transition-colors inline-flex items-center gap-2 group"
            >
              Our Story
              <span className="block w-6 h-px bg-champagne-300 group-hover:w-8 transition-all" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-ivory-50/70">
        <span className="text-[10px] tracking-button uppercase">Scroll</span>
        <span className="block w-px h-10 bg-gradient-to-b from-ivory-50/60 to-transparent" />
      </div>
    </section>
  );
}
