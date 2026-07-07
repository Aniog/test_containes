import React from 'react'

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From delicate layering in spring to bold statement pieces in winter — our guide to year-round styling.",
      date: "June 12, 2026",
      readTime: "8 min"
    },
    {
      id: 2,
      title: "The Art of the Gift: Jewelry That Lasts",
      excerpt: "What makes a piece of jewelry truly gift-worthy? We explore the qualities that turn a purchase into a keepsake.",
      date: "May 28, 2026",
      readTime: "6 min"
    },
    {
      id: 3,
      title: "Behind the Design: The Flora Nectar Necklace",
      excerpt: "A closer look at the inspiration and craftsmanship behind one of our most beloved pieces.",
      date: "May 3, 2026",
      readTime: "10 min"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-20">
      <div className="mb-14">
        <div className="text-xs tracking-[0.2em] text-[#B8976D] mb-2">STORIES & INSPIRATION</div>
        <h1 className="font-serif text-5xl">The Journal</h1>
      </div>

      <div className="space-y-12">
        {posts.map(post => (
          <article key={post.id} className="group border-b border-[#E5DFD3] pb-12 last:border-0">
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
              <span className="text-xs tracking-[0.15em] text-[#6B665F]">{post.date}</span>
              <span className="hidden md:block text-[#E5DFD3]">·</span>
              <span className="text-xs tracking-[0.15em] text-[#6B665F]">{post.readTime} read</span>
            </div>
            <h2 className="font-serif text-3xl mb-4 group-hover:text-[#B8976D] transition-colors cursor-pointer">
              {post.title}
            </h2>
            <p className="text-[#6B665F] mb-4 max-w-2xl">{post.excerpt}</p>
            <span className="text-sm tracking-[0.1em] text-[#B8976D] cursor-pointer">Read Article →</span>
          </article>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t text-center text-sm text-[#6B665F]">
        More stories coming soon. Follow us on Instagram for daily inspiration.
      </div>
    </div>
  )
}

export default Journal