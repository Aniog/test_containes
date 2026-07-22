import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] md:min-h-[92svh] w-full overflow-hidden bg-ink text-cream">
      {/* Background image — warm-lit close-up of gold jewelry on model */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7a3f2c"
        data-strk-bg="[hero-subtitle] [hero-title] model wearing gold jewelry warm cinematic light close up"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
      />
      {/* Subtle gradient overlay for legibility on smaller screens */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/60 pointer-events-none" aria-hidden="true" />

      <div className="relative h-full max-w-8xl mx-auto px-5 md:px-8 flex flex-col">
        {/* Top spacer to clear sticky header */}
        <div className="h-20 md:h-24" />

        <div className="flex-1 flex items-end md:items-center pb-16 md:pb-0">
          <div className="max-w-xl">
            <p className="eyebrow text-gold mb-5 md:mb-7">Demi-fine 18K Gold</p>
            <h1
              id="hero-title"
              className="display-xl text-cream"
            >
              Crafted to be <em className="font-serif italic font-light text-gold-soft">treasured.</em>
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 md:mt-8 text-base md:text-lg text-cream/80 font-sans font-light max-w-md leading-relaxed"
            >
              Hand-finished jewelry in warm 18K gold plating — designed to be
              worn every day, and remembered for years.
            </p>
            <div className="mt-9 md:mt-10 flex flex-col sm:flex-row gap-3">
              <Link to="/shop" className="btn-on-dark group">
                Shop the Collection
                <ArrowRight
                  strokeWidth={1.5}
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/shop?category=new"
                className="btn border border-cream/40 text-cream bg-transparent hover:bg-cream/10"
              >
                New Arrivals
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom-right scroll cue (desktop) */}
        <div className="hidden md:flex absolute bottom-8 right-8 items-center gap-3 text-cream/60 text-[10px] uppercase tracking-wider-3 font-sans font-medium">
          <span>Scroll</span>
          <span className="block w-10 h-px bg-cream/40" />
        </div>
      </div>
    </section>
  );
}
