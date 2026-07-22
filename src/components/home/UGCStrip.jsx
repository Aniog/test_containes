import React from 'react';
import { ugcContent } from '@/data/products';

const UGCStrip = () => {
  return (
    <section className="py-12 overflow-hidden">
      <div className="container mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-velmora-text text-center">
          Worn by You
        </h2>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-0 md:justify-center scrollbar-hide">
        {ugcContent.map((item) => (
          <div 
            key={item.id}
            className="flex-shrink-0 w-40 md:w-56 relative group cursor-pointer"
          >
            <div className="aspect-[9/16] overflow-hidden bg-velmora-card">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="font-serif text-sm text-velmora-text italic">
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCStrip;