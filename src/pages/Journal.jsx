import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Journal = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    { id: 'journal-1', title: 'How to Style Gold Jewelry for Work', date: '2026-07-10', readTime: '4 min read' },
    { id: 'journal-2', title: 'The Art of Gifting Jewelry', date: '2026-07-03', readTime: '5 min read' },
    { id: 'journal-3', title: 'Demi-Fine vs Fine: What\'s the Difference?', date: '2026-06-25', readTime: '3 min read' },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="section-title mb-4">Journal</h1>
          <p className="text-brand-textMuted max-w-xl mx-auto">Styling tips, gift guides, and stories from the world of Velmora.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] bg-brand-surfaceAlt rounded-sm overflow-hidden mb-4">
                <img
                  data-strk-img-id={post.id}
                  data-strk-img={`[${post.title}] [velmora journal]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-brand-textMuted mb-2">{post.date} · {post.readTime}</p>
              <h2 className="font-serif text-xl text-brand-text group-hover:text-brand-gold transition-colors">{post.title}</h2>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
