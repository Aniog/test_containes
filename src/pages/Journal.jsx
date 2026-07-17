import { Link } from 'react-router-dom'
import { useStrkImages, StrkImg } from '@/components/StrkImage'

const posts = [
  {
    id: 'journal-1',
    title: 'How to Style Huggies for Every Day',
    excerpt: 'The art of stacking huggies — from a single pair to a curated ear.',
    imgId: 'journal-1-img',
    titleId: 'journal-1-title',
    descId: 'journal-1-desc',
    category: 'Styling',
  },
  {
    id: 'journal-2',
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'Simple rituals to keep your pieces warm and luminous for years.',
    imgId: 'journal-2-img',
    titleId: 'journal-2-title',
    descId: 'journal-2-desc',
    category: 'Care',
  },
  {
    id: 'journal-3',
    title: 'The Quiet Luxury Edit',
    excerpt: 'Why restraint is the new statement — and how to wear it.',
    imgId: 'journal-3-img',
    titleId: 'journal-3-title',
    descId: 'journal-3-desc',
    category: 'Edit',
  },
]

export default function Journal() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <div className="border-b border-hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Notes</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">The Journal</h1>
          <p className="mt-4 text-sm text-sand max-w-md mx-auto">
            Styling notes, care rituals, and the philosophy behind Velmora.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                <StrkImg
                  imgId={post.imgId}
                  query={`[${post.descId}] [${post.titleId}] gold jewelry editorial`}
                  ratio="4x5"
                  width={700}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-widest2 text-gold">
                {post.category}
              </p>
              <h2
                id={post.titleId}
                className="mt-2 font-serif text-2xl text-ink leading-tight group-hover:text-gold transition-colors"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-2 text-sm text-ink/70 leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                to="/shop"
                className="mt-4 inline-block text-[11px] uppercase tracking-widest2 text-ink underline underline-offset-4 hover:text-gold transition-colors"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
