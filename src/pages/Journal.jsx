import React from 'react';
import Navbar from '../components/Navbar';
import CartDrawer from '../components/CartDrawer';

const Journal = () => {
  const posts = [
    { title: "How to Style Gold Jewelry for Fall", date: "July 10, 2026", excerpt: "Layering delicate chains with statement pieces for the season ahead." },
    { title: "The Art of Gifting Jewelry", date: "July 3, 2026", excerpt: "Thoughtful ways to choose a piece that tells her story." },
    { title: "Caring for Your Demi-Fine Pieces", date: "June 28, 2026", excerpt: "Simple rituals to keep your jewelry looking its best for years." },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">INSIGHTS</p>
          <h1 className="serif text-5xl">The Journal</h1>
        </div>

        <div className="space-y-12">
          {posts.map((post, i) => (
            <article key={i} className="border-b border-[#E5DFD6] pb-12 last:border-0">
              <p className="text-xs text-[#8B7355] mb-2">{post.date}</p>
              <h2 className="serif text-3xl mb-4 hover:text-[#8B7355] cursor-pointer">{post.title}</h2>
              <p className="text-[#6B6058]">{post.excerpt}</p>
              <button className="text-sm tracking-widest mt-4 hover:text-[#8B7355]">READ MORE →</button>
            </article>
          ))}
        </div>
      </div>

      <CartDrawer />
    </div>
  );
};

export default Journal;