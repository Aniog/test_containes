import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    { id: 1, title: 'How to Style Gold Hoops for Every Occasion', date: '2026-07-15', category: 'Style' },
    { id: 2, title: 'The Art of Layering Necklaces', date: '2026-07-02', category: 'Guides' },
    { id: 3, title: 'Why Demi-Fine Jewelry is the New Everyday Luxury', date: '2026-06-20', category: 'Journal' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-ink mb-10">Journal</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <div className="aspect-[4/3] overflow-hidden bg-brand-warm mb-4">
              <img
                src={`https://images.unsplash.com/photo-${['1611591437281-460bfbe1220a', '1602173574767-37ac01994b2a', '1630019852942-f89202989a59'][post.id - 1]}?w=800&q=80`}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-2">{post.category}</p>
            <h2 className="font-serif text-xl text-brand-ink group-hover:text-brand-accent transition-colors">{post.title}</h2>
            <p className="mt-2 text-xs text-brand-muted">{post.date}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Journal;
