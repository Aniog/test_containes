import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

const posts = [
  {
    id: 'j1',
    title: 'How to Layer Gold Necklaces',
    excerpt: 'A simple guide to building a layered look that feels effortless, not overdone.',
    category: 'Styling',
    imgId: 'journal-1-a1',
  },
  {
    id: 'j2',
    title: 'Caring for 18K Gold Plated Jewelry',
    excerpt: 'Keep your pieces glowing for years with a few simple habits.',
    category: 'Care',
    imgId: 'journal-2-a1',
  },
  {
    id: 'j3',
    title: 'The Quiet Luxury Edit',
    excerpt: 'Why understated gold is the foundation of a considered wardrobe.',
    category: 'Edit',
    imgId: 'journal-3-a1',
  },
]

export default function Journal() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      <div className="border-b border-ink/10 bg-cream-soft">
        <div className="mx-auto max-w-content px-6 py-12 text-center md:px-10 md:py-16 lg:px-16">
          <p className="text-[11px] uppercase tracking-widest3 text-gold">Notes</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl lg:text-6xl">The Journal</h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-ink-muted">
            Styling notes, care guides, and stories from the studio.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-12">
          {posts.map((post) => {
            const titleId = `journal-title-${post.id}`
            const excerptId = `journal-excerpt-${post.id}`
            return (
              <article key={post.id} className="group">
                <Link to="/journal" className="block overflow-hidden bg-cream-deep aspect-[4x3]">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${excerptId}] [${titleId}] gold jewelry editorial lifestyle`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                    className="h-full w-full object-cover transition-transform duration-500 ease-elegant group-hover:scale-105"
                  />
                </Link>
                <p className="mt-5 text-[11px] uppercase tracking-widest2 text-gold">
                  {post.category}
                </p>
                <h2
                  id={titleId}
                  className="mt-2 font-serif text-2xl text-ink transition-colors group-hover:text-gold-deep"
                >
                  {post.title}
                </h2>
                <p id={excerptId} className="mt-2 text-sm text-ink-muted">
                  {post.excerpt}
                </p>
                <Link
                  to="/journal"
                  className="mt-4 inline-block border-b border-gold pb-0.5 text-[11px] uppercase tracking-widest2 text-gold hover:text-gold-deep"
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
