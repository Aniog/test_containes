import React from 'react';
import { Play } from 'lucide-react';
import { ugcItems } from '@/data/products';

const UgcRow = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="section-title text-center">As Seen On</h2>
        <p className="text-center text-brand-muted mt-2 text-sm">Follow us @velmora</p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[260px] md:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden snap-start group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-3 left-3">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play className="h-4 w-4 text-white fill-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white text-sm font-medium leading-snug">{item.caption}</p>
              <p className="text-white/70 text-xs mt-1">{item.user}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcRow;
