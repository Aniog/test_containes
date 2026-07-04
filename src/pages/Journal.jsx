import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Occasion",
      excerpt: "From everyday elegance to evening glamour, discover the art of layering and mixing metals.",
      date: "June 2026",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    },
    {
      id: 2,
      title: "The Meaning Behind Our Signature Pieces",
      excerpt: "Each design in our collection carries a story. Learn about the inspiration behind our most beloved styles.",
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 3,
      title: "Caring for Your Demi-Fine Jewelry",
      excerpt: "Simple steps to keep your pieces looking radiant for years to come.",
      date: "April 2026",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-[1000px] mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.15em] text-[#6B655F] mb-3">INSIGHTS & INSPIRATION</p>
          <h1 className="serif text-5xl tracking-[0.05em]">The Journal</h1>
        </div>

        <div className="space-y-16">
          {articles.map((article, idx) => (
            <article key={idx} className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="aspect-[16/10] overflow-hidden bg-[#FAF8F5]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <p className="text-xs tracking-[0.1em] text-[#6B655F] mb-3">{article.date}</p>
                <h2 className="serif text-3xl tracking-[0.03em] mb-4 leading-tight">{article.title}</h2>
                <p className="text-[#6B655F] mb-6 leading-relaxed">{article.excerpt}</p>
                <a href="#" className="text-sm tracking-[0.08em] inline-flex items-center gap-2 hover:text-[#C5A26F]">
                  Read Article <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-[#E5E0D8] text-center">
          <p className="text-[#6B655F] mb-6">Want more inspiration delivered to your inbox?</p>
          <Link to="/" className="btn btn-outline inline-block">Subscribe to Our Newsletter</Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
