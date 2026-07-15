import React from 'react';
import { Play } from 'lucide-react';
import { ugcItems } from '@/data/products';

const UgcRow = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">As Worn By You</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">#VelmoraMoment</h2>
          </div>
          <a href="#" className="hidden md:inline-flex text-sm font-medium text-ink-secondary hover:text-accent transition-colors">
            Follow us
          </a>
        </div>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible">
          {ugcItems.map((item) => (
            <article
              key={item.id}
              className="relative min-w-[220px] snap-center md:min-w-0 overflow-hidden rounded-2xl bg-background"
            >
              <div className="aspect-[9/16] w-full">
                <img src={item.image} alt={item.caption} className="h-full w-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/80">{item.handle}</p>
                <p className="mt-1 font-serif text-sm text-white">{item.caption}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink">
                  <Play className="h-4 w-4 ml-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcRow;
