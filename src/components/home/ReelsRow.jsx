import React from 'react';

const reels = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80',
    caption: 'Golden hour glow',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    caption: 'Layered elegance',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
    caption: 'Modern heirlooms',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c11ab9f6a?w=600&q=80',
    caption: 'Worn with love',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599643478518-a86aa0e51b08?w=600&q=80',
    caption: 'Quiet luxury',
  },
];

const ReelsRow = () => {
  return (
    <section className="py-12 md:py-20 bg-brand-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="section-title text-center">As Worn By You</h2>
        <p className="mt-2 text-sm text-brand-muted text-center">Tag @velmora to be featured.</p>
      </div>
      <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative h-[420px] w-[260px] flex-shrink-0 overflow-hidden rounded-sm bg-brand-warm"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="font-serif text-sm text-white/90 italic">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelsRow;
