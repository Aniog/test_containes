import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
  { id: 1, title: "How to Style Gold Jewelry Year-Round", excerpt: "From delicate chains to bold cuffs, discover the art of layering.", date: "July 12, 2026" },
  { id: 2, title: "Behind the Design: The Heirloom Set", excerpt: "A closer look at the inspiration and craftsmanship behind our signature gift set.", date: "June 28, 2026" },
  { id: 3, title: "Caring for Your Demi-Fine Pieces", excerpt: "Simple rituals to keep your jewelry looking beautiful for years to come.", date: "June 10, 2026" },
]

export default function Journal() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.15em] text-[#C5A26F] mb-3">STORIES & INSPIRATION</div>
          <h1 className="serif text-6xl">The Journal</h1>
        </div>

        <div className="space-y-16">
          {posts.map(post => (
            <article key={post.id} className="border-b border-[#E5E0D8] pb-16 last:border-0">
              <div className="text-xs tracking-[0.1em] text-[#8B7E6F] mb-3">{post.date}</div>
              <h2 className="serif text-3xl mb-4 hover:text-[#C5A26F] transition-colors cursor-pointer">{post.title}</h2>
              <p className="text-[#6B6B5F] mb-6 max-w-2xl">{post.excerpt}</p>
              <span className="text-sm tracking-[0.08em] text-[#C5A26F] cursor-pointer">READ MORE →</span>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop" className="btn btn-outline">Shop the Collection</Link>
        </div>
      </div>
    </div>
  )
}