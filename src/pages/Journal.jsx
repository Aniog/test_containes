import React from 'react';
import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: "The Art of Layering Necklaces",
    excerpt: "How to create dimension and personal meaning with multiple chains.",
    date: "July 12, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=85",
    category: "Styling"
  },
  {
    id: 2,
    title: "Why We Choose 18K Gold Plating",
    excerpt: "The difference between quality plating and everything else.",
    date: "June 28, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85",
    category: "Craft"
  },
  {
    id: 3,
    title: "Gifting Jewelry That Lasts",
    excerpt: "A guide to choosing pieces that become heirlooms, not afterthoughts.",
    date: "June 15, 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=800&q=85",
    category: "Gifting"
  },
  {
    id: 4,
    title: "The Quiet Power of Everyday Jewelry",
    excerpt: "Why the pieces you wear daily matter more than the ones you save.",
    date: "May 30, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=85",
    category: "Philosophy"
  },
];

export default function Journal() {
  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="text-xs tracking-[0.2em] uppercase text-[var(--velmora-gold)] mb-2">Words & Reflections</div>
          <h1 className="serif text-5xl">The Journal</h1>
          <p className="text-[var(--velmora-text-muted)] mt-3 max-w-md">Stories on craft, style, and the pieces that stay with us.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {journalPosts.map((post) => (
            <article key={post.id} className="group">
              <Link to={`/journal/${post.id}`} className="block">
                <div className="aspect-[16/10] bg-[var(--velmora-bg-alt)] mb-5 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)] mb-2">
                  <span>{post.category}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="serif text-2xl mb-2 group-hover:text-[var(--velmora-gold-dark)] transition-colors">{post.title}</h2>
                <p className="text-[var(--velmora-text-muted)] leading-relaxed">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--velmora-border)] text-center">
          <p className="text-sm text-[var(--velmora-text-muted)] mb-4">Want more stories delivered to your inbox?</p>
          <Link to="/" className="btn btn-outline">Subscribe to the Newsletter</Link>
        </div>
      </div>
    </div>
  );
}
