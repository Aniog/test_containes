import React from 'react'
import { Link } from 'react-router-dom'

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Style Gold Jewelry for Every Occasion',
      excerpt: 'From boardroom to brunch, discover versatile ways to wear your favorite gold pieces.',
      date: 'July 15, 2026',
      category: 'Style Guide',
    },
    {
      id: 2,
      title: 'The Art of Layering Necklaces',
      excerpt: 'Master the layered look with our simple guide to combining chains and pendants.',
      date: 'July 8, 2026',
      category: 'How-To',
    },
    {
      id: 3,
      title: 'Behind the Craft: Meet Our Artisans',
      excerpt: 'A look inside the workshop where every Velmora piece comes to life.',
      date: 'June 28, 2026',
      category: 'Behind the Scenes',
    },
  ]

  return (
    <div className="min-h-screen bg-velmora-cream pt-20 sm:pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-14">
          <h1 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal tracking-wide">Journal</h1>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                <div className="w-full sm:w-64 aspect-[4/3] bg-velmora-warm-gray flex-shrink-0 flex items-center justify-center">
                  <span className="font-serif text-sm text-velmora-muted tracking-wider uppercase text-center px-4">{post.category}</span>
                </div>
                <div className="flex-1">
                  <span className="text-xs font-sans text-velmora-gold tracking-wider uppercase">{post.category}</span>
                  <h2 className="font-serif text-xl sm:text-2xl text-velmora-charcoal mt-1 group-hover:text-velmora-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-velmora-muted font-sans mt-2 leading-relaxed">{post.excerpt}</p>
                  <p className="text-xs text-velmora-muted font-sans mt-3">{post.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/shop"
            className="inline-block px-10 py-3.5 border border-velmora-gold text-velmora-gold text-sm tracking-wider uppercase font-sans hover:bg-velmora-gold hover:text-white transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Journal
