import React from 'react'

export default function UGCGrid() {
  const posts = [
    { id: 1, caption: "Golden Hour Glow", query: "woman wearing gold necklace warm light" },
    { id: 2, caption: "The Layering Guide", query: "stacked gold necklaces jewelry model" },
    { id: 3, caption: "Ear Stacks for Every Day", query: "ear holding gold earrings stacking" },
    { id: 4, caption: "Detail Oriented", query: "hand holding delicate gold chain" },
  ]

  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="px-6 md:px-12 mb-16 text-center">
        <span className="text-[11px] uppercase tracking-[0.3em] opacity-60 mb-4 block">Community</span>
        <h2 className="text-4xl font-serif">As Seen on You</h2>
      </div>

      <div className="flex overflow-x-auto pb-12 gap-6 px-6 md:px-12 no-scrollbar scroll-smooth">
        {posts.map((post) => (
          <div key={post.id} className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] bg-muted">
            <img
              data-strk-img-id={`ugc-${post.id}`}
              data-strk-img={post.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              className="w-full h-full object-cover"
              alt={post.caption}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
              <p className="font-serif italic text-lg">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
