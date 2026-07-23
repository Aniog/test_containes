import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From summer's bare skin to winter's layered textures, discover how to make your favorite pieces work year-round.",
      date: "July 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      category: "Styling"
    },
    {
      id: 2,
      title: "The Art of Gifting Jewelry",
      excerpt: "A guide to choosing meaningful pieces for the women in your life — whether it's a milestone or just because.",
      date: "June 28, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      category: "Gifting"
    },
    {
      id: 3,
      title: "Why We Choose Brass Over Silver",
      excerpt: "The quiet strength of brass, and why it's the foundation of demi-fine jewelry that lasts.",
      date: "June 10, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      category: "Craft"
    },
    {
      id: 4,
      title: "Caring for Your Heirlooms",
      excerpt: "Simple rituals to keep your Velmora pieces looking as beautiful as the day they arrived.",
      date: "May 22, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      category: "Care"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
      <div className="mb-12">
        <span className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">Stories & Notes</span>
        <h1 className="heading-serif text-4xl md:text-5xl mt-2">The Journal</h1>
        <p className="text-[#6B6058] mt-3 max-w-md">Thoughts on craft, style, and the pieces we carry with us.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <article key={article.id} className="group">
            <Link to={`/journal/${article.id}`} className="block">
              <div className="aspect-[16/10] overflow-hidden bg-[#F1EDE6] mb-5">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase text-[#8B7355] mb-2">
                <span>{article.category}</span>
                <span className="text-[#D4C9B9]">·</span>
                <span>{article.date}</span>
                <span className="text-[#D4C9B9]">·</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="heading-serif text-2xl mb-3 group-hover:text-[#8B7355] transition-colors">
                {article.title}
              </h2>
              <p className="text-[#6B6058] leading-relaxed">{article.excerpt}</p>
              <span className="inline-block mt-4 text-sm tracking-[0.1em] uppercase border-b border-[#8B7355] pb-0.5">
                Read More →
              </span>
            </Link>
          </article>
        ))}
      </div>

      {/* Newsletter Teaser */}
      <div className="mt-16 pt-12 border-t border-[#D4C9B9] text-center">
        <p className="text-sm tracking-[0.1em] uppercase text-[#8B7355] mb-2">Stay in the circle</p>
        <p className="text-[#6B6058]">Subscribe to receive our journal in your inbox, along with early access to new pieces.</p>
        <Link to="/" className="inline-block mt-4 text-sm tracking-[0.1em] uppercase hover:text-[#8B7355]">
          Join the Newsletter →
        </Link>
      </div>
    </div>
  );
};

export default Journal;
