import React from "react";

const journalPosts = [
  {
    id: 1,
    title: "How to Layer Necklaces Without the Tangle",
    excerpt: "A guide to creating effortless, dimensional looks with multiple chains.",
    date: "July 12, 2026",
    category: "Styling",
  },
  {
    id: 2,
    title: "The Case for Everyday Gold",
    excerpt: "Why we believe fine jewelry belongs in your daily rotation, not your jewelry box.",
    date: "June 28, 2026",
    category: "Philosophy",
  },
  {
    id: 3,
    title: "Caring for Your Velmora Pieces",
    excerpt: "Simple rituals to keep your gold jewelry looking its best for years.",
    date: "June 15, 2026",
    category: "Care",
  },
];

export default function Journal() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <span className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] uppercase">Field Notes</span>
        <h1 className="heading-serif text-5xl mt-2">The Journal</h1>
        <p className="mt-4 text-[var(--color-text-muted)] max-w-md">
          Thoughts on jewelry, style, and the quiet luxury of everyday adornment.
        </p>
      </div>

      <div className="space-y-12">
        {journalPosts.map((post) => (
          <article key={post.id} className="border-b border-[var(--color-border)] pb-12 last:border-0">
            <div className="flex items-center gap-3 text-xs tracking-widest text-[var(--color-text-muted)] mb-3">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.category}</span>
            </div>
            <h2 className="heading-serif text-3xl mb-3 hover:text-[var(--color-accent)] cursor-pointer transition-colors">
              {post.title}
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">{post.excerpt}</p>
            <a href="#read" className="text-sm tracking-widest uppercase hover:text-[var(--color-accent)]">
              Read More →
            </a>
          </article>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-center text-sm text-[var(--color-text-muted)]">
        More stories coming soon. Follow us on Instagram for daily inspiration.
      </div>
    </div>
  );
}
