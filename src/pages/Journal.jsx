import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    id: 'how-to-layer-necklaces',
    title: 'How to Layer Necklaces Like a Stylist',
    excerpt: 'Three simple rules for effortless layering that works from day to night.',
    category: 'Style Notes',
    query: 'gold layered necklaces editorial close up',
  },
  {
    id: 'caring-for-gold-plated-jewelry',
    title: 'Caring for Your Gold-Plated Jewelry',
    excerpt: 'Keep your pieces shining for years with these easy care tips.',
    category: 'Care Guide',
    query: 'gold jewelry pouch storage elegant',
  },
  {
    id: 'jewelry-gifting-guide',
    title: 'The Art of Gifting Jewelry',
    excerpt: 'How to choose a meaningful piece for every occasion.',
    category: 'Gifting',
    query: 'gold jewelry gift box ribbon elegant',
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
    <div ref={containerRef} className="min-h-screen bg-background pt-24">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Journal</p>
          <h1 className="font-serif text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Stories & Styling Notes
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                <img
                  data-strk-img-id={`journal-thumb-${post.id}`}
                  data-strk-img={`[journal-title-${post.id}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <p id={`journal-title-${post.id}`} className="sr-only">{post.query}</p>
              </div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">{post.category}</p>
              <h2 className="mb-3 font-serif text-xl text-foreground transition-colors group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <Link
                to="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Read more <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
