import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const POSTS = [
  {
    id: 'journal-1',
    title: 'How to Style Gold Huggies Every Day',
    excerpt: 'Three ways to wear the Golden Sphere Huggies from desk to dinner.',
    category: 'Styling',
  },
  {
    id: 'journal-2',
    title: 'The Quiet Luxury of Demi-Fine Gold',
    excerpt: 'Why 18K gold plating is the modern heirloom you will actually wear.',
    category: 'Materials',
  },
  {
    id: 'journal-3',
    title: 'A Gift Guide for the Women You Love',
    excerpt: 'Considered pieces for the moments that matter — gifting, made simple.',
    category: 'Gifting',
  },
]

export default function JournalPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <div className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-widest2 text-champagne-deep mb-3">
            Stories
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">The Journal</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {POSTS.map((post) => (
          <article key={post.id} className="group">
            <div className="relative aspect-[4/3] overflow-hidden bg-sand mb-5">
              <img
                alt={post.title}
                data-strk-img-id={`${post.id}-img`}
                data-strk-img={`[journal-excerpt-${post.id}] [journal-title-${post.id}] gold jewelry editorial warm`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="text-xs uppercase tracking-widest3 text-champagne-deep mb-2">
              {post.category}
            </p>
            <h2
              id={`journal-title-${post.id}`}
              className="font-serif text-2xl text-ink leading-tight"
            >
              {post.title}
            </h2>
            <p
              id={`journal-excerpt-${post.id}`}
              className="mt-2 text-stone text-sm leading-relaxed"
            >
              {post.excerpt}
            </p>
            <Link
              to="/journal"
              className="inline-block mt-4 text-xs uppercase tracking-widest2 text-ink border-b border-champagne pb-0.5 hover:text-champagne-deep transition-colors"
            >
              Read More
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
