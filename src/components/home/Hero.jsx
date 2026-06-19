import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HERO_IMAGE } from "@/data/products";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Background image */}
      <img
        src={HERO_IMAGE}
        alt="Editorial close-up of gold jewelry worn on the ear"
        className="absolute inset-0 w-full h-full object-cover velmora-fade-up"
        fetchpriority="high"
      />
      {/* Editorial gradient — left side darker so headline reads clearly */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/40" />

      {/* Content */}
      <div className="relative h-full container-velmora flex items-center">
        <div className="max-w-2xl text-bone">
          <p className="text-[11px] md:text-xs uppercase tracking-eyebrow text-bone/85 mb-6 md:mb-8">
            New Season · The Heirloom Edit
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] font-light tracking-tight">
            Crafted to be
            <br />
            <span className="italic font-light">treasured.</span>
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-lg text-bone/85 max-w-md leading-relaxed">
            Demi-fine 18K gold plated jewelry — sculpted in small batches, finished
            by hand, and made for the quiet rituals of everyday luxury.
          </p>
          <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-3 bg-bone text-ink px-9 py-4 text-[11px] md:text-xs font-medium uppercase tracking-product hover:bg-cream transition-colors duration-300"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
            </Link>
            <Link
              to="/collections"
              className="inline-flex items-center text-bone/85 hover:text-bone text-[11px] md:text-xs uppercase tracking-product font-medium border-b border-bone/40 hover:border-bone pb-1 transition-all duration-300"
            >
              Explore Edits
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-bone/70 text-[10px] uppercase tracking-eyebrow hidden md:block">
        Scroll
      </div>
    </section>
  );
}