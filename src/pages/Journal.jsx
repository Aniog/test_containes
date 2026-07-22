import { Link } from 'react-router-dom'

const POSTS = [
  {
    id: 'p1',
    title: 'How to Style Gold Huggies for Every Day',
    excerpt: 'Three simple ways to wear your huggies from desk to dinner.',
    category: 'Styling',
  },
  {
    id: 'p2',
    title: 'Caring for 18K Gold Plated Jewelry',
    excerpt: 'A short guide to keeping your pieces warm and bright for years.',
    category: 'Care',
  },
  {
    id: 'p3',
    title: 'The Story Behind the Royal Heirloom Set',
    excerpt: 'Why we designed a set meant to be passed down.',
    category: 'Behind the Design',
  },
]

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Notes &amp; Stories
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">The Journal</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-cream mb-5" />
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-2">
                {post.category}
              </p>
              <h2 className="font-serif text-2xl text-ink leading-snug group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-stone leading-relaxed">{post.excerpt}</p>
              <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.2em] text-ink border-b border-ink pb-1 group-hover:text-gold group-hover:border-gold transition-colors">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>

      <div className="bg-cream py-16 text-center">
        <div className="max-w-xl mx-auto px-5">
          <h2 className="font-serif text-3xl text-ink">Coming Soon</h2>
          <p className="mt-3 text-stone">
            We&rsquo;re writing more stories. In the meantime, explore the collection.
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-block border border-ink text-ink text-[11px] uppercase tracking-[0.2em] px-9 py-4 hover:bg-ink hover:text-ivory transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}
