import React from 'react'
import { Link } from 'react-router-dom'

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Style Gold Huggies for Every Occasion',
      excerpt: 'From boardroom to bar, learn how to make huggie earrings your go-to accessory.',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=400&fit=crop',
      date: 'June 12, 2026',
    },
    {
      id: 2,
      title: 'The Art of Layering Necklaces',
      excerpt: 'Master the layered look with our guide to combining chains, pendants, and chokers.',
      image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b6f5?w=600&h=400&fit=crop',
      date: 'May 28, 2026',
    },
    {
      id: 3,
      title: 'Caring for Your Gold-Plated Jewelry',
      excerpt: 'Simple tips to keep your demi-fine pieces looking brand new for years to come.',
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=400&fit=crop',
      date: 'May 15, 2026',
    },
  ]

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">Journal</h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
          <p className="text-brand-warm-gray mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Styling tips, care guides, and stories from behind the workbench.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {posts.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden rounded-sm mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-brand-warm-gray mb-2">{post.date}</p>
              <h2 className="font-serif text-lg tracking-wide text-brand-charcoal group-hover:text-brand-gold transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-brand-warm-gray mt-2 leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Journal
