import React from 'react';

const Journal = () => {
  const posts = [
    { title: "How to Style Gold Jewelry for Every Season", excerpt: "From summer's bare skin to winter's layered textures, discover how to make your gold pieces work year-round.", date: "July 2026" },
    { title: "The Art of Layering Necklaces", excerpt: "A guide to creating dimension and interest with multiple chains, pendants, and charms.", date: "June 2026" },
    { title: "Caring for Your Demi-Fine Pieces", excerpt: "Simple rituals to keep your jewelry looking its best for years to come.", date: "May 2026" },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-16">
      <div className="max-w-2xl mb-12">
        <div className="text-xs tracking-[0.15em] text-gold mb-2">WORDS & INSPIRATION</div>
        <h1 className="serif text-6xl">The Journal</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="aspect-[16/10] bg-soft-gray mb-6 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-charcoal/10 to-gold/10 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="text-xs text-taupe mb-2 tracking-[0.1em]">{post.date}</div>
            <h3 className="serif text-xl mb-3 group-hover:text-gold transition-colors">{post.title}</h3>
            <p className="text-sm text-taupe leading-relaxed">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Journal;