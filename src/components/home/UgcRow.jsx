import React from 'react';

const ugcItems = [
  { id: 1, image: 'https://images.unsplash.com/photo-1599643478518-a86e2dc266b0?w=600&q=80', caption: 'Golden hour essentials' },
  { id: 2, image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80', caption: 'Huggie love' },
  { id: 3, image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80', caption: 'Layered necklaces' },
  { id: 4, image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa33?w=600&q=80', caption: 'Filigree details' },
  { id: 5, image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80', caption: 'Gift ready' },
];

const UgcRow = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="section-subtitle mb-3">@Velmora</p>
          <h2 className="section-title">As Worn By You</h2>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item) => (
          <div key={item.id} className="relative flex-shrink-0 w-[260px] md:w-[300px] snap-start">
            <div className="aspect-[9/16] rounded-sm overflow-hidden bg-brand-warm">
              <img src={item.image} alt={item.caption} className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
              <p className="font-serif text-sm text-white/90 italic">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcRow;
