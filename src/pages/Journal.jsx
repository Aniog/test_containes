import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useStrkImages, PLACEHOLDER } from '@/lib/strk'

const posts = [
  {
    id: 'journal-1',
    title: 'How to Layer Gold Necklaces',
    excerpt: 'A simple guide to building a layered look that feels effortless.',
    imgId: 'journal-img-1',
  },
  {
    id: 'journal-2',
    title: 'Caring for Gold Plated Jewelry',
    excerpt: 'Keep your pieces glowing for years with these gentle habits.',
    imgId: 'journal-img-2',
  },
  {
    id: 'journal-3',
    title: 'The Quiet Luxury Edit',
    excerpt: 'Five pieces that define understated, everyday elegance.',
    imgId: 'journal-img-3',
  },
]

export default function Journal() {
  const containerRef = useRef(null)
  useStrkImages(containerRef, [])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-8 text-center border-b border-line">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold mb-3">Notes</p>
        <h1 className="font-serif text-4xl md:text-5xl">The Journal</h1>
        <p className="mt-4 text-ink-soft max-w-lg mx-auto text-sm">
          Styling notes, care guides, and stories from the Velmora studio.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-3 gap-8 md:gap-10">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <div className="aspect-[4/3] overflow-hidden bg-sand mb-5">
              <img
                src={PLACEHOLDER}
                alt={post.title}
                data-strk-img-id={post.imgId}
                data-strk-img={post.title}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold mb-2">Styling</p>
            <h2 className="font-serif text-2xl leading-tight group-hover:text-gold transition-colors">
              <Link to="/journal">{post.title}</Link>
            </h2>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">{post.excerpt}</p>
            <Link
              to="/journal"
              className="inline-block mt-3 text-xs uppercase tracking-[0.15em] font-semibold text-ink border-b border-ink pb-0.5 group-hover:text-gold group-hover:border-gold transition-colors"
            >
              Read More
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
