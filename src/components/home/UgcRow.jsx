import React from 'react';
import { Play } from 'lucide-react';
import { ugcItems } from '@/data/products';

const UgcRow = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <p className="eyebrow">From the community</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Worn by you</h2>
      </div>

      <div className="mt-8 flex gap-4 overflow-x-auto px-4 pb-4 md:px-8 md:pb-6">
        {ugcItems.map((item) => (
          <article
            key={item.id}
            className="relative h-[420px] w-[260px] flex-shrink-0 overflow-hidden rounded-2xl md:h-[520px] md:w-[300px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-ui text-xs font-semibold uppercase tracking-display text-white/80">
                {item.handle}
              </p>
              <p className="mt-1 font-display text-lg font-medium text-white">{item.title}</p>
            </div>
            <span className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink backdrop-blur-sm">
              <Play className="h-4 w-4" />
            </span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default UgcRow;
