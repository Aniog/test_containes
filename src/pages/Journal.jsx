import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const POSTS = [
  {
    id: 'j1',
    title: 'How to Layer Gold Necklaces',
    excerpt: 'A simple guide to building a layered look that feels effortless.',
    imgId: 'journal-j1-9a',
    titleId: 'journal-j1-title',
    descId: 'journal-j1-desc',
  },
  {
    id: 'j2',
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'Keep your pieces glowing with these everyday care rituals.',
    imgId: 'journal-j2-9b',
    titleId: 'journal-j2-title',
    descId: 'journal-j2-desc',
  },
  {
    id: 'j3',
    title: 'The Quiet Luxury Edit',
    excerpt: 'Why understated gold is the new statement.',
    imgId: 'journal-j3-9c',
    titleId: 'journal-j3-title',
    descId: 'journal-j3-desc',
  },
]

export default function Journal() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-20">
      <div className="border-b border-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-4">
            Notes from the Studio
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light">Journal</h1>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post) => (
            <Link key={post.id} to="/journal" className="group block">
              <div className="aspect-[4/3] bg-cream overflow-hidden">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial warm`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                />
              </div>
              <h2 id={post.titleId} className="mt-5 font-serif text-2xl leading-snug group-hover:text-champagne transition-colors">
                {post.title}
              </h2>
              <p id={post.descId} className="mt-2 text-sm text-stone leading-relaxed">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.2em] text-ink">
                Read More
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
