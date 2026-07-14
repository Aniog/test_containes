import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
      className="relative w-full h-[88vh] min-h-[640px] max-h-[920px] overflow-hidden bg-espresso"
    >
      <img
        alt="Model wearing Velmora gold jewelry in warm light"
        className="absolute inset-0 w-full h-full object-cover"
        data-strk-img-id="hero-img-3f8a2c"
        data-strk-img="[hero-subtitle] [hero-title] Velmora model wearing gold earrings and necklace warm light editorial"
        data-strk-img-ratio="16x9"
        data-strk-img-width="1600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/10 to-espresso/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/40 via-transparent to-transparent" />

      <div className="relative z-10 h-full flex items-end pb-16 md:pb-24">
        <div className="mx-auto max-w-editorial w-full px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl text-ivory">
            <p
              id="hero-eyebrow"
              className="font-sans text-[11px] md:text-xs tracking-widest2 uppercase text-ivory/85 mb-5"
            >
              The Velmora Edit · Autumn 2026
            </p>
            <h1
              id="hero-title"
              className="font-serif text-[44px] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[88px] font-light"
            >
              Crafted to be
              <br />
              Treasured.
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 text-base sm:text-lg text-ivory/85 max-w-md leading-relaxed"
            >
              Demi-fine gold jewelry, hand-finished in small batches. Designed
              for everyday wear, made to last a lifetime.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="bg-ivory text-espresso font-sans text-[12px] tracking-widest2 uppercase px-8 py-4 hover:bg-gold hover:text-espresso transition-colors duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="text-ivory/90 font-sans text-[12px] tracking-widest2 uppercase border-b border-ivory/60 hover:border-gold hover:text-gold pb-1 transition"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-8 right-12 items-center gap-3 text-ivory/80 z-10">
        <span className="text-[10px] tracking-widest2 uppercase">Scroll</span>
        <span className="block w-10 h-px bg-ivory/60" />
      </div>
    </section>
  );
}
