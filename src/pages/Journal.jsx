import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const POSTS = [
  {
    id: 'how-to-layer',
    title: 'How to layer fine chains, the quiet way',
    excerpt:
      'A short guide to mixing chain widths, lengths, and pendants without overdoing it.',
    date: 'May 21, 2026',
    read: '4 min read',
  },
  {
    id: 'gold-plating',
    title: 'On 18K gold plating — what it really means',
    excerpt:
      'The difference between flash plate, gold-filled, and the long-wear plating we use at Velmora.',
    date: 'April 9, 2026',
    read: '6 min read',
  },
  {
    id: 'lisbon-atelier',
    title: 'A morning in our Lisbon atelier',
    excerpt:
      'Photographs and notes from the studio where every piece is hand-finished.',
    date: 'March 2, 2026',
    read: '3 min read',
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.4em] text-mocha">The Journal</p>
        <h1 className="mt-4 font-serif text-5xl font-light leading-[1.05] text-ink md:text-7xl">
          Notes from <em className="italic">the atelier.</em>
        </h1>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {POSTS.map((post, i) => (
            <article key={post.id} className="group cursor-pointer fade-up" style={{ animationDelay: `${i * 120}ms` }}>
              <div className="relative aspect-[5/6] overflow-hidden bg-ivory">
                <img
                  alt={post.title}
                  data-strk-img-id={`journal-${post.id}-img`}
                  data-strk-img={`[journal-${post.id}-title] [journal-${post.id}-excerpt] editorial photography warm light still life`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-mocha">
                {post.date} · {post.read}
              </p>
              <h2
                id={`journal-${post.id}-title`}
                className="mt-3 font-serif text-2xl font-light leading-snug text-ink md:text-3xl"
              >
                {post.title}
              </h2>
              <p
                id={`journal-${post.id}-excerpt`}
                className="mt-3 text-sm leading-relaxed text-mocha"
              >
                {post.excerpt}
              </p>
              <span className="mt-4 inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-[0.3em] text-ink">
                Read →
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
