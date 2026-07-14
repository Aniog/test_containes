import React from 'react'
import { Link } from 'react-router-dom'

const POSTS = [
  {
    id: 'p1',
    title: 'How to Layer Gold Necklaces Like a Stylist',
    excerpt: 'The art of the layered look — chain lengths, weights, and the rule of three.',
    category: 'Styling',
    date: 'July 2026',
  },
  {
    id: 'p2',
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'Simple rituals to keep your demi-fine pieces glowing for years.',
    category: 'Care',
    date: 'June 2026',
  },
  {
    id: 'p3',
    title: 'The Quiet Luxury Movement',
    excerpt: 'Why understated gold is defining a new era of personal style.',
    category: 'Culture',
    date: 'May 2026',
  },
]

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Notes & Stories
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">The Journal</h1>
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {POSTS.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-sand mb-5 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-sand to-line transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">
                  {post.category} · {post.date}
                </p>
                <h2 className="font-serif text-2xl text-ink mb-3 group-hover:text-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-stone leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="text-xs uppercase tracking-[0.15em] text-ink underline underline-offset-4">
                  Read More
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
