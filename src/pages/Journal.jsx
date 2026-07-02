import React from 'react';

const Journal = () => {
  const posts = [
    {
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From delicate layering in spring to bold statement pieces in winter, discover our guide to year-round styling.",
      date: "June 12, 2026",
      readTime: "8 min"
    },
    {
      title: "The Art of the Everyday Heirloom",
      excerpt: "Why we design pieces meant to be worn daily — and passed down for generations.",
      date: "May 28, 2026",
      readTime: "6 min"
    },
    {
      title: "Behind the Design: The Flora Collection",
      excerpt: "A look inside our creative process and the inspiration behind our bestselling necklace.",
      date: "May 3, 2026",
      readTime: "10 min"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 pb-20">
      <div className="text-center mb-16">
        <div className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] mb-3">STORIES & INSPIRATION</div>
        <h1 className="serif text-6xl">The Journal</h1>
      </div>

      <div className="space-y-16">
        {posts.map((post, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 aspect-[16/10] bg-[var(--color-bg)] rounded-lg overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-bg-dark)]/40" />
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-4 text-xs tracking-[0.1em] text-[var(--color-text-muted)] mb-4">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="serif text-3xl mb-4 group-hover:text-[var(--color-accent)] transition-colors">{post.title}</h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-4 text-sm tracking-[0.08em] border-b border-[var(--color-text)] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-colors">
                  READ MORE →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-sm text-[var(--color-text-muted)]">More stories coming soon.</p>
      </div>
    </div>
  );
};

export default Journal;