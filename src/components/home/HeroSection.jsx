import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80"
          alt="Elegant gold jewelry"
          className="w-full h-full object-cover"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/50 to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center md:text-left">
        <div className="max-w-xl">
          <p className="text-white/70 text-sm uppercase tracking-[0.3em] mb-4 animate-fade-in">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight mb-6 animate-slide-up">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-md animate-slide-up" style={{ animationDelay: '100ms' }}>
            Timeless elegance meets modern design. Handcrafted pieces that become cherished parts of your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
            <Link to="/about" className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '500ms' }}>
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
