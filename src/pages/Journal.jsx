import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 'how-to-layer-gold-jewelry',
    title: 'How to Layer Gold Jewelry Without the Clutter',
    excerpt: 'Start with a base chain, add one statement piece, and let the metals breathe.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=80',
    date: '2026-07-10',
  },
  {
    id: 'summer-jewelry-essentials',
    title: '5 Summer Jewelry Essentials Under $60',
    excerpt: 'Lightweight pieces that work from beach days to evening dinners.',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80',
    date: '2026-06-28',
  },
  {
    id: 'gift-guide-for-her',
    title: 'The Gift Guide for Her: Jewelry That Says It All',
    excerpt: 'Thoughtful picks for birthdays, anniversaries, and just-because moments.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=80',
    date: '2026-06-15',
  },
];

const Journal = () => {
  return (
    <main className="pt-24 md:pt-28">
      <section className="section-padding bg-white">
        <div className="container-editorial">
          <p className="eyebrow">Journal</p>
          <h1 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Stories & Style</h1>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="group rounded-2xl border border-border bg-background overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-ink-muted">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  <h2 className="mt-2 font-serif text-xl text-ink">{post.title}</h2>
                  <p className="mt-2 text-sm text-ink-secondary leading-relaxed">{post.excerpt}</p>
                  <Link to={`/journal/${post.id}`} className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-accent hover:text-ink transition-colors">
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Journal;
