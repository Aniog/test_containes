import React from 'react'
import { Link } from 'react-router-dom'

const journalPosts = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    date: 'June 15, 2026',
    category: 'Style Guide',
  },
  {
    id: 2,
    title: 'The Care Guide: Making Your Gold Jewelry Last',
    excerpt: 'Simple tips to keep your demi-fine pieces looking brand new for years to come.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    date: 'June 8, 2026',
    category: 'Care Tips',
  },
  {
    id: 3,
    title: 'Gift Guide: Jewelry She\'ll Actually Love',
    excerpt: 'From birthdays to anniversaries, our curated picks for every occasion and every type of woman.',
    image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=800&q=80',
    date: 'May 28, 2026',
    category: 'Gift Guide',
  },
]

export default function JournalPage() {
  return (
    <main className="pt-20 md:pt-24">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle">The Velmora Journal</p>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal-950 mt-4 tracking-wide">
              Style, Stories & Care
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journalPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden bg-velmora-100 mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs tracking-widest uppercase text-gold-600">{post.category}</span>
                <h2 className="font-serif text-xl md:text-2xl text-charcoal-950 mt-2 tracking-wide group-hover:text-gold-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-charcoal-500 mt-2 leading-relaxed">{post.excerpt}</p>
                <p className="text-xs text-charcoal-400 mt-4">{post.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
