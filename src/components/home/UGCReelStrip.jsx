import React from 'react';
import { ShoppingBag } from 'lucide-react';

const ugcItems = [
  { id: 1, caption: 'Golden hour with Golden Sphere Huggies ✨', bg: 'from-velmora-warm to-velmora-sand' },
  { id: 2, caption: 'Layered the Celeste Pendant — obsessed', bg: 'from-velmora-sand to-velmora-warm' },
  { id: 3, caption: 'Vivid Aura on repeat this summer', bg: 'from-velmora-cream to-velmora-sand' },
  { id: 4, caption: 'Date night stack: Amber Lace + Huggies', bg: 'from-velmora-warm to-velmora-cream' },
  { id: 5, caption: '@velmorajewelry — my new everyday go-to', bg: 'from-velmora-sand to-velmora-cream' },
  { id: 6, caption: 'The Royal Heirloom Set for bridal season', bg: 'from-velmora-cream to-velmora-warm' },
];

export default function UGCReelStrip() {
  return (
    <section className="bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-xs tracking-super uppercase mb-4">Styled by You</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">As Seen On</h2>
          <div className="w-12 h-px bg-velmora-gold/30 mx-auto mt-6" />
        </div>

        {/* Scrollable reel strip */}
        <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-none">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] snap-center group cursor-pointer"
            >
              {/* Vertical card (9:16) */}
              <div className={`aspect-[9/16] rounded-sm bg-gradient-to-br ${item.bg} overflow-hidden relative mb-3`}>
                {/* Jewelry silhouette placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-1/2 rounded-full bg-velmora-gold/10 blur-xl" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-velmora-gold/25" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-velmora-dark/0 group-hover:bg-velmora-dark/10 transition-colors duration-500 flex items-end p-4">
                  <p className="text-white text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-serif italic">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Caption */}
              <p className="font-serif text-xs text-velmora-dark/70 italic leading-relaxed line-clamp-2">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
