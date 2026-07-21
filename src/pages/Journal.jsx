import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From delicate layers in spring to bold statements in winter — discover how to wear gold year-round.",
      date: "July 15, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      category: "Styling",
    },
    {
      id: 2,
      title: "The Meaning Behind Our Signature Pieces",
      excerpt: "Each design in our collection carries a story. Here, we share the inspiration behind our most beloved pieces.",
      date: "July 8, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      category: "Behind the Design",
    },
    {
      id: 3,
      title: "Caring for Your Demi-Fine Jewelry",
      excerpt: "Simple rituals to keep your pieces looking beautiful for years to come. A guide to proper storage and cleaning.",
      date: "June 28, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      category: "Care",
    },
    {
      id: 4,
      title: "The Art of Gifting Jewelry",
      excerpt: "How to choose a meaningful piece for someone you love — and how to present it with intention.",
      date: "June 20, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
      category: "Gifting",
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <div className="uppercase tracking-[0.2em] text-xs text-velmora-text-muted mb-3">Stories & Inspiration</div>
        <h1 className="font-serif text-5xl mb-4">The Journal</h1>
        <p className="text-velmora-text-muted max-w-md mx-auto">
          Notes on craftsmanship, styling, and the quiet beauty of everyday adornment.
        </p>
      </div>

      {/* Featured Article */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <Link to="#article-1" className="group grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-[16/10] bg-velmora-surface-warm overflow-hidden">
            <img 
              src={articles[0].image} 
              alt={articles[0].title}
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700"
            />
          </div>
          <div>
            <div className="uppercase tracking-[0.1em] text-xs text-velmora-gold mb-3">{articles[0].category}</div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">{articles[0].title}</h2>
            <p className="body-text text-velmora-text-muted mb-4">{articles[0].excerpt}</p>
            <div className="text-xs text-velmora-text-muted tracking-widest">
              {articles[0].date} · {articles[0].readTime} read
            </div>
          </div>
        </Link>
      </div>

      {/* Article Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <Link key={article.id} to={`#article-${article.id}`} className="group">
              <div className="aspect-[16/10] bg-velmora-surface-warm overflow-hidden mb-4">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700"
                />
              </div>
              <div className="uppercase tracking-[0.1em] text-xs text-velmora-gold mb-2">{article.category}</div>
              <h3 className="font-serif text-xl mb-2 leading-snug">{article.title}</h3>
              <p className="text-sm text-velmora-text-muted mb-3 line-clamp-2">{article.excerpt}</p>
              <div className="text-xs text-velmora-text-muted tracking-widest">
                {article.date} · {article.readTime} read
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-velmora-bg-dark text-white py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3 className="font-serif text-2xl mb-3">Stay in the loop</h3>
          <p className="text-white/70 text-sm mb-6">Receive our journal in your inbox, along with early access to new collections.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }} className="flex gap-3">
            <input type="email" placeholder="Your email" className="newsletter-input flex-1" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Journal;
