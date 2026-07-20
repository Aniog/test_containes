import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Elegant gold jewelry"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-xl mx-auto font-light">
          Demi-fine jewelry designed for the modern woman. 18K gold plated, hypoallergenic, and made for everyday luxury.
        </p>
        <Link
          to="/collections"
          className="inline-block px-10 py-4 bg-[var(--velmora-gold)] text-white text-sm tracking-wider uppercase hover:bg-[var(--velmora-gold-dark)] transition-all duration-300 hover:scale-105"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </button>
    </section>
  );
}
