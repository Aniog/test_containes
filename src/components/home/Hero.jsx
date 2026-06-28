import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline] gold jewelry model editorial warm"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-dark/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="font-inter text-xs uppercase tracking-[0.3em] text-gold-light mb-6">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-headline"
          className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-wide mb-6"
        >
          Crafted to be
          <br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-inter text-sm md:text-base text-white/80 mb-10 max-w-md mx-auto leading-relaxed"
        >
          Demi-fine gold jewelry for the woman who wears her story. 18K gold
          plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold text-white font-inter text-xs uppercase tracking-widest px-10 py-4 hover:bg-white hover:text-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="font-inter text-[9px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
