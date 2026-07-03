import React from 'react';
import { ugcContent } from '@/data/products';

const UGCStrip = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-8">
        <h2
          className="text-2xl md:text-3xl text-center"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          Styled by You
        </h2>
        <p className="text-velmora-warm-gray text-center mt-2">
          @velmorajewelry
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-3 overflow-x-auto hide-scrollbar px-6 pb-4 snap-x snap-mandatory">
        {ugcContent.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 md:w-52 aspect-[9/16] rounded-lg overflow-hidden relative snap-center group"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80';
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p
                className="text-white text-sm italic"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCStrip;
