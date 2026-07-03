import React from 'react';
import { reels } from '../../data/products';

const reelImages = [
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
  'https://images.unsplash.com/photo-1599643478518-a86e2dc465b0?w=600&q=80',
  'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
  'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa33?w=600&q=80',
  'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=80',
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
