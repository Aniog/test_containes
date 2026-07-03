import React from 'react';

const reels = [
  { id: 1, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', caption: 'Golden hour glow' },
  { id: 2, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80', caption: 'Layered necklaces' },
  { id: 3, image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80', caption: 'Huggie moment' },
  { id: 4, image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80', caption: 'Filigree details' },
  { id: 5, image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=80', caption: 'Gift ready' },
];

const UgcReels = () => {
  return (
    <section className="py-12 md:py-20 border-t border-brand-line">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-2">@velmora</p>
            <h2 className="section-title">Worn by You</h2>
          </div>
          <span className="hidden md:block text-xs text-brand-muted">Follow us for daily styling</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative h-[420px] w-[220px] flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-brand-warm"
            >
              <img src={reel.image} alt={reel.caption} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
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
