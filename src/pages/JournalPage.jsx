import React from 'react'
import { Link } from 'react-router-dom'

const journalPosts = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'The art of layering is all about varying lengths, textures, and pendant sizes. Here is our guide to getting it right.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    date: 'July 15, 2026',
  },
  {
    id: 2,
    title: 'The Care Guide: Making Your Gold Last',
    excerpt: 'With proper care, your 18K gold plated pieces can stay beautiful for years. Learn our top tips for maintenance.',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    date: 'July 8, 2026',
  },
  {
    id: 3,
    title: 'Gift Guide: Jewelry She Will Actually Love',
    excerpt: 'Struggling to find the perfect gift? Our curated picks make it easy to choose something she will treasure.',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    date: 'June 28, 2026',
  },
]

export default function JournalPage() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">The Journal</p>
        <h1 className="serif-heading text-5xl md:text-6xl text-center mb-16">Stories & Guides</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {journalPosts.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
              <h2 className="serif-heading text-2xl mb-3 group-hover:text-accent transition-colors">{post.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 text-xs tracking-widest uppercase border-b border-primary/30 pb-0.5 group-hover:border-accent transition-colors">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
