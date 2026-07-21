import {useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { PLACEHOLDER } from '@/components/ui/Button'

const posts = [
  {
    id: 'journal-1',
    title: 'How to Layer Gold Necklaces',
    excerpt: 'A simple formula for curating a layered look that feels effortless.',
    category: 'Styling',
  },
  {
    id: 'journal-2',
    title: 'Caring for 18K Gold-Plated Jewelry',
    excerpt: 'Keep your pieces luminous with a few gentle habits.',
    category: 'Care',
  },
  {
    id: 'journal-3',
    title: 'The Quiet Luxury Edit',
    excerpt: 'Why understated gold is the foundation of a timeless wardrobe.',
    category: 'Edit',
  },
]

export default function Journal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={ref} className="bg-ivory pt-24 md:pt-28">
      <div className="max-w-8xl mx-auto px-6 md:px-10 py-14 md:py-20 text-center">
        <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
          The Journal
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink">
          Notes on Jewelry & Living
        </h1>
        <p className="mt-4 text-sand max-w-md mx-auto">
          Styling guides, care notes, and the thinking behind our collections.
        </p>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((p) => (
            <article key={p.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <img
                  alt={p.title}
                  data-strk-img-id={`${p.id}-img`}
                  data-strk-img={`[${p.id}-excerpt] [${p.id}-title] gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src={PLACEHOLDER}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-widest3 text-gold">
                {p.category}
              </p>
              <h2
                id={`${p.id}-title`}
                className="mt-2 font-serif text-2xl text-ink leading-tight group-hover:text-gold transition-colors"
              >
                {p.title}
              </h2>
              <p id={`${p.id}-excerpt`} className="mt-2 text-sand leading-relaxed">
                {p.excerpt}
              </p>
              <Link
                to="/journal"
                className="inline-block mt-4 text-[11px] uppercase tracking-widest3 text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors"
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
