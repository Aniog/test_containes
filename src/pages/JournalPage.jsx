import React from 'react'
import { Link } from 'react-router-dom'

const journalPosts = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and styles.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    date: 'July 15, 2026',
    category: 'Styling',
  },
  {
    id: 2,
    title: 'The Care Guide: Making Your Jewelry Last',
    excerpt: 'Simple tips to keep your Velmora pieces looking brand new for years to come.',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=400&fit=crop',
    date: 'July 8, 2026',
    category: 'Care',
  },
  {
    id: 3,
    title: 'Gift Guide: Jewelry for Every Occasion',
    excerpt: 'From birthdays to anniversaries, find the perfect piece for the special women in your life.',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=400&fit=crop',
    date: 'June 28, 2026',
    category: 'Gifts',
  },
]

export default function JournalPage() {
  return (
    <main className="pt-20 lg:pt-24">
      {/* Header */}
      <div className="bg-secondary/30 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            The Velmora Journal
          </p>
          <h1 className="serif-heading text-4xl md:text-5xl lg:text-6xl mb-4">
            Stories & Style
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Styling tips, care guides, and behind-the-scenes glimpses into the world of Velmora.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {journalPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[3/2] overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-wider text-primary">{post.category}</span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h2 className="serif-heading text-2xl mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <Link to={`/journal/${post.id}`} className="text-sm uppercase tracking-wider border-b border-foreground/20 pb-1 hover:border-primary hover:text-primary transition-colors">
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
