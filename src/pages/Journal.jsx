import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Occasion",
      excerpt: "From boardroom meetings to evening soirées, discover the art of layering and styling your favorite Velmora pieces.",
      date: "June 12, 2026",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      readTime: "8 min",
    },
    {
      id: 2,
      title: "The Meaning Behind Our Signature Pieces",
      excerpt: "Each design in the Velmora collection carries a story. Learn about the inspiration behind our most beloved creations.",
      date: "May 28, 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      readTime: "6 min",
    },
    {
      id: 3,
      title: "Caring for Your Demi-Fine Jewelry",
      excerpt: "Simple rituals to keep your Velmora pieces looking radiant for years to come.",
      date: "May 10, 2026",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      readTime: "5 min",
    },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.15em] text-[#8A8178] mb-3">INSIGHTS & INSPIRATION</p>
          <h1 className="heading-serif text-6xl tracking-[0.04em]">The Journal</h1>
        </div>

        <div className="space-y-16">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to="#" className="block">
                <div className="aspect-[16/9] bg-[#2C2825] mb-8 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="max-w-2xl">
                  <div className="flex items-center gap-4 text-xs tracking-[0.1em] text-[#8A8178] mb-4">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime} read</span>
                  </div>
                  <h2 className="heading-serif text-3xl tracking-[0.03em] mb-4 group-hover:text-[#B89778] transition-colors">{article.title}</h2>
                  <p className="text-[#5C5651] leading-relaxed">{article.excerpt}</p>
                  <span className="inline-block mt-4 text-sm tracking-[0.08em] border-b border-[#2C2825] group-hover:border-[#B89778] group-hover:text-[#B89778]">Read Article →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-[#E5E0D8] text-center">
          <p className="text-[#8A8178] text-sm">More stories coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;