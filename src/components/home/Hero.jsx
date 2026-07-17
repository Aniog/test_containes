import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/30 via-charcoal-900/20 to-cream-50/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-charcoal-900 leading-tight animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 font-sans text-lg sm:text-xl text-charcoal-800/80 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
          Demi-fine gold jewelry designed for the modern woman. Timeless elegance meets everyday luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-10 bg-charcoal-900 text-cream-50 px-10 py-4 font-sans text-sm font-medium tracking-wider uppercase hover:bg-charcoal-800 transition-all duration-300 hover:scale-105 animate-slide-up"
          style={{ animationDelay: '400ms' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-charcoal-800/60" />
      </div>
    </section>
  );
};

export default Hero;
