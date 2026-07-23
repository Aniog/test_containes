import React from 'react';

const Journal = () => {
  const posts = [
    { title: "How to Style Layered Necklaces", excerpt: "A guide to creating dimension with minimal effort.", date: "July 2026" },
    { title: "The Meaning Behind Our Names", excerpt: "Each piece carries a story. Here's how we choose them.", date: "June 2026" },
    { title: "Caring for Your Gold Jewelry", excerpt: "Simple rituals to keep your pieces radiant for years.", date: "May 2026" },
  ];

  return (
    <div className="pt-24 pb-20 max-w-[900px] mx-auto px-6">
      <h1 className="serif text-6xl mb-12 text-center">Journal</h1>
      <div className="space-y-12">
        {posts.map((post, i) => (
          <article key={i} className="border-b border-[#E5DFD3] pb-12 last:border-0">
            <p className="text-xs tracking-[0.12em] text-[#6B665F] mb-2">{post.date}</p>
            <h2 className="serif text-3xl mb-3">{post.title}</h2>
            <p className="text-[#6B665F]">{post.excerpt}</p>
            <button className="text-sm tracking-widest mt-4 hover:text-[#B89778]">Read more →</button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Journal;