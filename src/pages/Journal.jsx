import React from 'react';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "How to Build an Everyday Ear Stack",
      excerpt: "Three simple rules for mixing studs, hoops, and cuffs that feel intentional—not overwhelming.",
      date: "JULY 2026",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    },
    {
      id: 2,
      title: "The Meaning Behind Our Names",
      excerpt: "From 'Vivid Aura' to 'Royal Heirloom'—the stories and inspirations behind each collection.",
      date: "JUNE 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 3,
      title: "Caring for Gold-Plated Jewelry",
      excerpt: "A practical guide to keeping your pieces looking new for years, without special tools or products.",
      date: "MAY 2026",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-xs tracking-[3px] text-[#B89778] mb-2">FROM THE STUDIO</p>
          <h1 className="font-serif text-4xl tracking-[1px] text-[#2C2825]">Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-[#F5F2ED] overflow-hidden mb-5">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="text-xs tracking-[2px] text-[#B89778] mb-2">{post.date}</p>
              <h3 className="font-serif text-xl tracking-[0.5px] text-[#2C2825] mb-3 group-hover:text-[#B89778] transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-[#6B665F] leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[#6B665F]">More stories coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
