import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From summer's bare skin to winter's layered textures, discover how to wear your favorite pieces year-round.",
      date: "July 15, 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      readTime: "6 min",
    },
    {
      id: 2,
      title: "The Meaning Behind Our Heirloom Collection",
      excerpt: "Each piece in our Royal Heirloom Set was designed with legacy in mind. Here's the story behind the design.",
      date: "July 8, 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      readTime: "4 min",
    },
    {
      id: 3,
      title: "Caring for Your Demi-Fine Jewelry",
      excerpt: "Simple rituals to keep your gold pieces looking luminous for years to come.",
      date: "June 28, 2026",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      readTime: "5 min",
    },
    {
      id: 4,
      title: "Why We Choose 18K Gold Plating",
      excerpt: "A deep dive into our material choices and why quality matters more than karat count.",
      date: "June 12, 2026",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      readTime: "7 min",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.2em] uppercase text-[#6B6560] mb-3">Stories & Reflections</p>
        <h1 className="heading-serif text-5xl md:text-6xl">The Journal</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {articles.map((article) => (
          <article key={article.id} className="group">
            <Link to="#article" className="block">
              <div className="aspect-[16/10] bg-[#F1EDE6] overflow-hidden mb-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase text-[#6B6560] mb-3">
                <span>{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-[#D9D2C7]" />
                <span>{article.readTime} read</span>
              </div>
              <h2 className="heading-serif text-2xl mb-3 group-hover:text-[#8C6F4E] transition-colors">
                {article.title}
              </h2>
              <p className="text-[#6B6560] leading-relaxed">{article.excerpt}</p>
              <span className="inline-block mt-4 text-sm tracking-[0.1em] uppercase border-b border-[#2C2825] pb-0.5 group-hover:text-[#8C6F4E] group-hover:border-[#8C6F4E] transition-colors">
                Read More
              </span>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16 pt-10 border-t border-[#E8E2D9] text-center">
        <p className="text-sm text-[#6B6560]">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
      </div>
    </div>
  );
};

export default Journal;
