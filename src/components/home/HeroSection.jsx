import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-warm-black/60 via-warm-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="max-w-2xl">
          <span className="inline-block text-gold text-sm uppercase tracking-ultrawide mb-6 animate-fade-in">
            Demi-Fine Collection
          </span>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-in stagger-1">
            Crafted to be Treasured
          </h1>
          
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg animate-fade-in stagger-2">
            18K gold-plated jewelry designed for the modern woman. 
            Everyday luxury, thoughtfully priced.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-3">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-warm-black font-medium rounded hover:bg-gold-dark transition-colors"
            >
              Shop the Collection
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded hover:bg-white hover:text-warm-black transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
