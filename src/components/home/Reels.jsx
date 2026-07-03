import React from 'react';
import { reels } from '../../data/products';

const reelImages = [
  'https://picsum.photos/id/1015/600/800',
  'https://picsum.photos/id/1025/600/800',
  'https://picsum.photos/id/1035/600/800',
  'https://picsum.photos/id/1045/600/800',
  'https://picsum.photos/id/1055/600/800',
];

const Reels = () => {
  return (
    <section className="section-container py-16 md:py-24">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-ultra text-accent">@velmora</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Worn by you</h2>
        </div>
        <a href="#" className="hidden md:inline-flex text-sm font-medium text-ink-secondary hover:text-ink">
          Follow us
        </a>
      </div>

      <div className="mt-8 flex gap-4 overflow-x-auto scrollbar-hide pb-4">
        {reels.map((reel, index) => (
          <div key={reel.id} className="relative h-[420px] w-[260px] shrink-0 overflow-hidden rounded-2xl bg-[#1c1917]">
            <img
              src={reelImages[index % reelImages.length]}
              alt={reel.title}
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-lg text-white">{reel.title}</p>
              <p className="mt-1 text-xs text-white/70">{reel.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reels;
