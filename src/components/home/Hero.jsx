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
        className="absolute inset-0 bg-espresso"
        data-strk-bg-id="hero-bg-velmora-9f2a1c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p className="font-inter text-xs uppercase tracking-[0.25em] text-gold mb-6 animate-fade-in">
              New Collection
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-[1.05] tracking-wide mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-inter text-sm text-cream/80 leading-relaxed mb-10 max-w-sm animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Demi-fine gold jewelry for the woman who knows her worth. Designed to be worn every day, remembered forever.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/shop"
                className="inline-block bg-gold text-espresso font-inter text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-light transition-colors duration-300"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-cream/50">Scroll</span>
        <div className="w-px h-8 bg-cream/30" />
      </div>
    </section>
  );
}
