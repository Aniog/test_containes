import React from 'react';

const journalPosts = [
  {
    id: 1,
    title: "How to Build a Timeless Jewelry Collection",
    excerpt: "Start with pieces you'll wear every day. Invest in quality over quantity. Let your jewelry tell your story.",
    date: "July 12, 2026",
    category: "Style",
  },
  {
    id: 2,
    title: "The Meaning Behind Our Names",
    excerpt: "From Vivid Aura to Royal Heirloom — the stories and inspirations behind each Velmora piece.",
    date: "June 28, 2026",
    category: "Behind the Design",
  },
  {
    id: 3,
    title: "Caring for Gold-Plated Jewelry",
    excerpt: "Simple rituals to keep your pieces looking beautiful for years. What to do (and what to avoid).",
    date: "June 15, 2026",
    category: "Care",
  },
];

const Journal = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
      <div className="mb-12">
        <p className="text-xs tracking-[0.12em] uppercase text-[#6B6359]">From the Studio</p>
        <h1 className="serif text-5xl md:text-6xl tracking-[0.02em] mt-2">Journal</h1>
      </div>

      <div className="space-y-12">
        {journalPosts.map((post) => (
          <article key={post.id} className="border-b border-[#E5DFD4] pb-12 last:border-0">
            <div className="flex items-center gap-3 text-xs tracking-[0.08em] uppercase text-[#6B6359] mb-3">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-[#6B6359]" />
              <span>{post.category}</span>
            </div>
            <h2 className="serif text-3xl tracking-[0.02em] mb-4 hover:text-[#B89778] cursor-pointer">
              {post.title}
            </h2>
            <p className="text-[#6B6359] leading-relaxed max-w-2xl">{post.excerpt}</p>
            <button className="mt-4 text-sm underline hover:text-[#B89778]">
              Read More
            </button>
          </article>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-[#E5DFD4] text-center text-sm text-[#6B6359]">
        More stories coming soon. Follow us on Instagram for daily inspiration.
      </div>
    </div>
  );
};

export default Journal;
