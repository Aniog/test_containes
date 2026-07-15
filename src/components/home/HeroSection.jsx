import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-end overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-xl">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-4">
            New Collection 2026
          </p>
          <h1
            id="hero-headline"
            className="font-cormorant text-5xl md:text-7xl font-light text-ivory leading-tight"
          >
            Crafted to be
            <br />
            <em>Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-inter text-sm text-ivory/80 mt-5 leading-relaxed max-w-sm"
          >
            Demi-fine gold jewelry for the woman who knows her worth. Designed
            to layer, gift, and wear every day.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <Link
              to="/shop"
              className="bg-gold text-white font-inter text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold-dark transition-colors duration-300"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="font-inter text-xs uppercase tracking-widest text-ivory/80 hover:text-ivory transition-colors border-b border-ivory/40 pb-0.5"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2">
        <span className="font-inter text-[10px] uppercase tracking-widest text-ivory/50 rotate-90 origin-center">
          Scroll
        </span>
        <div className="w-px h-12 bg-ivory/30" />
      </div>
    </section>
  );
}
