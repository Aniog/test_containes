import React from 'react';
import { Play } from 'lucide-react';
import { ugcItems } from '@/data/products';

const UgcRow = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-muted">As seen on</p>
            <h2 className="section-title mt-2">@velmora</h2>
          </div>
          <span className="hidden text-sm text-brand-muted md:inline">Follow for daily styling</span>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 pb-10 md:px-8">
        {ugcItems.map((item) => (
          <div key={item.id} className="relative h-[420px] w-[260px] shrink-0 overflow-hidden rounded-2xl md:h-[520px] md:w-[300px]">
            <img src={item.image} alt={item.caption} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-serif text-lg text-white">{item.caption}</p>
              <p className="mt-1 text-xs text-white/80">{item.handle}</p>
            </div>
            <span className="absolute left-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-ink">
              <Play size={14} fill="currentColor" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcRow;
