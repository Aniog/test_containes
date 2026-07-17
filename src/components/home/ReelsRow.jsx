import React from 'react';

const reels = [
  {
    id: 'reel-1',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    caption: 'Morning light, golden glow.',
  },
  {
    id: 'reel-2',
    image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=80',
    caption: 'Layered delicately.',
  },
  {
    id: 'reel-3',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
    caption: 'Quiet confidence.',
  },
  {
    id: 'reel-4',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Worn with intention.',
  },
  {
    id: 'reel-5',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
    caption: 'For the moments that matter.',
  },
];

const ReelsRow = () => {
  return (
    <section className="bg-brand-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">@Velmora</p>
            <h2 className="mt-2 font-serif text-3xl text-white">Worn by You</h2>
          </div>
          <a href="#" className="hidden md:inline-block text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
            Follow Us
          </a>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative h-[420px] w-[220px] flex-shrink-0 overflow-hidden rounded-2xl md:h-[480px] md:w-[260px]"
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
      </div>
    </section>
  );
};

export default ReelsRow;
