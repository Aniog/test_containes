import React from 'react';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From summer's bare skin to winter's layered textures, discover how to wear your favorite pieces year-round.",
      date: "June 12, 2026",
      image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating effortless, dimensional looks with multiple chains and pendants.",
      date: "May 28, 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80",
    },
    {
      id: 3,
      title: "Behind the Design: The Heirloom Set",
      excerpt: "The story and craftsmanship behind our most cherished gift collection.",
      date: "May 10, 2026",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-3">INSIGHTS & STORIES</p>
          <h1 className="text-5xl tracking-[0.02em]">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-[#F8F5F1] mb-6 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-xs tracking-[0.15em] text-[#B8976E] mb-2">{post.date}</p>
              <h3 className="text-xl tracking-[0.02em] mb-3 group-hover:text-[#B8976E] transition-colors">{post.title}</h3>
              <p className="text-[#6B665F] text-sm leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-[#6B665F]">More stories coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;