import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    { title: 'How to Style Gold Jewelry for Work', date: '2026-07-10', readTime: '4 min read' },
    { title: 'The Art of Gifting Jewelry', date: '2026-06-28', readTime: '5 min read' },
    { title: 'Why Demi-Fine Is the New Fine', date: '2026-06-15', readTime: '6 min read' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl text-brand-text sm:text-4xl">Journal</h1>
      <p className="mt-2 text-sm text-brand-muted">Stories, guides, and inspiration.</p>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, idx) => (
          <article key={idx} className="rounded-sm border border-brand-border bg-brand-surface p-6">
            <p className="text-xs uppercase tracking-widest text-brand-muted">{post.date} · {post.readTime}</p>
            <h2 className="mt-2 font-display text-xl text-brand-text">{post.title}</h2>
            <Link to="/journal" className="mt-4 inline-block text-xs uppercase tracking-widest text-brand-accent hover:text-brand-accentHover">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Journal;
