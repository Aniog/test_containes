import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "How to Style Layered Necklaces",
      excerpt: "A guide to mixing lengths, textures, and metals for an effortless look.",
      date: "July 12, 2026",
      image: "https://picsum.photos/id/1011/800/600"
    },
    {
      id: 2,
      title: "The Art of Everyday Jewelry",
      excerpt: "Why we believe beautiful pieces should be worn, not saved for special occasions.",
      date: "June 28, 2026",
      image: "https://picsum.photos/id/1005/800/600"
    },
    {
      id: 3,
      title: "Behind the Design: The Sphere Huggie",
      excerpt: "From sketch to finished piece—our sculptural dome earrings took six months to perfect.",
      date: "June 10, 2026",
      image: "https://picsum.photos/id/106/800/600"
    }
  ];

  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">Stories & Reflections</p>
          <h1 className="text-5xl mt-3">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="group">
              <div className="aspect-[16/10] bg-[#F0EBE3] mb-5 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="text-xs tracking-[0.15em] text-[#8B7355] mb-2">{post.date}</p>
              <h3 className="text-xl mb-3 group-hover:text-[#8B7355] transition-colors">{post.title}</h3>
              <p className="text-sm text-[#6B635E]">{post.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop" className="btn btn-outline">Shop the Stories</Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;