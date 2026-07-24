import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 via-charcoal-900/50 to-charcoal-900/30" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="max-w-xl">
          <span className="inline-block font-sans text-cream-50/80 text-sm tracking-ultra-wide mb-6 animate-fade-in">
            DEMI-FINE JEWELRY
          </span>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream-50 leading-tight mb-6 animate-slide-up">
            Crafted to be<br />
            <span className="italic">Treasured</span>
          </h1>
          
          <p className="font-sans text-cream-100/90 text-lg mb-10 max-w-md animate-slide-up" style={{ animationDelay: '100ms' }}>
            Everyday luxury, designed for the modern woman. 
            18K gold plated pieces that become part of your story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Link to="/shop" className="btn-accent inline-flex items-center justify-center gap-2">
              Shop the Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center px-8 py-3.5 border border-cream-50/50 text-cream-50 font-sans font-medium text-sm tracking-wide transition-all duration-300 hover:bg-cream-50/10">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-50/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream-50/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
