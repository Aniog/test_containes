import { Link } from 'react-router-dom'

const posts = [
  {
    id: 'styling-huggies',
    title: 'How to Style Huggies for Every Day',
    excerpt: 'Three ways to wear your huggies, from a single signature to a stacked ear.',
    tag: 'Styling',
  },
  {
    id: 'gold-care',
    title: 'Caring for Your Gold Plated Jewelry',
    excerpt: 'Simple rituals to keep your pieces warm and luminous for years.',
    tag: 'Care',
  },
  {
    id: 'gifting-guide',
    title: 'The Velmora Gifting Guide',
    excerpt: 'Thoughtful pairings for the people you treasure most.',
    tag: 'Gifting',
  },
]

export default function Journal() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="py-16 md:py-20 text-center max-w-3xl mx-auto px-5 md:px-8">
        <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">The Journal</p>
        <h1 className="font-serif text-4xl md:text-6xl text-charcoal tracking-wide leading-tight">
          Notes from the studio
        </h1>
        <p className="mt-6 text-muted leading-relaxed text-lg">
          Styling notes, care rituals and stories behind the pieces.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((p) => (
          <article key={p.id} className="group">
            <div className="aspect-[4/3] bg-sand overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-sand to-stone/40 flex items-center justify-center">
                <span className="font-serif text-4xl text-gold/60">{p.tag}</span>
              </div>
            </div>
            <p className="mt-5 text-[11px] uppercase tracking-widest2 text-gold">{p.tag}</p>
            <h2 className="mt-2 font-serif text-2xl text-charcoal group-hover:text-gold transition-colors">
              {p.title}
            </h2>
            <p className="mt-2 text-muted leading-relaxed">{p.excerpt}</p>
            <Link
              to="/journal"
              className="mt-3 inline-block text-[11px] uppercase tracking-widest2 text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors"
            >
              Read More
            </Link>
          </article>
        ))}
      </section>
    </div>
  )
}
