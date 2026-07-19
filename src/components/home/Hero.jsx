import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-espresso text-ivory"
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-01"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      {/* Warm gradient overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(31,26,23,0.35) 0%, rgba(31,26,23,0.15) 35%, rgba(31,26,23,0.55) 100%)",
        }}
      />

      <div className="relative h-full container-x flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl">
          <p
            id="hero-eyebrow"
            className="font-sans text-[11px] md:text-[12px] uppercase tracking-wider-3 text-gold-soft mb-5 md:mb-7"
          >
            Demi-Fine Jewelry · Made to be Worn
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] mb-5 md:mb-7"
          >
            Crafted to be <em className="italic text-gold-soft">Treasured</em>
          </h1>
          <p
            id="hero-subtitle"
            className="text-base md:text-lg text-ivory/85 leading-relaxed max-w-md mb-9 md:mb-10"
          >
            Quietly opulent pieces in 18K gold plating — the kind of jewelry
            you reach for without thinking, and never want to take off.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-ivory text-espresso font-sans text-[12px] uppercase tracking-wider-2 px-9 py-4 transition-all duration-300 ease-out-soft hover:bg-gold hover:tracking-wider-3"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
