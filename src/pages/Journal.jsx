import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const journalPosts = [
  {
    id: 'journal-1',
    title: 'How to Style Gold Huggies for Every Occasion',
    excerpt: 'From boardroom to bar, learn how to make huggie earrings your go-to accessory for any moment.',
    imgId: 'journal-huggies-m3n4o5',
    titleId: 'journal-huggies-title',
    descId: 'journal-huggies-desc',
  },
  {
    id: 'journal-2',
    title: 'The Art of Layering Necklaces',
    excerpt: 'Master the layered look with our guide to combining chains, pendants, and chokers effortlessly.',
    imgId: 'journal-layering-p6q7r8',
    titleId: 'journal-layering-title',
    descId: 'journal-layering-desc',
  },
  {
    id: 'journal-3',
    title: 'Caring for Your Gold-Plated Jewelry',
    excerpt: 'Simple tips to keep your demi-fine pieces looking brand new, season after season.',
    imgId: 'journal-care-s9t0u1',
    titleId: 'journal-care-title',
    descId: 'journal-care-desc',
  },
]

export default function Journal() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-warm-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h1
            id="journal-title"
            className="font-serif text-4xl md:text-6xl text-deep-charcoal tracking-wide"
          >
            Journal
          </h1>
          <p className="mt-4 font-sans text-sm md:text-base text-warm-gray-500 tracking-wide max-w-xl mx-auto">
            Styling tips, care guides, and stories from the world of Velmora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {journalPosts.map(post => (
            <article key={post.id} className="group">
              <div className="aspect-[4x3] bg-antique-white overflow-hidden mb-4">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] [journal-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h2
                id={post.titleId}
                className="font-serif text-lg md:text-xl text-deep-charcoal tracking-wide group-hover:text-champagne-gold transition-colors"
              >
                {post.title}
              </h2>
              <p
                id={post.descId}
                className="font-sans text-sm text-warm-gray-500 mt-2 leading-relaxed"
              >
                {post.excerpt}
              </p>
              <span className="inline-block mt-3 font-sans text-xs tracking-super-wide uppercase text-champagne-gold">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
