import React from 'react';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const Journal = () => {
  const posts = [
    { title: "How to Style Gold Jewelry for Every Season", date: "June 12, 2026", excerpt: "From delicate layering in summer to bold statement pieces in winter—our guide to year-round styling." },
    { title: "The Art of Gifting Jewelry", date: "May 28, 2026", excerpt: "Thoughtful considerations for choosing a piece that will be treasured for years to come." },
    { title: "Behind the Design: The Heirloom Set", date: "May 3, 2026", excerpt: "A look at the inspiration and craftsmanship behind our most beloved collection." },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#2C2522]">
      <Navigation />

      <div className="max-w-[900px] mx-auto px-6 pt-28 pb-20">
        <div className="text-center mb-14">
          <div className="font-serif text-5xl tracking-[2px] mb-3">The Journal</div>
          <p className="text-[#8B7355]">Stories, inspiration, and the quiet luxury of everyday adornment.</p>
        </div>

        <div className="space-y-12">
          {posts.map((post, idx) => (
            <article key={idx} className="border-b border-[#D4C5A9] pb-12 last:border-none">
              <div className="text-xs tracking-[2px] text-[#8B7355] mb-2">{post.date}</div>
              <h2 className="font-serif text-2xl tracking-[1px] mb-3 hover:text-[#8B7355] cursor-pointer">{post.title}</h2>
              <p className="text-[#5C5249] leading-relaxed">{post.excerpt}</p>
              <button className="mt-4 text-sm tracking-[1.5px] text-[#8B7355] hover:text-[#2C2522]">READ MORE →</button>
            </article>
          ))}
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Journal;
