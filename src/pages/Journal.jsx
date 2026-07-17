import { Link } from 'react-router-dom'

const posts = [
  {
    id: 'j1',
    title: 'How to Style Gold Huggies for Every Occasion',
    excerpt: 'From the office to the evening — three ways to wear the everyday hoop.',
    category: 'Styling',
  },
  {
    id: 'j2',
    title: 'Caring for 18K Gold Plated Jewelry',
    excerpt: 'Simple rituals to keep your pieces luminous for years to come.',
    category: 'Care',
  },
  {
    id: 'j3',
    title: 'The Quiet Luxury Edit: Five Pieces, Endless Outfits',
    excerpt: 'A capsule collection for the woman who values restraint.',
    category: 'Edit',
  },
]

export default function Journal() {
  return (
    <div className="pt-24 md:pt-28 pb-20 bg-ivory min-h-screen">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 text-center border-b border-sand">
        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold mb-3">The Journal</p>
        <h1 className="font-serif text-5xl md:text-6xl text-ink">Notes on Craft & Style</h1>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((p) => (
          <article key={p.id} className="group cursor-pointer">
            <div className="aspect-[4/3] bg-cream mb-5 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-br from-cream to-sand" />
            </div>
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold mb-2">
              {p.category}
            </p>
            <h2 className="font-serif text-2xl text-ink group-hover:text-gold transition-colors leading-snug">
              {p.title}
            </h2>
            <p className="mt-3 text-sm text-muted font-light leading-relaxed">{p.excerpt}</p>
            <span className="mt-4 inline-block text-[10px] uppercase tracking-[0.2em] text-charcoal border-b border-charcoal pb-0.5 group-hover:text-gold group-hover:border-gold transition-colors">
              Read More
            </span>
          </article>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          to="/shop"
          className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  )
}
