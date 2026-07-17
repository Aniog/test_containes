import { Link } from 'react-router-dom'
import { useStrkImages, STRK_PLACEHOLDER } from '@/lib/useStrkImages'

const POSTS = [
  {
    id: 'j1',
    title: 'How to Layer Gold Necklaces',
    excerpt: 'A simple guide to mixing lengths and textures for an effortless layered look.',
    category: 'Styling',
    imgId: 'journal-layer-1a2b',
    titleId: 'journal-layer-title',
    descId: 'journal-layer-desc',
  },
  {
    id: 'j2',
    title: 'Caring for Gold Plated Jewelry',
    excerpt: 'Five habits to keep your demi-fine pieces radiant for years to come.',
    category: 'Care',
    imgId: 'journal-care-3c4d',
    titleId: 'journal-care-title',
    descId: 'journal-care-desc',
  },
  {
    id: 'j3',
    title: 'The Quiet Luxury Edit',
    excerpt: 'Why understated gold is the defining mood of modern jewelry.',
    category: 'Edit',
    imgId: 'journal-edit-5e6f',
    titleId: 'journal-edit-title',
    descId: 'journal-edit-desc',
  },
]

export default function Journal() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="bg-ivory pt-24">
      <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-8 md:py-20">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">Notes & Stories</p>
        <h1 className="mt-3 font-serif text-4xl text-ink md:text-6xl">The Journal</h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-taupe">
          Styling notes, care guides, and stories from the Velmora studio.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-cream">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src={STRK_PLACEHOLDER}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-widest2 text-gold">
                {post.category}
              </p>
              <h2
                id={post.titleId}
                className="mt-2 font-serif text-2xl leading-tight text-ink"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-3 text-sm leading-relaxed text-taupe">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-block border-b border-gold pb-1 text-[11px] uppercase tracking-widest2 text-ink">
                Read More
              </span>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-block border border-ink px-10 py-4 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:bg-ink hover:text-ivory"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
