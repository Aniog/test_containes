import React from 'react'

export default function JournalPage() {
  const posts = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=500&fit=crop',
      date: 'June 15, 2026',
      category: 'Styling',
    },
    {
      id: 2,
      title: 'The Care Guide: Keeping Your Gold Jewelry Beautiful',
      excerpt: 'Simple tips to maintain the luster of your 18K gold plated pieces for years to come.',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=500&fit=crop',
      date: 'June 8, 2026',
      category: 'Care',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Occasion',
      excerpt: 'From birthdays to anniversaries, find the perfect piece for the special women in your life.',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=500&fit=crop',
      date: 'May 28, 2026',
      category: 'Gifts',
    },
  ]

  return (
    <main className="bg-velmora-cream min-h-screen">
      {/* Header */}
      <div className="bg-velmora-base py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-velmora-gold text-sm tracking-widest mb-3">THE VELMORA JOURNAL</p>
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-cream">Stories & Style</h1>
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs tracking-widest text-velmora-gold">{post.category.toUpperCase()}</span>
                <span className="text-xs text-velmora-muted">{post.date}</span>
              </div>
              <h2 className="font-serif text-xl text-velmora-base group-hover:text-velmora-gold transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-velmora-muted leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 text-sm tracking-wider text-velmora-base border-b border-velmora-gold pb-0.5 group-hover:text-velmora-gold transition-colors">
                READ MORE
              </span>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
