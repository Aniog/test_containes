import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] bg-velmora-warm-black overflow-hidden">
      {/* Background Image - Warm-lit close-up of gold jewelry */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-warm-black/80 via-velmora-warm-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end justify-center pb-20 md:pb-32">
        <div className="text-center max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-velmora-warm-white mb-6 leading-tight">
            Crafted to be<br />
            <span className="font-normal">Treasured</span>
          </h1>
          <p className="text-lg md:text-xl text-velmora-warm-white/80 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
            Demi-fine gold jewelry for the modern woman.<br />
            Quiet luxury, timeless elegance.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center space-x-3 bg-velmora-gold text-velmora-warm-black px-10 py-4 hover:bg-velmora-gold-muted transition-all duration-300 group"
          >
            <span className="font-medium tracking-wide text-sm">Shop the Collection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-0.5 h-12 bg-velmora-warm-white/30" />
      </div>
    </section>
  );
};

export default HeroSection;
