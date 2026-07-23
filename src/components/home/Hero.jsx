import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1600&q=85"
          alt="Gold jewelry editorial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-lg animate-fade-in">
          <p className="text-gold-light text-sm uppercase tracking-[0.25em] font-sans mb-4">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-bold">
            Crafted to be
            <br />
            <span className="italic font-normal">Treasured</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg mt-6 max-w-md font-sans font-light leading-relaxed">
            Elevated essentials for the modern woman. Each piece is designed to
            be worn, loved, and passed down.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
              Shop the Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/shop" className="btn-outline border-white/40 text-white hover:bg-white hover:text-espresso">
              View Bestsellers
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-10 bg-white/40" />
      </div>
    </section>
  );
}