import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const POSTS = [
  {
    id: 'j1',
    title: 'How to Layer Gold Necklaces',
    excerpt: 'A simple guide to stacking chains at different lengths for an effortless look.',
    cat: 'Styling',
    titleId: 'journal-j1-title',
    descId: 'journal-j1-desc',
  },
  {
    id: 'j2',
    title: 'Caring for Gold Plated Jewelry',
    excerpt: 'Five habits that keep your pieces glowing for years, not months.',
    cat: 'Care',
    titleId: 'journal-j2-title',
    descId: 'journal-j2-desc',
  },
  {
    id: 'j3',
    title: 'The Huggie: A Modern Classic',
    excerpt: 'Why the close-fitting hoop became the everyday gold staple.',
    cat: 'Edit',
    titleId: 'journal-j3-title',
    descId: 'journal-j3-desc',
  },
]

export default function Journal() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-28">
      <div className="mx-auto max-w-8xl px-5 py-10 text-center md:px-8 md:py-14">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Notes</p>
        <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">The Journal</h1>
        <div className="mx-auto mt-6 h-px w-16 bg-sand" />
      </div>

      <div className="mx-auto max-w-8xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <img
                  alt={post.title}
                  data-strk-img-id={`journal-${post.id}-img`}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial styling`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-widest2 text-gold">{post.cat}</p>
              <h2
                id={post.titleId}
                className="mt-2 font-serif text-2xl text-ink transition-colors group-hover:text-gold"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-2 text-sm leading-relaxed text-taupe">
                {post.excerpt}
              </p>
              <Link
                to="/shop"
                className="mt-4 inline-block text-[11px] uppercase tracking-widest2 text-ink underline-offset-4 hover:underline"
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
