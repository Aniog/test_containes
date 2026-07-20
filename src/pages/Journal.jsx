import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    id: 'j1',
    title: 'How to Build a Curated Ear',
    excerpt: 'A simple guide to stacking huggies, cuffs and studs without overdoing it.',
    category: 'Styling',
    imgId: 'journal-1-aa11',
  },
  {
    id: 'j2',
    title: 'Caring for Gold Plated Jewelry',
    excerpt: 'Five habits that keep your pieces glowing for years, not months.',
    category: 'Care',
    imgId: 'journal-2-bb22',
  },
  {
    id: 'j3',
    title: 'The Quiet Luxury Edit',
    excerpt: 'Why understated gold is the defining look of the season.',
    category: 'Edit',
    imgId: 'journal-3-cc33',
  },
]

export default function Journal() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <div className="border-b border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Notes
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-espresso">
            The Journal
          </h1>
          <p className="mt-4 text-sm text-taupe max-w-md mx-auto">
            Styling notes, care guides, and stories from the Velmora studio.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => {
            const titleId = `journal-${post.id}-title`
            const excerptId = `journal-${post.id}-excerpt`
            return (
              <article key={post.id} className="group">
                <div className="aspect-[4/3] overflow-hidden bg-sand mb-5">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${excerptId}] [${titleId}] gold jewelry editorial`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-2">
                  {post.category}
                </p>
                <h2
                  id={titleId}
                  className="font-serif text-2xl md:text-3xl text-espresso leading-tight"
                >
                  {post.title}
                </h2>
                <p id={excerptId} className="mt-3 text-sm text-cocoa leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  to="/journal"
                  className="inline-block mt-4 text-[11px] uppercase tracking-[0.2em] text-espresso border-b border-gold pb-1 hover:text-gold"
                >
                  Read More
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
