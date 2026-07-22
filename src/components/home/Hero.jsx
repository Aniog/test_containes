import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] md:min-h-[92vh] bg-espresso text-bone overflow-hidden">
      {/* Background image — warm-lit close-up of gold jewelry on a model */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="close up portrait of model wearing gold jewelry warm light editorial"
        data-strk-bg-ratio="3x2"
        data-strk-bg-width="1800"
      />
      {/* Warm gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/55 to-espresso/20 md:from-espresso/75 md:via-espresso/35 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />

      <div className="relative container-shell h-full min-h-[88vh] md:min-h-[92vh] flex flex-col justify-end pb-20 md:pb-28 pt-32">
        <div className="max-w-2xl animate-fade-up">
          <span className="eyebrow-light text-champagne">
            New · The Heirloom Collection
          </span>
          <h1 className="font-display text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] mt-5 text-bone">
            Crafted to be
            <br />
            <span className="italic text-gold-gradient">Treasured</span>
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-lg text-bone-soft max-w-md leading-relaxed">
            Demi-fine gold jewelry, hand-finished in our atelier. Designed for
            the everyday rituals worth remembering.
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn-accent">
              Shop the Collection
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/about"
              className="text-[11px] font-medium tracking-wider-3 uppercase text-bone hover:text-champagne transition-colors duration-300 inline-flex items-center gap-2"
            >
              Our Story
              <span aria-hidden className="w-8 h-px bg-current" />
            </Link>
          </div>
        </div>
      </div>

      {/* Tiny scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-bone-soft/70 items-center gap-3 flex-col">
        <span className="text-[9px] tracking-wider-4 uppercase">Scroll</span>
        <span className="w-px h-10 bg-bone-soft/40" />
      </div>
    </section>
  );
}
