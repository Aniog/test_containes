import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { HeroArt } from "@/components/decor/JewelryArt";

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[640px] bg-ink overflow-hidden">
      {/* Background artwork */}
      <div className="absolute inset-0">
        <HeroArt />
      </div>

      {/* Subtle gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/40" />

      {/* Content */}
      <div className="relative h-full mx-auto max-w-8xl px-5 md:px-8 lg:px-12 flex items-end pb-20 md:pb-28">
        <div className="max-w-2xl text-bone">
          <p className="text-[10px] font-medium tracking-wide-4 uppercase text-gold-light animate-fade-in">
            Velmora · New Collection
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-serif font-light text-[44px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[88px] text-bone animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Crafted to be <em className="italic font-normal text-gold-light">treasured</em>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg font-light max-w-md text-bone/85 animate-fade-up"
            style={{ animationDelay: "260ms" }}
          >
            Demi-fine gold jewelry, made in small batches. Designed for the everyday, kept for the heirloom table.
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <Button as={Link} to="/shop" variant="light" size="lg">
              Shop the Collection
            </Button>
            <Button as={Link} to="/shop?category=sets" variant="lightOutline" size="lg">
              Discover Gift Sets
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bone/60">
        <span className="text-[9px] tracking-wide-4 uppercase">Scroll</span>
        <span className="w-px h-8 bg-bone/30" />
      </div>
    </section>
  );
}
