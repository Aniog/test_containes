import React from 'react';

const reels = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
    caption: 'Morning light, golden glow.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
    caption: 'Layered for the weekend.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
    caption: 'Quiet luxury, close up.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Wear it your way.',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    caption: 'Details that matter.',
  },
];

const ReelsRow = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-ink-950 mb-3">Worn by You</h2>
          <p className="text-sm text-ink-500">Tag @velmora to be featured.</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative min-w-[220px] md:min-w-[260px] h-[360px] md:h-[420px] rounded-2xl overflow-hidden snap-center bg-brand-100"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <p className="font-display text-white text-sm md:text-base italic">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsRow;
