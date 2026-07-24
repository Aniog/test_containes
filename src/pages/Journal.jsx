import React from 'react';

const Journal = () => {
  const posts = [
    { title: "How to Style Gold Jewelry for Fall", excerpt: "Layering, mixing metals, and finding your signature look.", date: "July 12, 2026" },
    { title: "The Art of the Everyday Heirloom", excerpt: "Why we design pieces meant to be worn, not stored away.", date: "June 28, 2026" },
    { title: "Behind the Design: The Sphere Huggie", excerpt: "From sketch to finished piece—our most sculptural design yet.", date: "June 10, 2026" },
  ];

  return (
    <div className="pt-20 max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <div className="text-xs tracking-[0.2em] text-[var(--color-gold)] mb-2">INSIGHTS</div>
        <h1 className="serif text-6xl">The Journal</h1>
      </div>

      <div className="space-y-16">
        {posts.map((post, i) => (
          <article key={i} className="border-b border-[var(--color-border)] pb-12 last:border-0">
            <div className="text-xs text-[var(--color-text-muted)] mb-2">{post.date}</div>
            <h2 className="serif text-4xl mb-4 hover:text-[var(--color-gold)] cursor-pointer">{post.title}</h2>
            <p className="text-[var(--color-text-muted)] mb-4">{post.excerpt}</p>
            <a href="#" className="text-sm tracking-[0.1em] underline">Read More →</a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Journal;