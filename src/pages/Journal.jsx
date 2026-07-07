import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const POSTS = [
  {
    id: 'layering-guide',
    title: 'The Art of Layering',
    subtitle: 'How to stack necklaces, cuffs, and huggies without the clutter.',
    category: 'Style Notes',
  },
  {
    id: 'gift-guide',
    title: 'A Guide to Gifting Gold',
    subtitle: 'Meaningful pieces for birthdays, anniversaries, and just because.',
    category: 'Gifting',
  },
  {
    id: 'care-guide',
    title: 'Caring for Demi-Fine Jewelry',
    subtitle: 'Simple habits to keep your gold pieces glowing for years.',
    category: 'Care',
  },
]

export default function Journal() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div className="bg-cream min-h-screen pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-4">
            The Journal
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            Stories & Style Notes
          </h1>
          <p className="mt-4 text-sm text-charcoal/70 font-sans max-w-md mx-auto">
            Inspiration for wearing, gifting, and treasuring your jewelry.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <Link
                to="/journal"
                className="block relative aspect-[4/5] bg-champagne/30 overflow-hidden mb-5"
              >
                <img
                  data-strk-img-id={`journal-${post.id}-image`}
                  data-strk-img={`[journal-${post.id}-subtitle] [journal-${post.id}-title]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <span className="text-[10px] uppercase tracking-widest font-sans text-gold">
                {post.category}
              </span>
              <h2
                id={`journal-${post.id}-title`}
                className="font-serif text-xl md:text-2xl text-espresso mt-2 mb-2"
              >
                <Link
                  to="/journal"
                  className="hover:text-gold transition-colors duration-300"
                >
                  {post.title}
                </Link>
              </h2>
              <p
                id={`journal-${post.id}-subtitle`}
                className="text-sm text-charcoal/70 font-sans font-light"
              >
                {post.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
