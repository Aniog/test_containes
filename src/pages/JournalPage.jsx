import React from 'react';

export default function JournalPage() {
  const posts = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=500&fit=crop',
      date: 'July 10, 2026',
      category: 'Styling',
    },
    {
      id: 2,
      title: 'The Care Guide: Keeping Your Gold Jewelry Beautiful',
      excerpt: 'Simple tips to maintain the luster of your 18K gold plated pieces for years to come.',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=500&fit=crop',
      date: 'July 5, 2026',
      category: 'Care',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Occasion',
      excerpt: 'From birthdays to anniversaries, find the perfect piece for the special women in your life.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=500&fit=crop',
      date: 'June 28, 2026',
      category: 'Gifts',
    },
  ];

  return (
    <div className="pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="velmora-heading text-3xl sm:text-4xl lg:text-5xl mb-3">Journal</h1>
          <p className="text-muted text-sm">Styling tips, care guides, and behind-the-scenes stories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden bg-[var(--velmora-bg-secondary)] mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="text-xs tracking-widest uppercase text-[var(--velmora-gold)]">{post.category}</span>
              <h2 className="velmora-heading text-xl mt-2 mb-2 group-hover:text-[var(--velmora-gold)] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted mb-3 line-clamp-2">{post.excerpt}</p>
              <time className="text-xs text-muted">{post.date}</time>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
