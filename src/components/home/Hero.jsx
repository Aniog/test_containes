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
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-sable text-ivory"
    >
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img
          alt="Model wearing the Vivid Aura Jewels gold ear cuff"
          data-strk-img-id="hero-main-bg"
          data-strk-img="[hero-eyebrow] [hero-subtitle] [hero-title] warm gold jewelry on a model close-up"
          data-strk-img-ratio="3x4"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sable/40 via-sable/20 to-sable/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-sable/55 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container-page flex flex-col justify-end pb-20 sm:pb-28 lg:pb-32">
        <div className="max-w-2xl animate-fade-in">
          <span
            id="hero-eyebrow"
            className="eyebrow !text-ivory/75 mb-5 inline-block"
          >
            Velmora Fine Jewelry · 18K Gold Plated
          </span>
          <h1
            id="hero-title"
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] leading-[1.02] font-light text-ivory"
          >
            Crafted to be{" "}
            <span className="italic font-light text-gold-light">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-md text-ivory/85 text-sm sm:text-base font-sans font-light leading-relaxed"
          >
            Demi-fine jewelry in warm, recycled gold. Designed in small
            batches, made to wear every day, and given to be remembered.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/shop" className="btn-gold group">
              Shop the Collection
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/shop?category=earrings"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ivory/40 text-ivory font-sans text-[12px] font-medium tracking-widest2 uppercase transition-all duration-300 hover:bg-ivory hover:text-sable"
            >
              Explore Earrings
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-ivory/70">
        <span className="text-[10px] tracking-widest2 uppercase">Scroll</span>
        <span className="w-px h-10 bg-ivory/40" />
      </div>
    </section>
  );
}
