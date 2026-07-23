import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-cocoa-900 text-cream-50 overflow-hidden"
    >
      {/* Background image (model wearing gold jewelry, warm-lit) */}
      <div className="absolute inset-0">
        <img
          alt="Model wearing gold jewelry"
          className="w-full h-full object-cover"
          data-strk-img-id="hero-editorial-7a3b9d"
          data-strk-img="[hero-subtitle] [hero-title]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1920"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        {/* Warm gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-cocoa-900/80 via-cocoa-900/40 to-cocoa-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/70 via-transparent to-transparent" />
      </div>

      <div className="relative container-editorial min-h-[88vh] md:min-h-[92vh] flex flex-col justify-end pb-20 md:pb-28 pt-32 md:pt-40">
        <div className="max-w-2xl">
          <p className="eyebrow-light text-gold-300 mb-5">
            Velmora — The Demi-Fine Collection
          </p>
          <h1
            id="hero-title"
            className="font-serif font-light text-cream-50 text-[44px] sm:text-[56px] md:text-[80px] lg:text-[96px] leading-[0.95] tracking-tight"
          >
            Crafted to be<br />
            <span className="italic font-light text-gold-300">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 md:mt-8 text-cream-100/90 text-base md:text-lg max-w-md leading-relaxed font-light"
          >
            Quietly considered 18K gold plated jewelry, made in small
            batches for the everyday — and the people we love.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center text-cream-50 px-6 py-3.5 md:px-8 md:py-4 text-[11px] md:text-[12px] font-medium uppercase tracking-btn rounded-sm border border-cream-50/30 hover:bg-cream-50/10 transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-cream-200/70">
        <span className="text-[10px] uppercase tracking-btn">Scroll</span>
        <span className="block w-px h-10 bg-cream-200/40 animate-pulse" />
      </div>
    </section>
  );
}
