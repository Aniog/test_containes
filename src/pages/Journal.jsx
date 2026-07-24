import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { resolveImageUrl } from '@/lib/resolveImage'

const POSTS = [
  {
    id: 'p1',
    imgId: 'journal-1',
    titleId: 'journal-1-title',
    descId: 'journal-1-desc',
    category: 'Styling',
    title: 'How to Build a Curated Ear',
    excerpt: 'A guide to stacking huggies, cuffs, and drops for an effortless layered look.',
  },
  {
    id: 'p2',
    imgId: 'journal-2',
    titleId: 'journal-2-title',
    descId: 'journal-2-desc',
    category: 'Materials',
    title: 'What Demi-Fine Really Means',
    excerpt: 'Inside 18K gold plating over sterling silver — and why it lasts.',
  },
  {
    id: 'p3',
    imgId: 'journal-3',
    titleId: 'journal-3-title',
    descId: 'journal-3-desc',
    category: 'Gifting',
    title: 'The Art of the Gift Set',
    excerpt: 'Choosing pieces that feel considered, personal, and complete.',
  },
]

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20 bg-ivory min-h-screen">
      <div className="border-b border-sand">
        <div className="mx-auto max-w-8xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Notes</p>
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal">The Journal</h1>
          <p className="mt-4 text-sm text-stone max-w-md mx-auto">
            Styling notes, material stories, and the craft behind every piece.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[4x3] overflow-hidden bg-sand mb-5">
                <img
                  alt={post.title}
                  src={resolveImageUrl(post.imgId)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">{post.category}</p>
              <h2
                id={post.titleId}
                className="font-serif text-2xl text-charcoal group-hover:text-gold transition-colors"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-2 text-sm text-stone leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-4 text-xs uppercase tracking-[0.2em] text-charcoal">
                Read More
                <ArrowRight size={13} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
              </span>
            </article>
          ))}
        </div>
      </div>

      <div className="text-center pb-20">
        <Link
          to="/shop"
          className="inline-block border border-ink text-ink px-10 py-3.5 text-xs uppercase tracking-[0.25em] font-medium hover:bg-ink hover:text-ivory transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  )
}
