import React from 'react';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From summer's bare skin to winter's layered textures, discover how to wear your favorite pieces year-round.",
      date: "July 12, 2026",
      readTime: "8 min"
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating dimension and interest with multiple chains, pendants, and charms.",
      date: "June 28, 2026",
      readTime: "6 min"
    },
    {
      id: 3,
      title: "Behind the Design: The Sphere Collection",
      excerpt: "Our founder shares the inspiration behind our signature dome huggies and their sculptural form.",
      date: "June 15, 2026",
      readTime: "10 min"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">Stories & Reflections</span>
          <h1 className="heading-serif text-6xl mt-4">The Journal</h1>
        </div>

        <div className="space-y-16">
          {posts.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-[16/10] bg-[#E5E0D8] rounded-sm" />
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 text-xs text-[#6B665F] mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="heading-serif text-3xl mb-4 group-hover:text-[#8B7355] transition-colors">{post.title}</h2>
                  <p className="text-[#6B665F] leading-relaxed">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-sm tracking-wider text-[#8B7355]">Read more →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;