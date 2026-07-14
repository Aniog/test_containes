import React from 'react';

const JournalPage = () => {
  const posts = [
    { title: "How to Style Gold Jewelry Year-Round", date: "June 12, 2026", excerpt: "From summer linen to winter cashmere, discover the art of layering our signature pieces." },
    { title: "Behind the Design: The Sphere Collection", date: "May 28, 2026", excerpt: "Our founder shares the architectural inspiration behind our bestselling huggies." },
    { title: "Caring for Your Demi-Fine Jewelry", date: "May 3, 2026", excerpt: "Simple rituals to keep your Velmora pieces radiant for years to come." },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="uppercase tracking-[0.2em] text-xs text-[#C5A26F] mb-3">Stories & Insights</div>
          <h1 className="serif text-7xl tracking-[-0.02em]">The Journal</h1>
        </div>

        <div className="space-y-16">
          {posts.map((post, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="uppercase tracking-[0.15em] text-xs text-[#C5A26F] mb-3">{post.date}</div>
              <h2 className="serif text-4xl tracking-[-0.01em] mb-4 group-hover:text-[#C5A26F] transition-colors">{post.title}</h2>
              <p className="text-[#4A4A4A] leading-relaxed max-w-2xl">{post.excerpt}</p>
              <div className="mt-4 text-sm tracking-[0.1em] text-[#C5A26F]">Read more →</div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalPage;