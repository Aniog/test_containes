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
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
      aria-label="Velmora — Crafted to be treasured"
    >
      {/* Background image — warm, editorial gold-jewelry-on-skin */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-1"
        data-strk-bg="[hero-eyebrow] [hero-headline] [hero-subhead] Velmora fine jewelry editorial"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink-300/40 via-ink-300/15 to-ink-300/65" />
      </div>

      {/* Top spacer to clear fixed nav (h-16 md:h-20). */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-editorial px-6 md:px-10 lg:px-14">
          <p
            id="hero-eyebrow"
            className="reveal reveal-delay-1 eyebrow text-cream-100/80"
          >
            Velmora — Demi-Fine Jewelry
          </p>
          <h1
            id="hero-headline"
            className="reveal reveal-delay-2 mt-4 max-w-3xl font-serif text-5xl leading-[1.05] text-cream-100 sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Crafted to be
            <br className="hidden sm:block" /> <em className="font-light italic">Treasured.</em>
          </h1>
          <p
            id="hero-subhead"
            className="reveal reveal-delay-3 mt-6 max-w-lg text-base text-cream-100/85 md:text-lg"
          >
            Demi-fine 18K gold plated jewelry — quiet, considered, made to be
            lived in. From $38.
          </p>
          <div className="reveal reveal-delay-4 mt-9 flex flex-wrap items-center gap-3">
            <Link to="/shop" className="btn-primary bg-cream-100 text-ink-300 border-cream-100 hover:bg-gold-300 hover:border-gold-300 hover:text-cream-100">
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="btn-outline border-cream-100/70 text-cream-100 hover:bg-cream-100 hover:text-ink-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle scroll hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-cream-100/60 md:flex">
        <span className="eyebrow text-[10px]">Scroll</span>
        <span className="block h-8 w-px bg-cream-100/50" />
      </div>
    </section>
  );
}
