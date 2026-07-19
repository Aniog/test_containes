import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useImageLoader } from "@/hooks/useImageLoader";

export default function Hero() {
  const containerRef = useRef(null);
  useImageLoader(containerRef, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-espresso text-ivory"
    >
      <div className="relative h-[88svh] min-h-[640px] w-full sm:h-[92svh]">
        {/* Background image */}
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-9c3a17"
          data-strk-bg="editorial close up of model wearing chunky gold jewelry, soft warm golden light on face, deep shadow, premium fashion campaign, hair swept back"
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="1800"
        />
        {/* Vignette / overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/20 to-espresso/70" />

        {/* Editorial corner marks */}
        <div className="absolute inset-x-0 top-20 z-10 sm:top-24">
          <div className="mx-auto max-w-7.5xl px-6 sm:px-10">
            <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-wider-3 text-ivory/80">
              <span className="hidden sm:inline">FW · 26 Collection</span>
              <span>No. 01 — Aura</span>
              <span className="hidden sm:inline">Velmora Atelier</span>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="relative z-10 mx-auto flex h-full max-w-7.5xl flex-col justify-end px-6 pb-20 sm:px-10 sm:pb-28">
          <div className="max-w-3xl">
            <p className="font-sans text-[10px] uppercase tracking-wider-3 text-gold-soft animate-fade-in">
              Demi-Fine · 18K Gold Plated
            </p>
            <h1 className="mt-4 font-serif text-[44px] leading-[1.05] text-ivory sm:text-7xl lg:text-[88px] animate-fade-up">
              Crafted to be{" "}
              <span className="italic font-light text-gold-soft">Treasured</span>
            </h1>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-ivory/80 sm:text-base">
              Heirloom-quality demi-fine jewelry, sculpted in 18K gold plating
              and finished by hand. Made for the everyday, kept for a lifetime.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 bg-ivory px-8 py-4 font-sans text-[11px] uppercase tracking-wider-2 text-espresso transition-colors hover:bg-gold-soft"
              >
                Shop the Collection
                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/shop?cat=earrings"
                className="inline-flex items-center gap-2 border-b border-ivory/60 pb-1 font-sans text-[11px] uppercase tracking-wider-2 text-ivory transition-colors hover:border-gold-soft hover:text-gold-soft"
              >
                Discover Earrings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
