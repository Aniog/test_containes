import React from 'react'
import { Link } from 'react-router-dom'

export default function JournalPage() {
  const posts = [
    { title: 'The Art of Layering Gold', excerpt: 'How to mix and stack your favorite pieces for maximum impact.', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format' },
    { title: 'Caring for Your Demi-Fine Jewelry', excerpt: 'Simple tips to keep your pieces looking brilliant for years.', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format' },
    { title: 'Behind the Design: The Huggie', excerpt: 'Our take on the iconic silhouette—the story behind our bestseller.', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format' },
  ]
  return (
    <main className="bg-cream min-h-screen">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20">
        <h1 className="font-serif text-3xl md:text-5xl text-deep-charcoal">Journal</h1>
        <p className="text-taupe text-sm md:text-base mt-3 max-w-lg">
          Stories, guides, and inspiration from the Velmora studio.
        </p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10">
          {posts.map((post) => (
            <Link key={post.title} to="#" className="group">
              <div className="aspect-[4/3] bg-warm-beige/30 overflow-hidden mb-4">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <h2 className="font-serif text-xl text-deep-charcoal group-hover:text-gold transition-colors">{post.title}</h2>
              <p className="text-taupe text-sm mt-2 leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
