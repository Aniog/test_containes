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
        className="absolute inset-0 w-full h-full"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-obsidian/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <p
            id="hero-eyebrow"
            className="text-xs font-sans uppercase tracking-widest3 text-gold mb-6 font-medium"
          >
            New Collection — Summer 2026
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-[1.1] tracking-wide mb-6"
          >
            Crafted to be
            <br />
            <em className="italic font-light">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="text-sm md:text-base font-sans text-ivory/80 leading-relaxed mb-10 max-w-sm"
          >
            Demi-fine gold jewelry for the woman who moves through the world
            with intention. Hypoallergenic. Everyday luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/shop"
              className="inline-block bg-gold text-obsidian text-xs uppercase tracking-widest font-sans font-semibold px-8 py-4 hover:bg-gold-light transition-colors duration-300 text-center"
            >
              Shop the Collection
            </Link>
            <Link
              to="/#story"
              className="inline-block border border-ivory/60 text-ivory text-xs uppercase tracking-widest font-sans font-medium px-8 py-4 hover:border-ivory hover:bg-ivory/10 transition-colors duration-300 text-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[9px] font-sans uppercase tracking-widest text-ivory">
          Scroll
        </span>
        <div className="w-px h-8 bg-ivory/50 animate-pulse" />
      </div>
    </section>
  );
}
