import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 72,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Elegant gold jewelry on a warm backdrop"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-main relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="text-ivory/80 text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Demi-Fine Gold Jewelry
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Crafted to be
            <br />
            <span className="italic text-champagne">Treasured</span>
          </h1>

          {/* Subhead */}
          <p className="text-ivory/80 text-lg md:text-xl max-w-md mb-8 animate-fade-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            Understated elegance for the modern woman. Handcrafted in 18K gold plated sterling silver.
          </p>

          {/* CTA */}
          <div className="animate-fade-up opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <Link to="/collection">
              <Button size="lg" className="group">
                Shop the Collection
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60 hover:text-ivory transition-colors duration-300 animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-6 h-6" strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default Hero;
