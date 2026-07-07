import { Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: 'How to Build an Everyday Jewelry Capsule',
    excerpt:
      'The five versatile pieces that will carry you from morning coffee to evening plans.',
  },
  {
    id: 2,
    title: 'The Art of Gifting Jewelry',
    excerpt:
      'Meaningful pieces for birthdays, anniversaries, and just because.',
  },
  {
    id: 3,
    title: 'Caring for Your Demi-Fine Pieces',
    excerpt:
      'Simple habits to keep your gold-plated jewelry shining for years.',
  },
]

export default function JournalPage() {
  return (
    <div className="bg-warm-white pb-20">
      <div className="border-b border-line bg-champagne/30 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-stone">Journal</p>
          <h1 className="mt-4 font-serif text-4xl text-ink md:text-6xl">
            Style Notes
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group border border-line bg-warm-white p-6 transition-shadow hover:shadow-md"
            >
              <h2 className="font-serif text-2xl text-ink group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-gold hover:text-gold-hover"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
