import React from 'react';

export default function JournalPage() {
  const posts = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
      date: 'June 28, 2026',
    },
    {
      id: 2,
      title: 'The Care Guide: Making Your Gold Last',
      excerpt: 'Simple tips to keep your demi-fine jewelry looking brand new for years to come.',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop',
      date: 'June 15, 2026',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry She Will Actually Love',
      excerpt: 'From birthdays to anniversaries, our curated picks for every occasion.',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=400&fit=crop',
      date: 'June 1, 2026',
    },
  ];

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="text-xs tracking-[0.3em] uppercase text-[#B8860B] mb-4 text-center">The Journal</p>
        <h1 className="serif-heading text-5xl md:text-6xl font-light text-center text-[#1A1A1A] mb-12">
          Stories & Styling
        </h1>
        <div className="w-12 h-px bg-[#B8860B] mx-auto mb-16" />

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden bg-[#F5F0EB] mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-[#6B6560] mb-2">{post.date}</p>
              <h3 className="serif-heading text-xl text-[#1A1A1A] mb-2 group-hover:text-[#B8860B] transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-[#6B6560] leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
