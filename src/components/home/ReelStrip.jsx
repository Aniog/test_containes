import React from 'react';

const reels = [
  {
    id: 'reel-1',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    caption: 'Morning light, golden huggies.',
  },
  {
    id: 'reel-2',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    caption: 'Layered necklaces for summer.',
  },
  {
    id: 'reel-3',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
    caption: 'The new crystal drop earrings.',
  },
  {
    id: 'reel-4',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
    caption: 'Wear it your way.',
  },
  {
    id: 'reel-5',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    caption: 'Quiet luxury, everyday.',
  },
];

const ReelStrip = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-editorial">
        <p className="eyebrow">@velmora</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">As seen on</h2>
      </div>
      <div className="mt-8 flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative h-[420px] w-[260px] flex-shrink-0 overflow-hidden rounded-2xl"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="font-serif text-sm text-white/90">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelStrip;
