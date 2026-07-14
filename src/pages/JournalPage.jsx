import React from 'react'
import { Link } from 'react-router-dom'

export default function JournalPage() {
  const posts = [
    {
      id: 1,
      title: 'How to Style Gold Huggies for Every Occasion',
      excerpt: 'From boardroom to bar, learn how to make huggies your most versatile jewelry staple.',
      date: 'July 2026',
    },
    {
      id: 2,
      title: 'The Truth About Gold Plating: What You Need to Know',
      excerpt: 'Demystifying gold-plated jewelry — how it\'s made, how long it lasts, and how to care for it.',
      date: 'June 2026',
    },
    {
      id: 3,
      title: '5 Jewelry Gift Ideas She\'ll Actually Love',
      excerpt: 'Skip the guesswork. Our curated guide to gifting jewelry that feels personal and thoughtful.',
      date: 'May 2026',
    },
  ]

  return (
    <div className="bg-cream-50 min-h-screen pt-24 md:pt-28">
      <div className="container-wide pb-20">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-charcoal">Journal</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="max-w-2xl mx-auto space-y-12">
          {posts.map(post => (
            <article key={post.id} className="border-t border-stone-200 pt-8">
              <p className="text-xs font-sans text-stone-400 tracking-wide mb-2">{post.date}</p>
              <h2 className="font-serif text-2xl tracking-wide text-charcoal mb-3 hover:text-gold transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="text-stone-600 font-sans text-sm leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 text-xs font-sans tracking-widest uppercase text-gold hover:text-gold-dark cursor-pointer transition-colors">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
