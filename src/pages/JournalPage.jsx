import React from 'react';
import { Link } from 'react-router-dom';

const JournalPage = () => {
  const articles = [
    {
      id: 1,
      title: 'The Art of Layering: A Guide to Stacking Necklaces',
      excerpt: 'Discover how to create effortlessly elegant necklace combinations for every occasion.',
      category: 'Styling Tips',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
      date: 'December 15, 2024',
    },
    {
      id: 2,
      title: 'Why Demi-Fine Jewelry is the Smart Choice',
      excerpt: 'The perfect balance of quality, affordability, and style. Learn why demi-fine is having a moment.',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
      date: 'December 8, 2024',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Relationship',
      excerpt: 'From self-purchases to meaningful gifts, find the perfect piece for everyone on your list.',
      category: 'Gift Guides',
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
      date: 'December 1, 2024',
    },
    {
      id: 4,
      title: 'Caring for Your Gold-Plated Jewelry',
      excerpt: 'Simple tips to keep your favorite pieces looking beautiful for years to come.',
      category: 'Care Guide',
      image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80',
      date: 'November 24, 2024',
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="container-luxury text-center">
          <span className="text-xs font-sans font-medium tracking-widest uppercase text-gold-600">
            The Velmora Journal
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal-900 mt-4 mb-6">
            Stories & Inspiration
          </h1>
          <p className="font-sans text-base text-charcoal-600 max-w-xl mx-auto">
            Discover styling tips, behind-the-scenes stories, and all things jewelry.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-cream-50">
        <div className="container-luxury">
          <Link className="block group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full aspect-video lg:aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="lg:pl-8">
                <span className="text-xs font-sans font-medium tracking-widest uppercase text-gold-600">
                  {articles[0].category}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 mt-3 mb-4 group-hover:text-gold-700 transition-colors">
                  {articles[0].title}
                </h2>
                <p className="font-sans text-charcoal-600 leading-relaxed mb-6">
                  {articles[0].excerpt}
                </p>
                <span className="text-sm text-charcoal-400">{articles[0].date}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <Link key={article.id} className="group block bg-cream-50">
                <div className="overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-sans font-medium tracking-widest uppercase text-gold-600">
                  {article.category}
                </span>
                <h3 className="font-serif text-xl text-charcoal-900 mt-2 mb-2 group-hover:text-gold-700 transition-colors">
                  {article.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-600 leading-relaxed mb-3">
                  {article.excerpt}
                </p>
                <span className="text-xs text-charcoal-400">{article.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 bg-charcoal-900">
        <div className="container-luxury text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-cream-50 mb-4">
            Never miss a story
          </h2>
          <p className="font-sans text-sm text-charcoal-400 mb-6">
            Subscribe to receive new journal entries and styling inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-transparent border border-charcoal-700 text-cream-50 
                         placeholder:text-charcoal-500 font-sans text-sm focus:border-gold-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold-600 text-white font-sans text-sm font-medium 
                         tracking-wider uppercase hover:bg-gold-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default JournalPage;
