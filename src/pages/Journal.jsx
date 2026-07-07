import React from 'react';

const Journal = () => {
  const posts = [
    { title: "How to Layer Necklaces", excerpt: "A guide to creating effortless, dimensional looks.", date: "June 2026" },
    { title: "Caring for Your Gold Jewelry", excerpt: "Simple rituals to keep your pieces looking their best.", date: "May 2026" },
    { title: "The Art of Everyday Elegance", excerpt: "Why we design for real life, not just special occasions.", date: "April 2026" },
  ];

  return (
    <div className="bg-[#F9F6F0] pt-20">
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[3px] text-[#C5A26F] mb-3">WORDS & INSPIRATION</div>
          <h1 className="font-serif text-5xl tracking-[-1px]">The Journal</h1>
        </div>

        <div className="space-y-12">
          {posts.map((post, i) => (
            <article key={i} className="border-b border-[#EDE9E3] pb-12 last:border-0">
              <div className="text-xs tracking-[2px] text-[#8B7F6F] mb-2">{post.date}</div>
              <h2 className="font-serif text-3xl tracking-[-0.5px] mb-3 hover:text-[#C5A26F] cursor-pointer">{post.title}</h2>
              <p className="text-[#5C5248]">{post.excerpt}</p>
              <button className="mt-4 text-sm tracking-wide border-b border-[#C5A26F] pb-0.5">Read more →</button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;