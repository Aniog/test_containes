import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Layer Necklaces Without the Tangle",
      excerpt: "A guide to creating effortless, dimensional looks with multiple chains.",
      date: "July 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      readTime: "6 min",
    },
    {
      id: 2,
      title: "The Quiet Return of Gold",
      excerpt: "Why warm metals are replacing cool tones in modern wardrobes.",
      date: "June 2026",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      readTime: "4 min",
    },
    {
      id: 3,
      title: "Caring for Your Heirlooms",
      excerpt: "Simple rituals to keep your jewelry beautiful for generations.",
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      readTime: "5 min",
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      <div className="container py-12">
        <div className="max-w-2xl mb-12">
          <div className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-text-muted)] mb-1">Stories</div>
          <h1 className="text-4xl mb-4">The Journal</h1>
          <p className="body-text">
            Reflections on craft, beauty, and the pieces we choose to keep close.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-[var(--velmora-surface-warm)] mb-4 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-[var(--velmora-text-muted)] tracking-widest mb-2">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="font-serif text-xl mb-2 group-hover:text-[var(--velmora-gold)] transition-colors">
                {article.title}
              </h3>
              <p className="body-text text-sm">{article.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--velmora-border)] text-center">
          <p className="text-sm text-[var(--velmora-text-muted)]">
            More stories coming soon. Follow us on Instagram for daily inspiration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journal;