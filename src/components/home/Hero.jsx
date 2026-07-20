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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-v1a2b3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 pb-20 md:pb-0 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs uppercase tracking-widest3 text-gold mb-4">
              New Collection
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory font-light leading-[1.1] mb-5"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-sm text-ivory/80 leading-relaxed mb-8 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who knows exactly who she is.
              Worn every day. Remembered forever.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-gold text-obsidian font-sans text-xs uppercase tracking-widest px-10 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
