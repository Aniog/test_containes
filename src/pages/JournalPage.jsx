import React from 'react'

export default function JournalPage() {
  const posts = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'The art of layering is all about mixing lengths, textures, and weights. Here is our guide to getting it right.',
      image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=800&h=500&fit=crop',
      date: 'June 12, 2026',
      category: 'Style Guide',
    },
    {
      id: 2,
      title: 'The Care Guide: Keeping Your Gold Looking New',
      excerpt: 'Simple habits that will extend the life of your demi-fine jewelry and keep it shining for years.',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=500&fit=crop',
      date: 'May 28, 2026',
      category: 'Care',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Occasion',
      excerpt: 'From birthdays to anniversaries, find the perfect piece for the people you love.',
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=500&fit=crop',
      date: 'May 15, 2026',
      category: 'Gift Guide',
    },
  ]

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-[#f5f0eb] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-4 font-sans">
            The Journal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a]">
            Stories & Style
          </h1>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {posts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden bg-[#f5f0eb] mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-[10px] tracking-widest uppercase text-[#c9a96e]">
                  {post.category}
                </span>
                <h2 className="font-serif text-xl md:text-2xl text-[#1a1a1a] mt-2 mb-3 group-hover:text-[#c9a96e] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-[#6b6560] leading-relaxed mb-3">
                  {post.excerpt}
                </p>
                <time className="text-xs text-[#6b6560]">{post.date}</time>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
