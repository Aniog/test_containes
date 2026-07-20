import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Occasion",
      excerpt: "From boardroom meetings to evening soirées, discover the art of layering and mixing metals.",
      date: "July 15, 2026",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    },
    {
      id: 2,
      title: "The Meaning Behind Our Signature Pieces",
      excerpt: "Each design in our collection carries a story. Learn about the inspiration behind our most beloved styles.",
      date: "July 8, 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 3,
      title: "Caring for Your Demi-Fine Jewelry",
      excerpt: "Simple steps to ensure your Velmora pieces remain beautiful for years to come.",
      date: "June 28, 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.2em] text-taupe mb-2">INSIGHTS & INSPIRATION</p>
        <h1 className="text-5xl font-serif">The Journal</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article key={article.id} className="group cursor-pointer">
            <div className="aspect-[16/10] bg-light-gray overflow-hidden mb-6">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <p className="text-xs tracking-[0.15em] text-taupe mb-2">{article.date}</p>
            <h3 className="font-serif text-2xl mb-3 group-hover:text-gold transition-colors">{article.title}</h3>
            <p className="text-taupe leading-relaxed">{article.excerpt}</p>
            <span className="inline-block mt-4 text-sm tracking-[0.1em] border-b border-base group-hover:border-gold group-hover:text-gold transition-colors">
              READ MORE →
            </span>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link to="/shop" className="text-sm tracking-[0.15em] hover:text-gold transition-colors">
          EXPLORE OUR COLLECTION →
        </Link>
      </div>
    </div>
  );
};

export default Journal;