import React from 'react'

export default function JournalPage() {
  const articles = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'The art of mixing lengths, textures, and metals for an effortlessly chic look.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
      date: 'June 15, 2026',
    },
    {
      id: 2,
      title: 'The Care Guide: Making Your Gold Last',
      excerpt: 'Simple habits to keep your demi-fine jewelry looking brand new for years.',
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1db?w=600&h=400&fit=crop',
      date: 'June 8, 2026',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Occasion',
      excerpt: 'From birthdays to anniversaries, find the perfect piece for the women in your life.',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=400&fit=crop',
      date: 'May 28, 2026',
    },
  ]

  return (
    <main className="container-wide py-24 md:py-32">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--velmora-text-muted)] mb-3">The Velmora Journal</p>
        <h1 className="font-serif-display text-4xl md:text-5xl">Stories & Style</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article key={article.id} className="group cursor-pointer">
            <div className="aspect-[3/2] overflow-hidden mb-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs text-[var(--velmora-text-light)] mb-2">{article.date}</p>
            <h2 className="font-serif-display text-xl mb-2 group-hover:text-[var(--velmora-accent)] transition-colors">
              {article.title}
            </h2>
            <p className="text-sm text-[var(--velmora-text-muted)] leading-relaxed">{article.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
