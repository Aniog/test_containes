import React from 'react';
import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: "How to Care for Your Gold Jewelry",
    excerpt: "Simple rituals to keep your pieces looking beautiful for years to come.",
    date: "JULY 2026",
    readTime: "6 MIN",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    category: "CARE",
  },
  {
    id: 2,
    title: "The Art of Layering Necklaces",
    excerpt: "A guide to creating dimension and personal expression through thoughtful layering.",
    date: "JUNE 2026",
    readTime: "8 MIN",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    category: "STYLE",
  },
  {
    id: 3,
    title: "Behind the Design: The Golden Sphere Huggies",
    excerpt: "The story of our most beloved everyday piece, from sketch to final form.",
    date: "MAY 2026",
    readTime: "5 MIN",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    category: "BEHIND THE SCENES",
  },
  {
    id: 4,
    title: "Gifting Jewelry: A Thoughtful Guide",
    excerpt: "How to choose a meaningful piece for someone you love — or yourself.",
    date: "APRIL 2026",
    readTime: "7 MIN",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
    category: "GIFTING",
  },
];

export default function Journal() {
  return (
    <div className="min-h-screen bg-[#F5F2ED] pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[3px] text-[#C5A46E] mb-2">STORIES & INSPIRATION</div>
          <h1 className="font-serif text-5xl">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
          {journalPosts.map((post) => (
            <article key={post.id} className="group">
              <Link to={`/journal/${post.id}`} className="block">
                <div className="aspect-[16/10] bg-[#EDE8E0] overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[2px] text-[#8B7B6B] mb-3">
                  <span>{post.date}</span>
                  <span className="text-[#C5A46E]">·</span>
                  <span>{post.readTime}</span>
                  <span className="text-[#C5A46E]">·</span>
                  <span>{post.category}</span>
                </div>
                <h2 className="font-serif text-2xl tracking-[0.5px] mb-3 group-hover:text-[#C5A46E] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#6B6359] text-sm leading-relaxed">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[#6B6359] mb-4">More stories coming soon.</p>
          <Link to="/shop" className="text-sm tracking-[1.5px] text-[#C5A46E] hover:underline">
            SHOP THE COLLECTION →
          </Link>
        </div>
      </div>
    </div>
  );
}
