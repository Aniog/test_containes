import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From delicate layers in spring to bold statements in winter, discover how to wear your favorite pieces year-round.",
      date: "July 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating dimension and interest with multiple chains. Learn our favorite combinations.",
      date: "June 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    },
    {
      id: 3,
      title: "Caring for Your Demi-Fine Pieces",
      excerpt: "Simple rituals to keep your jewelry looking its best for years. What to do (and what to avoid).",
      date: "May 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80",
    },
  ];

  return (
    <div className="pt-8 pb-16">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <span className="caption">Stories & Inspiration</span>
          <h1 className="mt-2">The Journal</h1>
          <p className="body-text mt-4">
            Notes on craftsmanship, styling, and the quiet luxury of everyday adornment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <div className="aspect-[16/10] bg-[#f5f2ed] overflow-hidden mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-[#8a8178] mb-2">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="font-serif text-xl mb-2 group-hover:text-[#b89778] transition-colors">
                {article.title}
              </h3>
              <p className="body-text text-sm mb-4">{article.excerpt}</p>
              <span className="text-xs uppercase tracking-[0.1em] text-[#b89778]">Read More →</span>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[#8a8178]">
            More stories coming soon. Follow us on Instagram for daily inspiration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
