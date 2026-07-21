import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full h-[100svh] min-h-[640px] bg-ink-900 text-cream-100 overflow-hidden"
    >
      {/* Background image — warm-lit gold jewelry on a model */}
      <div
        data-strk-bg-id="hero-bg-4a9b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15,11,8,0.35) 0%, rgba(15,11,8,0.1) 35%, rgba(15,11,8,0.55) 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 40%, rgba(184,147,90,0.18) 0%, rgba(15,11,8,0) 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full mx-auto max-w-editorial px-4 sm:px-6 lg:px-10 flex flex-col">
        {/* Top spacer for nav (handled by fixed nav) */}
        <div className="flex-1 flex flex-col items-center justify-end pb-24 sm:pb-28 text-center">
          <p
            id="hero-eyebrow"
            className="eyebrow text-cream-200/80 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            New · The Floral Edit
          </p>
          <h1
            id="hero-title"
            className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] leading-[1.02] text-cream-100 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Crafted to be <em className="not-italic text-gold-300 font-normal">Treasured</em>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-xl text-sm sm:text-[15px] leading-relaxed text-cream-200/85 animate-fade-in"
            style={{ animationDelay: "0.35s" }}
          >
            Demi-fine 18K gold-plated jewelry, hand-finished in small batches.
            Designed in daylight, made to be worn forever.
          </p>
          <div
            className="mt-9 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <Link to="/shop" className="btn-gold">
              Shop the Collection
            </Link>
            <Link
              to="/shop?category=sets"
              className="btn-ghost-light"
            >
              Discover Sets
            </Link>
          </div>
        </div>

        {/* Bottom hairline + scroll cue */}
        <div className="pb-6 sm:pb-8 flex items-center justify-between text-cream-200/70 text-[10px] tracking-[0.32em] uppercase">
          <span>Velmora · Fine Jewelry</span>
          <span className="hidden sm:inline">Scroll to discover</span>
        </div>
      </div>
    </section>
  );
}
