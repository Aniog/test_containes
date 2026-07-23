import { Link } from 'react-router-dom'

const posts = [
  {
    id: 'j1',
    title: 'How to Layer Gold Necklaces',
    excerpt: 'A simple guide to stacking chains, pendants and chokers without the tangle.',
    tag: 'Styling',
  },
  {
    id: 'j2',
    title: 'Caring for 18K Gold Plated Jewelry',
    excerpt: 'Keep your pieces glowing for years with these easy care rituals.',
    tag: 'Care',
  },
  {
    id: 'j3',
    title: 'The Story Behind the Heirloom Set',
    excerpt: 'Inside the design process of our most-loved gift set.',
    tag: 'Behind the Design',
  },
]

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Notes
          </p>
          <h1 className="font-serif text-4xl md:text-6xl">The Journal</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-sand mb-5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-sand to-champagne/40 transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-2">
                {p.tag}
              </p>
              <h2 className="font-serif text-2xl leading-tight group-hover:text-gold transition-colors">
                {p.title}
              </h2>
              <p className="mt-3 text-muted leading-relaxed">{p.excerpt}</p>
              <Link
                to="/journal"
                className="inline-block mt-4 text-[11px] uppercase tracking-[0.2em] text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
