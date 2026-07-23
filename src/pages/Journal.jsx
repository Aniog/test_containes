import React from 'react';

const Journal = () => {
  const posts = [
    { title: "How to Style Gold Jewelry for Fall", excerpt: "Layering tips for the season ahead.", date: "July 12, 2026" },
    { title: "The Art of Everyday Luxury", excerpt: "Why demi-fine pieces belong in your daily rotation.", date: "June 28, 2026" },
    { title: "Behind the Design: Amber Lace", excerpt: "The inspiration behind our newest earrings.", date: "June 10, 2026" },
  ];

  return (
    <div className="pt-20 max-w-[900px] mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <div className="text-xs tracking-[0.15em] text-[#8B7E6F]">INSIGHTS</div>
        <h1 className="font-serif text-5xl tracking-[-0.01em] mt-2">The Journal</h1>
      </div>
      
      <div className="space-y-12">
        {posts.map((post, i) => (
          <article key={i} className="border-b border-[#E5E0D8] pb-12 last:border-none">
            <div className="text-xs tracking-[0.1em] text-[#8B7E6F] mb-2">{post.date}</div>
            <h2 className="font-serif text-3xl tracking-[-0.01em] mb-3 hover:text-[#C5A26F] cursor-pointer">{post.title}</h2>
            <p className="text-[#8B7E6F]">{post.excerpt}</p>
            <button className="text-sm tracking-[0.08em] mt-4 hover:text-[#C5A26F]">READ MORE →</button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Journal;