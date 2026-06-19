import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Full-bleed hero. Warm-lit close-up of gold jewelry on a model.
 * Serif headline, subhead, accent CTA. Image fills the right ~60% on desktop.
 */
export function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-espresso text-ivory min-h-[88svh] md:min-h-[92svh] flex items-stretch overflow-hidden pt-20"
      aria-labelledby="hero-title"
    >
      {/* Background image — desktop only, fills right 60% on lg */}
      <div className="absolute inset-0 lg:left-[40%]">
        <img
          alt="Model wearing the Vivid Aura ear cuff and Golden Sphere huggies, warm side-lit studio"
          data-strk-img-id="hero-model-portrait-7f3a1c"
          data-strk-img="[hero-subtitle] [hero-title] velmora fine jewelry model wearing gold earrings editorial portrait"
          data-strk-img-ratio="3x4"
          data-strk-img-width="1400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
        {/* Warm gradient veil over the image, so headline legibility is preserved */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/60 to-espresso/0 lg:via-espresso/35" />
        {/* Subtle bottom darkening */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-espresso/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-5 md:px-8 lg:px-10 w-full flex items-center">
        <div className="max-w-[640px] py-14 md:py-24 lg:py-32">
          <p className="eyebrow text-gold-light/90 mb-6 md:mb-7 animate-fade-up">
            <span className="inline-block w-8 h-px bg-gold-light/60 align-middle mr-3" />
            New collection · Spring 2026
          </p>
          <h1
            id="hero-title"
            className="text-display text-[2.85rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.25rem] text-ivory animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Crafted <span className="text-display-italic">to be</span>
            <br className="hidden sm:block" />{" "}
            <span className="text-display-italic">Treasured.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-7 md:mt-8 font-serif italic text-[1.0625rem] md:text-[1.25rem] text-ivory/85 max-w-[44ch] leading-[1.65] animate-fade-up"
            style={{ animationDelay: "260ms" }}
          >
            Demi-fine jewelry in 18K gold plating — designed in small
            batches, made for everyday rituals, and gifted for the
            moments that last.
          </p>
          <div
            className="mt-9 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <Link to="/shop" className="btn-primary-inverse">
              Shop the Collection
              <ArrowRight className="w-3.5 h-3.5 ml-1" strokeWidth={1.5} />
            </Link>
            <Link
              to="/#about"
              className="link-editorial text-ivory/85 hover:text-ivory"
            >
              Our story &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 inset-x-0 hairline-dark" />
    </section>
  );
}