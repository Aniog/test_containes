import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "The Art of Layering Necklaces",
      excerpt: "How to create dimension and personal meaning through thoughtful layering.",
      date: "July 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 2,
      title: "Why We Choose 18K Gold Plating",
      excerpt: "The difference between fine, demi-fine, and fashion jewelry — and why we land in the middle.",
      date: "June 28, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 3,
      title: "Caring for Your Heirlooms",
      excerpt: "Simple rituals to keep your Velmora pieces beautiful for years to come.",
      date: "June 10, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    },
    {
      id: 4,
      title: "The Women Who Inspire Us",
      excerpt: "Meet three women who wear Velmora in their own way — and what they've taught us.",
      date: "May 22, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-12">
        <p className="text-xs tracking-[0.2em] text-[#B89778] mb-2">FROM THE ATELIER</p>
        <h1 className="serif text-5xl tracking-wide">Journal</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <Link to="#journal-post" className="block">
              <div className="aspect-[16/10] overflow-hidden bg-[#F1EDE6] mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 text-xs tracking-[0.1em] text-[#6B645C] mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="serif text-2xl tracking-wide mb-3 group-hover:text-[#B89778] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#6B645C] leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-4 text-sm tracking-[0.05em] text-[#B89778] group-hover:text-[#A67C52]">
                  Read more →
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-[#D4CFC6] text-center text-sm text-[#6B645C]">
        More stories coming soon. Follow us on Instagram for daily inspiration.
      </div>
    </div>
  );
};

export default Journal;
