import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Build a Timeless Jewelry Collection",
      excerpt: "Start with pieces you'll wear every day. Layer with intention. Choose quality over quantity.",
      date: "June 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 2,
      title: "The Art of Gifting Jewelry",
      excerpt: "A guide to choosing meaningful pieces for the women in your life — and for yourself.",
      date: "May 28, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    },
    {
      id: 3,
      title: "Why We Choose 18K Gold Plate",
      excerpt: "The difference between fine and demi-fine, and why we believe in accessible luxury.",
      date: "May 10, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1535632787350-4e68b0f247b2?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#F8F5F1]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.12em] uppercase text-[#B89778]">Stories & Reflections</span>
          <h1 className="heading-serif text-4xl md:text-5xl mt-2">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article key={article.id} className="group">
              <Link to={`/journal/${article.id}`} className="block">
                <div className="aspect-[16/10] bg-[#F1EDE6] overflow-hidden mb-5">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-[#6B635C] tracking-wide mb-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="heading-serif text-2xl leading-tight group-hover:text-[#B89778] transition-colors">
                  {article.title}
                </h2>
                <p className="mt-3 text-[#6B635C] text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <span className="inline-block mt-4 text-xs tracking-[0.08em] uppercase text-[#B89778] group-hover:underline">
                  Read More →
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#D9D2C8] text-center">
          <p className="text-sm text-[#6B635C]">More stories coming soon.</p>
          <Link to="/shop" className="btn btn-gold mt-4 inline-block">Shop the Collection</Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
