import React from 'react';
import { ugcReels } from '../data/products';

const UGCReelRow = () => {
  return (
    <section className="py-20 lg:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Styled by You</h2>
          <p className="text-velmora-gray-500 text-sm tracking-wide uppercase">
            #VelmoraMoments
          </p>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-64 md:w-72 snap-center cursor-pointer group"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-velmora-beige">
                <img
                  src={reel.image}
                  alt={reel.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-sm mb-1">{reel.caption}</p>
                  <p className="text-white/80 text-xs">{reel.username}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReelRow;
