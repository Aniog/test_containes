import React from 'react';
import { Link } from 'react-router-dom';

const JournalPage = () => {
  const articles = [
    { id: 1, title: 'How to Layer Necklaces Like a Pro', category: 'Style', readTime: '4 min read' },
    { id: 2, title: 'The Return of Quiet Luxury', category: 'Journal', readTime: '6 min read' },
    { id: 3, title: 'Gift Guide: Under $100', category: 'Gifting', readTime: '5 min read' },
    { id: 4, title: 'Caring for Your Gold Jewelry', category: 'Care', readTime: '3 min read' },
  ];

  return (
    <main className="pt-24 md:pt-28">
      <section className="relative h-[50vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1600&q=80"
          alt="Journal editorial"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container-editorial">
            <h1 className="font-serif text-4xl md:text-6xl text-white">Journal</h1>
            <p className="mt-4 max-w-xl text-sm text-white/80">Stories, styling ideas, and behind-the-scenes from Velmora.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group rounded-2xl border border-brand-line bg-brand-surface p-5 transition-colors hover:border-brand-ink">
              <div className="overflow-hidden rounded-xl bg-brand-warm">
                <img
                  src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80"
                  alt={article.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">{article.category}</p>
                <h2 className="mt-2 font-serif text-xl text-brand-ink">{article.title}</h2>
                <p className="mt-2 text-xs text-brand-muted">{article.readTime}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default JournalPage;
