import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { EDITORIAL } from "@/data/products";

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[640px] overflow-hidden">
      <img
        src={EDITORIAL.hero.image}
        alt={EDITORIAL.hero.alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        fetchpriority="high"
      />
      {/* Soft warm overlay so type stays legible over varied imagery */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,14,12,0.45) 0%, rgba(15,14,12,0.15) 35%, rgba(15,14,12,0.55) 100%)",
        }}
      />

      <div className="relative h-full max-w-container mx-auto px-5 md:px-10 flex flex-col justify-end pb-20 md:pb-28 text-ivory">
        <div className="max-w-2xl">
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.32em] text-ivory/85 mb-5 md:mb-6">
            The Velmora Edit · SS26
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-[-0.01em]">
            Crafted to be{" "}
            <em className="italic font-light text-champagne">Treasured</em>
          </h1>
          <p className="mt-6 max-w-md text-base md:text-lg text-ivory/85 leading-relaxed">
            Demi-fine jewelry in 18K gold plate — the everyday pieces you'll
            reach for, and never want to take off.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 bg-ivory text-ink text-[12px] uppercase tracking-editorial px-8 py-4 hover:bg-champagne hover:text-ivory transition-colors duration-300"
            >
              Shop the Collection
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
            <Link
              to="/shop/sets"
              className="text-[12px] uppercase tracking-editorial text-ivory/90 hover:text-champagne transition-colors border-b border-ivory/30 hover:border-champagne pb-1"
            >
              Explore Gift Sets
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 right-10 items-center gap-3 text-ivory/80 text-[10px] uppercase tracking-editorial">
        <span className="w-10 h-px bg-ivory/40" />
        Scroll
      </div>
    </section>
  );
}
