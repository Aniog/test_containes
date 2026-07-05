import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "How to Layer Gold Jewelry",
      excerpt: "A guide to mixing textures, lengths, and tones for an effortless, collected look.",
      date: "June 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80"
    },
    {
      id: 2,
      title: "The Meaning Behind Our Names",
      excerpt: "From 'Vivid Aura' to 'Royal Heirloom' — the stories that shape our collections.",
      date: "May 28, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&q=80"
    },
    {
      id: 3,
      title: "Caring for Demi-Fine Jewelry",
      excerpt: "Simple rituals to keep your pieces looking beautiful for years to come.",
      date: "May 3, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80"
    },
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="pt-8 pb-12 text-center">
          <p className="uppercase tracking-[0.12em] text-xs text-[#6B665F]">Notes from the Studio</p>
          <h1 className="heading-serif text-5xl mt-2">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article key={post.id} className="group">
              <div className="aspect-[16/10] bg-[#F5F2ED] overflow-hidden mb-5">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 text-xs tracking-widest text-[#6B665F] mb-2">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="heading-serif text-2xl mb-3 group-hover:text-[#C5A46E] transition-colors">{post.title}</h2>
              <p className="text-[#6B665F] leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-sm tracking-widest text-[#C5A46E]">READ →</span>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5DFD6] text-center">
          <p className="text-sm text-[#6B665F]">More stories coming soon.</p>
          <Link to="/shop" className="mt-4 inline-block text-sm tracking-widest hover:text-[#C5A46E]">Shop the Collection →</Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
