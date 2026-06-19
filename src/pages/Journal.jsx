import React from 'react'

const Journal = () => {
  const posts = [
    {
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From delicate layering in spring to bold statement pieces in winter, discover our guide to year-round styling.",
      date: "June 12, 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=600&q=80",
    },
    {
      title: "The Art of Gift-Giving: Jewelry Edition",
      excerpt: "Thoughtful considerations for selecting the perfect piece that will be cherished for years to come.",
      date: "May 28, 2026",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
    },
    {
      title: "Behind the Design: The Lumina Collection",
      excerpt: "A look into the creative process and inspiration behind our crystal-embellished signature line.",
      date: "May 10, 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    },
  ]

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.2em] text-[#6B6560]">STORIES & INSPIRATION</p>
        <h1 className="serif text-6xl tracking-[-0.02em] mt-2">Journal</h1>
      </div>

      <div className="space-y-16">
        {posts.map((post, idx) => (
          <article key={idx} className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 aspect-[16/9] bg-[#F5F2ED] overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-2">
              <p className="text-xs tracking-[0.15em] text-[#6B6560] mb-2">{post.date}</p>
              <h3 className="serif text-3xl tracking-[-0.01em] mb-4 leading-tight">{post.title}</h3>
              <p className="text-[#6B6560] mb-6">{post.excerpt}</p>
              <a href="#" className="text-sm tracking-[0.1em] hover:text-[#B8976F]">Read More →</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Journal
