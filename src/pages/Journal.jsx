import React from 'react'
import { Link } from 'react-router-dom'

const Journal = () => {
  const articles = [
    {
      id: 'how-to-style-gold-huggies',
      title: 'How to Style Gold Huggies for Every Occasion',
      excerpt: 'From boardroom to weekend brunch — your guide to making huggies work everywhere.',
      date: 'July 2026',
    },
    {
      id: 'the-art-of-layering-necklaces',
      title: 'The Art of Layering Necklaces',
      excerpt: 'Master the layered look with our guide to combining lengths, textures, and tones.',
      date: 'June 2026',
    },
    {
      id: 'caring-for-gold-plated-jewelry',
      title: 'Caring for Your Gold-Plated Jewelry',
      excerpt: 'Simple habits that keep your demi-fine pieces looking brand new for years.',
      date: 'May 2026',
    },
  ]

  return (
    <div className="min-h-screen bg-warmCream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-textDark tracking-wide">
            The Journal
          </h1>
          <p className="font-sans text-base text-textMuted mt-4 max-w-xl mx-auto">
            Stories, guides, and inspiration from the world of Velmora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {articles.map(article => (
            <article key={article.id} className="group">
              <div className="aspect-[4/3] bg-surface rounded-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-surface to-divider/50 flex items-center justify-center">
                  <span className="font-serif text-lg text-textMuted/50 italic">Coming Soon</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-sans text-xs text-textMuted tracking-wide">{article.date}</p>
                <h2 className="font-serif text-xl font-medium text-textDark mt-2 group-hover:text-gold transition-colors">
                  {article.title}
                </h2>
                <p className="font-sans text-sm text-textMuted mt-2 leading-relaxed">{article.excerpt}</p>
                <Link to="/journal" className="font-sans text-sm text-gold mt-3 inline-block hover:text-goldLight transition-colors">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Journal
