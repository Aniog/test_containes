import React from 'react';
import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: "How to Layer Necklaces Without the Tangle",
    excerpt: "A guide to creating effortless, dimensional looks with multiple chains.",
    date: "July 2026",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    readTime: "6 min",
  },
  {
    id: 2,
    title: "The Quiet Luxury Edit: What We're Wearing Now",
    excerpt: "From boardroom meetings to weekend markets—our current rotation of everyday pieces.",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Caring for Gold: A Simple Routine",
    excerpt: "Three steps to keep your Velmora pieces looking like new for years.",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    readTime: "3 min",
  },
];

const Journal = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-14">
        <span className="text-xs tracking-[0.15em] text-[var(--color-gold)] uppercase">Stories & Rituals</span>
        <h1 className="heading-display text-5xl md:text-6xl mt-2">The Journal</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {journalPosts.map((post) => (
          <article key={post.id} className="group">
            <div className="aspect-[16/10] bg-[var(--color-surface-warm)] overflow-hidden mb-5">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)] mb-2">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="font-serif text-2xl leading-tight mb-3 group-hover:text-[var(--color-gold)] transition-colors">
              {post.title}
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
              {post.excerpt}
            </p>
            <span className="inline-block mt-4 text-xs tracking-widest text-[var(--color-gold)] group-hover:underline">
              READ MORE →
            </span>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center text-sm text-[var(--color-text-muted)]">
        More stories coming soon. Follow us on Instagram for daily inspiration.
      </div>
    </div>
  );
};

export default Journal;
