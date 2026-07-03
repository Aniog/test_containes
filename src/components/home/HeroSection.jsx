import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1920&q=80"
          alt="Elegant woman wearing gold jewelry"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(31,28,26,0.3) 0%, rgba(31,28,26,0.5) 50%, rgba(31,28,26,0.7) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 velmora-container text-center text-white py-32">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          {/* Eyebrow */}
          <p 
            className="text-sm uppercase tracking-[0.3em] mb-6 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease forwards 0.2s', color: 'var(--velmora-gold-light)' }}
          >
            New Collection
          </p>
          
          {/* Headline */}
          <h1 
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-tight mb-6 opacity-0"
            style={{ 
              animation: 'fadeInUp 0.8s ease forwards 0.4s',
              textShadow: '0 4px 30px rgba(0,0,0,0.3)'
            }}
          >
            Crafted to be<br />Treasured
          </h1>
          
          {/* Subhead */}
          <p 
            className="text-lg md:text-xl mb-10 max-w-xl mx-auto opacity-0 leading-relaxed"
            style={{ 
              animation: 'fadeInUp 0.8s ease forwards 0.6s',
              color: 'rgba(255,255,255,0.85)'
            }}
          >
            Demi-fine jewelry that celebrates life's moments. 
            Designed with intention, made for everyday luxury.
          </p>
          
          {/* CTA Button */}
          <div 
            className="opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease forwards 0.8s' }}
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 px-10 py-4 text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:gap-4"
              style={{
                backgroundColor: 'var(--velmora-gold)',
                color: 'white'
              }}
            >
              Shop the Collection
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0"
        style={{ animation: 'fadeIn 1s ease forwards 1.2s' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Discover
          </span>
          <div 
            className="w-px h-12"
            style={{
              background: 'linear-gradient(to bottom, var(--velmora-gold), transparent)'
            }}
          />
        </div>
      </div>
    </section>
  );
}
