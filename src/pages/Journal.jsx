import React from 'react';

const Journal = () => {
  const posts = [
    { title: "How to Style Gold Jewelry Year-Round", excerpt: "From delicate layering to bold statements, discover our favorite ways to wear gold through every season.", date: "July 12, 2026" },
    { title: "Behind the Design: The Sphere Huggie", excerpt: "A closer look at the sculptural process behind one of our most iconic silhouettes.", date: "June 28, 2026" },
    { title: "Caring for Your Demi-Fine Pieces", excerpt: "Simple rituals to keep your jewelry looking its best for years to come.", date: "June 10, 2026" },
  ];

  return (
    <div className="pt-20 max-w-[900px] mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <div className="uppercase tracking-[0.15em] text-xs text-[#C5A26F] mb-3">Stories & Inspiration</div>
        <h1 className="font-serif text-5xl tracking-[-0.01em]">The Journal</h1>
      </div>

      <div className="space-y-12">
        {posts.map((post, idx) => (
          <article key={idx} className="border-b border-[#E5E0D5] pb-12 last:border-none">
            <div className="text-xs tracking-[0.1em] text-[#C5A26F] mb-2">{post.date}</div>
            <h3 className="font-serif text-3xl tracking-[-0.01em] mb-4 hover:text-[#C5A26F] cursor-pointer transition-colors">{post.title}</h3>
            <p className="text-[#5A5A5A] leading-relaxed max-w-[60ch]">{post.excerpt}</p>
            <button className="mt-4 text-sm tracking-[0.08em] text-[#C5A26F] hover:text-[#0F0F0F]">Read more →</button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Journal;
