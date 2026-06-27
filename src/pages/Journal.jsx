import { Link } from 'react-router-dom'
import { useStrkImages } from '@/components/StrkImage'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

const POSTS = [
  {
    id: 'journal-stack',
    title: 'The Everyday Ear Stack, Decoded',
    excerpt: 'How to build a curated ear with huggies, cuffs, and studs — without overdoing it.',
    category: 'Styling',
    imgId: 'journal-stack-img-2f4a',
    titleId: 'journal-stack-title',
    descId: 'journal-stack-desc',
  },
  {
    id: 'journal-care',
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'Five simple habits to keep your pieces glowing for years, not months.',
    category: 'Care',
    imgId: 'journal-care-img-7b1c',
    titleId: 'journal-care-title',
    descId: 'journal-care-desc',
  },
  {
    id: 'journal-gift',
    title: 'Gifting Jewelry: A Thoughtful Guide',
    excerpt: 'From milestones to just-because moments — how to choose a piece that means something.',
    category: 'Gifting',
    imgId: 'journal-gift-img-9d3e',
    titleId: 'journal-gift-title',
    descId: 'journal-gift-desc',
  },
]

export default function Journal() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <section className="bg-cream py-14 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3">Notes & Stories</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">The Journal</h1>
          <p className="mt-4 text-ink-soft max-w-xl mx-auto">
            Styling notes, care guides, and stories from the Velmora studio.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream mb-5">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src={PLACEHOLDER}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold mb-2">
                {post.category}
              </p>
              <h2
                id={post.titleId}
                className="font-serif text-2xl text-ink leading-tight group-hover:text-gold transition-colors"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-3 text-ink-soft leading-relaxed text-sm">
                {post.excerpt}
              </p>
              <span className="inline-block mt-4 text-[11px] uppercase tracking-[0.22em] text-ink border-b border-ink pb-0.5 group-hover:text-gold group-hover:border-gold transition-colors">
                Read More
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Find your next treasure</h2>
          <Link
            to="/shop"
            className="inline-block mt-6 bg-gold text-ivory text-[11px] uppercase tracking-[0.25em] px-9 py-4 hover:bg-gold-deep transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
