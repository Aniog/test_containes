import React from 'react';

export default function Journal() {
  const posts = [
    { id: 1, title: 'The Art of Layering Gold Necklaces', date: 'June 12, 2026', excerpt: 'Master the effortless layered look with our guide to mixing chain lengths and pendant styles.' },
    { id: 2, title: 'Caring for Your Demi-Fine Jewelry', date: 'June 5, 2026', excerpt: 'Simple tips to keep your gold pieces looking brilliant for years to come.' },
    { id: 3, title: 'Gift Guide: Pieces She Will Treasure', date: 'May 28, 2026', excerpt: 'Our curated selection of gifts for birthdays, anniversaries, and just because.' },
  ];

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-14">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Journal</h1>
          <p className="font-sans text-sm text-warm-gray">Style inspiration, care guides, and stories from our studio.</p>
        </div>

        <div className="space-y-12">
          {posts.map(post => (
            <article key={post.id} className="pb-12 border-b border-hairline last:border-0">
              <span className="font-sans text-xs text-warm-gray uppercase tracking-wider">{post.date}</span>
              <h2 className="font-serif text-2xl text-charcoal mt-2 mb-3 hover:text-gold transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="font-sans text-sm text-warm-gray leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 font-sans text-xs uppercase tracking-widest text-gold hover:text-gold-dark transition-colors cursor-pointer">
                Read More →
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
