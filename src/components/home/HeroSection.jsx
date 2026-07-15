import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[90vh] md:h-screen min-h-[600px] overflow-hidden -mt-16 md:-mt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-velmora-bg-dark"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-heading] [hero-subtitle]"
        data-strk-bg-ratio="3x2"
        data-strk-bg-width="1600"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-lg">
            <h1
              id="hero-heading"
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-velmora-text-light font-light leading-tight"
            >
              Crafted to be<br />Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="mt-4 text-base md:text-lg text-velmora-text-light/80 font-light leading-relaxed max-w-md"
            >
              Discover demi-fine gold jewelry designed for everyday elegance. Each piece, a quiet statement of timeless beauty.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-8 bg-velmora-gold text-velmora-text px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-velmora-gold-dark transition-all duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}