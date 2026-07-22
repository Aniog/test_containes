import React from 'react';

export default function Journal() {
  const articles = [
    { id: 1, title: 'How to Layer Necklaces Like a Stylist', date: '2026-07-10', read: '4 min read' },
    { id: 2, title: 'The Return of the Ear Cuff: A Modern Guide', date: '2026-06-28', read: '5 min read' },
    { id: 3, title: 'Caring for Gold-Plated Jewelry: 5 Essential Tips', date: '2026-06-15', read: '3 min read' },
    { id: 4, title: 'The Art of Gifting Jewelry', date: '2026-05-30', read: '6 min read' },
  ];

  return (
    <div className="pt-20 md:pt-24">
      <div className="bg-velvet-100 border-b border-velvet-200">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <h1 className="font-serif text-4xl md:text-6xl text-velvet-900">Journal</h1>
          <p className="font-sans text-base text-velvet-600 mt-3">Stories, guides, and inspiration from Velmora</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="space-y-0">
          {articles.map((article, i) => (
            <div key={article.id} className={`py-8 ${i < articles.length - 1 ? 'border-b border-velvet-200' : ''}`}>
              <p className="font-sans text-xs tracking-widest uppercase text-velvet-500 mb-3">{article.date} · {article.read}</p>
              <h2 className="font-serif text-2xl md:text-3xl text-velvet-900 hover:text-warm-600 transition-colors cursor-pointer">
                {article.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
