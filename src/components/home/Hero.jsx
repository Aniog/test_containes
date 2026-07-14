import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[640px] bg-ink text-bone overflow-hidden"
    >
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-warm-radial"
        data-strk-bg-id="velmora-hero-bg-7c2a91"
        data-strk-bg="[hero-eyebrow] [hero-headline] [hero-subhead] gold jewelry editorial model warm lighting closeup"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      {/* Warm tonal overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      <div className="container-editorial relative h-full flex flex-col justify-end md:justify-center pb-24 md:pb-0">
        <div className="max-w-2xl">
          <p
            id="hero-eyebrow"
            className="eyebrow text-gold-soft animate-fade-up"
          >
            Velmora · Fine Jewelry
          </p>
          <h1
            id="hero-headline"
            className="mt-5 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.02] text-bone text-balance animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Crafted to be{" "}
            <span className="italic text-gold-soft">treasured</span>
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 font-sans text-base md:text-lg text-bone/85 max-w-md leading-relaxed text-pretty animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Demi-fine pieces in warm 18K gold — designed in studio,
            finished by hand, made to wear every day.
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-5 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Link to="/shop" className="btn-primary-light">
              Shop the Collection
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/shop/gift"
              className="btn-outline-light"
            >
              The Gift Edit
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-bone/60">
        <span className="text-[9px] uppercase tracking-editorial-wide font-sans">
          Scroll
        </span>
        <span className="block w-px h-10 bg-bone/40" />
      </div>
    </section>
  );
}
