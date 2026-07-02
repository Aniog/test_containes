const posts = [
  {
    title: 'How to Build a Capsule Jewelry Collection',
    excerpt: 'Five versatile pieces that work with everything you already own — and make getting dressed feel effortless.',
    date: 'June 18, 2026',
    category: 'Style Guide',
  },
  {
    title: 'The Difference Between Gold-Plated and Gold-Filled',
    excerpt: 'A simple breakdown of jewelry metals so you can shop with confidence and care for your pieces properly.',
    date: 'June 10, 2026',
    category: 'Materials',
  },
  {
    title: 'Gift Guide: Jewelry for Every Occasion',
    excerpt: 'From birthdays to bridesmaids, discover meaningful pieces she will actually want to wear every day.',
    date: 'May 28, 2026',
    category: 'Gifting',
  },
]

export default function Journal() {
  return (
    <main className="min-h-screen bg-cream pt-24 md:pt-28 pb-20">
      <div className="container-main max-w-4xl">
        <p className="font-sans text-[11px] uppercase tracking-widest text-stone mb-4">The Journal</p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink uppercase tracking-wide leading-tight mb-12">
          Notes on Style
        </h1>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.title} className="group border-b border-cream-muted pb-12">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-semibold">
                  {post.category}
                </span>
                <span className="font-sans text-[11px] text-stone">{post.date}</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-ink uppercase tracking-wide mb-4 group-hover:text-gold transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="font-sans text-ink/70 leading-relaxed max-w-2xl">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
