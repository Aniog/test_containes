import React from 'react'
import { Link } from 'react-router-dom'

export default function JournalPage() {
  const posts = [
    {
      id: 'how-to-style-gold-earrings',
      title: 'How to Style Gold Earrings for Every Occasion',
      excerpt: 'From boardroom to bar, learn how to elevate any look with the right pair of gold earrings.',
      date: 'July 15, 2026',
    },
    {
      id: 'the-rise-of-demi-fine',
      title: 'The Rise of Demi-Fine Jewelry',
      excerpt: 'Why more women are choosing quality over quantity when it comes to their jewelry collections.',
      date: 'July 8, 2026',
    },
    {
      id: 'caring-for-gold-plated',
      title: 'Caring for Your Gold Plated Jewelry',
      excerpt: 'Simple tips to keep your Velmora pieces looking as brilliant as the day you received them.',
      date: 'June 28, 2026',
    },
  ]

  return (
    <div className="bg-ivory pt-20 md:pt-24 min-h-screen">
      <div className="bg-warm-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-warm-white text-3xl md:text-5xl font-light uppercase tracking-[0.15em]">
            Journal
          </h1>
          <div className="w-12 h-px bg-muted-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="space-y-12">
          {posts.map(post => (
            <article key={post.id} className="border-b border-warm-charcoal/10 pb-12">
              <p className="text-warm-gray text-xs uppercase tracking-[0.2em] mb-3">{post.date}</p>
              <h2 className="font-serif text-warm-black text-2xl md:text-3xl font-light uppercase tracking-[0.1em] mb-4">
                {post.title}
              </h2>
              <p className="text-warm-gray text-sm md:text-base leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="text-muted-gold text-xs uppercase tracking-[0.2em] cursor-pointer hover:text-bright-gold transition-colors">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
