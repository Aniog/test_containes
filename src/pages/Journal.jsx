const posts = [
  {
    title: 'How to Layer Necklaces Without the Tangle',
    excerpt:
      'The secret to an effortless stack? Vary the weights, keep the tones consistent, and always start with a delicate chain closest to the neck.',
    date: 'July 14, 2026',
  },
  {
    title: 'Why Demi-Fine Jewelry Is the New Everyday Luxury',
    excerpt:
      'Not costume, not quite fine — demi-fine strikes the perfect balance of quality, price, and wearability for the modern wardrobe.',
    date: 'June 29, 2026',
  },
  {
    title: 'The Art of Gifting Gold: A Minimal Guide',
    excerpt:
      'Small, sculptural pieces make the most memorable gifts. Here is how to choose a piece that feels personal without being predictable.',
    date: 'June 10, 2026',
  },
]

export default function Journal() {
  return (
    <div className="min-h-screen bg-velmora-ivory pt-32 pb-24">
      <div className="container-velmora">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-velmora-gold">The Journal</p>
          <h1 className="mt-4 font-serif text-5xl text-velmora-dark md:text-6xl">
            Style Notes & Stories
          </h1>
          <p className="mt-5 text-velmora-muted">
            Thoughts on layering, gifting, and the quiet art of dressing with intention.
          </p>
        </div>

        <div className="mt-16 divide-y divide-velmora-hairline border-t border-velmora-hairline">
          {posts.map((post) => (
            <article key={post.title} className="py-10 md:py-14">
              <p className="text-xs uppercase tracking-[0.2em] text-velmora-muted">{post.date}</p>
              <h2 className="mt-3 font-serif text-3xl text-velmora-dark md:text-4xl">
                {post.title}
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-velmora-muted">{post.excerpt}</p>
              <button className="mt-6 text-xs font-semibold uppercase tracking-widest text-velmora-dark underline underline-offset-4 transition hover:text-velmora-gold">
                Read More
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
