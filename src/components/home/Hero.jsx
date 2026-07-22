import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const node = containerRef.current;
    const frame = window.requestAnimationFrame(() => {
      try {
        ImageHelper.loadImages(strkImgConfig, node);
      } catch {
        // ignore
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso text-ivory"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 animate-slow-zoom"
        data-strk-bg-id="velmora-hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
      />
      {/* Soft vignette + warm gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/40 to-espresso/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,rgba(184,153,104,0.18),transparent_60%)]" />

      {/* Top-right trust whisper */}
      <div className="absolute right-6 top-24 hidden text-right text-[10px] uppercase tracking-widest2 text-ivory/55 md:right-10 md:top-28 md:block lg:right-16">
        <p>18K Gold Plated</p>
        <p className="mt-1">Hypoallergenic</p>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-container flex-col items-center justify-end px-5 pb-24 text-center md:items-start md:px-10 md:pb-32 md:text-left lg:px-16">
        <div className="max-w-2xl">
          <span
            id="hero-eyebrow"
            className="block text-[10px] font-medium uppercase tracking-widest2 text-gold-soft md:text-[11px]"
          >
            The Velmora Edit
          </span>
          <h1
            id="hero-title"
            className="mt-5 font-serif text-5xl font-light leading-[1.02] text-ivory sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            Crafted to be <em className="italic text-gold-soft">Treasured</em>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory/80 md:text-base"
          >
            Demi-fine jewelry in 18K gold — hand-finished, hypoallergenic, and
            made to wear every day. Quietly luxurious, never loud.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 bg-ivory px-9 py-4 text-[11px] font-medium uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:bg-gold-soft"
            >
              Shop the Collection
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-2 py-4 text-[11px] font-medium uppercase tracking-widest2 text-ivory/80 transition-colors hover:text-ivory"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-widest2 text-ivory/60 md:flex">
        <span>Scroll</span>
        <span className="block h-10 w-px bg-ivory/40" />
      </div>
    </section>
  );
}
