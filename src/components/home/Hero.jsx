import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1920&h=1080&fit=crop"
          alt="Velmora jewelry styled on model"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-obsidian/20 to-obsidian/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-cream/80 text-sm md:text-base font-sans tracking-ultra-wide uppercase mb-4 md:mb-6 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-tight mb-6 md:mb-8 animate-slide-up">
          Crafted to be<br />
          <span className="italic">Treasured</span>
        </h1>
        
        <p className="text-cream/90 text-base md:text-lg font-sans font-light max-w-xl mx-auto mb-8 md:mb-10 animate-fade-in animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, and made to be worn every day.
        </p>
        
        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-10 py-4 bg-champagne text-obsidian font-sans font-medium text-sm tracking-wide transition-all duration-300 hover:bg-champagne-light hover:shadow-xl animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/80 hover:text-cream transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
