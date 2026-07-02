import React from 'react'

const UGCRow = () => {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop&q=80',
      caption: '"Everyday elegance" — @sarah.m',
    },
    {
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop&q=80',
      caption: '"Obsessed with these huggies" — @emma.j',
    },
    {
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop&q=80',
      caption: '"Perfect gift for myself" — @lily.k',
    },
    {
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=700&fit=crop&q=80',
      caption: '"Layered perfection" — @mia.r',
    },
    {
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=700&fit=crop&q=80',
      caption: '"Gold is my neutral" — @ava.w',
    },
    {
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop&q=80',
      caption: '"Can\'t stop wearing these" — @chloe.b',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[var(--velmora-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">As Worn By You</h2>
        <p className="section-subtitle">Tag @velmorajewelry to be featured</p>

        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 sm:w-56 snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-sm">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-white text-xs font-serif italic leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCRow
