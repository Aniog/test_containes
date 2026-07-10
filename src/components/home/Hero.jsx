import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink-900">
      {/* Background image with warm treatment */}
      <img
        src="https://picsum.photos/seed/velmora-hero-editorial/1800/2400"
        alt="Warm-lit close-up of a model wearing Velmora gold jewelry"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "sepia(0.2) saturate(1.2) brightness(0.85) contrast(1.02)",
          objectPosition: "center 30%",
        }}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      {/* Warm gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(31,26,20,0.55) 0%, rgba(31,26,20,0.25) 35%, rgba(31,26,20,0.55) 100%)",
        }}
      />
      {/* Subtle warm tint */}
      <div
        className="absolute inset-0 mix-blend-multiply opacity-30"
        style={{ background: "linear-gradient(120deg, #B8893E 0%, transparent 60%)" }}
      />

      {/* Content */}
      <div className="relative h-full container-wide flex flex-col justify-end pb-16 md:pb-24 anim-fade-up-slow">
        <div className="max-w-2xl">
          <div className="eyebrow text-cream/70 mb-6">Demi-Fine · 18K Gold Plated</div>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-balance"
          >
            Crafted to be
            <br />
            <em className="not-italic text-gold-100/95">treasured.</em>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-cream/80 text-base md:text-lg max-w-md leading-relaxed"
          >
            Quietly considered demi-fine jewelry, designed to be worn every day and kept
            for a lifetime.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn-gold">
              Shop the collection
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
            <Link
              to="/shop?category=necklaces"
              className="inline-flex items-center gap-2 text-cream text-[11px] uppercase tracking-widest2 font-medium border-b border-cream/50 hover:border-gold-400 hover:text-gold-400 transition-colors pb-1"
            >
              Discover necklaces
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-cream/60 anim-fade-in">
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <span className="w-px h-8 bg-cream/40" />
      </div>
    </section>
  );
}
