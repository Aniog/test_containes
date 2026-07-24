import React from 'react'
import { Link } from 'react-router-dom'

export default function JournalPage() {
  const articles = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and styles.',
      date: 'July 15, 2026',
      category: 'Styling Tips',
    },
    {
      id: 2,
      title: 'The Care Guide: Keeping Your Gold Jewelry Beautiful',
      excerpt: 'Simple steps to maintain the luster of your 18K gold plated pieces for years to come.',
      date: 'July 8, 2026',
      category: 'Care Guide',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Occasion',
      excerpt: 'From birthdays to anniversaries, find the perfect piece for the special women in your life.',
      date: 'June 28, 2026',
      category: 'Gift Guide',
    },
  ]

  return (
    <div className="section-padding bg-background">
      <div className="container-padding">
        <h1 className="serif-heading text-4xl md:text-5xl mb-4 text-center">Journal</h1>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Styling tips, care guides, and stories from the world of Velmora.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <div className="aspect-[4/3] bg-secondary mb-4 overflow-hidden">
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                  Article Image
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-xs tracking-wider uppercase text-primary">{article.category}</span>
                <h2 className="serif-heading text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                <p className="text-xs text-muted-foreground">{article.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
