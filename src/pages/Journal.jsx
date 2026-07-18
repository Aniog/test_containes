import React from 'react'

const Journal = () => {
  const posts = [
    {
      title: "How to Build a Timeless Jewelry Collection",
      excerpt: "Three rules for choosing pieces you'll wear for decades, not seasons.",
      date: "July 2026",
      readTime: "6 min",
    },
    {
      title: "The Meaning Behind Our Names",
      excerpt: "From 'Vivid Aura' to 'Royal Heirloom'—the stories woven into each design.",
      date: "June 2026",
      readTime: "4 min",
    },
    {
      title: "Caring for Gold-Plated Jewelry",
      excerpt: "Simple rituals to keep your pieces radiant for years to come.",
      date: "May 2026",
      readTime: "5 min",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-12">
        <div className="uppercase tracking-[0.15em] text-xs text-vel-gold mb-2">Field Notes</div>
        <h1 className="heading-serif text-5xl tracking-[-0.01em]">The Journal</h1>
      </div>

      <div className="space-y-12">
        {posts.map((post, idx) => (
          <article key={idx} className="border-b border-vel-border-light pb-12 last:border-0 last:pb-0">
            <div className="flex items-center gap-3 text-xs text-vel-muted mb-3 tracking-wide">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="heading-serif text-3xl tracking-[-0.01em] mb-3 hover:text-vel-gold transition-colors cursor-pointer">
              {post.title}
            </h2>
            <p className="text-vel-muted leading-relaxed max-w-2xl">{post.excerpt}</p>
            <button className="text-sm mt-4 text-vel-gold hover:underline">Read more →</button>
          </article>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-vel-border-light text-center text-sm text-vel-muted">
        More stories coming soon. Follow us on Instagram for daily inspiration.
      </div>
    </div>
  )
}

export default Journal
