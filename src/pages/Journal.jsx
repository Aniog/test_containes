import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    id: 'j1',
    title: 'How to Build a Curated Ear',
    excerpt: 'A styling guide to stacking huggies, cuffs and drops with confidence.',
    imgId: 'journal-1-velmora-9i0j',
    titleId: 'journal-title-1',
    descId: 'journal-desc-1',
  },
  {
    id: 'j2',
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'Five simple habits to keep your pieces glowing for years.',
    imgId: 'journal-2-velmora-1k2l',
    titleId: 'journal-title-2',
    descId: 'journal-desc-2',
  },
  {
    id: 'j3',
    title: 'The Quiet Luxury Edit',
    excerpt: 'Why understated gold is the defining look of the season.',
    imgId: 'journal-3-velmora-3m4n',
    titleId: 'journal-title-3',
    descId: 'journal-desc-3',
  },
]

export default function Journal() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="bg-cream pt-24 md:pt-28">
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center md:px-10 md:py-16">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">Notes</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-6xl">The Journal</h1>
          <p className="mt-4 text-sm text-muted">Styling notes, care guides, and stories from the studio.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.id} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-sand">
                <img
                  alt={p.title}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2
                id={p.titleId}
                className="mt-5 font-serif text-2xl uppercase tracking-widest3 text-ink"
              >
                {p.title}
              </h2>
              <p id={p.descId} className="mt-3 text-sm leading-relaxed text-muted">
                {p.excerpt}
              </p>
              <Link
                to="/journal"
                className="mt-4 inline-block text-[11px] uppercase tracking-widest3 text-gold"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
