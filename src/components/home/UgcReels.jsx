import React from 'react';
import { Play } from 'lucide-react';
import { ugcReels } from '@/data/products';

const UgcReels = () => {
  return (
    <section className="bg-base-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="section-title">As Seen On</h2>
            <p className="section-subtitle">Real moments, real style. Tag @velmora to be featured.</p>
          </div>
        </div>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="relative h-[420px] w-[260px] flex-shrink-0 overflow-hidden rounded-2xl md:h-[520px] md:w-[300px]"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4">
                <p className="font-serif text-sm italic text-white/90">{reel.caption}</p>
                <p className="mt-1 text-xs text-white/60">@{reel.user}</p>
              </div>
              <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Play className="h-3.5 w-3.5 fill-white text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcReels;
