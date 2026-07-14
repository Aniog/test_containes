import React from 'react';

const reels = [
  {
    id: 1,
    image: 'https://placehold.co/600x1067/f5f0eb/8c7b6c?text=Reel+1&font=playfair-display',
    caption: 'Morning light, golden glow.',
  },
  {
    id: 2,
    image: 'https://placehold.co/600x1067/f5f0eb/8c7b6c?text=Reel+2&font=playfair-display',
    caption: 'Layered in quiet luxury.',
  },
  {
    id: 3,
    image: 'https://placehold.co/600x1067/f5f0eb/8c7b6c?text=Reel+3&font=playfair-display',
    caption: 'Everyday essentials, elevated.',
  },
  {
    id: 4,
    image: 'https://placehold.co/600x1067/f5f0eb/8c7b6c?text=Reel+4&font=playfair-display',
    caption: 'Worn with intention.',
  },
  {
    id: 5,
    image: 'https://placehold.co/600x1067/f5f0eb/8c7b6c?text=Reel+5&font=playfair-display',
    caption: 'Gifts that last.',
  },
];

const ReelsRow = () => {
  return (
    <section className="bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-white/70">From the community</p>
        <h2 className="mt-2 font-serif text-2xl font-medium text-white sm:text-3xl">Worn by you</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 pb-10 sm:px-6 lg:px-8">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative h-[420px] w-[260px] shrink-0 overflow-hidden rounded-2xl sm:h-[460px] sm:w-[300px]"
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

export default ReelsRow;
