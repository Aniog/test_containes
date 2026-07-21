import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    id: 'j1',
    title: 'How to Build a Curated Ear',
    excerpt: 'A simple guide to stacking huggies, cuffs, and studs for an effortless look.',
    category: 'Styling',
    imgId: 'journal-1-velmora-4d2e',
    titleId: 'journal-1-title',
    descId: 'journal-1-desc',
  },
  {
    id: 'j2',
    title: 'Caring for Gold Plated Jewelry',
    excerpt: 'Five habits that keep your pieces looking new for years, not weeks.',
    category: 'Care',
    imgId: 'journal-2-velmora-7a1c',
    titleId: 'journal-2-title',
    descId: 'journal-2-desc',
  },
  {
    id: 'j3',
    title: 'The Quiet Luxury Edit',
    excerpt: 'Why understated gold jewelry is the foundation of a timeless wardrobe.',
    category: 'Edit',
    imgId: 'journal-3-velmora-9b5f',
    titleId: 'journal-3-title',
    descId: 'journal-3-desc',
  },
]

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function Journal() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="bg-cream pt-20 md:pt-24">
      <div className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">Notes</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">The Journal</h1>
          <p className="mx-auto mt-4 max-w-md text-sm md:text-base text-stone leading-relaxed">
            Styling notes, care guides, and stories from the Velmora studio.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <img
                  src={PLACEHOLDER}
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-widest2 text-gold">{post.category}</p>
              <h2
                id={post.titleId}
                className="mt-2 font-serif text-2xl text-ink group-hover:text-gold transition-colors"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-2 text-sm text-stone leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="mt-4 inline-block text-xs uppercase tracking-widest2 text-ink hover:text-gold transition-colors"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
