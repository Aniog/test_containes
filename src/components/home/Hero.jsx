import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HeroArt } from "@/components/jewelry-illustrations/JewelryArt";
import PrimaryButton from "@/components/ui/PrimaryButton";

const Hero = () => {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-cream">
      {/* Background image */}
      <div className="absolute inset-0">
        <HeroArt className="h-full w-full" />
      </div>

      {/* Soft warm gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />

      <div className="relative z-10 container-velmora h-full flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="eyebrow text-cream/80">Demi-fine 18K Gold Plated</p>
          <h1 className="mt-5 font-serif font-light text-5xl leading-[1.05] md:text-7xl lg:text-[88px] text-cream text-balance">
            Crafted to be <em className="not-italic text-gold-shine font-medium">treasured</em>.
          </h1>
          <p className="mt-6 max-w-md text-base md:text-lg text-cream/85 leading-relaxed">
            Heirloom-quality demi-fine jewelry, made in small batches and designed
            to live with you — from weekday mornings to quiet anniversaries.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 bg-cream text-ink px-8 py-4 text-[11px] font-medium uppercase tracking-widest2 transition-colors duration-300 hover:bg-accent hover:text-cream"
            >
              Shop the Collection
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link
              to="/shop?category=giftsets"
              className="inline-flex items-center justify-center gap-2 border border-cream/60 text-cream px-8 py-4 text-[11px] font-medium uppercase tracking-widest2 transition-colors duration-300 hover:bg-cream hover:text-ink"
            >
              The Gift Edit
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative bottom corner mark */}
      <div className="absolute bottom-6 right-6 z-10 hidden md:flex flex-col items-end gap-2 text-cream/60">
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <div className="h-12 w-px bg-cream/40" />
      </div>
    </section>
  );
};

export default Hero;
