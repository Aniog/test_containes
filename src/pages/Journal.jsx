import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Stylist',
      excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
      date: 'June 15, 2026',
    },
    {
      id: 2,
      title: 'The Truth About Gold-Plated Jewelry',
      excerpt: 'Everything you need to know about 18K gold plating — and why quality matters more than karats.',
      date: 'June 2, 2026',
    },
    {
      id: 3,
      title: '5 Jewelry Trends for Summer 2026',
      excerpt: 'From sculptural huggies to bold ear cuffs, these are the styles defining the season.',
      date: 'May 20, 2026',
    },
  ];

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-velmora-text">
            Journal
          </h1>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6 mb-4" />
          <p className="text-sm text-velmora-muted max-w-md mx-auto">
            Style guides, care tips, and stories from behind the craft.
          </p>
        </div>

        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-velmora-border pb-10">
              <p className="text-xs text-velmora-muted tracking-wide mb-3">{post.date}</p>
              <h2 className="font-serif text-xl md:text-2xl tracking-wide text-velmora-text mb-3">
                {post.title}
              </h2>
              <p className="text-sm text-velmora-muted leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold border-b border-velmora-gold/50 pb-0.5 cursor-pointer hover:border-velmora-gold transition-colors">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
