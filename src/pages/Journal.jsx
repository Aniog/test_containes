import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Layer Necklaces Without the Tangle",
      excerpt: "A guide to mixing lengths, textures, and metals for an effortless look.",
      date: "July 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop",
    },
    {
      id: 2,
      title: "The Quiet Luxury Edit: What We're Wearing This Season",
      excerpt: "Five pieces from our collection that embody the less-is-more philosophy.",
      date: "June 28, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      title: "Caring for Gold: A Simple Routine",
      excerpt: "How to keep your demi-fine pieces looking new for years to come.",
      date: "June 10, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=500&fit=crop",
    },
    {
      id: 4,
      title: "Behind the Design: The Making of the Royal Heirloom Set",
      excerpt: "From sketch to keepsake box — the story of our most gifted piece.",
      date: "May 22, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=500&fit=crop",
    },
  ];

  return (
    <div className="pt-8 pb-20">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <div className="text-xs tracking-[0.15em] uppercase text-[#6B6560] mb-2">Stories & Rituals</div>
          <h1>The Journal</h1>
          <p className="mt-4 text-[#6B6560]">
            Notes on wearing, caring for, and treasuring fine jewelry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to="/journal" className="block">
                <div className="aspect-[16/10] bg-[#F5F2ED] mb-5 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-[#9A9289] mb-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl mb-2 group-hover:text-[#B8976E] transition-colors">{article.title}</h3>
                <p className="text-[#6B6560] text-sm">{article.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[#6B6560]">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
