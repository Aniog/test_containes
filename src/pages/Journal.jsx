import React from 'react';
import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: "How to Style Gold Jewelry for Everyday Wear",
    excerpt: "The key to wearing fine jewelry daily is choosing pieces that feel like an extension of yourself, not an afterthought.",
    date: "July 12, 2026",
    readTime: "6 min",
    category: "Styling"
  },
  {
    id: 2,
    title: "The Difference Between Fine, Demi-Fine, and Fashion Jewelry",
    excerpt: "Understanding the hierarchy of jewelry helps you invest wisely and care for your pieces properly.",
    date: "June 28, 2026",
    readTime: "8 min",
    category: "Education"
  },
  {
    id: 3,
    title: "Behind the Design: The Golden Sphere Huggies",
    excerpt: "Our most beloved piece started with a simple question: what would we wear every single day?",
    date: "June 15, 2026",
    readTime: "5 min",
    category: "Behind the Scenes"
  },
  {
    id: 4,
    title: "Caring for Your Gold Jewelry: A Simple Guide",
    excerpt: "With the right care, your Velmora pieces will maintain their warmth and luster for years to come.",
    date: "May 30, 2026",
    readTime: "4 min",
    category: "Care"
  }
];

const Journal = () => {
  return (
    <div className="container section">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <div className="uppercase tracking-[3px] text-xs text-gold mb-2">Stories & Reflections</div>
          <h1 className="mb-4">The Journal</h1>
          <p className="body-muted max-w-md mx-auto">
            Notes on craft, style, and the quiet luxury of wearing what you love.
          </p>
        </div>

        <div className="space-y-12">
          {journalPosts.map((post, index) => (
            <article key={post.id} className="border-b border-border pb-12 last:border-0">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-text-muted mb-3">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl mb-4 hover:text-gold transition-colors cursor-pointer">
                {post.title}
              </h2>
              
              <p className="body-muted mb-4 max-w-2xl">{post.excerpt}</p>
              
              <button className="text-sm uppercase tracking-widest text-gold hover:underline">
                READ MORE →
              </button>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm body-muted mb-4">Want these stories in your inbox?</p>
          <Link to="/" className="btn btn-gold-outline">JOIN OUR NEWSLETTER</Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
