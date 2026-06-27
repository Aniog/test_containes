import React from 'react'
import { Link } from 'react-router-dom'

const journalPosts = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop',
    date: 'June 15, 2026',
    category: 'Styling',
  },
  {
    id: 2,
    title: 'The Care Guide: Keeping Your Gold Jewelry Beautiful',
    excerpt: 'Simple tips to maintain the luster of your 18K gold plated pieces for years to come.',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=500&fit=crop',
    date: 'June 8, 2026',
    category: 'Care',
  },
  {
    id: 3,
    title: 'Gift Guide: Jewelry She Will Actually Love',
    excerpt: 'From birthdays to anniversaries, our curated picks for every occasion and every style.',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=500&fit=crop',
    date: 'May 28, 2026',
    category: 'Gifts',
  },
]

export default function JournalPage() {
  return (
    <main className="pt-20 md:pt-24">
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">The Velmora Journal</p>
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Stories & Style</h1>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {journalPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs uppercase tracking-wider text-gold mb-2">{post.category}</p>
                <h2 className="font-serif text-xl mb-2 group-hover:text-gold transition-colors">{post.title}</h2>
                <p className="text-sm text-warm-gray leading-relaxed mb-3">{post.excerpt}</p>
                <p className="text-xs text-muted">{post.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
