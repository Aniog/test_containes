import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[92vh] items-end overflow-hidden bg-noir md:min-h-screen md:items-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-01"
        data-strk-bg="[hero-subtitle] [hero-title] warm-lit macro photograph of gold jewelry on a woman's neck and ear, dark elegant editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir/85 via-noir/35 to-noir/30 md:bg-gradient-to-r md:from-noir/75 md:via-noir/30 md:to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 pb-20 pt-40 md:px-10 md:pb-0 md:pt-24">
        <div className="max-w-xl animate-fade-up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-goldlight">
            Demi-Fine Jewelry · 18K Gold
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-serif text-5xl font-medium leading-[1.05] text-ivory md:text-7xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-md text-base leading-relaxed text-sand md:text-lg"
          >
            Heirloom-feeling earrings, necklaces and huggies in 18K gold plate —
            designed for every day, priced for real life.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 bg-gold px-9 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ivory transition-colors duration-300 hover:bg-goldlight"
            >
              Shop the Collection <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border border-ivory/40 px-9 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-ivory hover:text-noir"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="h-12 w-px bg-ivory/40" />
      </div>
    </section>
  );
}
