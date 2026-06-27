import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] md:min-h-screen w-full overflow-hidden text-cream">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-9a1b2c"
        data-strk-bg="[hero-headline] [hero-subhead] warm gold jewelry close up on model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="2000"
      />
      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 min-h-[88vh] md:min-h-screen flex items-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-soft mb-6">
            New Edition — Summer 2026
          </p>
          <h1
            id="hero-headline"
            className="font-serif font-light text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight"
          >
            Crafted to be
            <br />
            <em className="italic font-light">Treasured.</em>
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 text-base md:text-lg text-cream/85 max-w-lg leading-relaxed"
          >
            Demi-fine gold jewelry made in small batches —
            heirloom craft, modern silhouettes, kind to skin.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              style={{ color: "#1C1714" }}
              className="inline-block px-8 py-4 bg-cream hover:bg-gold transition-all duration-500 text-[12px] tracking-[0.3em] uppercase"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="inline-block px-2 py-4 text-[12px] tracking-[0.3em] uppercase text-cream/90 hover:text-gold border-b border-cream/30 hover:border-gold transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
