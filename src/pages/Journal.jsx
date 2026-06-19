import React from 'react'

const Journal = () => {
  const posts = [
    {
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From summer's bare skin to winter's layered textures, discover how to wear your favorite pieces year-round.",
      date: "June 12, 2026",
      readTime: "8 min"
    },
    {
      title: "The Art of Layering Necklaces",
      excerpt: "Master the delicate balance of mixing lengths, textures, and metals for an effortlessly curated look.",
      date: "May 28, 2026",
      readTime: "6 min"
    },
    {
      title: "Behind the Design: The Vivid Aura Collection",
      excerpt: "Our creative director shares the inspiration behind our bestselling ear cuffs and the crystal that started it all.",
      date: "May 15, 2026",
      readTime: "12 min"
    }
  ]

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="pt-8 pb-14 text-center">
          <div className="text-xs tracking-[0.15em] text-[#6B6560]">STORIES & INSPIRATION</div>
          <h1 className="text-6xl serif mt-3">The Journal</h1>
        </div>

        <div className="space-y-12">
          {posts.map((post, i) => (
            <article key={i} className="group border-b border-[#E5E0D8] pb-12 last:border-0">
              <div className="flex flex-col md:flex-row md:items-baseline gap-x-4 mb-3">
                <div className="text-xs tracking-[0.1em] text-[#6B6560]">{post.date}</div>
                <div className="text-xs text-[#B89B6E]">{post.readTime} read</div>
              </div>
              <h2 className="text-3xl serif mb-4 group-hover:text-[#B89B6E] transition-colors cursor-pointer">{post.title}</h2>
              <p className="text-[#6B6560] max-w-2xl">{post.excerpt}</p>
              <button className="text-sm tracking-[0.1em] mt-4 text-[#B89B6E] hover:underline">Read Article →</button>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5E0D8] text-center text-sm text-[#6B6560]">
          More stories coming soon. Follow us on Instagram for daily inspiration.
        </div>
      </div>
    </div>
  )
}

export default Journal