import React from 'react';

const REELS = [
  {
    id: 'reel-1',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80',
    caption: 'Golden hour huggies',
  },
  {
    id: 'reel-2',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
    caption: 'Layered necklaces',
  },
  {
    id: 'reel-3',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    caption: 'Ear cuff styling',
  },
  {
    id: 'reel-4',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
    caption: 'Gift-ready sets',
  },
  {
    id: 'reel-5',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
    caption: 'Everyday essentials',
  },
];

const ReelUGC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-editorial">
        <h2 className="section-title text-center">Styled by You</h2>
        <p className="mt-3 text-center text-sm text-brand-muted">
          Tag @velmora to be featured.
        </p>
      </div>

      <div className="mt-10 flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide">
        {REELS.map((reel) => (
          <div
            key={reel.id}
            className="relative h-[420px] w-[260px] flex-shrink-0 overflow-hidden rounded-sm"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="font-serif text-sm text-white">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelUGC;
