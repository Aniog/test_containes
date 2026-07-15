import React from 'react';
import { Link } from 'react-router-dom';

export default function Journal() {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Everyday Wear",
      excerpt: "Three ways to incorporate demi-fine pieces into your daily uniform without overthinking it.",
      date: "JUNE 2026",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    },
    {
      id: 2,
      title: "The Art of Gifting Jewelry",
      excerpt: "A guide to choosing pieces that feel personal, not generic — for the people you love most.",
      date: "MAY 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 3,
      title: "Behind the Design: The Golden Sphere Huggies",
      excerpt: "Why we spent six months perfecting a dome shape that already existed.",
      date: "APRIL 2026",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    },
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="py-10 border-b border-[#E8E4DE] mb-12">
          <p className="text-xs tracking-[2px] text-[#C5A46E] mb-2">NOTES FROM THE STUDIO</p>
          <h1 className="font-serif text-4xl tracking-[1px]">The Journal</h1>
        </div>

        <div className="space-y-16">
          {articles.map((article, index) => (
            <article key={article.id} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className={`aspect-[16/10] bg-[#F5F2ED] overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs tracking-[1.5px] text-[#8B8178] mb-2">{article.date}</p>
                <h2 className="font-serif text-2xl tracking-[1px] mb-4 leading-tight">{article.title}</h2>
                <p className="text-[#5C5651] mb-6 leading-relaxed">{article.excerpt}</p>
                <Link to="#" className="text-sm tracking-[1.5px] text-[#C5A46E] hover:text-[#B89778] inline-flex items-center gap-2">
                  READ MORE <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-[#E8E4DE] text-center">
          <p className="text-sm text-[#5C5651]">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
        </div>
      </div>
    </div>
  );
}
