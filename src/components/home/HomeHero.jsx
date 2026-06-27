import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HomeHero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[var(--color-ink)] text-[var(--color-bone)]">
      {/* Background image */}
      <div className="absolute inset-0 editorial-frame" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1800&q=85"
          alt=""
          className="w-full h-full object-cover opacity-90"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Subtle darken for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ink)]/30 via-transparent to-[var(--color-ink)]/55" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-end pb-20 sm:pb-28">
        <div className="max-w-2xl fade-up">
          <span className="inline-block text-[0.7rem] uppercase tracking-eyebrow text-[var(--color-gold-soft)] font-medium mb-5">
            Velmora · Demi-Fine Collection
          </span>
          <h1 className="font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-[var(--color-bone)]">
            Crafted to be
            <br />
            <em className="italic font-normal text-[var(--color-gold-soft)]">treasured</em>.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[var(--color-bone)]/80 font-light leading-relaxed max-w-md">
            Demi-fine gold jewelry in small batches — designed for the everyday, made to last.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button as={Link} to="/shop" variant="accent" size="lg" className="sm:min-w-[220px]">
              Shop the Collection
              <ArrowRight size={16} strokeWidth={1.5} />
            </Button>
            <Button as={Link} to="/shop?category=sets" variant="outlineLight" size="lg">
              Discover Gifts
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[var(--color-bone)]/60">
        <span className="text-[0.6rem] uppercase tracking-eyebrow">Scroll</span>
        <span className="block w-px h-10 bg-[var(--color-bone)]/40" />
      </div>
    </section>
  );
}