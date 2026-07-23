import { Link } from 'react-router-dom'

const posts = [
  {
    id: 'styling-huggies',
    title: 'How to Style Huggies for Every Occasion',
    excerpt:
      'From the office to evening out, the everyday earring that does it all.',
    category: 'Styling',
  },
  {
    id: 'gold-care',
    title: 'Caring for Your Gold-Plated Jewelry',
    excerpt:
      'Simple rituals to keep your pieces glowing for years to come.',
    category: 'Care',
  },
  {
    id: 'gifting-guide',
    title: 'The Velmora Gifting Guide',
    excerpt:
      'Thoughtful picks for the milestones that matter most.',
    category: 'Gifting',
  },
]

export default function Journal() {
  return (
    <div className="bg-cream">
      <section className="border-b border-line bg-cream-deep">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">
            Notes from the Studio
          </p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-6xl">
            The Journal
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-stone">
            Styling notes, care rituals, and stories behind the pieces.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] bg-cream-deep" />
              <p className="mt-5 text-[11px] uppercase tracking-widest2 text-gold">
                {post.category}
              </p>
              <h2 className="mt-2 font-serif text-2xl leading-snug text-ink">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone">
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
            className="inline-flex border border-ink px-10 py-4 text-xs uppercase tracking-widest2 text-ink transition-all hover:bg-ink hover:text-cream"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
