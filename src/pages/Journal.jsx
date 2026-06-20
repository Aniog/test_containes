import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'How to Style Gold Jewelry for Every Season',
      excerpt: 'From summer linen to winter cashmere, discover how to layer our pieces year-round.',
      date: 'June 12, 2026',
      image: 'https://picsum.photos/id/1011/800/600',
      readTime: '6 min',
    },
    {
      id: 2,
      title: 'The Art of Gifting Heirloom-Quality Jewelry',
      excerpt: 'Why the Royal Heirloom Set has become our most cherished gift for mothers, sisters, and friends.',
      date: 'May 28, 2026',
      image: 'https://picsum.photos/id/251/800/600',
      readTime: '8 min',
    },
    {
      id: 3,
      title: 'Behind the Craft: Our Partnership with Italian Artisans',
      excerpt: 'A visit to the workshop where every Velmora piece begins its journey.',
      date: 'May 3, 2026',
      image: 'https://picsum.photos/id/106/800/600',
      readTime: '10 min',
    },
  ];

  return (
    <div className="pt-20">
      <div className="container section">
        <div className="max-w-2xl mb-12">
          <span className="caption">Stories & Reflections</span>
          <h1 className="mt-2">The Journal</h1>
          <p className="body-text mt-4">
            Notes on craft, beauty, and the quiet rituals of getting dressed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <div className="aspect-[16/10] bg-velmora-surface-warm overflow-hidden mb-5">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-velmora-text-muted mb-2">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="font-serif text-xl leading-tight mb-3 group-hover:text-velmora-gold transition-colors">
                {article.title}
              </h3>
              <p className="body-text text-sm mb-4">{article.excerpt}</p>
              <span className="text-xs uppercase tracking-widest text-velmora-gold">Read Article →</span>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-velmora-text-muted">
            More stories coming soon. Follow us on Instagram for daily inspiration.
          </p>
          <Link to="/shop" className="inline-block mt-4 text-sm uppercase tracking-widest hover:text-velmora-gold">
            Shop the Collection →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;