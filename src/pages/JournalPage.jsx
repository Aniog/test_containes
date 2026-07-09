import React from 'react'
import { Link } from 'react-router-dom'

export default function JournalPage() {
  const posts = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
      date: 'June 15, 2026',
      category: 'Style Guide',
    },
    {
      id: 2,
      title: 'The Care Guide: Making Your Gold Jewelry Last',
      excerpt: 'Simple tips to keep your Velmora pieces looking brand new for years to come.',
      date: 'June 8, 2026',
      category: 'Care',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Occasion',
      excerpt: 'From birthdays to anniversaries, find the perfect piece for the special women in your life.',
      date: 'May 28, 2026',
      category: 'Gift Guide',
    },
  ]

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-[var(--velmora-bg-alt)] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="serif-heading text-4xl md:text-5xl tracking-[0.05em] mb-4">
            The Journal
          </h1>
          <p className="text-[var(--velmora-text-secondary)]">
            Style tips, care guides, and stories from the Velmora world
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group border-b border-[var(--velmora-border-light)] pb-12 last:border-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-gold)]">
                  {post.category}
                </span>
                <span className="text-xs text-[var(--velmora-text-muted)]">
                  {post.date}
                </span>
              </div>
              <h2 className="serif-heading text-2xl md:text-3xl mb-3 group-hover:text-[var(--velmora-gold)] transition-colors">
                {post.title}
              </h2>
              <p className="text-[var(--velmora-text-secondary)] leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <a
                href="#"
                className="text-sm tracking-[0.1em] uppercase text-[var(--velmora-text)] hover:text-[var(--velmora-gold)] transition-colors inline-flex items-center gap-2"
              >
                Read More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
