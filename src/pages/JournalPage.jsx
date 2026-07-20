import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function JournalPage() {
  const containerRef = useRef(null)

  const posts = [
    {
      id: 1,
      title: 'The Art of Layering Necklaces',
      excerpt: 'How to build a necklace stack that feels effortless and elegant.',
      date: 'July 15, 2026',
    },
    {
      id: 2,
      title: 'Why 18K Gold Plate is the Smart Choice',
      excerpt: 'Understanding the beauty and durability of demi-fine jewelry.',
      date: 'June 28, 2026',
    },
    {
      id: 3,
      title: 'Jewelry Care: A Complete Guide',
      excerpt: 'Keep your Velmora pieces shining for years to come.',
      date: 'June 10, 2026',
    },
  ]

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 md:py-20">
        <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
          Journal
        </p>
        <h1 className="font-serif text-3xl md:text-5xl tracking-wide mb-12">
          Stories & Style
        </h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-velmora-sand mb-5 overflow-hidden">
                <img
                  data-strk-img-id={`journal-${post.id}`}
                  data-strk-img={`[journal-title-${post.id}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-velmora group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] uppercase tracking-widest text-velmora-taupe mb-2">
                {post.date}
              </p>
              <h2
                id={`journal-title-${post.id}`}
                className="font-serif text-xl tracking-wide mb-2 group-hover:text-velmora-gold transition-colors"
              >
                {post.title}
              </h2>
              <p className="text-sm text-velmora-warmgray leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 border border-velmora-ink px-8 py-4 text-xs uppercase tracking-[0.2em] text-velmora-ink transition-all duration-300 hover:bg-velmora-ink hover:text-white"
          >
            Shop the Collection
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
