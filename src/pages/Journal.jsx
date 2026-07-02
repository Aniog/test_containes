import React from 'react';
import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: "How to Layer Necklaces",
    excerpt: "A guide to mixing lengths, textures, and metals for an effortless look.",
    date: "June 12, 2026",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    readTime: "6 min",
  },
  {
    id: 2,
    title: "The Meaning Behind Our Names",
    excerpt: "Why we chose poetic, evocative names for each piece in the collection.",
    date: "May 28, 2026",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Caring for Gold-Plated Jewelry",
    excerpt: "Simple rituals to keep your pieces looking beautiful for years.",
    date: "May 3, 2026",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    readTime: "5 min",
  },
];

function Journal() {
  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <div className="text-xs tracking-[0.15em] text-[#6B6058] mb-1">STORIES</div>
          <h1 className="font-serif text-4xl tracking-[0.04em]">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {journalPosts.map((post, index) => (
            <article key={post.id} className={index === 0 ? "md:col-span-2" : ""}>
              <Link to="#" className="group block">
                <div className={`overflow-hidden mb-5 ${index === 0 ? "aspect-[16/7]" : "aspect-[16/10]"}`}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[0.1em] text-[#6B6058] mb-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl tracking-[0.03em] group-hover:text-[#B89778] transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-[#6B6058] leading-relaxed">{post.excerpt}</p>
                <div className="mt-3 text-sm tracking-[0.08em] text-[#B89778]">READ MORE →</div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5DFD6] text-center text-sm text-[#6B6058]">
          More stories coming soon.
        </div>
      </div>
    </div>
  );
}

export default Journal;
