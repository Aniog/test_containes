import React from 'react';

const Journal = () => {
  const posts = [
    { title: "How to Style Gold Jewelry for Fall", excerpt: "Layering, mixing metals, and finding your signature look.", date: "July 12, 2026" },
    { title: "The Art of the Everyday Heirloom", excerpt: "Why we believe jewelry should be worn, not saved for special occasions.", date: "June 28, 2026" },
    { title: "Behind the Design: The Sphere Collection", excerpt: "A look at the inspiration and craftsmanship behind our bestselling huggies.", date: "June 15, 2026" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <div className="text-xs tracking-[0.2em] text-[#8A8178] mb-3">STORIES & INSPIRATION</div>
        <h1 className="serif text-6xl tracking-[0.05em]">Journal</h1>
      </div>

      <div className="space-y-16">
        {posts.map((post, i) => (
          <article key={i} className="border-b border-[#E5DFD3] pb-16 last:border-none">
            <div className="text-sm text-[#8A8178] mb-3">{post.date}</div>
            <h2 className="serif text-4xl tracking-[0.03em] mb-4 hover:text-[#8B7355] cursor-pointer">{post.title}</h2>
            <p className="text-[#4A4640] text-lg mb-6">{post.excerpt}</p>
            <a href="#" className="text-sm tracking-[0.1em] hover:text-[#8B7355]">Read More →</a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Journal;