import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Care for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your pieces looking beautiful for years to come.",
      date: "July 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
      category: "Care",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating dimension and personal meaning through thoughtful layering.",
      date: "July 5, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      category: "Style",
    },
    {
      id: 3,
      title: "Behind the Design: The Royal Heirloom Set",
      excerpt: "The story and craftsmanship behind one of our most cherished collections.",
      date: "June 28, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
      category: "Atelier",
    },
    {
      id: 4,
      title: "Gifting Jewelry: A Thoughtful Guide",
      excerpt: "How to choose a piece that will be treasured, not just worn.",
      date: "June 18, 2026",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
      category: "Gifting",
    },
  ];

  return (
    <div className="container section">
      <div className="max-w-2xl mb-12">
        <span className="caption">Stories & Notes</span>
        <h1 className="mt-2">The Journal</h1>
        <p className="text-text-muted mt-4">
          Reflections on craft, beauty, and the quiet rituals of adornment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <article key={article.id} className="group">
            <Link to={`/journal/${article.id}`} className="block">
              <div className="aspect-[16/10] bg-surface-warm overflow-hidden mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              
              <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                <span>{article.category}</span>
                <span>·</span>
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
              
              <h3 className="text-2xl mb-3 group-hover:text-gold transition-colors">
                {article.title}
              </h3>
              
              <p className="text-text-muted text-sm leading-relaxed">
                {article.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-sm text-text-muted mb-4">More stories coming soon.</p>
        <Link to="/shop" className="text-sm underline underline-offset-4">
          Explore the collection →
        </Link>
      </div>
    </div>
  );
};

export default Journal;
