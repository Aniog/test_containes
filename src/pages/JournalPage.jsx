import React from 'react'
import { Link } from 'react-router-dom'

const journalPosts = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
    date: 'July 10, 2026',
    category: 'Styling',
  },
  {
    id: 2,
    title: 'The Care Guide: Keeping Your Gold Jewelry Beautiful',
    excerpt: 'Simple tips to maintain the luster of your 18K gold plated pieces for years to come.',
    date: 'July 5, 2026',
    category: 'Care',
  },
  {
    id: 3,
    title: 'Gift Guide: Jewelry for Every Occasion',
    excerpt: 'From birthdays to anniversaries, find the perfect piece for the special women in your life.',
    date: 'June 28, 2026',
    category: 'Gifts',
  },
]

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-[var(--velmora-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="velmora-label text-[var(--velmora-accent)] mb-4 text-center">The Journal</p>
        <h1 className="velmora-heading text-4xl md:text-5xl text-center mb-8">Stories & Style</h1>
        <div className="velmora-divider-thin w-24 mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-[var(--velmora-bg-alt)] mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[var(--velmora-border)] to-[var(--velmora-bg-alt)] group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="velmora-label text-[var(--velmora-accent)]">{post.category}</span>
                <span className="text-xs text-[var(--velmora-text-light)]">{post.date}</span>
              </div>
              <h2 className="velmora-heading text-xl mb-2 group-hover:text-[var(--velmora-accent)] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[var(--velmora-text-muted)] leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-block mt-4 text-sm text-[var(--velmora-accent)] group-hover:underline">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
