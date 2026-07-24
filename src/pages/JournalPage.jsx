import React from 'react'
import { Link } from 'react-router-dom'

const journalPosts = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'The art of layering is all about mixing lengths, textures, and weights. Here is our guide to creating the perfect stack.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop',
    date: 'July 15, 2026',
    category: 'Style Guide',
  },
  {
    id: 2,
    title: 'The Care Guide: Making Your Gold Last',
    excerpt: 'With proper care, your 18K gold plated pieces can maintain their luster for years. Here are our top tips.',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=500&fit=crop',
    date: 'July 8, 2026',
    category: 'Care',
  },
  {
    id: 3,
    title: 'Gift Guide: Jewelry for Every Occasion',
    excerpt: 'From birthdays to anniversaries, find the perfect piece for the special women in your life.',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=500&fit=crop',
    date: 'June 28, 2026',
    category: 'Gift Guide',
  },
]

const JournalPage = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <div className="container-padding py-8 md:py-12 text-center">
        <h1 className="serif-heading text-3xl md:text-4xl mb-2">The Journal</h1>
        <p className="text-muted-foreground text-sm">Style guides, care tips, and behind the scenes</p>
        <div className="w-12 h-px bg-primary mx-auto mt-4" />
      </div>

      {/* Posts */}
      <div className="container-padding pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden bg-secondary mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="text-xs tracking-widest uppercase text-primary">{post.category}</span>
              <h2 className="serif-heading text-xl mt-2 mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{post.excerpt}</p>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export default JournalPage
