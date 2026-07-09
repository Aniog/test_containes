import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    { id: 1, title: "How to Style Gold Jewelry for Every Season", excerpt: "From delicate layering in spring to bold statement pieces in winter, discover our guide to year-round styling.", date: "June 12, 2026" },
    { id: 2, title: "Behind the Design: The Making of Our Signature Huggies", excerpt: "A look inside our studio process—from initial sketches to the final polished piece.", date: "May 28, 2026" },
    { id: 3, title: "Caring for Your Demi-Fine Jewelry", excerpt: "Simple rituals to keep your pieces looking beautiful for years to come.", date: "May 10, 2026" },
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="pt-12 pb-16 text-center">
          <div className="text-xs tracking-[0.15em] text-[#B89778] mb-3">STORIES & INSPIRATION</div>
          <h1 className="serif text-6xl tracking-[0.02em]">The Journal</h1>
        </div>

        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-[#E5DFD3] pb-16 last:border-0">
              <div className="text-xs tracking-[0.1em] text-[#B89778] mb-3">{post.date}</div>
              <h2 className="serif text-3xl tracking-[0.02em] mb-4 hover:text-[#B89778] cursor-pointer">{post.title}</h2>
              <p className="text-[#6B665F] leading-relaxed mb-6 max-w-2xl">{post.excerpt}</p>
              <Link to="#" className="text-sm tracking-[0.08em] underline hover:text-[#B89778]">Read More →</Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-16 pt-8 border-t border-[#E5DFD3]">
          <p className="text-sm text-[#6B665F]">More stories coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;