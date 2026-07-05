import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'The Art of Layering: A Guide to Necklace Stacking',
    excerpt: 'Learn how to create stunning necklace layers that add depth and dimension to any outfit, from subtle to statement-making.',
    category: 'Styling Tips',
    date: 'June 15, 2024',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
  },
  {
    id: 2,
    title: 'Gold Jewelry Care: Expert Tips for Lasting Shine',
    excerpt: 'Protect your investment with our comprehensive guide to cleaning, storing, and maintaining your gold-plated jewelry.',
    category: 'Care Guides',
    date: 'May 28, 2024',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80'
  },
  {
    id: 3,
    title: 'The Perfect Gift: Choosing Jewelry for Every Occasion',
    excerpt: 'From birthdays to anniversaries, discover how to select the perfect piece that will be cherished for years to come.',
    category: 'Gift Guides',
    date: 'May 10, 2024',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80'
  }
];

export default function Journal() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-[var(--color-bg-secondary)] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] text-[var(--color-gold-primary)] mb-3">
            JOURNAL
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-2">
            Stories & Inspiration
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
            Styling tips, care guides, and behind-the-scenes stories from the Velmora world.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <Link to={`/journal/${article.id}`} className="block">
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
                      <span className="text-[var(--color-gold-primary)]">{article.category}</span>
                      <span>·</span>
                      <span>{article.date}</span>
                    </div>
                    <h2 className="font-serif text-xl text-[var(--color-text-primary)] group-hover:text-[var(--color-gold-primary)] transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
