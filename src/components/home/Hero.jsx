import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
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
      className="relative w-full h-[100svh] min-h-[640px] flex items-end overflow-hidden bg-espresso text-ivory"
    >
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-7a3f1c"
        data-strk-bg="[hero-subtitle] [hero-headline] woman model wearing gold jewelry editorial"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 30%, #3a2c1d 0%, #1f1a14 60%, #100d09 100%)",
        }}
      />
      {/* Editorial warm gradient overlay so text always reads */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/20 to-espresso/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative w-full max-w-8xl mx-auto px-5 md:px-8 pb-20 md:pb-28 lg:pb-32 pt-32">
        <div className="max-w-2xl animate-fade-in">
          <p
            id="hero-eyebrow"
            className="text-[0.7rem] md:text-xs uppercase tracking-[0.32em] text-ivory/75 mb-5 md:mb-7"
          >
            Velmora — Fine Demi-Fine Jewelry
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-ivory"
          >
            Crafted to be
            <br />
            <span className="italic font-light text-brass-soft">Treasured.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 md:mt-8 text-base md:text-lg text-ivory/80 max-w-lg leading-relaxed"
          >
            Heirloom-quality demi-fine jewelry, made in 18K gold plating.
            Designed for layering, gifting, and the quiet luxuries of every day.
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn-light">
              Shop the Collection
              <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
            </Link>
            <Link
              to="/shop?category=gift-sets"
              className="text-xs uppercase tracking-[0.22em] text-ivory/85 hover:text-ivory transition-colors link-underline"
            >
              Explore the Gift Edit
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ivory/60">
        <span className="text-[0.62rem] uppercase tracking-[0.32em]">Scroll</span>
        <span className="block w-px h-8 bg-ivory/40" />
      </div>
    </section>
  );
}
