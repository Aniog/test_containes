import React from 'react';

const posts = [
  {
    id: 1,
    title: "How to Build a Jewelry Collection You'll Actually Wear",
    excerpt: "Start with pieces that feel like you. Here's how we think about everyday luxury.",
    date: "July 12, 2026",
    readTime: "6 min",
  },
  {
    id: 2,
    title: "The Art of Layering: Necklaces That Work Together",
    excerpt: "Mixing lengths, textures, and tones — without overthinking it.",
    date: "June 28, 2026",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Why We Choose 18K Gold Plating",
    excerpt: "A closer look at the materials that make our pieces feel precious, not precious.",
    date: "June 10, 2026",
    readTime: "5 min",
  },
];

const Journal = () => {
  return (
    <div className="container py-16 md:py-20">
      <div className="max-w-2xl mb-12">
        <span className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-gold-dark)]">Stories & Rituals</span>
        <h1 className="heading-serif text-5xl mt-2">The Journal</h1>
        <p className="mt-4 text-[var(--velmora-text-muted)]">Notes on wearing, gifting, and caring for the pieces you love.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {posts.map((post) => (
          <article key={post.id}>
            <div className="aspect-[16/10] bg-[var(--velmora-bg-alt)] mb-6" />
            <div className="flex items-center gap-3 text-xs text-[var(--velmora-text-muted)] tracking-[0.08em] mb-2">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="heading-serif text-2xl mb-3 leading-tight">{post.title}</h3>
            <p className="text-[var(--velmora-text-muted)] text-sm leading-relaxed">{post.excerpt}</p>
            <a href="#read" className="inline-block mt-4 text-sm tracking-[0.08em] uppercase border-b border-[var(--velmora-text)] hover:text-[var(--velmora-gold-dark)] hover:border-[var(--velmora-gold-dark)]">Read More</a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Journal;
