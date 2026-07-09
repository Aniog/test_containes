const posts = [
  {
    id: 1,
    title: "How to Layer Necklaces Like a Stylist",
    excerpt: "The golden rules for building a layered look that feels effortless, not overdone.",
  },
  {
    id: 2,
    title: "The Gift Guide for Every Kind of Love",
    excerpt: "From birthdays to just-because moments, find the piece that says exactly what you mean.",
  },
  {
    id: 3,
    title: "Caring for Demi-Fine Jewelry",
    excerpt: "Simple habits to keep your gold-plated pieces shining for years to come.",
  },
]

export default function Journal() {
  return (
    <main className="bg-velmora-cream pb-20 pt-28 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-accent">The Journal</p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-velmora-charcoal sm:text-5xl">Stories & Styling</h1>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-velmora-stone">
                <div className="h-full w-full bg-gradient-to-br from-velmora-sand to-velmora-stone/50 transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h2 className="mt-5 font-serif text-xl text-velmora-charcoal">{post.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-velmora-taupe">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
