import React from 'react';
import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: "How to Layer Necklaces Like a Stylist",
    excerpt: "The art of mixing lengths, textures, and metals for an effortlessly curated look.",
    date: "July 12, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
  {
    id: 2,
    title: "The Meaning Behind Our Names",
    excerpt: "From Vivid Aura to Royal Heirloom — the stories that inspired each piece.",
    date: "June 28, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
  },
  {
    id: 3,
    title: "Caring for Your Gold Jewelry",
    excerpt: "Simple rituals to keep your Velmora pieces looking as beautiful as the day you received them.",
    date: "June 10, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
  },
];

export default function Journal() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <span className="filter-label">Stories & Reflections</span>
          <h1 className="font-serif text-5xl text-[#1C1B19] mt-2 tracking-wide">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {journalPosts.map((post, index) => (
            <article key={post.id} className="group">
              <Link to={`/journal/${post.id}`} className="block">
                <div className="aspect-[16/10] bg-[#E5DFD3] overflow-hidden mb-5">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover editorial-img group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-[#6B6259] tracking-[1px] mb-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl text-[#1C1B19] mb-3 group-hover:text-[#C5A46E] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#6B6259] leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-4 text-sm tracking-[1px] text-[#C5A46E]">READ MORE →</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-[#6B6259]">More stories coming soon.</p>
        </div>
      </div>
    </div>
  );
}