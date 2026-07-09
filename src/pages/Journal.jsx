import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    { title: "How to Style Gold Jewelry for Every Season", date: "June 2026", excerpt: "From delicate layering to bold statements, discover how to wear gold year-round." },
    { title: "The Art of Everyday Luxury", date: "May 2026", excerpt: "Why demi-fine jewelry is the perfect balance between precious and practical." },
    { title: "Caring for Your Velmora Pieces", date: "April 2026", excerpt: "Simple rituals to keep your jewelry looking beautiful for years to come." },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="text-sm tracking-[0.1em] text-[#7A7368] hover:text-[#2C2823]">← Back to Home</Link>
        
        <div className="mt-12 mb-16">
          <span className="text-xs tracking-[0.2em] text-[#8B7355] uppercase">Stories</span>
          <h1 className="heading-serif text-6xl mt-3">The Journal</h1>
        </div>

        <div className="space-y-16">
          {posts.map((post, i) => (
            <article key={i} className="border-b border-[#E5DFD3] pb-16 last:border-none">
              <div className="text-xs tracking-[0.15em] text-[#8B7355] mb-3">{post.date}</div>
              <h2 className="heading-serif text-3xl mb-4">{post.title}</h2>
              <p className="text-[#7A7368] max-w-2xl mb-6">{post.excerpt}</p>
              <a href="#" className="text-sm tracking-[0.1em] text-[#8B7355] hover:underline">Read More →</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
