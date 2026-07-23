import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Full-bleed editorial hero.
 * Background is a warm-lit close-up of gold jewelry on a model.
 */
export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso"
    >
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-velmora-1d4e"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="4x5"
        data-strk-bg-width="1600"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(120% 80% at 30% 30%, rgba(176,141,87,0.20), transparent 60%)," +
            "linear-gradient(180deg, #1F1A17 0%, #2A211B 50%, #15110E 100%)",
        }}
        aria-hidden
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.35) 100%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="container-x pb-20 sm:pb-28 lg:pb-32">
          <div className="max-w-xl text-bone-50">
            <p
              id="hero-eyebrow"
              className="text-[11px] font-medium uppercase tracking-widest3 text-bone-100/70 mb-5"
            >
              The Velmora Edit · 2026
            </p>
            <h1
              id="hero-title"
              className="display-serif font-light text-[44px] leading-[1.05] sm:text-6xl lg:text-7xl"
            >
              Crafted to be<br />
              <em className="font-light text-bone-50/95">Treasured.</em>
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 text-bone-100/75 text-base sm:text-lg max-w-md leading-relaxed"
            >
              Demi-fine 18K gold-plated jewelry — designed in small batches,
              finished by hand, made for every day that matters.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/shop" className="btn btn-accent">
                Shop the Collection
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
              <Link
                to="/about"
                className="btn border border-bone-50/40 text-bone-50 hover:bg-bone-50 hover:text-espresso"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-6 z-10 hidden sm:flex flex-col items-center gap-2 text-bone-100/55">
        <span className="text-[10px] uppercase tracking-widest3">Scroll</span>
        <span className="block w-px h-10 bg-bone-100/40 origin-top animate-pulse" />
      </div>
    </section>
  );
}
