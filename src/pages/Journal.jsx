import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Layer Necklaces Without the Tangle",
      excerpt: "A guide to creating effortless, dimensional looks with multiple chains.",
      date: "JUNE 12, 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      readTime: "6 min",
    },
    {
      id: 2,
      title: "The Jewelry Edit: What to Wear to a Summer Wedding",
      excerpt: "From garden ceremonies to black-tie receptions, the pieces that feel right.",
      date: "MAY 28, 2026",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
      readTime: "8 min",
    },
    {
      id: 3,
      title: "Why We Choose 18K Gold Plating",
      excerpt: "The science and the sentiment behind our material choices.",
      date: "MAY 10, 2026",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      readTime: "5 min",
    },
    {
      id: 4,
      title: "Caring for Your Heirloom Pieces",
      excerpt: "Simple rituals to keep your jewelry looking beautiful for years to come.",
      date: "APRIL 22, 2026",
      image: "https://images.unsplash.com/photo-1535632787350-4e68b0bdad6e?w=800&q=80",
      readTime: "4 min",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[3px] text-[#B89778]">STORIES & INSPIRATION</span>
          <h1 className="font-serif text-5xl tracking-[1px] mt-2">The Journal</h1>
          <p className="text-[#6B665F] mt-4 max-w-md mx-auto">
            Notes on craft, style, and the quiet rituals of adornment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to={`/journal/${article.id}`} className="block">
                <div className="aspect-[16/10] bg-[#EDE8E0] overflow-hidden mb-6">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[1.5px] text-[#6B665F] mb-2">
                  <span>{article.date}</span>
                  <span className="text-[#EDE8E0]">·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl tracking-[1px] text-[#1C1C1C] group-hover:text-[#B89778] transition-colors mb-3">
                  {article.title}
                </h2>
                <p className="text-[#6B665F] text-sm leading-relaxed">{article.excerpt}</p>
                <span className="inline-block mt-4 text-xs tracking-[2px] text-[#B89778] group-hover:underline">READ MORE →</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-[#EDE8E0] text-center">
          <p className="text-sm text-[#6B665F]">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
