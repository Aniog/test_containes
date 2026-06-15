import React from 'react'

const articles = [
  {
    id: 1,
    title: 'The Art of Stacking: How to Layer Your Jewelry',
    excerpt: 'Master the art of layering necklaces and stacking rings with our expert styling guide.',
    date: 'June 10, 2026',
    category: 'Styling',
  },
  {
    id: 2,
    title: 'Why 18K Gold Plated is the Smart Choice',
    excerpt: 'Everything you need to know about demi-fine jewelry and why it offers the best value.',
    date: 'May 28, 2026',
    category: 'Education',
  },
  {
    id: 3,
    title: 'Summer Jewelry Care Guide',
    excerpt: 'Keep your pieces sparkling all season long with our simple care tips.',
    date: 'May 15, 2026',
    category: 'Care',
  },
]

export default function JournalPage() {
  return (
    <main className="pt-20 sm:pt-24">
      <div className="bg-cream-dark py-10 sm:py-14 text-center">
        <p className="text-overline font-medium tracking-[0.25em] text-gold uppercase mb-2">
          The Velmora Edit
        </p>
        <h1 className="font-serif text-display-sm text-charcoal">Journal</h1>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        {articles.map((article) => (
          <article key={article.id} className="group cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-overline font-medium tracking-widest text-gold uppercase">
                {article.category}
              </span>
              <span className="text-body-sm text-warm-gray-lighter">·</span>
              <span className="text-body-sm text-warm-gray">{article.date}</span>
            </div>
            <h2 className="font-serif text-heading text-charcoal mb-2 group-hover:text-gold transition-colors">
              {article.title}
            </h2>
            <p className="text-body text-warm-gray leading-relaxed mb-4">
              {article.excerpt}
            </p>
            <span className="text-body-sm font-medium text-charcoal group-hover:text-gold transition-colors">
              Read More →
            </span>
            <div className="mt-8 border-b border-parchment" />
          </article>
        ))}
      </div>
    </main>
  )
}
