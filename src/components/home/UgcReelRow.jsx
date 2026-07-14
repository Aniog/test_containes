import React from 'react';
import { Play } from 'lucide-react';
import { ugcItems } from '@/data/products';

const UgcReelRow = () => {
  return (
    <section className="bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-2">As Worn By You</p>
            <h2 className="font-serif text-2xl md:text-3xl text-cream">The Velmora Edit</h2>
          </div>
          <a href="#" className="text-xs tracking-[0.18em] uppercase text-gold hover:text-gold-light transition-colors">
            Follow @velmora
          </a>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative min-w-[220px] sm:min-w-[260px] aspect-[9/16] bg-charcoal-light overflow-hidden snap-start group"
            >
              <img
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80"
                alt={item.caption}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-white text-sm leading-snug">{item.caption}</p>
                <p className="text-white/70 text-[11px] tracking-widest uppercase mt-1">{item.handle}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-3 h-3 text-white fill-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcReelRow;
