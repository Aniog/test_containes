import React from 'react'

const Journal = () => {
  const posts = [
    {
      title: "How to Style Gold Jewelry Year-Round",
      excerpt: "From summer linen to winter layers, discover the versatility of warm gold tones.",
      date: "June 12, 2026",
    },
    {
      title: "The Art of Layering Necklaces",
      excerpt: "Creating dimension and interest with multiple chains and pendants.",
      date: "May 28, 2026",
    },
    {
      title: "Caring for Your Demi-Fine Pieces",
      excerpt: "Simple rituals to keep your jewelry looking beautiful for years to come.",
      date: "May 10, 2026",
    },
  ]

  return (
    <div className="max-w-[900px] mx-auto px-6 py-16">
      <div className="mb-16">
        <p className="text-xs tracking-[3px] text-[#8B7355] mb-3">NOTES & INSPIRATION</p>
        <h1 className="font-serif text-5xl tracking-[1px]">The Journal</h1>
      </div>

      <div className="space-y-16">
        {posts.map((post, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="aspect-[16/9] bg-[#EDE6D9] mb-8 rounded" />
            <div>
              <p className="text-xs tracking-[2px] text-[#A89B8C] mb-2">{post.date}</p>
              <h2 className="font-serif text-3xl tracking-[1px] mb-4 group-hover:text-[#8B7355] transition-colors">{post.title}</h2>
              <p className="text-[#6B635C] leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 text-sm tracking-[1.5px] border-b border-[#8B7355] text-[#8B7355]">READ MORE →</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Journal
