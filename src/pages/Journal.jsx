import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const POSTS = [
  {
    id: 'how-to-layer',
    title: 'The Art of Layering Necklaces',
    excerpt: 'Three rules and one well-chosen pendant — that’s all it takes.',
    query: 'editorial closeup layered delicate gold necklaces on warm skin soft light',
  },
  {
    id: 'care-guide',
    title: 'A Quiet Guide to Gold-Plated Care',
    excerpt: 'Make your demi-fine pieces look new for years, not months.',
    query: 'gold jewelry styled on cream linen with polishing cloth editorial flatlay',
  },
  {
    id: 'gifting',
    title: 'Gifting Notes from the Atelier',
    excerpt: 'A short list of pieces our team gifts most — and why.',
    query: 'luxury jewelry gift box with ribbon warm cream linen editorial overhead',
  },
];

const Journal = () => {
  const ref = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), []);
  return (
    <div ref={ref} className="bg-velmora-cream pt-32 md:pt-40 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold mb-5">Journal</p>
        <h1 className="font-serif text-4xl md:text-6xl font-light text-velmora-ink leading-tight max-w-3xl">
          Notes on craft, style, and slow luxury.
        </h1>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {POSTS.map((p) => (
          <article key={p.id} className="group cursor-pointer">
            <div className="aspect-[4/5] bg-velmora-soft overflow-hidden">
              <img
                alt={p.title}
                data-strk-img-id={`journal-${p.id}`}
                data-strk-img={p.query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-6 font-serif text-2xl text-velmora-ink leading-tight">
              {p.title}
            </h2>
            <p className="mt-3 text-velmora-muted">{p.excerpt}</p>
            <p className="mt-5 text-xs uppercase tracking-[0.3em] text-velmora-ink border-b border-velmora-ink inline-block pb-1">
              Read
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Journal;
