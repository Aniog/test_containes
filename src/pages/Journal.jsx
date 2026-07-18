import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const journalPosts = [
  {
    id: 'how-to-style-huggies',
    title: 'How to Style Huggies for Every Occasion',
    excerpt: 'From minimalist stacks to bold statements, discover the art of wearing huggie earrings with confidence.',
    imgId: 'journal-huggies-a1b2c3',
    titleId: 'journal-huggies-title',
  },
  {
    id: 'gold-care-guide',
    title: 'The Complete Gold Jewelry Care Guide',
    excerpt: 'Keep your pieces looking brand new with our expert tips for cleaning and storing demi-fine jewelry.',
    imgId: 'journal-care-d4e5f6',
    titleId: 'journal-care-title',
  },
  {
    id: 'gifting-guide',
    title: 'The Ultimate Jewelry Gifting Guide',
    excerpt: 'Finding the perfect piece for every personality — from the minimalist to the maximalist.',
    imgId: 'journal-gift-g7h8i9',
    titleId: 'journal-gift-title',
  },
]

export default function Journal() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">
            The Journal
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
          <p className="mt-4 text-sm text-muted max-w-md mx-auto">
            Styling tips, care guides, and stories from the world of Velmora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalPosts.map(post => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-sand mb-4">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.titleId}] jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2
                id={post.titleId}
                className="font-serif text-lg uppercase tracking-[0.08em] text-charcoal group-hover:text-gold transition-colors duration-300"
              >
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-3 text-xs tracking-[0.15em] uppercase text-gold underline underline-offset-4">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
