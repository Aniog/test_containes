import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 1,
    title: 'How to Style Gold Huggies for Every Occasion',
    excerpt: 'From boardroom to brunch — the versatile earring you will never want to take off.',
    date: 'July 12, 2025',
  },
  {
    id: 2,
    title: 'The Complete Guide to Jewelry Care',
    excerpt: 'Keep your demi-fine pieces shining for years with these simple tips.',
    date: 'June 28, 2025',
  },
  {
    id: 3,
    title: 'Why Demi-Fine is the Future of Jewelry',
    excerpt: 'The rise of accessible luxury and what it means for modern consumers.',
    date: 'June 15, 2025',
  },
];

const Journal = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-widest uppercase text-velmora-gold mb-3">Stories</p>
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-espresso">The Journal</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-velmora-sand/30 rounded-sm overflow-hidden mb-5">
                <div
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id={`journal-${post.id}`}
                  data-strk-bg={`gold jewelry editorial fashion elegant ${post.title}`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="600"
                />
              </div>
              <p className="text-xs text-velmora-stone mb-2">{post.date}</p>
              <h2 className="font-serif text-xl text-velmora-espresso mb-2 group-hover:text-velmora-gold transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-velmora-taupe leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
