import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative" style={{ aspectRatio: '4/5' }}>
            <div 
              className="w-full h-full bg-cream-200"
              style={{ 
                background: `linear-gradient(135deg, #fae8c4 0%, #e0b884 100%)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-24 h-24 rounded-full bg-cream-100/80 flex items-center justify-center"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem' }}
                >
                  V
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <h2 
              className="font-serif text-charcoal"
              style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)' }}
            >
              Our Story
            </h2>

            <div className="hairline w-16 my-4" />

            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8 }}>
                Founded with a passion for accessible luxury, Velmora creates demi-fine jewelry 
                that bridges the gap between precious and playful. Each piece is thoughtfully designed 
                and crafted with 18K gold plating over high-quality brass.
              </p>
              
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8 }}>
                We believe that beautiful jewelry shouldn't be reserved for special occasions. 
                Our pieces are made to be worn, loved, and lived in — from morning coffee to 
                evening celebrations.
              </p>
            </div>

            <Link 
              to="/about" 
              className="btn-secondary inline-block mt-8"
              style={{ textDecoration: 'none' }}
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
