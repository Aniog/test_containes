import { Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: 'How to Build a Minimalist Jewelry Capsule',
    excerpt: 'Five versatile pieces that take you from coffee runs to candlelit dinners.',
  },
  {
    id: 2,
    title: 'The Art of the Ear Stack',
    excerpt: 'Mix huggies, cuffs, and studs without the piercings — or with them.',
  },
  {
    id: 3,
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'Simple rituals to keep your pieces luminous for years.',
  },
]

export default function Journal() {
  return (
    <main className="min-h-screen bg-cream pt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-medium text-charcoal md:text-5xl">Journal</h1>
          <p className="mt-3 text-sm text-warmgray">Stories, styling notes, and care guides.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border-b border-hairline pb-8 transition-colors hover:border-charcoal"
            >
              <h2 className="font-serif text-2xl text-charcoal">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-warmgray">{post.excerpt}</p>
              <Link
                to="#"
                className="mt-4 inline-block text-xs font-medium uppercase tracking-wide text-accent"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
