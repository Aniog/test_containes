import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const posts = [
  {
    id: 'journal-1',
    title: 'The Art of Layering Necklaces',
    excerpt: 'Master the effortless layered look with our guide to combining lengths, textures, and pendants.',
    date: 'June 15, 2026',
    query: 'gold layered necklaces on neck warm light editorial',
  },
  {
    id: 'journal-2',
    title: 'Gold Care 101: Keep Your Pieces Shining',
    excerpt: 'Simple tips to maintain the luster and longevity of your gold-plated jewelry collection.',
    date: 'May 28, 2026',
    query: 'gold jewelry cleaning care soft cloth warm light',
  },
  {
    id: 'journal-3',
    title: 'Wedding Guest Jewelry: What to Wear',
    excerpt: 'From beach ceremonies to black-tie receptions — the perfect jewelry picks for every wedding style.',
    date: 'May 10, 2026',
    query: 'elegant gold jewelry wedding guest warm light editorial',
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center">
        <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-3">
          Stories & Guides
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-velmora-text font-light">
          The Journal
        </h1>
        <div className="w-12 h-px bg-velmora-gold mx-auto mt-5 mb-4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-velmora-surface overflow-hidden mb-4">
                <img
                  data-strk-img-id={post.id}
                  data-strk-img={`[${post.id}-title] ${post.query}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] text-velmora-text-muted tracking-wider uppercase mb-2">{post.date}</p>
              <h3
                id={`${post.id}-title`}
                className="font-serif text-xl text-velmora-text group-hover:text-velmora-gold transition-colors duration-300 mb-2"
              >
                {post.title}
              </h3>
              <p className="text-sm text-velmora-text-muted leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
