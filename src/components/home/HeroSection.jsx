import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1600&q=85"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg">
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4">
              Velmora Fine Jewelry
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight text-balance">
              Crafted to be<br />
              <span className="italic">Treasured</span>
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-md leading-relaxed">
              Demi-fine gold jewelry designed for everyday elegance. Each piece is hand-finished with care.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold hover:bg-gold-dark text-white text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300"
              >
                Shop the Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/collections"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/40 text-white text-sm tracking-[0.15em] uppercase font-medium hover:bg-white/10 transition-all duration-300"
              >
                Explore Bestsellers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 rounded-full bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
}