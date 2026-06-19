import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop')`,
          }}
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 via-charcoal-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-xl">
          <p className="text-xs tracking-ultra-wide uppercase text-gold-400 mb-4 animate-fade-in">
            Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream-50 leading-tight mb-6 animate-fade-in delay-100">
            Crafted to be<br />
            <span className="italic text-gold-300">Treasured</span>
          </h1>
          <p className="text-charcoal-300 text-lg mb-8 max-w-md animate-fade-in delay-200">
            18K gold plated pieces designed for the modern woman. 
            Luxury that fits your life, your style, and your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
            <Link
              to="/collections/all"
              className="inline-flex items-center justify-center gap-2 bg-cream-50 text-charcoal-800 px-8 py-4 text-sm tracking-wider uppercase hover:bg-gold-100 transition-all duration-300"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border border-cream-50/30 text-cream-50 px-8 py-4 text-sm tracking-wider uppercase hover:bg-cream-50/10 transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-cream-50/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cream-50/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}