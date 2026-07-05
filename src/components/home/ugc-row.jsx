import React from 'react';

const UGCRow = () => {
  const items = [
    { id: 1, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', caption: 'Golden hour essentials' },
    { id: 2, image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80', caption: 'Layered necklaces' },
    { id: 3, image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80', caption: 'Huggie moment' },
    { id: 4, image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=80', caption: 'Ear cuff edit' },
    { id: 5, image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80', caption: 'Gift ready' },
  ];

  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl text-brand-ink">Worn by You</h2>
            <p className="mt-2 text-sm text-brand-muted">Tag @velmora to be featured.</p>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {items.map((item) => (
            <div key={item.id} className="relative min-w-[220px] sm:min-w-[260px] snap-center">
              <div className="aspect-[9/16] w-full overflow-hidden rounded-sm bg-brand-warm">
                <img src={item.image} alt={item.caption} className="h-full w-full object-cover" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <p className="font-serif text-sm text-white tracking-wide">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCRow;
