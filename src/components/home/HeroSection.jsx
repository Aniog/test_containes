import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-obsidian/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-xl animate-fadeIn">
          <p
            id="hero-eyebrow"
            className="font-manrope text-[10px] uppercase tracking-widest3 text-gold-light mb-6"
          >
            New Collection · 2026
          </p>
          <h1
            id="hero-headline"
            className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-ivory leading-[1.05] mb-6"
          >
            Crafted to be
            <br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-manrope text-sm md:text-base text-ivory/75 leading-relaxed mb-10 max-w-sm"
          >
            Demi-fine gold jewelry for the woman who moves through the world
            with quiet confidence.
          </p>
          <Link to="/shop">
            <Button variant="primary" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-manrope text-[9px] uppercase tracking-widest text-ivory">
          Scroll
        </span>
        <div className="w-px h-8 bg-ivory/50 animate-pulse" />
      </div>
    </section>
  );
}
