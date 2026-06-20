import React from 'react';
import { Play } from 'lucide-react';
import { ugcCards } from '@/data/products';

const UGCRow = () => {
  return (
    <section className="py-20 md:py-32 bg-base-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">As Seen On You</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-ink-muted max-w-2xl mx-auto">
            Tag @velmora to be featured. Join our community of style-conscious women.
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide snap-x snap-mandatory">
          {ugcCards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-64 md:w-80 snap-start"
            >
              <div className="relative aspect-[9/16] rounded-sm overflow-hidden bg-base-muted group cursor-pointer">
                <img
                  src={card.image}
                  alt={card.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play size={24} className="text-white fill-white ml-1" />
                  </div>
                </div>
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-serif text-lg text-cream italic">{card.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCRow;
