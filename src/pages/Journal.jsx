import React from 'react';
import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: 'How to Care for Your Gold Jewelry',
    excerpt: 'Simple rituals to keep your pieces looking beautiful for years.',
    date: 'JUNE 2026',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
    readTime: '4 min',
  },
  {
    id: 2,
    title: 'The Art of Layering Necklaces',
    excerpt: 'A guide to creating dimension and personal expression through mixed lengths.',
    date: 'MAY 2026',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    readTime: '6 min',
  },
  {
    id: 3,
    title: 'Behind the Design: The Golden Sphere',
    excerpt: 'The story of our most-loved huggie and how it came to be.',
    date: 'APRIL 2026',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    readTime: '5 min',
  },
];

const Journal = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-12">
          <p className="text-[#C5A46E] text-xs tracking-[3px] mb-1">STORIES</p>
          <h1 className="font-serif text-4xl text-[#1A1A1A]">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
          {journalPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[16/10] bg-[#E5E0D8] overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-center gap-3 text-xs tracking-[1.5px] text-[#8B8178] mb-2">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-serif text-2xl text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#C5A46E] transition-colors">
                {post.title}
              </h2>
              <p className="text-[#4A4640] leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-sm tracking-[1.5px] text-[#C5A46E] group-hover:underline">READ MORE →</span>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5E0D8] text-center">
          <p className="text-sm text-[#8B8178]">More stories coming soon.</p>
          <Link to="/shop" className="inline-block mt-4 text-sm tracking-[1.5px] text-[#C5A46E] hover:underline">
            SHOP THE COLLECTION →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
