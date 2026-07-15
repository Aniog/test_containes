import React from 'react';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "How to Care for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your pieces looking as beautiful as the day you received them.",
      date: "July 2026",
      readTime: "4 min",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating dimension and personal meaning through thoughtful combinations.",
      date: "June 2026",
      readTime: "6 min",
    },
    {
      id: 3,
      title: "Why We Choose 18K Gold Plating",
      excerpt: "The difference between fine, demi-fine, and fashion jewelry—and why it matters.",
      date: "May 2026",
      readTime: "5 min",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-12">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-gold)] mb-2">Notes from the Studio</p>
        <h1 className="text-5xl md:text-6xl font-serif">Journal</h1>
      </div>

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.id} className="border-b border-[var(--color-border-light)] pb-12 last:border-0">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="font-serif text-3xl mb-3 hover:text-[var(--color-gold-dark)] cursor-pointer">
              {post.title}
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">{post.excerpt}</p>
            <button className="text-sm uppercase tracking-widest text-[var(--color-gold-dark)] hover:underline">
              Read More →
            </button>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center text-sm text-[var(--color-text-muted)]">
        More stories coming soon.
      </div>
    </div>
  );
};

export default Journal;
