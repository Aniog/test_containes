import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Care for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your pieces looking their best for years to come.",
      date: "JUNE 12, 2026",
      readTime: "6 MIN",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating dimension and interest with multiple chains and pendants.",
      date: "MAY 28, 2026",
      readTime: "4 MIN",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 3,
      title: "Why We Choose 18K Gold Plating",
      excerpt: "The difference between fine, demi-fine, and fashion jewelry—and why it matters.",
      date: "MAY 15, 2026",
      readTime: "8 MIN",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    },
    {
      id: 4,
      title: "Gifting Jewelry: A Thoughtful Guide",
      excerpt: "How to choose a piece that will be worn and cherished, not just appreciated.",
      date: "APRIL 22, 2026",
      readTime: "5 MIN",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    },
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="py-12 text-center border-b">
          <p className="text-xs tracking-[3px] text-[#C5A46E] mb-2">STORIES & INSIGHTS</p>
          <h1 className="serif text-5xl tracking-wide">The Journal</h1>
          <p className="mt-4 text-[#6B665C] max-w-md mx-auto">
            Reflections on craft, beauty, and the pieces we choose to keep close.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-12">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-[#F5F2EB] overflow-hidden mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 text-xs tracking-[2px] text-[#6B665C] mb-3">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="serif text-2xl tracking-wide mb-3 group-hover:text-[#C5A46E] transition-colors">
                {article.title}
              </h2>
              <p className="text-[#6B665C] leading-relaxed">{article.excerpt}</p>
              <span className="inline-block mt-4 text-sm tracking-[1.5px] text-[#C5A46E]">READ MORE →</span>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t text-center">
          <p className="text-sm text-[#6B665C] mb-4">Looking for something specific?</p>
          <Link to="/shop" className="text-[#C5A46E] tracking-[1.5px] hover:underline">
            EXPLORE THE COLLECTION
          </Link>
        </div>
      </div>

      <footer className="bg-[#0F0E0C] text-[#F8F6F1] mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Velmora Fine Jewelry
        </div>
      </footer>
    </div>
  );
};

export default Journal;
