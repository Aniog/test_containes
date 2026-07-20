import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    id: 'p1',
    title: 'How to Build an Everyday Ear Stack',
    excerpt:
      'A simple guide to layering huggies, cuffs and studs for a look that is effortlessly yours.',
    category: 'Styling',
    imgId: 'journal-stack-a1',
  },
  {
    id: 'p2',
    title: 'Caring for Gold Plated Jewelry',
    excerpt:
      'Five habits that keep your pieces warm, bright and beautiful for years to come.',
    category: 'Care',
    imgId: 'journal-care-a1',
  },
  {
    id: 'p3',
    title: 'The Quiet Luxury Edit',
    excerpt:
      'Why understated gold is the defining jewelry mood of the season.',
    category: 'Edit',
    imgId: 'journal-edit-a1',
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
  }, [])

  return (
    <div ref={ref} className="pt-16 md:pt-20 bg-ivory min-h-screen">
      <div className="border-b border-sand">
        <div className="max-w-8xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-3">
            Notes
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">The Journal</h1>
          <p className="mt-4 text-sm text-stone max-w-md mx-auto">
            Styling notes, care guides and stories from the Velmora studio.
          </p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4x3] overflow-hidden bg-espresso mb-5">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[journal-${post.id}-excerpt] [journal-${post.id}-title] gold jewelry editorial warm`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-2">
                {post.category}
              </p>
              <h2
                id={`journal-${post.id}-title`}
                className="font-serif text-2xl text-ink leading-tight group-hover:text-champagne transition-colors"
              >
                {post.title}
              </h2>
              <p
                id={`journal-${post.id}-excerpt`}
                className="mt-3 text-sm text-stone leading-relaxed"
              >
                {post.excerpt}
              </p>
              <span className="mt-4 inline-block text-[11px] uppercase tracking-widest2 text-ink border-b border-ink pb-0.5">
                Read More
              </span>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center border border-ink text-ink hover:bg-ink hover:text-ivory transition-colors px-8 py-4 text-xs uppercase tracking-widest2 font-medium rounded-sm"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
