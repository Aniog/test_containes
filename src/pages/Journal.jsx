import React from 'react';

const Journal = () => {
  const posts = [
    {
      title: "How to Style Gold Jewelry Year-Round",
      excerpt: "From summer linen to winter wool, discover how our pieces transition effortlessly across seasons.",
      date: "June 12, 2026",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    },
    {
      title: "Behind the Design: The Flora Necklace",
      excerpt: "A closer look at the inspiration and craftsmanship behind one of our most beloved pieces.",
      date: "May 28, 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      title: "Caring for Your Demi-Fine Jewelry",
      excerpt: "Simple rituals to keep your pieces brilliant for years to come.",
      date: "May 10, 2026",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    },
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="py-12 text-center border-b border-[#E8E4DC]">
          <p className="text-xs tracking-[0.15em] text-[#C5A26F]">STORIES & INSPIRATION</p>
          <h1 className="serif text-5xl tracking-[0.02em] mt-3">The Journal</h1>
        </div>

        <div className="pt-12 space-y-16">
          {posts.map((post, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="aspect-[16/9] bg-[#E8E4DC] overflow-hidden mb-6">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700" />
              </div>
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 text-xs tracking-[0.1em] text-[#9A8F7D] mb-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>EDITORIAL</span>
                </div>
                <h2 className="serif text-3xl tracking-[0.02em] mb-3 group-hover:text-[#C5A26F] transition-colors">{post.title}</h2>
                <p className="text-[#5A5548]">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
