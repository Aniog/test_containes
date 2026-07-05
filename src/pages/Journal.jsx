import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Care for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your pieces looking beautiful for years.",
      date: "JUNE 2026",
      category: "CARE",
      image: "https://picsum.photos/id/160/800/600",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating dimension and personal expression through mixed lengths.",
      date: "MAY 2026",
      category: "STYLE",
      image: "https://picsum.photos/id/201/800/600",
    },
    {
      id: 3,
      title: "Behind the Design: The Flora Collection",
      excerpt: "The inspiration and craftsmanship behind our bestselling necklace.",
      date: "APRIL 2026",
      category: "MAKING",
      image: "https://picsum.photos/id/29/800/600",
    },
    {
      id: 4,
      title: "Gifting Jewelry: A Thoughtful Guide",
      excerpt: "How to choose a piece that will be cherished for years to come.",
      date: "MARCH 2026",
      category: "GIFTING",
      image: "https://picsum.photos/id/133/800/600",
    },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-[#9A9288] mb-2">STORIES & INSPIRATION</div>
          <h1 className="heading-serif text-4xl">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to="/journal" className="block">
                <div className="aspect-[16/10] overflow-hidden bg-[#F5F2ED] mb-5">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[0.1em] text-[#9A9288] mb-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.category}</span>
                </div>
                <h2 className="heading-serif text-2xl mb-2 group-hover:text-[#B8976A] transition-colors">
                  {article.title}
                </h2>
                <p className="text-[#5C5752] text-sm leading-relaxed">{article.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-[#5C5752] mb-4">More stories coming soon.</p>
          <Link to="/shop" className="btn btn-outline-gold">SHOP THE COLLECTION</Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
