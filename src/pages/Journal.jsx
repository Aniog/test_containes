import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From summer's bare skin to winter's layered textures, discover how to make your gold pieces work year-round.",
      date: "July 10, 2026",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating dimension and interest with multiple chains, pendants, and charms.",
      date: "June 28, 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 3,
      title: "Behind the Design: The Sphere Collection",
      excerpt: "Our founder shares the inspiration behind our signature dome huggies and their sculptural form.",
      date: "June 15, 2026",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-4">NOTES & INSPIRATION</p>
        <h1 className="serif text-5xl tracking-[0.05em]">The Journal</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <Link to="#" className="block">
              <div className="aspect-[16/10] bg-[#F5F2ED] mb-6 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-xs tracking-[0.15em] text-[#6B665F] mb-2">{post.date}</p>
              <h3 className="serif text-xl tracking-[0.02em] mb-3 group-hover:text-[#B8976F] transition-colors">{post.title}</h3>
              <p className="text-sm text-[#6B665F] leading-relaxed">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-sm text-[#6B665F]">More stories coming soon.</p>
      </div>
    </div>
  );
};

export default Journal;