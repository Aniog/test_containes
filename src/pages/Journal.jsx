import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "The Art of Everyday Adornment",
      excerpt: "Why we believe jewelry should be worn, not saved. A reflection on the pieces that become part of your daily rhythm.",
      date: "June 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 2,
      title: "How to Care for Gold-Plated Jewelry",
      excerpt: "Simple rituals to keep your pieces looking beautiful for years. From storage to cleaning, everything you need to know.",
      date: "May 28, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    },
    {
      id: 3,
      title: "Behind the Design: The Flora Necklace",
      excerpt: "The story of our most beloved piece. From initial sketch to final stone selection, a look inside the creative process.",
      date: "May 3, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 4,
      title: "Gifting Jewelry: A Guide",
      excerpt: "How to choose a meaningful piece for someone you love. Timeless considerations for the perfect gift.",
      date: "April 15, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.2em] text-xs text-velmora-muted mb-2">From the Studio</p>
          <h1 className="serif text-5xl tracking-[0.03em]">Journal</h1>
        </div>

        <div className="space-y-16">
          {articles.map((article, index) => (
            <article key={article.id} className="group">
              <div className={`grid md:grid-cols-5 gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:col-span-3">
                  <Link to="#" className="block">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full aspect-[16/10] object-cover mb-6"
                    />
                  </Link>
                </div>
                <div className="md:col-span-2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs text-velmora-muted mb-3">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Link to="#">
                    <h2 className="serif text-2xl tracking-[0.03em] mb-4 group-hover:text-velmora-gold-dark transition-colors">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="text-velmora-text-secondary leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <Link to="#" className="text-sm uppercase tracking-[0.1em] text-velmora-gold-dark hover:underline inline-block">
                    Read Article →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-velmora-border text-center">
          <p className="text-sm text-velmora-text-secondary mb-2">More stories coming soon.</p>
          <Link to="/shop" className="text-sm uppercase tracking-[0.1em] hover:text-velmora-gold-dark">
            Explore the Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;