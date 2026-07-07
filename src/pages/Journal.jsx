import React from 'react';

const Journal = () => {
  const posts = [
    { title: "How to Layer Necklaces", excerpt: "A guide to creating dimension with mixed lengths and textures.", date: "June 2026" },
    { title: "The Art of Everyday Jewelry", excerpt: "Why we believe fine jewelry belongs in your daily rotation.", date: "May 2026" },
    { title: "Caring for Your Gold", excerpt: "Simple rituals to keep your pieces looking their best for years.", date: "April 2026" },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">Stories & Insights</div>
          <h1 className="serif text-6xl">The Journal</h1>
        </div>

        <div className="space-y-12">
          {posts.map((post, idx) => (
            <article key={idx} className="border-b pb-12 last:border-none">
              <div className="flex justify-between items-baseline mb-3">
                <h2 className="serif text-3xl">{post.title}</h2>
                <span className="text-sm text-[var(--color-taupe)]">{post.date}</span>
              </div>
              <p className="text-[var(--color-taupe)] mb-4">{post.excerpt}</p>
              <a href="#" className="text-sm underline hover:no-underline">Read More →</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;