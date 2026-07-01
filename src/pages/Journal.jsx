import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From delicate layers in spring to bold statements in winter — here's how we wear our favorite pieces year-round.",
      date: "June 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    },
    {
      id: 2,
      title: "The Art of Gifting Jewelry",
      excerpt: "A guide to choosing meaningful pieces for the women in your life — and for yourself.",
      date: "May 28, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 3,
      title: "Behind the Design: The Flora Collection",
      excerpt: "The story of how a single flower sketch became our most beloved necklace.",
      date: "May 10, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 4,
      title: "Caring for Your Demi-Fine Pieces",
      excerpt: "Simple rituals to keep your gold jewelry looking its best for years to come.",
      date: "April 22, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1535632787350-4e68b0f9b8b7?w=800&q=80",
    },
  ];

  return (
    <div className="bg-velmora-cream">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.15em] text-velmora-text-muted mb-2">STORIES & INSPIRATION</p>
          <h1 className="serif text-5xl">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to={`/journal/${article.id}`} className="block">
                <div className="aspect-[16/10] bg-velmora-warm-gray overflow-hidden mb-6">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-velmora-text-muted mb-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime} read</span>
                </div>
                <h2 className="serif text-2xl mb-3 group-hover:text-velmora-gold transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-velmora-text-muted leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-velmora-text-muted">More stories coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;