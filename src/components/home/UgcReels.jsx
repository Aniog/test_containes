import React from 'react';
import { Play } from 'lucide-react';
import { ugcItems } from '@/data/products';

const UgcReels = () => {
  return (
    <section className="bg-brand-charcoal py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="section-subtitle text-white/70">As seen on</p>
          <h2 className="section-title mt-2 text-white">The Velmora Edit</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative h-[420px] w-[260px] flex-shrink-0 overflow-hidden rounded-sm"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/10 backdrop-blur-sm">
                  <Play className="h-5 w-5 fill-white text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm italic text-white/90">{item.caption}</p>
                <p className="mt-1 text-xs text-white/60">{item.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcReels;
