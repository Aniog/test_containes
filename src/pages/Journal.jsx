import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Care for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your pieces looking new for years.",
      date: "JUNE 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      readTime: "4 min",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating dimension and personal meaning with your chains.",
      date: "MAY 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      readTime: "6 min",
    },
    {
      id: 3,
      title: "Why We Choose 18K Gold Plating",
      excerpt: "The difference between fine and demi-fine, and why it matters.",
      date: "APRIL 2026",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      readTime: "5 min",
    },
    {
      id: 4,
      title: "Gifting Jewelry: A Quiet Gesture",
      excerpt: "Thoughts on choosing pieces that speak without saying too much.",
      date: "MARCH 2026",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      readTime: "3 min",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <span className="text-xs tracking-[2px] text-[#C5A46E]">STORIES & RITUALS</span>
        <h1 className="font-serif text-4xl tracking-[1px] mt-2">The Journal</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <article key={article.id} className="group">
            <Link to={`/journal/${article.id}`} className="block">
              <div className="aspect-[16/10] overflow-hidden bg-[#EDE9E3] mb-5">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 text-xs tracking-[1.5px] text-[#9A9590] mb-2">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="font-serif text-xl tracking-[0.5px] mb-2 group-hover:text-[#C5A46E] transition-colors">
                {article.title}
              </h2>
              <p className="text-[#4A4640] text-sm leading-relaxed">{article.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-[#EDE9E3] text-center">
        <p className="text-sm text-[#4A4640]">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
      </div>
    </div>
  );
};

export default Journal;
