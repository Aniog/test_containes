import React from 'react';
import Navbar from '../components/Navbar';
import CartDrawer from '../components/CartDrawer';

const Journal = () => (
  <div className="min-h-screen bg-[#F8F6F3]">
    <Navbar />
    <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
      <p className="text-xs tracking-[0.15em] uppercase text-[#6B665E] mb-2">Stories & Reflections</p>
      <h1 className="serif text-6xl mb-12">The Journal</h1>
      <div className="space-y-16">
        {[
          { title: "The Art of Layering", excerpt: "How to style multiple necklaces with intention and grace.", date: "June 2026" },
          { title: "Caring for Your Gold", excerpt: "Simple rituals to keep your demi-fine pieces radiant for years.", date: "May 2026" },
          { title: "Behind the Atelier", excerpt: "A glimpse into the hands and hearts that craft each Velmora piece.", date: "April 2026" }
        ].map((post, idx) => (
          <article key={idx} className="border-b border-[#E5E0D8] pb-12 last:border-none">
            <p className="text-xs text-[#6B665E] mb-2">{post.date}</p>
            <h3 className="serif text-3xl mb-3">{post.title}</h3>
            <p className="text-[#6B665E] mb-4">{post.excerpt}</p>
            <a href="#" className="text-sm underline">Read More</a>
          </article>
        ))}
      </div>
    </div>
    <CartDrawer />
  </div>
);

export default Journal;
