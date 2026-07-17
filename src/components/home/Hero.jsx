import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] bg-ink text-cream overflow-hidden"
    >
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main-001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />

      <div className="relative z-10 max-w-editorial mx-auto px-6 lg:px-10 min-h-[100svh] flex flex-col justify-end pb-16 lg:pb-24">
        <div className="max-w-2xl animate-fade-up">
          <span className="eyebrow-cream text-gold">
            Velmora · Fine Jewelry
          </span>
          <h1
            id="hero-title"
            className="font-serif text-cream mt-4 text-[44px] sm:text-[58px] lg:text-[84px] leading-[1.02] font-light"
          >
            Crafted to be
            <br />
            <span className="italic font-light text-cream">treasured.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-cream/85 text-[15px] sm:text-[16px] leading-relaxed max-w-md"
          >
            Demi-fine jewelry in 18K gold plating — earrings, necklaces, and
            huggies designed for the modern woman. Quiet luxury, every day.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
            <Link to="/shop" className="btn-gold">
              Shop the Collection
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.6} />
            </Link>
            <Link
              to="/shop?category=earrings"
              className="text-cream text-[12px] tracking-[0.28em] uppercase font-medium border-b border-cream/40 pb-1 self-start hover:border-gold hover:text-gold transition-colors"
            >
              Explore Earrings
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-8 right-10 z-10 items-center gap-3 text-cream/70">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="block w-10 h-px bg-cream/40" />
      </div>
    </section>
  );
}
