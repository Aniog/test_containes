import React from 'react';
import { Play } from 'lucide-react';

const reels = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    caption: 'Golden hour glow',
    handle: '@sophia.wears',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80',
    caption: 'Daily huggies',
    handle: '@elena.style',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80',
    caption: 'Layered necklaces',
    handle: '@claire.daily',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c11ab9d54?auto=format&fit=crop&w=600&q=80',
    caption: 'Weekend edit',
    handle: '@maya.looks',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80',
    caption: 'Gift ready',
    handle: '@lily.jewels',
  },
];

const UgcReels = () => {
  return (
    <section className="py-12 sm:py-16 bg-base-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink">As Worn By You</h2>
            <p className="mt-1.5 text-sm text-ink/60">Tag @velmora to be featured.</p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
          >
            Follow us
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-40 sm:w-48 snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-base-200">
                <img
                  src={reel.image}
                  alt={reel.caption}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/90 text-ink">
                    <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-serif text-sm font-medium text-cream leading-snug">
                    {reel.caption}
                  </p>
                  <p className="mt-1 text-[11px] text-cream/70">{reel.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcReels;
