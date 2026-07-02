import React from 'react';
import { Link } from 'react-router-dom';

function Journal() {
  const articles = [
    {
      id: 1,
      title: "How to Layer Necklaces Without the Tangle",
      excerpt: "The art of mixing lengths, textures, and metals for an effortless, personal look.",
      date: "June 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80",
      category: "Styling",
    },
    {
      id: 2,
      title: "The Quiet Power of Everyday Gold",
      excerpt: "Why the pieces you wear daily matter more than the ones you save for special occasions.",
      date: "May 28, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80",
      category: "Essays",
    },
    {
      id: 3,
      title: "Caring for Your Heirloom Pieces",
      excerpt: "A simple routine to keep your gold jewelry looking beautiful for years to come.",
      date: "May 10, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80",
      category: "Care",
    },
    {
      id: 4,
      title: "Gifting Jewelry: A Guide",
      excerpt: "How to choose a meaningful piece for someone you love — and how to present it.",
      date: "April 22, 2026",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=80",
      category: "Gifting",
    },
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="pt-8 pb-10 text-center">
          <div className="text-xs tracking-[0.15em] text-gold-600 mb-1">THE JOURNAL</div>
          <h1 className="font-serif text-5xl tracking-[0.02em]">Stories & Rituals</h1>
          <p className="text-muted mt-3 max-w-md mx-auto">Notes on wearing, gifting, and caring for the jewelry you love.</p>
        </div>

        {/* Featured Article */}
        <Link to="#" className="group block mb-12">
          <div className="grid md:grid-cols-5 gap-6 items-center">
            <div className="md:col-span-3 aspect-[16/10] rounded-lg overflow-hidden bg-base-100">
              <img 
                src={articles[0].image} 
                alt={articles[0].title}
                className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700"
              />
            </div>
            <div className="md:col-span-2">
              <div className="uppercase text-xs tracking-[0.15em] text-gold-600 mb-2">{articles[0].category} · {articles[0].readTime}</div>
              <h2 className="font-serif text-3xl tracking-[0.02em] leading-tight mb-3 group-hover:text-gold-600 transition-colors">
                {articles[0].title}
              </h2>
              <p className="text-muted mb-3">{articles[0].excerpt}</p>
              <span className="text-sm text-gold-600 tracking-[0.05em]">READ THE STORY →</span>
            </div>
          </div>
        </Link>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-12">
          {articles.slice(1).map((article) => (
            <Link key={article.id} to="#" className="group block">
              <div className="aspect-[16/10] rounded-lg overflow-hidden bg-base-100 mb-4">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700"
                />
              </div>
              <div className="uppercase text-xs tracking-[0.15em] text-gold-600 mb-1.5">
                {article.category} · {article.readTime}
              </div>
              <h3 className="font-serif text-2xl tracking-[0.02em] leading-tight mb-2 group-hover:text-gold-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-muted text-sm mb-1">{article.excerpt}</p>
              <div className="text-xs text-muted">{article.date}</div>
            </Link>
          ))}
        </div>

        {/* Newsletter Teaser */}
        <div className="mt-16 pt-10 border-t border-gold-400 text-center">
          <p className="text-sm text-muted mb-4">Want these stories in your inbox?</p>
          <Link to="/" className="text-sm tracking-[0.08em] text-gold-600 hover:text-gold-700">Subscribe to the Journal →</Link>
        </div>
      </div>
    </div>
  );
}

export default Journal;