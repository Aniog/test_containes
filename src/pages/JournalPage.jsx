import React from 'react'
import { Link } from 'react-router-dom'

export default function JournalPage() {
  const posts = [
    {
      id: 'how-to-style-gold-earrings',
      title: 'How to Style Gold Earrings for Every Occasion',
      excerpt: 'From boardroom to bar, learn how to layer and pair your gold earrings for maximum impact.',
      date: 'July 15, 2026',
    },
    {
      id: 'the-difference-between-fine-and-demi-fine',
      title: 'Fine vs. Demi-Fine: What You Need to Know',
      excerpt: 'Understanding the difference can save you hundreds — without sacrificing quality or style.',
      date: 'July 8, 2026',
    },
    {
      id: 'caring-for-your-gold-jewelry',
      title: 'The Complete Guide to Caring for Gold Jewelry',
      excerpt: 'Keep your pieces looking brand new with our expert tips on cleaning, storing, and wearing.',
      date: 'June 28, 2026',
    },
  ]

  return (
    <div className="bg-brand-cream pt-20 md:pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            The Journal
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
          <p className="mt-4 font-sans text-sm text-brand-muted tracking-wide max-w-md mx-auto">
            Stories, guides, and inspiration from the world of Velmora.
          </p>
        </div>

        <div className="space-y-12">
          {posts.map(post => (
            <article key={post.id} className="border-t border-brand-sand pt-8">
              <time className="font-sans text-xs uppercase tracking-extra-wide text-brand-muted">
                {post.date}
              </time>
              <h2 className="font-serif text-xl md:text-2xl text-brand-charcoal tracking-wide mt-2">
                {post.title}
              </h2>
              <p className="font-sans text-sm text-brand-muted leading-relaxed mt-3">
                {post.excerpt}
              </p>
              <Link
                to="#"
                className="inline-block mt-4 font-sans text-xs uppercase tracking-super-wide text-brand-gold hover:text-brand-gold-dark transition-colors duration-300"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
