import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import StockImage from "@/components/ui/StockImage";

export default function Hero() {
  return (
    <section className="relative min-h-[88svh] md:min-h-[92svh] w-full overflow-hidden bg-ink text-cream">
      {/* Background image (strk-img populates after scan) */}
      <div className="absolute inset-0">
        <StockImage
          imgId="hero-bg-1"
          query="[hero-eyebrow] [hero-headline] [hero-subhead] warm light editorial gold jewelry close up model"
          ratio="3x4"
          width="1600"
          background
          eager
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/65" />
      </div>

      <div className="relative h-full min-h-[88svh] md:min-h-[92svh] flex items-end pb-16 md:pb-24">
        <div className="mx-auto max-w-page w-full px-5 md:px-10">
          <Reveal>
            <p id="hero-eyebrow" className="vm-eyebrow text-cream/80">
              The Velmora Atelier — Spring '26
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1
              id="hero-headline"
              className="vm-display text-cream mt-5 md:mt-6 text-[44px] sm:text-6xl md:text-7xl lg:text-[96px] leading-[1.02] max-w-5xl"
            >
              Crafted to be{" "}
              <span className="italic font-light text-gold-soft">treasured</span>.
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p
              id="hero-subhead"
              className="mt-6 md:mt-8 max-w-xl text-cream/80 text-base md:text-lg leading-relaxed"
            >
              Demi-fine jewelry in 18K gold and sterling silver — hand-finished in small batches, made to wear for a lifetime.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 md:mt-10 flex flex-wrap items-center gap-4">
              <Link to="/shop" className="vm-btn vm-btn--accent">
                Shop the Collection
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
              </Link>
              <Link to="/collections" className="vm-btn vm-btn--ghost text-cream hover:text-gold-soft">
                Discover the Story
              </Link>
            </div>
          </Reveal>

          <Reveal delay={460}>
            <div className="mt-14 md:mt-20 flex items-end gap-8 md:gap-14 text-cream/85">
              <div>
                <p className="vm-eyebrow text-cream/60">Designed in</p>
                <p className="vm-serif text-2xl mt-1">Paris</p>
              </div>
              <div className="w-px h-10 bg-cream/30" />
              <div>
                <p className="vm-eyebrow text-cream/60">Hand-finished in</p>
                <p className="vm-serif text-2xl mt-1">Bali & Lisbon</p>
              </div>
              <div className="w-px h-10 bg-cream/30 hidden md:block" />
              <div className="hidden md:block">
                <p className="vm-eyebrow text-cream/60">Worn in</p>
                <p className="vm-serif text-2xl mt-1">52 countries</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 hidden md:flex flex-col items-center gap-3 text-cream/70">
        <span className="vm-eyebrow text-[10px]">Scroll</span>
        <span className="block w-px h-12 bg-cream/40 animate-pulse" />
      </div>
    </section>
  );
}
