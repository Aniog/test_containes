import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    { id: 1, title: 'How to Style Gold Jewelry for Work', date: 'July 18, 2026', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80' },
    { id: 2, title: 'The Art of Gifting Jewelry', date: 'July 10, 2026', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80' },
    { id: 3, title: 'Caring for Your Demi-Fine Pieces', date: 'June 28, 2026', readTime: '3 min read', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest uppercase text-brand-muted mb-2">Journal</p>
        <h1 className="section-title">Stories & Guides</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {posts.map(post => (
          <article key={post.id} className="group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-brand-border mb-4">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <p className="text-xs text-brand-muted mb-2">{post.date} · {post.readTime}</p>
            <h3 className="product-name text-base">{post.title}</h3>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Journal;
