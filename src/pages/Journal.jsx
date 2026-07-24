import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'The Art of Layering: How to Style Multiple Necklaces',
      excerpt: 'Master the art of necklace layering with our guide to creating effortless, personalized looks.',
      date: 'July 15, 2024',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80'
    },
    {
      id: 2,
      title: 'Why Demi-Fine Jewelry is the New Luxury',
      excerpt: 'Discover why more women are choosing quality demi-fine pieces over traditional fine jewelry.',
      date: 'July 8, 2024',
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80'
    },
    {
      id: 3,
      title: 'Caring for Your Gold-Plated Jewelry',
      excerpt: 'Simple tips to keep your Velmora pieces looking beautiful for years to come.',
      date: 'June 28, 2024',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-warm-white">
      {/* Header */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal">The Journal</h1>
            <p className="mx-auto mt-4 max-w-2xl text-brand-warm-gray">
              Stories, style guides, and inspiration for the modern jewelry lover.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <Link to={`/journal/${article.id}`} className="block">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-brand-cream">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-xs font-medium uppercase tracking-widest text-brand-gold">
                      {article.date}
                    </p>
                    <h2 className="mt-2 font-serif text-xl text-brand-charcoal group-hover:text-brand-gold transition-colors">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-brand-warm-gray leading-relaxed">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-gold">
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;
