import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'The Art of Layering Necklaces',
      excerpt: 'Master the trend of layering necklaces with our comprehensive guide to mixing lengths and styles.',
      category: 'Styling Tips',
      date: 'December 15, 2024',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    },
    {
      id: 2,
      title: 'Gifting Guide: Jewelry for Every Relationship',
      excerpt: 'Find the perfect piece for everyone on your list, from self-purchase treats to meaningful gifts.',
      category: 'Gift Guide',
      date: 'December 10, 2024',
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    },
    {
      id: 3,
      title: 'Caring for Your Gold-Plated Jewelry',
      excerpt: 'Pro tips to keep your pieces looking radiant for years to come.',
      category: 'Care Guide',
      date: 'December 5, 2024',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    },
  ];

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-sand/30 py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
          <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-3">
            The Velmora Journal
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
            Stories & Inspiration
          </h1>
          <p className="text-warm-gray max-w-md mx-auto">
            Discover styling tips, behind-the-scenes stories, and guides to help you 
            find the perfect piece.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/3] bg-sand/30 overflow-hidden">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-xs text-gold tracking-[0.2em] uppercase font-medium">
                {articles[0].category}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mt-3 mb-4">
                {articles[0].title}
              </h2>
              <p className="text-warm-gray leading-relaxed mb-6">
                {articles[0].excerpt}
              </p>
              <p className="text-xs text-warm-gray mb-4">{articles[0].date}</p>
              <Link
                to="#"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <article key={article.id} className="group">
                <div className="aspect-[4/3] bg-sand/30 overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs text-gold tracking-[0.2em] uppercase font-medium">
                  {article.category}
                </span>
                <h3 className="font-serif text-xl text-charcoal mt-2 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-warm-gray mb-3">{article.date}</p>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;
