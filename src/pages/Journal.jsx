import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Layer Necklaces Without the Tangle",
      excerpt: "A guide to creating effortless, dimensional looks that feel personal and polished.",
      date: "JULY 12, 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      readTime: "6 min",
    },
    {
      id: 2,
      title: "The Quiet Power of Everyday Jewelry",
      excerpt: "Why the pieces you reach for without thinking often mean the most.",
      date: "JUNE 28, 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      readTime: "5 min",
    },
    {
      id: 3,
      title: "Caring for Gold-Plated Jewelry",
      excerpt: "Simple rituals to keep your pieces looking beautiful for years to come.",
      date: "JUNE 15, 2026",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      readTime: "4 min",
    },
    {
      id: 4,
      title: "Behind the Design: The Golden Sphere Huggie",
      excerpt: "The story of how one of our most-loved pieces came to be.",
      date: "MAY 30, 2026",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      readTime: "7 min",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="text-xs tracking-[0.15em] text-[#B8976A] mb-1">STORIES & INSPIRATION</div>
          <h1 className="font-serif text-4xl tracking-[0.02em]">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to="#" className="block">
                <div className="aspect-[16/10] bg-[#F5F2ED] rounded-sm overflow-hidden mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[0.1em] text-[#6B6359] mb-2">
                  <span>{article.date}</span>
                  <span className="text-[#E5DFD6]">·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl tracking-[0.01em] leading-tight mb-3 group-hover:text-[#B8976A] transition-colors">
                  {article.title}
                </h2>
                <p className="text-[#6B6359] text-sm leading-relaxed">{article.excerpt}</p>
                <span className="inline-block mt-3 text-xs tracking-[0.1em] text-[#B8976A] group-hover:underline">
                  READ MORE →
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-[#E5DFD6] text-center">
          <p className="text-sm text-[#6B6359] mb-4">More stories coming soon.</p>
          <Link to="/shop" className="text-sm tracking-[0.05em] text-[#B8976A] hover:underline">
            EXPLORE THE COLLECTION
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
