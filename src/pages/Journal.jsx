import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Layer Necklaces Without the Tangle",
      excerpt: "A guide to creating dimension with multiple chains, from delicate to statement.",
      date: "July 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      readTime: "6 min",
    },
    {
      id: 2,
      title: "The Meaning Behind Our Names",
      excerpt: "Why we chose poetic names for each piece — and what they represent.",
      date: "June 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      readTime: "4 min",
    },
    {
      id: 3,
      title: "Caring for Gold-Plated Jewelry",
      excerpt: "Simple rituals to keep your pieces looking new for years to come.",
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      readTime: "5 min",
    },
    {
      id: 4,
      title: "The Art of the Gift",
      excerpt: "How to choose a piece that will be worn, loved, and remembered.",
      date: "April 2026",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      readTime: "7 min",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.15em] text-muted uppercase mb-3">Stories & Rituals</p>
        <h1 className="font-serif text-5xl md:text-6xl">The Journal</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {articles.map((article) => (
          <article key={article.id} className="group">
            <Link to={`/journal/${article.id}`} className="block">
              <div className="aspect-[16/10] bg-[var(--velmora-bg-dark)] overflow-hidden mb-5">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-muted tracking-[0.1em] mb-2">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="font-serif text-2xl mb-3 group-hover:text-[var(--velmora-gold-dark)] transition-colors">
                {article.title}
              </h2>
              <p className="text-muted text-sm leading-relaxed">{article.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-muted">More stories coming soon.</p>
      </div>
    </div>
  );
};

export default Journal;
