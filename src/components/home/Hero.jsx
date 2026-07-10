import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { heroSVG } from "@/data/placeholders";

export function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url("${heroSVG()}")` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/40" aria-hidden="true" />

      <div className="relative h-full max-w-editorial mx-auto px-5 sm:px-8 flex flex-col justify-end pb-20 sm:pb-28 md:pb-32">
        <div className="max-w-2xl text-cream animate-fadeUp">
          <p className="eyebrow !text-cream/70 mb-5">Velmora — Volume 04</p>
          <h1 className="font-serif text-[2.5rem] sm:text-6xl md:text-7xl leading-[1.02] tracking-tight">
            Crafted to be<br />Treasured.
          </h1>
          <p className="mt-6 max-w-md text-cream/80 text-base sm:text-lg font-sans leading-relaxed">
            Demi-fine gold jewelry, designed in small batches for the everyday — and the once-in-a-while.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-cream text-ink px-7 sm:px-9 py-4 text-[0.7rem] tracking-widest2 uppercase font-medium hover:bg-gold transition-colors duration-300 group"
            >
              Shop the Collection
              <ArrowRight size={14} strokeWidth={1.6} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-cream border-b border-cream/40 hover:border-gold hover:text-gold py-1 text-[0.7rem] tracking-widest2 uppercase font-medium transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* small scroll cue */}
      <div className="absolute bottom-6 right-6 hidden md:flex flex-col items-center gap-2 text-cream/60">
        <span className="text-[0.6rem] tracking-widest2 uppercase">Scroll</span>
        <div className="w-px h-10 bg-cream/30 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-3 bg-cream animate-fadeIn" />
        </div>
      </div>
    </section>
  );
}
