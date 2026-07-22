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
    <section ref={containerRef} className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-forest">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-01"
        data-strk-bg="[hero-subtitle] [hero-title] warm lit close up gold jewelry on model neck ear dark editorial photography"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/35 to-ink/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-32 text-center md:px-10">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-luxe text-gold-light">
          Demi-Fine · 18K Gold · Handmade
        </p>
        <h1
          id="hero-title"
          className="mt-6 animate-fade-up font-serif text-5xl font-medium leading-[1.05] text-ivory md:text-7xl"
          style={{ animationDelay: "120ms" }}
        >
          Crafted to be
          <span className="block italic text-gold-light">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-ivory/85 md:text-lg"
          style={{ animationDelay: "240ms" }}
        >
          Warm 18k gold jewelry for every day and every milestone — designed in
          small batches, made to last, priced to love.
        </p>
        <div
          className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "360ms" }}
        >
          <Link
            to="/shop"
            className="bg-gold px-10 py-4 text-xs font-semibold uppercase tracking-luxe text-ivory transition-all duration-300 hover:bg-gold-dark hover:shadow-[0_12px_32px_rgba(176,141,76,0.4)]"
          >
            Shop the Collection
          </Link>
          <Link
            to="/about"
            className="border border-ivory/40 px-10 py-4 text-xs font-semibold uppercase tracking-luxe text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory hover:text-ink"
          >
            Our Story
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-gold-light/70 to-transparent" />
      </div>
    </section>
  );
}
