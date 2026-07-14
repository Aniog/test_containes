import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "The Art of Layering Necklaces",
      excerpt: "How to create dimension and interest with multiple chains and pendants.",
      date: "July 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 2,
      title: "Caring for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your pieces looking beautiful for years.",
      date: "June 2026",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    },
    {
      id: 3,
      title: "Why We Choose 18K Gold Plate",
      excerpt: "The balance of beauty, durability, and accessibility in our materials.",
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
  ];

  return (
    <div className="bg-[#FAF7F2] pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[0.2em] text-xs text-[#6B625B] mb-2">Stories</div>
          <h1 className="font-serif text-4xl">The Journal</h1>
          <p className="text-[#6B625B] mt-3 max-w-md mx-auto">
            Notes from the atelier on craft, beauty, and the pieces we wear every day.
          </p>
        </div>

        <div className="space-y-12">
          {articles.map((article) => (
            <article key={article.id} className="grid md:grid-cols-5 gap-6 md:gap-8 items-center group">
              <div className="md:col-span-2 aspect-[16/10] bg-[#F2EDE6] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="md:col-span-3">
                <div className="text-xs tracking-[0.15em] text-[#6B625B] mb-2">{article.date}</div>
                <h2 className="font-serif text-2xl mb-3 tracking-tight">{article.title}</h2>
                <p className="text-[#6B625B] mb-4">{article.excerpt}</p>
                <span className="text-sm tracking-widest text-[#A68A5A] group-hover:underline">READ MORE →</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-[#6B625B]">
          More stories coming soon. Follow us on Instagram for daily inspiration.
        </div>
      </div>
    </div>
  );
};

export default Journal;
