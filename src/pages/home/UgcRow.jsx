import React from 'react';
import { Play } from 'lucide-react';
import { ugcItems } from '@/data/products';

const UgcRow = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-ink">As Worn By You</h2>
          <p className="mt-3 text-muted text-sm md:text-base">Tag @velmora to be featured.</p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative min-w-[220px] md:min-w-[260px] aspect-[9/16] rounded-2xl overflow-hidden snap-start bg-ink"
            >
              <img
                src="https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80"
                alt="UGC jewelry"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-white text-sm tracking-wide">{item.text}</p>
                <p className="text-white/70 text-xs mt-1">{item.handle}</p>
              </div>
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md text-white p-2 rounded-full">
                <Play className="w-4 h-4 fill-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcRow;
