import React from 'react';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "How to Build a Timeless Jewelry Collection",
      excerpt: "Start with pieces you'll wear every day. Invest in quality over quantity. Let your jewelry tell your story.",
      date: "July 12, 2026",
      readTime: "8 min",
    },
    {
      id: 2,
      title: "The Meaning Behind Our Names",
      excerpt: "Each Velmora piece carries a name inspired by poetry, nature, and the women who wear them.",
      date: "June 28, 2026",
      readTime: "5 min",
    },
    {
      id: 3,
      title: "Caring for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your pieces looking as beautiful as the day you received them.",
      date: "June 15, 2026",
      readTime: "4 min",
    },
  ];

  return (
    <main className="pt-8 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] text-[#6B6058] uppercase mb-3">Stories & Rituals</p>
          <h1 className="serif text-4xl md:text-5xl tracking-[-0.01em]">The Journal</h1>
        </div>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-[#D4C9B8] pb-12 last:border-0">
              <div className="flex items-center gap-3 text-xs text-[#6B6058] tracking-wider mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="serif text-2xl md:text-3xl tracking-[-0.01em] mb-4 hover:text-[#8C6F52] cursor-pointer">
                {post.title}
              </h2>
              <p className="text-[#6B6058] leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
              <button className="mt-4 text-sm tracking-wider border-b border-[#8C6F52] pb-0.5 hover:text-[#8C6F52]">
                Read More
              </button>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-[#6B6058]">
          More stories coming soon.
        </div>
      </div>
    </main>
  );
};

export default Journal;
