import React from 'react';

const reels = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
    caption: 'Morning light, golden glow.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643478518-a86e580c5e4a?w=600&q=80',
    caption: 'Layered for the weekend.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=80',
    caption: 'Gift-ready elegance.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
    caption: 'Quiet confidence.',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
    caption: 'Wear it your way.',
  },
];

const UgcReels = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="flex items-end justify-between">
        <div>
          <p className="section-subtitle">Community</p>
          <h2 className="section-title mt-2">Worn by You</h2>
        </div>
        <span className="hidden md:inline text-sm text-muted">@velmora</span>
      </div>

      <div className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative h-[420px] w-[260px] shrink-0 snap-center overflow-hidden rounded-2xl"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="font-serif text-sm italic text-white/90">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcReels;
