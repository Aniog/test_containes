import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-espresso"
        data-strk-bg-id="hero-bg-q7r8s9"
        data-strk-bg="[hero-subtitle-q7r8s9] [hero-title-q7r8s9]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/30 to-espresso/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p
          id="hero-subtitle-q7r8s9"
          className="font-sans text-xs font-medium uppercase tracking-widest text-gold-light mb-6"
        >
          18K Gold Plated · Hypoallergenic · Demi-Fine
        </p>
        <h1
          id="hero-title-q7r8s9"
          className="font-serif font-medium text-5xl md:text-7xl text-ivory leading-tight mb-6"
        >
          Crafted to be<br />
          <em className="italic font-light">Treasured</em>
        </h1>
        <p className="font-sans text-base text-ivory/75 leading-relaxed mb-10 max-w-md mx-auto">
          Demi-fine gold jewelry for the woman who wears her story. Designed to last, priced to love.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold text-espresso font-sans text-xs font-semibold uppercase tracking-widest px-10 py-4 hover:bg-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-sans text-[10px] uppercase tracking-widest text-ivory/70">Scroll</span>
        <div className="w-px h-8 bg-ivory/40 animate-pulse" />
      </div>
    </section>
  );
}
