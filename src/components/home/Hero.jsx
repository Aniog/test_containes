import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1920&q=80)',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/50 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-up">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '150ms' }}>
          Demi-fine jewelry for the modern woman. Timeless pieces designed to elevate every moment.
        </p>
        <Link
          to="/collection"
          className="inline-flex items-center px-8 py-4 bg-gold text-white font-medium text-sm tracking-wide hover:bg-gold-dark transition-colors duration-300 animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
