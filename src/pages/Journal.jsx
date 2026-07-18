import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

const POSTS = [
  {
    id: 'journal-1',
    imgId: 'journal-1-img',
    titleId: 'journal-1-title',
    descId: 'journal-1-desc',
    category: 'Styling',
    title: 'How to Stack Huggies Like a Stylist',
    excerpt: 'Three simple rules for building an ear stack that feels intentional, not crowded.',
  },
  {
    id: 'journal-2',
    imgId: 'journal-2-img',
    titleId: 'journal-2-title',
    descId: 'journal-2-desc',
    category: 'Care',
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'A short guide to keeping your pieces luminous for years to come.',
  },
  {
    id: 'journal-3',
    imgId: 'journal-3-img',
    titleId: 'journal-3-title',
    descId: 'journal-3-desc',
    category: 'Gifting',
    title: 'The Gift Set, Reimagined',
    excerpt: 'Why coordinated sets make the most memorable gifts.',
  },
]

export default function Journal() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-8xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">The Journal</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">Notes from the Studio</h1>
          <p className="mt-4 text-stone max-w-xl mx-auto">
            Styling notes, care guides, and stories behind the pieces.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand mb-5">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src={PLACEHOLDER}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-2">{post.category}</p>
              <h2
                id={post.titleId}
                className="font-serif text-2xl text-ink group-hover:text-gold transition-colors"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-2 text-stone leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="inline-block mt-4 text-[11px] uppercase tracking-[0.18em] text-charcoal hover:text-gold border-b border-charcoal hover:border-gold pb-1 transition-colors"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
