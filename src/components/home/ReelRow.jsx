import React from 'react';

const reels = [
  {
    id: 'reel-1',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    caption: 'Morning light, golden huggies.',
  },
  {
    id: 'reel-2',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
    caption: 'Layered necklaces for the weekend.',
  },
  {
    id: 'reel-3',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80',
    caption: 'The new Amber Lace drop.',
  },
  {
    id: 'reel-4',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
    caption: 'Gift-ready sets.',
  },
  {
    id: 'reel-5',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80',
    caption: 'Worn three ways.',
  },
];

const ReelRow = () => {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="eyebrow">From the community</p>
            <h2 className="section-heading mt-2">Worn by you</h2>
          </div>
          <a href="#" className="hidden sm:inline-flex text-xs font-semibold tracking-[0.14em] uppercase text-ink-secondary hover:text-ink transition-colors">
            Follow us
          </a>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative h-[420px] w-[260px] flex-shrink-0 snap-start overflow-hidden rounded-sm border border-border"
            >
              <img src={reel.image} alt={reel.caption} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <p className="font-serif text-sm text-white/90 italic">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelRow;
