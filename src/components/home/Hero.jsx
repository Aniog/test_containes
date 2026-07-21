import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden text-ivory"
      style={{ minHeight: "min(86vh, 760px)" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-2025"
        data-strk-bg="[hero-headline] [hero-subhead] velmora fine jewelry"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
        style={{
          background:
            "linear-gradient(160deg, #2C1F19 0%, #1F1612 55%, #15100D 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(212,178,124,0.30) 0%, transparent 60%), radial-gradient(ellipse at 25% 80%, rgba(176,138,74,0.22) 0%, transparent 55%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(21,16,13,0.30) 0%, rgba(21,16,13,0.10) 25%, rgba(21,16,13,0.45) 100%)",
          }}
          aria-hidden
        />
      </div>

      {/* Centered content */}
      <div className="relative z-10 mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12 h-full min-h-[inherit] flex items-end pb-16 sm:pb-20 lg:pb-24 pt-28 sm:pt-32">
        <div className="max-w-2xl">
          <p
            id="hero-eyebrow"
            className="text-[11px] uppercase tracking-[0.32em] text-ivory/75 mb-5 sm:mb-6 animate-fade-up"
          >
            Velmora Fine Jewelry · Summer Edit
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-[44px] leading-[1.05] sm:text-[64px] sm:leading-[1.02] lg:text-[80px] lg:leading-[1.0] text-ivory animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Crafted to be <em className="not-italic font-light italic" style={{ fontStyle: "italic" }}>treasured</em>.
          </h1>
          <p
            id="hero-subhead"
            className="mt-5 sm:mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-ivory/80 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Demi-fine gold jewelry, hand-finished in our atelier. Designed for
            the everyday — and the moments that become heirlooms.
          </p>
          <div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/shop" className="btn btn-outline-light">
              Shop the Collection
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
            <Link
              to="/about"
              className="text-[11px] uppercase tracking-[0.28em] text-ivory/80 hover:text-ivory inline-flex items-center gap-2 px-2 py-3"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative scroll cue */}
      <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-10 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-ivory/60">
        <span>Scroll</span>
        <span className="block w-px h-10 bg-ivory/30" />
      </div>
    </section>
  );
}
