import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useStrkImages } from '@/lib/useStrkImages'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

const posts = [
  {
    id: 'j1',
    title: 'How to Build a Capsule Jewelry Wardrobe',
    excerpt: 'Five pieces that work from Monday meetings to Friday dinners.',
    imgId: 'journal-j1-a1',
    titleId: 'journal-j1-title',
    descId: 'journal-j1-desc',
  },
  {
    id: 'j2',
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'Simple rituals to keep your pieces glowing for years.',
    imgId: 'journal-j2-a1',
    titleId: 'journal-j2-title',
    descId: 'journal-j2-desc',
  },
  {
    id: 'j3',
    title: 'The Art of Stacking Huggies',
    excerpt: 'A modern guide to the curated ear, from minimal to maximal.',
    imgId: 'journal-j3-a1',
    titleId: 'journal-j3-title',
    descId: 'journal-j3-desc',
  },
]

export default function Journal() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="bg-cream pt-24 md:pt-28">
      <div className="border-b border-sand">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-widest2 text-gold-deep">Notes</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">The Journal</h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Styling notes, care guides, and stories from the studio.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-cream-deep">
                <img
                  src={PLACEHOLDER}
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial warm`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-wide2 text-muted">Styling</p>
              <h2
                id={post.titleId}
                className="mt-2 font-serif text-2xl text-ink"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-2 text-sm text-ink-soft">
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-wide2 text-gold-deep hover:text-ink"
              >
                Read More <ArrowRight size={13} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
