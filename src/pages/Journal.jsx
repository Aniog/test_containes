import React from 'react'

function Journal() {
  const posts = [
    {
      id: 1,
      title: "How to Layer Necklaces Like a Stylist",
      excerpt: "The art of mixing lengths, textures, and metals for an effortlessly polished look.",
      date: "June 12, 2026",
      readTime: "6 min",
    },
    {
      id: 2,
      title: "The Meaning Behind Our Signature Pieces",
      excerpt: "Each design in our collection carries a story. Here's what inspired them.",
      date: "May 28, 2026",
      readTime: "8 min",
    },
    {
      id: 3,
      title: "Caring for Your Demi-Fine Jewelry",
      excerpt: "Simple rituals to keep your pieces looking beautiful for years to come.",
      date: "May 10, 2026",
      readTime: "4 min",
    },
  ]

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center py-16">
          <div className="text-xs tracking-[0.15em] text-[#8B7355] mb-3">WORDS & INSPIRATION</div>
          <h1 className="font-serif text-6xl">The Journal</h1>
        </div>

        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="md:w-1/3">
                  <div className="aspect-[16/10] bg-[#F5F1EA]" />
                </div>
                <div className="md:w-2/3 pt-2">
                  <div className="flex items-center gap-4 text-xs tracking-[0.1em] text-[#6B665F] mb-4">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-3xl mb-4 group-hover:text-[#8B7355] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#6B665F] leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-sm tracking-[0.1em] text-[#8B7355]">Read More →</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16 pt-8 border-t border-[#E5DFD3]">
          <p className="text-sm text-[#6B665F]">More stories coming soon.</p>
        </div>
      </div>
    </div>
  )
}

export default Journal