import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

const posts = [
  {
    id: 'j1',
    title: 'How to Layer Gold Necklaces',
    excerpt: 'A simple guide to mixing lengths, weights, and pendants.',
    imgId: 'journal-1-cc',
  },
  {
    id: 'j2',
    title: 'Caring for 18K Gold Plated Jewelry',
    excerpt: 'Keep the warmth and shine for years with these habits.',
    imgId: 'journal-2-dd',
  },
  {
    id: 'j3',
    title: 'The Huggie Edit: Everyday Essentials',
    excerpt: 'Why the humble huggie is the most-worn piece in your box.',
    imgId: 'journal-3-ee',
  },
]

export default function Journal() {
  const ref = useStrkImages([])
  return (
    <div ref={ref} className="bg-ivory pt-24 md:pt-28">
      <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-20 text-center border-b border-line">
        <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
          The Journal
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink leading-tight">
          Notes on Gold & Living
        </h1>
        <p className="mt-4 text-stone max-w-xl mx-auto">
          Styling notes, care guides, and stories from the studio.
        </p>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <div className="relative aspect-[4/3] bg-cream overflow-hidden">
              <img
                data-strk-img-id={post.imgId}
                data-strk-img={`[journal-excerpt-${post.id}] [journal-title-${post.id}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h2
              id={`journal-title-${post.id}`}
              className="mt-5 font-serif text-2xl text-ink leading-tight"
            >
              {post.title}
            </h2>
            <p
              id={`journal-excerpt-${post.id}`}
              className="mt-2 text-sm text-stone"
            >
              {post.excerpt}
            </p>
            <span className="mt-3 inline-block text-[11px] uppercase tracking-widest2 text-gold border-b border-gold/40 pb-1">
              Read More
            </span>
          </article>
        ))}
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 pb-20 text-center">
        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-9 py-4 text-xs font-medium uppercase tracking-widest2 bg-ink text-ivory hover:bg-espresso transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  )
}
