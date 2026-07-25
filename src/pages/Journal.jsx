import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Layer Necklaces Like a Stylist",
      excerpt: "The art of mixing lengths, textures, and metals to create a look that feels personal and considered.",
      date: "JULY 2026",
      readTime: "6 MIN",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      category: "STYLING"
    },
    {
      id: 2,
      title: "The Meaning Behind Our Heirloom Set",
      excerpt: "A conversation with our founder on why we designed a piece meant to be passed down.",
      date: "JUNE 2026",
      readTime: "8 MIN",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      category: "BEHIND THE DESIGN"
    },
    {
      id: 3,
      title: "Caring for Gold-Plated Jewelry",
      excerpt: "Simple rituals to keep your pieces looking as beautiful as the day you received them.",
      date: "MAY 2026",
      readTime: "4 MIN",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      category: "CARE"
    },
    {
      id: 4,
      title: "Why We Choose 18K Gold Plating",
      excerpt: "The difference between fine, demi-fine, and fashion jewelry—and why we sit in the middle.",
      date: "APRIL 2026",
      readTime: "7 MIN",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      category: "MATERIALS"
    },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.15em] text-velmora-gold mb-2">STORIES & REFLECTIONS</p>
          <h1 className="serif text-5xl tracking-[0.05em]">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to={`/journal/${article.id}`} className="block">
                <div className="aspect-[16/10] bg-velmora-light mb-6 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[0.1em] text-velmora-text-light mb-3">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                  <span>·</span>
                  <span className="text-velmora-gold">{article.category}</span>
                </div>
                <h2 className="serif text-2xl tracking-[0.03em] mb-3 group-hover:text-velmora-gold transition-colors">
                  {article.title}
                </h2>
                <p className="text-[15px] leading-relaxed text-velmora-text">{article.excerpt}</p>
                <span className="inline-block mt-4 text-sm tracking-widest border-b border-velmora-base pb-0.5 group-hover:border-velmora-gold group-hover:text-velmora-gold transition-colors">
                  READ MORE →
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-velmora-light text-center">
          <p className="text-sm text-velmora-text-light mb-4">Want more stories delivered to your inbox?</p>
          <Link to="/" className="btn btn-outline">JOIN OUR NEWSLETTER</Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;