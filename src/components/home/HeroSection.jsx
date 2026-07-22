import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { placeholderSrc } from "@/data/products";

export function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden" ref={containerRef}>
      <div
        className="absolute inset-0 bg-velmora-sand"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-velmora-base/30" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] mb-4 md:mb-6 opacity-90">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-5 md:mb-7"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-8 md:mb-10 opacity-90 leading-relaxed"
        >
          Timeless pieces for everyday luxury — designed for the women who wear
          confidence like jewelry.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold text-white px-8 md:px-10 py-3.5 md:py-4 text-xs md:text-sm uppercase tracking-widest hover:bg-velmora-gold-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
