import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'

const posts = [
  {
    id: 'how-to-style-huggies',
    title: 'How to Style Huggies for Every Ear',
    excerpt: 'A simple guide to stacking, layering, and curating the perfect ear edit.',
    category: 'Styling',
    imgId: 'journal-huggies-1a2b',
    titleId: 'journal-huggies-title',
    descId: 'journal-huggies-desc',
  },
  {
    id: 'gold-care-guide',
    title: 'The Gold Care Guide',
    excerpt: 'Keep your pieces glowing for years with our simple care rituals.',
    category: 'Care',
    imgId: 'journal-care-2b3c',
    titleId: 'journal-care-title',
    descId: 'journal-care-desc',
  },
  {
    id: 'quiet-luxury-edit',
    title: 'The Quiet Luxury Edit',
    excerpt: 'Why restraint is the new statement — and how to wear it.',
    category: 'Edit',
    imgId: 'journal-quiet-3c4d',
    titleId: 'journal-quiet-title',
    descId: 'journal-quiet-desc',
  },
]

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-3">Notes</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink">The Journal</h1>
          <p className="text-muted mt-3 text-sm">Styling notes, care rituals, and the Velmora edit.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((p) => (
          <article key={p.id} className="group">
            <div className="aspect-[4/5] bg-sand overflow-hidden mb-5">
              <img
                data-strk-img-id={p.imgId}
                data-strk-img={`[${p.descId}] [${p.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src={PLACEHOLDER}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <p className="text-xs uppercase tracking-widest2 text-gold mb-2">{p.category}</p>
            <h2 id={p.titleId} className="font-serif text-2xl text-ink mb-2 group-hover:text-gold transition-colors">
              {p.title}
            </h2>
            <p id={p.descId} className="text-sm text-muted leading-relaxed mb-4">
              {p.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink border-b border-gold pb-1">
              Read More <ArrowRight size={12} />
            </span>
          </article>
        ))}
      </div>
    </div>
  )
}
