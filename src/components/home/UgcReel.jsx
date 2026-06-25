import React from 'react';
import { Play } from 'lucide-react';
import { UGC_REELS } from '@/data/products';

export default function UgcReel() {
  return (
    <section className="bg-ivory py-20 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-mocha">
              @velmora.jewelry
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light leading-tight text-ink md:text-5xl">
              Worn by you.
            </h2>
          </div>
          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.3em] text-ink underline-offset-8 hover:underline"
          >
            Follow on Instagram →
          </a>
        </div>
      </div>

      <div className="mt-12">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:px-10">
          {UGC_REELS.map((r, i) => (
            <article
              key={r.id}
              className="group relative aspect-[9/16] w-[68vw] flex-shrink-0 snap-start overflow-hidden bg-ink/5 sm:w-[300px] md:w-[320px]"
            >
              <img
                alt={r.caption}
                data-strk-img-id={`reel-${r.id}-4f2k${i}`}
                data-strk-img={`[reel-${r.id}-cap] gold jewelry worn on woman close up neck ear lifestyle warm light vertical`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/80" />
              <div className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink/40 backdrop-blur-sm">
                <Play size={12} strokeWidth={1.5} className="ml-0.5 fill-cream text-cream" />
              </div>
              <p
                id={`reel-${r.id}-cap`}
                className="absolute inset-x-0 bottom-0 p-5 font-serif text-lg italic leading-snug text-cream md:text-xl"
              >
                {r.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
