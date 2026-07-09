import React from 'react';
import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: "How to Build a Timeless Jewelry Collection",
    excerpt: "Three principles for choosing pieces you'll wear for decades, not seasons.",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    readTime: "6 min",
  },
  {
    id: 2,
    title: "The Art of Layering: Earrings Edition",
    excerpt: "A guide to creating an ear stack that feels intentional, not overwhelming.",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    readTime: "5 min",
  },
  {
    id: 3,
    title: "Why We Choose 18K Gold Plate",
    excerpt: "The materials decisions behind every Velmora piece — and why they matter.",
    date: "April 2026",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    readTime: "8 min",
  },
  {
    id: 4,
    title: "Gifting Jewelry: A Quiet Gesture",
    excerpt: "On choosing the right piece for someone you love — and how to present it.",
    date: "March 2026",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    readTime: "4 min",
  },
];

const Journal = () => {
  return (
    <div className="pt-20">
      <div className="container py-12 md:py-16">
        <div className="max-w-2xl mb-12">
          <span className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-muted)]">Field Notes</span>
          <h1 className="mt-2 text-4xl">Journal</h1>
          <p className="mt-4 body-text">
            Thoughts on craft, wear, and the quiet luxury of pieces made to last.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {journalPosts.map((post) => (
            <article key={post.id} className="group">
              <Link to="#" className="block">
                <div className="aspect-[16/10] bg-[var(--velmora-bg-alt)] mb-6 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase text-[var(--velmora-muted)] mb-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl mb-3 group-hover:text-[var(--velmora-gold-dark)] transition-colors">
                  {post.title}
                </h2>
                <p className="body-text">{post.excerpt}</p>
                <span className="inline-block mt-4 text-sm tracking-[0.08em] uppercase border-b border-[var(--velmora-deep)] pb-px group-hover:border-[var(--velmora-gold)]">
                  Read More →
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--velmora-border)] text-center">
          <p className="text-sm text-[var(--velmora-muted)] mb-4">
            More stories coming soon.
          </p>
          <Link to="/shop" className="btn btn-outline">
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;