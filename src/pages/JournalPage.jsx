import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: 'The Art of Layering: A Guide to Stacking Necklaces',
    excerpt: 'Master the art of necklace layering with our simple guide to creating effortless, personalized stacks.',
    date: 'June 28, 2026',
  },
  {
    id: 2,
    title: 'Caring for Your Gold-Plated Jewelry',
    excerpt: 'Keep your pieces looking brand new with our essential care tips for 18K gold-plated jewelry.',
    date: 'June 15, 2026',
  },
  {
    id: 3,
    title: '5 Timeless Earring Styles Every Woman Needs',
    excerpt: 'From huggies to statement drops, these are the earring styles that never go out of fashion.',
    date: 'May 30, 2026',
  },
]

export default function JournalPage() {
  return (
    <main className="pt-24 md:pt-28 pb-16 bg-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl tracking-ultra-wide uppercase text-text-primary">
            Journal
          </h1>
          <div className="w-12 h-px bg-muted-gold mx-auto mt-4" />
        </div>

        <div className="space-y-8">
          {posts.map(post => (
            <article key={post.id} className="border-b border-warm-charcoal/10 pb-8">
              <p className="text-xs text-text-muted uppercase tracking-widest mb-2">{post.date}</p>
              <h2 className="font-serif text-xl md:text-2xl text-text-primary mb-3">{post.title}</h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-xs uppercase tracking-widest text-muted-gold cursor-pointer hover:text-bright-gold transition-colors">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
