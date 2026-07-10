import React from 'react';

const reels = [
  { id: 1, title: 'Morning edit', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80' },
  { id: 2, title: 'Gift edit', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80' },
  { id: 3, title: 'Date night', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80' },
  { id: 4, title: 'Office edit', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
  { id: 5, title: 'Weekend edit', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80' },
];

const ReelRow = () => {
  return (
    <section className="bg-brand-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-xl text-white">Worn by you</h2>
          <span className="text-[11px] font-medium tracking-widest uppercase text-white/70">@velmora</span>
        </div>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2 snap-x">
          {reels.map((reel) => (
            <div key={reel.id} className="relative min-w-[160px] sm:min-w-[200px] aspect-[9/16] rounded-xl overflow-hidden snap-start">
              <img src={reel.image} alt={reel.title} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3">
                <p className="font-serif text-sm text-white">{reel.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelRow;
