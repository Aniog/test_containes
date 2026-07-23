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
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-velvet"
        data-strk-bg-id="hero-bg-9f2a1c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      />

      {/* Warm overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-velvet/70 via-velvet/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-velvet/50 via-transparent to-transparent" />

      {/* Hidden text for image context */}
      <span id="hero-headline" className="sr-only">Crafted to be Treasured — fine gold jewelry</span>
      <span id="hero-subhead" className="sr-only">Demi-fine gold jewelry earrings necklaces huggies worn on model warm editorial</span>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-6">
            New Collection
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-tight tracking-wide mb-6">
            Crafted to be<br />
            <em className="not-italic font-light">Treasured</em>
          </h1>
          <p className="font-sans text-sm text-champagne/90 leading-relaxed mb-10 max-w-sm">
            Demi-fine gold jewelry designed for the woman who moves through the world with intention. Wear it every day. Gift it with love.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold hover:bg-gold-light text-velvet font-sans text-xs tracking-widest2 uppercase px-10 py-4 transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-10 bg-champagne/60 animate-pulse" />
      </div>
    </section>
  );
}
