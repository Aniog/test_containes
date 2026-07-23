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
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-f8a2b1"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian/50 via-obsidian/30 to-obsidian/60" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <p
          id="hero-eyebrow"
          className="font-sans text-[11px] tracking-ultra-wide uppercase text-gold mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          New Collection · 2026
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-ivory leading-tight max-w-3xl animate-fade-in-up"
          style={{ animationDelay: "0.25s", opacity: 0 }}
        >
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-sans text-sm md:text-base text-ivory/80 mt-6 max-w-md leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.45s", opacity: 0 }}
        >
          Demi-fine gold jewelry for the woman who knows what she loves.
          Designed to wear every day. Made to last a lifetime.
        </p>
        <div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <Link
            to="/shop"
            className="font-sans text-xs tracking-widest uppercase bg-gold text-obsidian px-10 py-4 hover:bg-gold-light transition-all duration-300"
          >
            Shop the Collection
          </Link>
          <Link
            to="/#story"
            className="font-sans text-xs tracking-widest uppercase text-ivory border border-ivory/50 px-10 py-4 hover:border-ivory hover:bg-ivory/10 transition-all duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-ivory/30 animate-pulse" />
      </div>
    </section>
  );
}
