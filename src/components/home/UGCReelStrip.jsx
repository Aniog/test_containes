import React from 'react';
import { ugcImages } from '../../data/products';

export default function UGCReelStrip() {
  return (
    <section className="py-12 md:py-16 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.3em] text-[var(--color-gold-primary)] mb-3">
            COMMUNITY LOVES
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)]">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto hide-scrollbar pb-4">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8" style={{ width: 'max-content' }}>
          {ugcImages.map((item) => (
            <div 
              key={item.id}
              className="relative flex-shrink-0 w-44 md:w-56 overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[9/16] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-white/90 italic">
                  {item.caption}
                </p>
              </div>

              {/* Play indicator */}
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
