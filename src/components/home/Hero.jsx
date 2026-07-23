import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-charcoal)]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80"
          alt="Elegant gold jewelry"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[var(--color-gold)] mb-4 md:mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[var(--color-ivory)] leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Crafted to be Treasured
        </h1>
        <p className="text-base md:text-lg text-[var(--color-ivory)]/80 mb-8 md:mb-10 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Timeless pieces designed for the modern woman. 18K gold plated jewelry that elevates every moment.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-[var(--color-gold)] text-white px-10 py-4 text-sm uppercase tracking-wider hover:bg-[var(--color-gold-dark)] transition-all duration-300 hover:-translate-y-0.5 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[var(--color-ivory)]/60" />
      </div>
    </section>
  );
}
