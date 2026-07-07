import React from 'react'

const journalPosts = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop',
    date: 'June 28, 2026',
    category: 'Styling',
  },
  {
    id: 2,
    title: 'The Care Guide: Keeping Your Gold Jewelry Beautiful',
    excerpt: 'Simple tips to maintain the luster of your demi-fine pieces for years to come.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    date: 'June 15, 2026',
    category: 'Care',
  },
  {
    id: 3,
    title: 'Gift Guide: Jewelry for Every Occasion',
    excerpt: 'From birthdays to anniversaries, find the perfect piece for the women in your life.',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=400&fit=crop',
    date: 'June 1, 2026',
    category: 'Gifting',
  },
]

export default function JournalPage() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="section-padding">
        <h1 className="serif-heading text-4xl md:text-5xl text-center mb-4">The Journal</h1>
        <p className="text-sm text-[var(--color-muted)] text-center mb-12 max-w-lg mx-auto">
          Styling tips, care guides, and stories from the world of Velmora.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalPosts.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden bg-[var(--color-warm-white)] mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] tracking-widest uppercase text-[var(--color-gold)]">{post.category}</span>
              <h2 className="serif-heading text-xl mt-2 mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">{post.excerpt}</p>
              <span className="text-xs text-[var(--color-muted)]">{post.date}</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
