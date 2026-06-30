import React from 'react'

const articles = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our complete guide to mixing chains, pendants, and chokers.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    date: 'June 15, 2024',
    category: 'Styling Tips'
  },
  {
    id: 2,
    title: 'The Ultimate Huggie Earring Guide',
    excerpt: 'Everything you need to know about huggies: how to wear them, style them, and care for them.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
    date: 'June 8, 2024',
    category: 'Buying Guide'
  },
  {
    id: 3,
    title: 'Gold Jewelry Care 101',
    excerpt: 'Pro tips for keeping your gold-plated jewelry looking radiant for years to come.',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80',
    date: 'May 28, 2024',
    category: 'Care Guide'
  }
]

export default function Journal() {
  return (
    <main className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-ultra-wide text-gold mb-4 block">
            JOURNAL
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-espresso-800 mb-4">
            Stories & Inspiration
          </h1>
          <p className="text-lg text-espresso-800/70 max-w-2xl mx-auto">
            Styling tips, jewelry guides, and behind-the-scenes stories from the Velmora world.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={article.id} className="group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="text-xs font-medium tracking-wide text-gold">{article.category}</span>
              <h2 className="font-serif text-xl text-espresso-800 mt-2 mb-3 group-hover:text-gold transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-espresso-800/60 mb-3">{article.excerpt}</p>
              <time className="text-xs text-espresso-800/40">{article.date}</time>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
