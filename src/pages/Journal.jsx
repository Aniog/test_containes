import React from 'react'

const Journal = () => {
  const posts = [
    {
      title: "How to Style Layered Necklaces",
      excerpt: "A guide to mixing lengths, textures, and metals for an effortless, personal look.",
      date: "June 12, 2026",
      readTime: "6 min"
    },
    {
      title: "The Art of Everyday Jewelry",
      excerpt: "Why we believe the most meaningful pieces are the ones you never take off.",
      date: "May 28, 2026",
      readTime: "4 min"
    },
    {
      title: "Caring for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your Velmora pieces looking beautiful for years to come.",
      date: "May 10, 2026",
      readTime: "5 min"
    }
  ]

  return (
    <div className="pt-20">
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div className="mb-14">
          <p className="text-xs tracking-[0.15em] text-[#8B7355]">NOTES & INSPIRATION</p>
          <h1 className="font-serif text-5xl tracking-[0.05em] mt-3">The Journal</h1>
        </div>

        <div className="space-y-12">
          {posts.map((post, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                <span className="text-xs text-[#6B635E] tracking-[0.1em]">{post.date}</span>
                <span className="hidden md:block text-[#E5DFD3]">·</span>
                <span className="text-xs text-[#6B635E]">{post.readTime} read</span>
              </div>
              <h2 className="font-serif text-3xl tracking-[0.05em] group-hover:text-[#8B7355] transition-colors mb-3">{post.title}</h2>
              <p className="text-[#6B635E] max-w-2xl">{post.excerpt}</p>
              <span className="inline-block mt-4 text-sm tracking-[0.08em] text-[#8B7355] group-hover:underline">Read more →</span>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5DFD3] text-center text-sm text-[#6B635E]">
          More stories coming soon.
        </div>
      </div>
    </div>
  )
}

export default Journal