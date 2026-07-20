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
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-3xl">
        <p
          className="font-sans text-champagne text-xs tracking-widest3 uppercase mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-ivory text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 animate-slide-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Crafted to be<br />
          <em className="italic text-champagne-light">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-sans text-ivory/80 text-base md:text-lg font-light mb-10 max-w-md animate-slide-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          18K gold plated jewelry designed for the woman who knows her worth.
          Hypoallergenic. Enduring. Yours.
        </p>
        <div
          className="animate-slide-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <Link to="/shop" className="btn-accent">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-12 bg-ivory/50 animate-pulse" />
      </div>
    </section>
  );
}
