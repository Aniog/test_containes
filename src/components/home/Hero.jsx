import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-espresso"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-espresso/40" />

      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center items-center text-center text-white">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold mb-6">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.05] mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-sm md:text-lg text-white/80 max-w-xl mb-10 font-light"
        >
          Elegant pieces for everyday moments and forever memories.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center bg-gold text-white px-10 py-4 uppercase text-xs tracking-[0.2em] hover:bg-gold-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
