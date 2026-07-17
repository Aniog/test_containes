import React from 'react';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'How to Care for Your Gold Jewelry',
      excerpt: 'Simple rituals to keep your pieces looking beautiful for years to come.',
      date: 'July 12, 2026',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    },
    {
      id: 2,
      title: 'The Meaning Behind Our Signatures',
      excerpt: 'Each collection tells a story. Here is where they began.',
      date: 'June 28, 2026',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    },
    {
      id: 3,
      title: 'Why We Choose Demi-Fine',
      excerpt: 'The thoughtful middle ground between fine and fashion jewelry.',
      date: 'June 10, 2026',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
    },
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center pt-12 pb-14">
          <span className="text-xs tracking-[0.2em] text-[var(--color-gold)]">STORIES</span>
          <h1 className="font-serif text-5xl mt-3">The Journal</h1>
          <p className="mt-4 text-[var(--color-text-muted)]">Notes on craft, beauty, and the things we wear every day.</p>
        </div>

        <div className="space-y-16">
          {articles.map((article, index) => (
            <article key={index} className="group">
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 text-xs tracking-[0.1em] text-[var(--color-text-muted)] mb-3">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4 group-hover:text-[var(--color-gold)] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <button className="text-sm tracking-[0.1em] border-b border-[var(--color-text)] pb-0.5 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]">
                    Read Article →
                  </button>
                </div>
                <div className="md:col-span-2">
                  <div className="aspect-[16/10] bg-[var(--color-bg-alt)] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16 pt-10 border-t border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-text-muted)]">More stories coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
