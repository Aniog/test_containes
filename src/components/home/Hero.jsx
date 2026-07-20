import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Elegant woman wearing gold jewelry"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso/60 via-velmora-espresso/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <span className="inline-block text-xs font-sans font-medium tracking-ultra-wide text-velmora-gold mb-6 animate-fade-in">
            DEMI-FINE JEWELRY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-in stagger-1">
            Crafted to be Treasured
          </h1>
          <p className="text-base sm:text-lg font-sans text-white/80 mb-8 max-w-md leading-relaxed animate-fade-in stagger-2">
            Timeless 18K gold-plated pieces designed for the modern woman. 
            Luxury within reach, made to last.
          </p>
          <div className="animate-fade-in stagger-3">
            <Link
              to="/shop"
              className="inline-block px-10 py-4 bg-velmora-gold text-white font-sans font-medium text-sm tracking-wide hover:bg-velmora-gold-dark transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
}
