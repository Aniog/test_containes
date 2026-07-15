import React from 'react';

const UGCReels = () => {
  const reels = [
    { id: 1, caption: 'Everyday elegance with the Golden Sphere Huggies', user: '@sophia.style' },
    { id: 2, caption: 'Layering season is here', user: '@emma.jewels' },
    { id: 3, caption: 'Gift-ready packaging', user: '@olivia.gifts' },
    { id: 4, caption: 'From desk to dinner', user: '@ava.daily' },
    { id: 5, caption: 'New arrivals are here', user: '@velmora' },
  ];

  return (
    <section className="py-16 bg-brand-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="section-title text-center">As Seen On</h2>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-64 md:w-72 aspect-[9/16] bg-brand-charcoal rounded-sm relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 text-xs uppercase tracking-widest">Reel</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <p className="font-serif text-sm text-white leading-snug mb-1">{reel.caption}</p>
              <p className="text-xs text-white/60">{reel.user}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
