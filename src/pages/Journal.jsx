import React from 'react'
import { Link } from 'react-router-dom'

const JournalPage = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Style Gold Huggies for Every Occasion',
      excerpt: 'From boardroom to bar, learn how to make huggie earrings your go-to accessory for any setting.',
      date: 'July 15, 2026',
    },
    {
      id: 2,
      title: 'The Complete Guide to Caring for Gold Plated Jewelry',
      excerpt: 'Keep your demi-fine pieces looking brand new with our expert care tips and storage advice.',
      date: 'July 8, 2026',
    },
    {
      id: 3,
      title: '5 Jewelry Trends That Are Defining 2026',
      excerpt: 'From sculptural silhouettes to mixed metals, discover the trends shaping how we accessorize this year.',
      date: 'June 28, 2026',
    },
  ]

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-charcoal">
            Journal
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
          <p className="mt-4 text-sm text-charcoal/60 font-sans max-w-md mx-auto">
            Stories, guides, and inspiration from the world of Velmora.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {posts.map(post => (
            <article key={post.id} className="border-t border-divider pt-8 first:border-t-0 first:pt-0">
              <p className="text-xs text-charcoal/40 font-sans mb-2">{post.date}</p>
              <h2 className="font-serif text-xl md:text-2xl tracking-wide text-charcoal mb-3">
                {post.title}
              </h2>
              <p className="text-sm text-charcoal/60 font-sans leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <button className="text-xs tracking-product font-sans font-medium text-gold hover:text-gold-hover transition-colors">
                READ MORE
              </button>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/shop"
            className="inline-block px-10 py-3 border border-charcoal text-charcoal text-xs tracking-product font-sans font-medium hover:bg-charcoal hover:text-cream transition-colors duration-200"
          >
            BACK TO SHOP
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JournalPage
