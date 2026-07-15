import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Everyday",
      excerpt: "Three ways to layer your favorite pieces without overthinking it.",
      date: "July 2026",
      readTime: "6 min",
    },
    {
      id: 2,
      title: "The Art of the Gift",
      excerpt: "What makes a piece of jewelry feel truly personal.",
      date: "June 2026",
      readTime: "5 min",
    },
    {
      id: 3,
      title: "Behind the Design: The Golden Sphere",
      excerpt: "A closer look at the making of our signature huggie.",
      date: "May 2026",
      readTime: "8 min",
    },
    {
      id: 4,
      title: "Caring for Your Demi-Fine Pieces",
      excerpt: "Simple rituals to keep your jewelry looking its best for years.",
      date: "April 2026",
      readTime: "4 min",
    },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
        <div className="mb-12">
          <div className="text-xs tracking-[0.15em] uppercase text-[#B89778] mb-2">Stories</div>
          <h1 className="text-4xl md:text-5xl">The Journal</h1>
        </div>

        <div className="space-y-12">
          {articles.map((article, index) => (
            <article key={index} className="border-b border-[#D9D0C4] pb-12 last:border-b-0">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <h2 className="font-serif text-2xl md:text-3xl tracking-[-0.01em]">{article.title}</h2>
                <span className="text-xs text-[#9A8F85] whitespace-nowrap">{article.date} · {article.readTime}</span>
              </div>
              <p className="text-[#6B6058] mb-4 max-w-2xl">{article.excerpt}</p>
              <Link to="/about" className="text-sm tracking-[0.05em] uppercase text-[#B89778] hover:text-[#8C6F52]">
                Read More →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#D9D0C4] text-center">
          <p className="text-sm text-[#6B6058]">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
