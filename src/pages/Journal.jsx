import React from 'react';

const Journal = () => {
  const posts = [
    {
      title: "How to Style Gold Jewelry for Every Occasion",
      excerpt: "From boardroom meetings to evening soirées, discover the art of layering and pairing.",
      date: "July 2026",
      readTime: "8 min"
    },
    {
      title: "The Meaning Behind Our Crystal Collection",
      excerpt: "Each stone in our Lumina collection was chosen for its unique properties and beauty.",
      date: "June 2026",
      readTime: "6 min"
    },
    {
      title: "Caring for Your Demi-Fine Jewelry",
      excerpt: "Simple rituals to keep your pieces looking radiant for years to come.",
      date: "May 2026",
      readTime: "5 min"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="py-16 text-center">
          <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-3">STORIES & INSPIRATION</p>
          <h1 className="font-serif text-5xl tracking-[0.05em]">The Journal</h1>
        </div>

        <div className="space-y-12">
          {posts.map((post, i) => (
            <article key={i} className="border-b border-[#E5DFD4] pb-12 last:border-0">
              <div className="flex gap-3 text-xs tracking-[0.15em] text-[#6B665F] mb-4">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} read</span>
              </div>
              <h2 className="font-serif text-3xl tracking-[0.03em] mb-4 hover:text-[#B8976F] cursor-pointer transition-colors">{post.title}</h2>
              <p className="text-[#6B665F] mb-4 max-w-2xl">{post.excerpt}</p>
              <button className="text-sm tracking-[0.1em] hover:text-[#B8976F] transition-colors">Read Article →</button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;