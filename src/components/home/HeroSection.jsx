import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model elegant luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-charcoal/40" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <p
          id="hero-subtitle"
          className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 text-white/80"
        >
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal tracking-wide leading-[1.1] max-w-4xl"
        >
          Crafted to be
          <br />
          Treasured
        </h1>
        <p className="mt-4 md:mt-6 text-sm md:text-base text-white/80 max-w-md leading-relaxed">
          Small-batch gold jewelry designed for the moments that matter —
          and the everyday in between.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 inline-block bg-champagne text-charcoal px-10 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-opacity-90 transition-all duration-200"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
