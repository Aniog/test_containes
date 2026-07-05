import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-tight animate-slide-up">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 text-lg text-cream/80 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Discover our collection of premium demi-fine jewelry. 
            Handcrafted in 18K gold, designed for the modern woman who appreciates 
            quiet luxury.
          </p>
          <Link 
            to="/shop"
            className="inline-flex items-center gap-2 mt-8 bg-gold text-charcoal px-8 py-4 font-medium hover:bg-gold-dark transition-all duration-300 animate-slide-up group"
            style={{ animationDelay: '0.4s' }}
          >
            Shop the Collection
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;