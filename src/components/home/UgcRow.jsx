import React from 'react';
import { Play } from 'lucide-react';
import { ugcCards } from '../../data/products';

const UgcRow = () => {
  return (
    <section className="py-12 sm:py-20 bg-brand-surface border-y border-brand-divider">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent">As seen on</p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-brand-ink">The Velmora Edit</h2>
          </div>
          <a href="#" className="text-sm font-medium text-brand-ink hover:text-brand-accent transition-colors">
            Follow us
          </a>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {ugcCards.map((card) => (
            <div
              key={card.id}
              className="relative min-w-[220px] sm:min-w-[260px] snap-start overflow-hidden rounded-2xl bg-brand-warm aspect-[9/16]"
            >
              <img
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80"
                alt={card.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-xs text-white/80">{card.handle}</p>
                <p className="mt-1 text-sm font-medium">{card.title}</p>
              </div>
              <span className="absolute top-3 left-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-ink">
                <Play className="h-4 w-4 fill-current" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcRow;
