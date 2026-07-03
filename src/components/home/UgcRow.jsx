import React from 'react';
import { Play } from 'lucide-react';
import { ugcItems } from '../../data/products';

const UgcRow = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container-editorial">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">As seen on</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl text-text">The Velmora Edit</h2>
          </div>
          <a href="#" className="hidden md:inline-flex btn-outline">Follow Us</a>
        </div>
        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <article key={item.id} className="relative h-[420px] w-[260px] flex-shrink-0 snap-center overflow-hidden rounded-sm bg-surface-warm">
              <img
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80"
                alt={item.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-xs text-white/80">{item.handle}</p>
                <p className="mt-1 font-serif text-base text-white">{item.title}</p>
              </div>
              <span className="absolute left-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-text">
                <Play className="h-4 w-4 ml-0.5" />
              </span>
            </article>
          ))}
        </div>
        <div className="mt-6 md:hidden text-center">
          <a href="#" className="btn-outline">Follow Us</a>
        </div>
      </div>
    </section>
  );
};

export default UgcRow;
