import React from 'react'

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "How to Layer Necklaces",
      excerpt: "A guide to creating dimension and interest with multiple chains.",
      date: "June 2026",
      readTime: "6 min",
    },
    {
      id: 2,
      title: "The Art of the Everyday Heirloom",
      excerpt: "Why we believe jewelry should be worn, not stored away.",
      date: "May 2026",
      readTime: "8 min",
    },
    {
      id: 3,
      title: "Caring for Gold-Plated Pieces",
      excerpt: "Simple rituals to keep your Velmora jewelry looking its best for years.",
      date: "April 2026",
      readTime: "4 min",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
      <div className="mb-16">
        <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Stories & Rituals</div>
        <h1 className="serif text-5xl tracking-[-0.02em]">The Journal</h1>
      </div>

      <div className="space-y-16">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
              <span className="text-xs tracking-[0.12em] text-[var(--color-text-muted)] uppercase">{post.date}</span>
              <span className="text-xs text-[var(--color-text-muted)]">{post.readTime} read</span>
            </div>
            <h2 className="serif text-3xl tracking-[-0.01em] mb-3 group-hover:text-[var(--color-gold)] transition-colors cursor-pointer">
              {post.title}
            </h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl">{post.excerpt}</p>
            <button className="mt-4 text-sm tracking-[0.08em] uppercase border-b border-current pb-0.5 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors">
              Read More
            </button>
          </article>
        ))}
      </div>

      <div className="mt-20 pt-10 border-t border-[var(--color-border)] text-center text-sm text-[var(--color-text-muted)]">
        More stories coming soon.
      </div>
    </div>
  )
}

export default Journal
