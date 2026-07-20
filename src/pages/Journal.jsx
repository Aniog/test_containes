import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Occasion",
      excerpt: "From boardroom meetings to evening soirées, discover the art of layering and mixing metals.",
      date: "July 12, 2026",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      readTime: "8 min",
    },
    {
      id: 2,
      title: "The Meaning Behind Our Signature Pieces",
      excerpt: "Each design in our collection carries intention. Here's the story behind our most beloved styles.",
      date: "June 28, 2026",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      readTime: "6 min",
    },
    {
      id: 3,
      title: "Caring for Your Demi-Fine Jewelry",
      excerpt: "Simple rituals to keep your pieces looking radiant for years to come.",
      date: "June 15, 2026",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      readTime: "5 min",
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-3">Stories & Inspiration</p>
          <h1 className="font-serif text-5xl tracking-[-0.02em]">The Journal</h1>
        </div>

        <div className="space-y-16">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to="#" className="block">
                <div className="aspect-[16/9] bg-[#F4F0E9] mb-8 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="max-w-2xl">
                  <div className="flex items-center gap-4 text-sm text-[#6B635E] mb-3">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime} read</span>
                  </div>
                  <h2 className="font-serif text-3xl tracking-[-0.01em] mb-4 group-hover:text-[#8B7355] transition-colors">
                    {article.title}
                  </h2>
                  <p className="body-text text-[#6B635E]">{article.excerpt}</p>
                  <span className="inline-block mt-4 text-sm tracking-[0.1em] border-b border-[#8B7355] pb-0.5">Read Article →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-[#E5DFD6] text-center">
          <p className="text-[#6B635E]">More stories coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;