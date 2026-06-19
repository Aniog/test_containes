import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&h=1080&fit=crop"
          alt="Elegant woman wearing gold jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/60 via-charcoal-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 leading-tight mb-6 animate-fade-in">
            Crafted to be
            <br />
            <span className="italic text-gold-300">Treasured</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-cream-200/90 mb-8 max-w-md leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Demi-fine jewelry that balances timeless elegance with modern sensibility. 
            Designed for the moments that matter.
          </p>
          <Link
            to="/collection"
            className="inline-block bg-cream-50 text-charcoal-800 px-10 py-4 font-sans text-sm font-medium tracking-widest uppercase hover:bg-cream-100 transition-colors duration-300 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-cream-200/60" />
      </div>
    </section>
  );
}
