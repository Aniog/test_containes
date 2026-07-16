import React from 'react';

const Journal = () => {
  const posts = [
    {
      title: "The Art of Layering Necklaces",
      excerpt: "How to create dimension and personal meaning through thoughtful layering.",
      date: "July 2026",
    },
    {
      title: "Caring for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your pieces radiant for years to come.",
      date: "June 2026",
    },
    {
      title: "Behind the Design: The Sphere Collection",
      excerpt: "The inspiration and craftsmanship behind our signature huggies.",
      date: "May 2026",
    },
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14">
          <div className="text-xs tracking-[0.15em] text-[#B8976E] mb-2">WORDS & INSPIRATION</div>
          <h1 className="serif text-5xl">The Journal</h1>
        </div>

        <div className="space-y-12">
          {posts.map((post, i) => (
            <article key={i} className="border-b border-[#E5DFD4] pb-12 last:border-0">
              <div className="text-xs text-[#6B655E] mb-3 tracking-[0.08em]">{post.date}</div>
              <h2 className="serif text-3xl mb-4 tracking-[-0.01em]">{post.title}</h2>
              <p className="text-[#6B655E] mb-4 max-w-2xl">{post.excerpt}</p>
              <a href="#" className="text-sm tracking-[0.08em] text-[#B8976E] hover:underline">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
