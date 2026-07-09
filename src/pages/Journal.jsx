import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From warm summer evenings to crisp winter days, discover how to layer and style your favorite pieces year-round.",
      date: "June 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    },
    {
      id: 2,
      title: "The Meaning Behind Our Signature Pieces",
      excerpt: "Each design in the Velmora collection carries a story. Here, we share the inspiration behind our most beloved styles.",
      date: "May 28, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 3,
      title: "Caring for Your Demi-Fine Jewelry",
      excerpt: "Simple rituals to keep your gold pieces looking radiant for years to come. A guide to everyday maintenance and storage.",
      date: "May 3, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 4,
      title: "Gifting Jewelry: A Thoughtful Guide",
      excerpt: "Choosing the perfect piece for someone you love. Our thoughts on meaningful gifting and presentation.",
      date: "April 15, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
  ];

  return (
    <div className="pt-20">
      <div className="container py-12 md:py-16">
        <div className="max-w-2xl mb-12">
          <div className="text-xs tracking-[2px] text-gold mb-2">WORDS & INSPIRATION</div>
          <h1 className="heading-serif text-5xl">The Journal</h1>
          <p className="mt-4 text-muted text-[15px]">
            Stories, rituals, and reflections from the world of Velmora.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article key={article.id} className="group">
              <Link to="#" className="block">
                <div className="aspect-[16/10] bg-velmora-bg-alt overflow-hidden mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-wider text-muted mb-2">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="heading-serif text-2xl leading-tight mb-3 group-hover:text-gold transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted text-[14px] leading-relaxed pr-4">
                  {article.excerpt}
                </p>
                <div className="mt-4 text-xs tracking-[1.5px] text-gold group-hover:underline">
                  READ MORE →
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-velmora-border text-center">
          <p className="text-sm text-muted mb-4">More stories coming soon.</p>
          <Link to="/shop" className="btn btn-outline">Explore the Collection</Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
