import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-velvet-900 via-velvet-800 to-velvet-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/20 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-40"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/80 via-velvet-950/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-up">
        <p className="text-gold-400 text-[11px] tracking-[0.3em] uppercase font-medium mb-6">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-light leading-tight mb-6"
        >
          Crafted to be<br />Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-velvet-200 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Premium demi-fine jewelry that bridges the gap between fast fashion and luxury. 
          Gold-plated pieces designed to become your forever favorites.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gold-600 text-white text-sm tracking-wider uppercase font-medium hover:bg-gold-500 transition-all duration-300 group"
        >
          Shop the Collection
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
