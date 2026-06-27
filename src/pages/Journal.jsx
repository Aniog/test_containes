import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const articles = [
  {
    id: 1,
    title: 'How to Style Gold Jewelry for Every Season',
    excerpt: 'From summer layering to winter elegance — our guide to wearing gold year-round.',
    date: 'June 15, 2026',
    readTime: '4 min read',
    image: 'https://placehold.co/800x500/f7f4ef/c9a96e?text=Styling+Gold',
  },
  {
    id: 2,
    title: 'The Art of Gifting Jewelry',
    excerpt: 'Thoughtful presents for every occasion — birthdays, anniversaries, and just because.',
    date: 'May 28, 2026',
    readTime: '5 min read',
    image: 'https://placehold.co/800x500/ede8df/b08d4a?text=Gifting+Jewelry',
  },
  {
    id: 3,
    title: 'Behind the Design: Golden Sphere Huggies',
    excerpt: 'From sketch to finished piece — the story behind our bestselling huggies.',
    date: 'May 10, 2026',
    readTime: '3 min read',
    image: 'https://placehold.co/800x500/f7f4ef/c9a96e?text=Design+Process',
  },
];

const Journal = () => {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <CartDrawer />

      <main className="pt-24 sm:pt-28">
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-gold mb-3">
                Journal
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink">Stories & Inspiration</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {articles.map((article) => (
                <article key={article.id} className="group">
                  <Link to="#" className="block">
                    <div className="aspect-[16/10] bg-cream overflow-hidden mb-4">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-[10px] text-warm-gray">
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h2 className="font-serif text-lg sm:text-xl text-ink group-hover:text-gold transition-colors leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-sm text-warm-gray leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Journal;
