import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Layer Necklaces Like a Stylist",
      excerpt: "The art of mixing lengths, textures, and metals for an effortless, collected look.",
      date: "June 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 2,
      title: "The Case for Everyday Gold",
      excerpt: "Why we believe fine jewelry shouldn't live in a box. A philosophy of daily adornment.",
      date: "May 28, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 3,
      title: "Behind the Design: The Golden Sphere",
      excerpt: "The story of our most-loved huggie — from sketch to final polish.",
      date: "May 3, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    },
    {
      id: 4,
      title: "Gifting Jewelry That Actually Gets Worn",
      excerpt: "How to choose pieces your loved ones will reach for every morning.",
      date: "April 15, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="section-title mb-3">The Journal</h1>
        <p className="text-[#5C5752]">Stories, rituals, and the quiet beauty of adornment.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <article key={article.id} className="group">
            <div className="aspect-[16/10] bg-[#F5F2ED] overflow-hidden mb-5">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div className="flex items-center gap-3 text-xs tracking-[0.1em] text-[#8A8178] mb-2">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
            <h2 className="font-serif text-2xl tracking-[-0.01em] mb-3 group-hover:text-[#B89778] transition-colors">
              {article.title}
            </h2>
            <p className="text-[#5C5752] text-[15px] leading-relaxed mb-4">{article.excerpt}</p>
            <span className="text-xs tracking-[0.15em] text-[#B89778] group-hover:underline">READ MORE →</span>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center border-t border-[#E5E0D8] pt-10">
        <p className="text-sm text-[#5C5752]">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
        <Link to="/shop" className="inline-block mt-4 text-sm tracking-[0.1em] text-[#B89778]">Shop the Collection →</Link>
      </div>
    </div>
  );
};

export default Journal;