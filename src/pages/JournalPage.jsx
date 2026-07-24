import React from 'react'

export default function JournalPage() {
  const articles = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
      date: 'July 15, 2026',
    },
    {
      id: 2,
      title: 'The Care Guide: Keeping Your Gold Jewelry Beautiful',
      excerpt: 'Simple tips to maintain the luster of your 18K gold plated pieces for years to come.',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
      date: 'July 8, 2026',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Occasion',
      excerpt: 'From birthdays to anniversaries, find the perfect piece for the special women in your life.',
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&q=80',
      date: 'June 28, 2026',
    },
  ]

  return (
    <div className="pt-20 md:pt-24">
      <div className="bg-velmora-warm/20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle">Stories & Tips</p>
          <h1 className="section-title mt-2">The Journal</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-velmora-warm/20 overflow-hidden mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="font-sans text-xs text-velmora-muted mb-2">{article.date}</p>
              <h2 className="font-serif text-xl text-velmora-base group-hover:text-velmora-gold transition-colors">
                {article.title}
              </h2>
              <p className="font-sans text-sm text-velmora-muted mt-2 leading-relaxed">
                {article.excerpt}
              </p>
              <span className="inline-block mt-4 font-sans text-xs tracking-widest uppercase text-velmora-gold border-b border-velmora-gold pb-1">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
