import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Care for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your pieces looking their best for years to come.",
      date: "June 12, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating dimension and interest with multiple chains and pendants.",
      date: "May 28, 2026",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 3,
      title: "Why We Choose 18K Gold Plating",
      excerpt: "The thoughtful decisions behind our materials—and why they matter.",
      date: "May 10, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    },
    {
      id: 4,
      title: "Gifting Jewelry: A Quiet Gesture",
      excerpt: "On choosing pieces that speak without saying too much.",
      date: "April 22, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    },
  ];

  return (
    <div className="pt-20">
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-2xl mb-12">
          <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Notes from the Atelier</span>
          <h1 className="text-4xl md:text-5xl mt-2">The Journal</h1>
          <p className="mt-4 text-velmora-text-muted">
            Reflections on craft, beauty, and the pieces we choose to keep close.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to="/about" className="block">
                <div className="aspect-[16/10] bg-velmora-bg-alt overflow-hidden mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase text-velmora-text-muted mb-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-2xl mb-3 group-hover:text-velmora-gold transition-colors">
                  {article.title}
                </h2>
                <p className="body-text text-velmora-text-muted">
                  {article.excerpt}
                </p>
                <span className="inline-block mt-4 text-sm tracking-[0.08em] uppercase border-b border-velmora-gold pb-0.5">
                  Read More
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-velmora-border text-center">
          <p className="text-sm text-velmora-text-muted">
            More stories coming soon. Follow us on Instagram for daily inspiration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
