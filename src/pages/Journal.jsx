import React from 'react'
import { Link } from 'react-router-dom'

export default function JournalPage() {
  const posts = [
    {
      id: 1,
      title: 'How to Style Gold Jewelry for Every Occasion',
      excerpt: 'From boardroom to brunch — your complete guide to layering, stacking, and styling demi-fine gold pieces.',
      date: 'June 2026',
    },
    {
      id: 2,
      title: 'The Art of Gifting: Choosing Jewelry She\'ll Love',
      excerpt: 'A thoughtful guide to selecting the perfect piece — whether it\'s for a birthday, anniversary, or just because.',
      date: 'May 2026',
    },
    {
      id: 3,
      title: 'Caring for Your 18K Gold Plated Jewelry',
      excerpt: 'Simple tips to keep your Velmora pieces looking as brilliant as the day you received them.',
      date: 'April 2026',
    },
  ]

  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-velmora-charcoal">
            Journal
          </h1>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {posts.map(post => (
            <article key={post.id} className="border-t border-velmora-border pt-8">
              <span className="font-sans text-xs tracking-wide text-velmora-warm-gray">{post.date}</span>
              <h2 className="font-serif text-xl md:text-2xl tracking-wide text-velmora-charcoal mt-2">
                {post.title}
              </h2>
              <p className="font-sans text-sm text-velmora-warm-gray leading-relaxed mt-3">
                {post.excerpt}
              </p>
              <Link
                to="#"
                className="inline-block mt-4 font-sans text-xs tracking-ultra-wide uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors duration-300"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
