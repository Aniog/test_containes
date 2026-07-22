import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-ink"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-subtitle]"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay — for legibility on lighter photos */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/15 to-ink/70" />

      {/* Content */}
      <div className="relative h-full container-editorial flex flex-col justify-end pb-16 md:pb-24">
        <div className="max-w-2xl">
          <p
            id="hero-eyebrow"
            className="text-[10px] md:text-[11px] uppercase tracking-widest-2 text-cream/85 font-sans font-medium"
          >
            Velmora · New Collection 2026
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-serif text-cream font-light leading-[1.02] text-balance"
            style={{ fontSize: "clamp(2.8rem, 7.2vw, 6rem)", letterSpacing: "-0.01em" }}
          >
            Crafted to be <em className="font-serif italic gold-shine">treasured</em>.
          </h1>
          <p
            id="hero-subtitle"
            className="mt-5 max-w-md text-[15px] md:text-[17px] text-cream/85 leading-relaxed font-sans font-light"
          >
            Demi-fine gold jewelry, made in small batches. Designed in California,
            worn in every corner of the world.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:items-center">
            <Link to="/shop" className="btn-accent">
              Shop the Collection
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.6} />
            </Link>
            <Link
              to="/shop?category=sets"
              className="inline-flex items-center justify-center gap-2 px-8 py-4
                         font-sans uppercase tracking-widest-2 text-[11px] md:text-xs font-medium
                         text-cream border border-cream/40 hover:bg-cream/10 transition-colors"
            >
              Explore Gift Sets
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-cream/70">
        <span className="text-[9px] uppercase tracking-widest-2">Scroll</span>
        <span className="w-px h-10 bg-cream/40" />
      </div>
    </section>
  );
}
