import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'


const posts = [
  {
    id: 'how-to-style-huggies',
    title: 'How to Style Huggies for Every Occasion',
    excerpt: 'From desk to dinner, three ways to wear your gold huggies.',
    category: 'Styling',
    imgId: 'journal-huggies-a1',
  },
  {
    id: 'caring-for-gold-jewelry',
    title: 'Caring for Your Gold Plated Jewelry',
    excerpt: 'Simple rituals to keep your pieces glowing for years.',
    category: 'Care',
    imgId: 'journal-care-a1',
  },
  {
    id: 'the-art-of-layering',
    title: 'The Art of Layering Necklaces',
    excerpt: 'A guide to building a layered look that feels effortless.',
    category: 'Styling',
    imgId: 'journal-layering-a1',
  },
]

export default function Journal() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="bg-cream pt-28 md:pt-32">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="border-b border-ink/10 pb-8 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
            Notes
          </p>
          <h1 className="mt-3 font-serif text-5xl font-light text-ink md:text-6xl">
            The Journal
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone">
            Styling notes, care rituals and stories from the Velmora studio.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {posts.map((post) => {
            const titleId = `journal-${post.id}-title`
            const excerptId = `journal-${post.id}-excerpt`
            return (
              <article key={post.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${excerptId}] [${titleId}] gold jewelry editorial`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[11px] font-medium uppercase tracking-widest2 text-gold">
                  {post.category}
                </p>
                <h2
                  id={titleId}
                  className="mt-2 font-serif text-2xl uppercase tracking-widest2 text-ink"
                >
                  {post.title}
                </h2>
                <p id={excerptId} className="mt-3 text-sm text-stone">
                  {post.excerpt}
                </p>
                <Link
                  to="/journal"
                  className="group mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest2 text-ink transition-colors hover:text-gold"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
