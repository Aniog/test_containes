import React from 'react';
import { ugcContent } from '../../data/products';

const UGCReel = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-warm-white)' }}>
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-gold)' }}
          >
            Styled by You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
            @velmorajewelry
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-6 md:px-12 pb-4" style={{ width: 'max-content' }}>
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 md:w-56 lg:w-64 aspect-[9/16] overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)' }}
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm italic text-white">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram CTA */}
      <div className="container-luxury mt-8">
        <p className="text-center text-sm" style={{ color: 'var(--color-taupe)' }}>
          Share your look with <span style={{ color: 'var(--color-gold)' }}>#VelmoraJewelry</span>
        </p>
      </div>
    </section>
  );
};

export default UGCReel;
