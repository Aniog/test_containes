import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[640px] bg-espresso overflow-hidden"
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7a4c91"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="4x5"
        data-strk-bg-width="1600"
      />
      {/* Warm editorial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-deep/40 via-espresso/30 to-espresso/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/40 via-transparent to-transparent" />

      {/* Soft warm glow */}
      <div className="absolute -top-1/3 -right-1/4 w-[80vw] h-[80vw] rounded-full bg-bronze/15 blur-3xl pointer-events-none" />

      <div className="relative h-full container-velmora flex flex-col">
        <div className="flex-1" />
        <div className="max-w-2xl pb-20 md:pb-28">
          <p
            id="hero-eyebrow"
            className="text-[11px] uppercase tracking-[0.3em] text-bronze-light/90 mb-6"
          >
            Velmora · Demi-Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="display-serif text-ivory text-[44px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[88px] text-balance"
          >
            Crafted to be <em className="not-italic font-serif italic text-bronze-light">Treasured</em>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-md text-base sm:text-lg text-ivory/80 leading-relaxed text-pretty"
          >
            Demi-fine gold pieces, designed in our atelier for the everyday edit
            and the moments that mark it.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-3 bg-ivory text-espresso px-8 py-4 text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300 ease-editorial hover:bg-bronze-light"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 text-ivory px-2 py-3 text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-300 ease-editorial hover:text-bronze-light"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 right-12 items-center gap-3 text-ivory/60">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-ivory/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-ivory/80 animate-[scrollline_2.4s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes scrollline {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(220%); }
          100% { transform: translateY(220%); }
        }
      `}</style>
    </section>
  );
}
