import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'How to Care for Your Gold Jewelry',
      excerpt: 'Simple rituals to keep your pieces looking beautiful for years to come.',
      date: 'June 12, 2026',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      readTime: '5 min',
    },
    {
      id: 2,
      title: 'The Meaning Behind Our Names',
      excerpt: 'Each Velmora piece carries a story. Here is how we choose the words that become part of your daily wear.',
      date: 'May 28, 2026',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
      readTime: '7 min',
    },
    {
      id: 3,
      title: 'Gifting Jewelry: A Guide',
      excerpt: 'Thoughtful ways to choose a piece that will be treasured, whether for someone you love or yourself.',
      date: 'May 3, 2026',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      readTime: '6 min',
    },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="heading-serif text-4xl mb-3">The Journal</h1>
          <p className="text-text-muted">Stories, rituals, and quiet reflections on the pieces we wear.</p>
        </div>

        <div className="space-y-16">
          {articles.map((article, index) => (
            <article key={index} className="group">
              <Link to="#" className="block">
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-3 aspect-[16/10] bg-bg-alt overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-text-muted mb-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="heading-serif text-2xl mb-3 group-hover:text-gold transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-text-muted leading-relaxed">{article.excerpt}</p>
                    <span className="inline-block mt-4 text-sm text-gold group-hover:text-gold-dark transition-colors">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-20 pt-10 border-t border-border">
          <p className="text-sm text-text-muted">More stories coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
