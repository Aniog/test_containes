import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-background"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="home-hero-bg-7c9a1d"
        data-strk-bg="gold jewelry on warm dark background editorial portrait"
        data-strk-bg-ratio="3x2"
        data-strk-bg-width="1800"
      />
      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-screen-2xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-20 lg:pb-28">
        <p id="home-hero-eyebrow" className="eyebrow mb-6">
          Velmora · The Spring Edit
        </p>
        <h1
          id="home-hero-title"
          className="font-serif font-light text-ivory text-[44px] sm:text-6xl lg:text-[88px] leading-[1.02] tracking-[-0.01em] max-w-3xl"
        >
          Crafted to be
          <br className="hidden sm:block" /> <em className="italic text-gold">Treasured</em>.
        </h1>
        <p
          id="home-hero-subtitle"
          className="mt-6 text-ivory-muted text-base sm:text-lg max-w-md leading-relaxed"
        >
          Demî-fine jewelry in 18K gold plating — designed to be worn every day, and passed
          on some day.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
          <Link
            to="/collections/the-everyday-edit"
            className="text-[12px] font-sans uppercase tracking-button font-medium text-ivory hover:text-gold transition-colors"
          >
            The Everyday Edit →
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory-dim">
        <span className="text-[10px] uppercase tracking-eyebrow">Scroll</span>
        <span className="block w-px h-10 bg-ivory-dim/60 animate-pulse" />
      </div>
    </section>
  );
}
