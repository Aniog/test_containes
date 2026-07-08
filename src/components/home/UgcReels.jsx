import React from 'react';

const reels = [
  { id: 1, image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80', caption: 'Golden hour glow' },
  { id: 2, image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80', caption: 'Stacked moments' },
  { id: 3, image: 'https://images.unsplash.com/photo-1599643478518-a86e2dc221b5?w=600&q=80', caption: 'Everyday luxury' },
  { id: 4, image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80', caption: 'Gift-ready' },
  { id: 5, image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa33?w=600&q=80', caption: 'Delicate details' },
];

const UgcReels = () => {
  return (
    <section className="py-16 bg-brand-bg">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-2">@Velmora</p>
            <h2 className="section-title">As Worn By You</h2>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel) => (
            <div key={reel.id} className="relative min-w-[220px] md:min-w-[260px] snap-start rounded-2xl overflow-hidden aspect-[9/16] bg-brand-warm">
              <img src={reel.image} alt={reel.caption} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="font-serif text-sm text-white/90 italic">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcReels;
