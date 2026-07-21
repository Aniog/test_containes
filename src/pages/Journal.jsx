import { Link } from 'react-router-dom'

const POSTS = [
  {
    id: 'j1',
    title: 'How to Build a Curated Ear',
    excerpt: 'A simple guide to stacking cuffs, huggies, and drops without overdoing it.',
    category: 'Styling',
  },
  {
    id: 'j2',
    title: 'Gold Plating, Explained',
    excerpt: 'What 18K gold over sterling actually means — and how to keep it warm.',
    category: 'Materials',
  },
  {
    id: 'j3',
    title: 'Five Gifts Under $100',
    excerpt: 'Considered presents for the milestones that matter, without the markup.',
    category: 'Gifting',
  },
]

export default function Journal() {
  return (
    <div className="bg-cream pt-16 md:pt-20 min-h-screen">
      <div className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
            Notes
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">The Journal</h1>
          <p className="text-stone text-sm mt-4 max-w-md mx-auto">
            Styling notes, material guides, and gifting ideas from the Velmora studio.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-sand mb-5" />
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-2">
                {post.category}
              </p>
              <h2 className="font-serif text-2xl text-ink group-hover:text-gold transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-stone leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 text-[10px] uppercase tracking-[0.2em] text-ink border-b border-ink pb-1">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>

      <div className="text-center pb-20">
        <Link
          to="/shop"
          className="inline-block border border-ink text-ink text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-ink hover:text-cream transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  )
}
