import React from 'react';

const Journal = () => {
  const posts = [
    { id: 1, title: 'How to Style Gold Huggies for Everyday Wear', date: '2026-07-10', readTime: '4 min read' },
    { id: 2, title: 'The Art of Gifting Jewelry', date: '2026-06-28', readTime: '5 min read' },
    { id: 3, title: 'Behind the Design: Amber Lace Earrings', date: '2026-06-15', readTime: '3 min read' },
  ];

  return (
    <div className="bg-brand-bg">
      <div className="container-editorial section-padding">
        <h1 className="font-serif text-4xl text-brand-ink">Journal</h1>
        <p className="mt-2 text-sm text-brand-muted">Stories, styling tips, and behind-the-scenes looks.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="rounded-2xl bg-white p-4 shadow-soft">
              <div className="overflow-hidden rounded-xl bg-brand-warm">
                <img alt={post.title} className="h-56 w-full object-cover" src="https://picsum.photos/seed/velmora-journal/800/600" />
              </div>
              <div className="mt-4">
                <p className="text-xs text-brand-muted">{post.date} · {post.readTime}</p>
                <h3 className="mt-2 font-serif text-xl text-brand-ink">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
