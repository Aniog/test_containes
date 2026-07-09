import React from 'react';
import { Link } from 'react-router-dom';

export default function JournalPage() {
  const articles = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=500&fit=crop',
      date: 'June 15, 2026',
    },
    {
      id: 2,
      title: 'The Care Guide: Keeping Your Gold Jewelry Looking New',
      excerpt: 'Simple daily habits that will keep your demi-fine pieces shining for years to come.',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=500&fit=crop',
      date: 'June 8, 2026',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry She\'ll Actually Want',
      excerpt: 'Our curated picks for every type of woman in your life — from the minimalist to the maximalist.',
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=500&fit=crop',
      date: 'May 28, 2026',
    },
  ];

  return (
    <div className="pt-20 md:pt-24">
      <div className="container-padding py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="serif-heading text-4xl md:text-5xl mb-3">The Journal</h1>
          <p className="text-sm text-gray-500 tracking-wider uppercase">Style tips, care guides & inspiration</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <div className="aspect-[16/10] overflow-hidden mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-gray-400 mb-2">{article.date}</p>
              <h2 className="serif-heading text-xl mb-2 group-hover:text-[#c9a96e] transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{article.excerpt}</p>
              <Link to="#" className="text-sm tracking-wider uppercase text-[#c9a96e] hover:underline">
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
