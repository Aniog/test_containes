import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our expert guide. From delicate chains to statement pendants, learn how to create the perfect stack.',
    date: 'July 10, 2026',
    category: 'Styling Tips',
  },
  {
    id: 2,
    title: 'The Complete Guide to Gold-Plated Jewelry Care',
    excerpt: 'Keep your Velmora pieces looking their best with our comprehensive care guide. Simple tips to extend the life and shine of your jewelry.',
    date: 'July 5, 2026',
    category: 'Care Guide',
  },
  {
    id: 3,
    title: '5 Earring Trends to Watch This Season',
    excerpt: 'From bold huggies to elegant drops, discover the earring trends that are defining modern jewelry style this season.',
    date: 'June 28, 2026',
    category: 'Trends',
  },
];

export default function Journal() {
  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-cream-200 py-12 md:py-16 border-b border-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="section-subheading mb-3">Inspiration</p>
          <h1 className="section-heading">The Velmora Journal</h1>
          <div className="w-16 h-px bg-gold mx-auto mt-5" />
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="space-y-12">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer pb-12 border-b border-charcoal-100 last:border-0">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-sans text-xs tracking-ultra-wide uppercase text-gold">
                  {article.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-charcoal-200" />
                <span className="font-sans text-xs text-charcoal-400">{article.date}</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal tracking-wide mb-3 group-hover:text-gold transition-colors">
                {article.title}
              </h2>
              <p className="font-sans text-charcoal-500 leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <span className="font-sans text-xs tracking-wider uppercase text-charcoal-400 group-hover:text-gold transition-colors">
                Read More →
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
