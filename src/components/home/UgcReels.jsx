import React from 'react';

const reels = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
    caption: 'Golden hour glow',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80',
    caption: 'Layered necklines',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c11ab9f46?w=600&q=80',
    caption: 'Office to evening',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    caption: 'Weekend edit',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    caption: 'Gift-ready sets',
  },
];

const UgcReels = () => {
  return (
    <section className="bg-brand-black py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-xs uppercase tracking-widest text-brand-gold">As Worn By You</p>
        <h2 className="section-heading mt-2 text-white">@Velmora</h2>
      </div>

      <div className="mt-8 flex gap-4 overflow-x-auto px-4 pb-4 md:px-8 md:pb-6">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative h-[420px] w-[260px] flex-shrink-0 overflow-hidden rounded-sm"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-black/70 to-transparent p-4">
              <p className="font-serif text-sm italic text-white/90">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcReels;
