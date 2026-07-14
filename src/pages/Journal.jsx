import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const posts = [
  { id: 1, title: 'How to Style Gold Jewelry for Work', excerpt: 'Elevate your office wardrobe with subtle gold pieces that say confident, not loud.', date: '2026-07-10' },
  { id: 2, title: 'The Art of Gifting Jewelry', excerpt: 'A guide to choosing the perfect piece for every personality and occasion.', date: '2026-07-03' },
  { id: 3, title: 'Behind the Design: Golden Sphere Huggies', excerpt: 'From sketch to shelf — the making of our bestselling huggies.', date: '2026-06-25' },
]

export default function Journal() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="section-title mb-3">Journal</h1>
          <p className="text-brand-muted text-sm">Stories, style guides, and behind-the-scenes.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-soft">
              <div className="aspect-[4/3] bg-brand-warm">
                <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80" alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs text-brand-subtle mb-2">{post.date}</p>
                <h2 className="font-serif text-xl mb-2">{post.title}</h2>
                <p className="text-sm text-brand-muted mb-4">{post.excerpt}</p>
                <Link to={`/journal/${post.id}`} className="text-sm text-brand-ink underline underline-offset-4">Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
