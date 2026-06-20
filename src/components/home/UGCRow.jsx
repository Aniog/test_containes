import React from 'react';
import { Play } from 'lucide-react';
import { ugcItems } from '@/data/products';

const UGCRow = () => {
  return (
    <section className="py-16 md:py-24 bg-cream-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-base text-center">
          As Seen On You
        </h2>
        <p className="text-base/60 text-center mt-3 text-sm">
          Tag @velmora.jewelry to be featured
        </p>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-64 md:w-72 snap-start"
            >
              <div className="relative aspect-[9/16] rounded-sm overflow-hidden bg-base/10 group cursor-pointer">
                {/* Placeholder image */}
                <img
                  src={`https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80&sig=${item.id}`}
                  alt={`UGC: ${item.caption}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                    <Play className="w-6 h-6 text-base ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-serif text-white text-lg italic">"{item.caption}"</p>
                  <p className="text-white/70 text-xs mt-1">{item.user}</p>
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