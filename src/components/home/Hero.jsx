import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="gold jewelry on model warm editorial lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-warm-900/50 via-warm-900/30 to-warm-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto animate-fade-in">
        <p className="text-cream/80 text-xs tracking-[0.3em] uppercase mb-6 font-medium">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-medium leading-[1.1] mb-6 text-balance">
          Crafted to be Treasured
        </h1>
        <p className="text-cream/70 text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto font-light">
          Gold-plated pieces designed for the everyday. Wear them, love them, never take them off.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase text-warm-900 bg-cream hover:bg-gold hover:text-cream transition-all duration-500"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase text-cream/50">Scroll</span>
        <div className="w-[1px] h-10 bg-cream/30" />
      </div>
    </section>
  );
}