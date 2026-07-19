import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="elegant gold jewelry on model warm lighting close-up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundColor: '#e8e4df'
        }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <h1 
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl font-light mb-6 leading-tight"
        >
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto">
          Demi-fine jewelry for the modern woman. Timeless pieces that celebrate your unique story.
        </p>
        <Link 
          to="/shop" 
          className="btn-primary inline-flex items-center gap-2"
        >
          Shop the Collection
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
