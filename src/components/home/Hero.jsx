import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
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
      aria-label="Velmora — Crafted to be Treasured"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-eyebrow] [hero-subhead] [hero-headline]"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1800"
      />
      {/* Warm gradient overlay — flatters gold + keeps contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/60 via-espresso-900/35 to-espresso-900/75" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso-900/55 via-transparent to-transparent" aria-hidden="true" />

      {/* Top-aligned eyebrow + headline */}
      <div className="container-x relative h-full flex flex-col">
        <div className="pt-28 md:pt-36 lg:pt-44 max-w-3xl">
          <p
            id="hero-eyebrow"
            className="text-[11px] uppercase tracking-[0.32em] text-ivory-50/85 font-sans"
          >
            Demi-fine jewelry, hand-finished
          </p>
          <h1
            id="hero-headline"
            className="h-display mt-5 text-ivory-50 text-display-xl text-balance"
          >
            Crafted to be
            <span className="block gold-shimmer">treasured.</span>
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 text-ivory-50/85 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            A small, considered collection of 18K gold-plated earrings, necklaces
            and huggies — designed to live with you, every day, and forever.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn-ghost-light">
              Shop the Collection
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link
              to="/about"
              className="text-[12px] uppercase tracking-[0.22em] text-ivory-50/90 hover:text-gold-200 transition-colors"
            >
              Our story →
            </Link>
          </div>
        </div>

        {/* Bottom-right meta */}
        <div className="mt-auto pb-10 flex items-end justify-between gap-6">
          <div className="hidden md:flex items-end gap-3 text-ivory-50/70 text-[11px] uppercase tracking-[0.22em]">
            <span className="w-10 h-px bg-ivory-50/40" />
            <span>Vol. 06 — Summer 2026</span>
          </div>
          <p className="hidden md:block font-serif italic text-ivory-50/80 text-sm max-w-xs text-right">
            "Jewelry should feel inevitable — like it was always yours."
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory-50/70 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.32em]">Scroll</span>
        <span className="w-px h-8 bg-ivory-50/50 animate-pulse" />
      </div>
    </section>
  );
}
