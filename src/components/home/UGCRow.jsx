import React from 'react'
import { ugcPosts } from '../../data/products'

const UGCRow = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-3">As Worn By You</h2>
          <div className="hairline w-24 mx-auto mb-4" />
          <p className="font-sans text-sm text-velmora-text-light max-w-md mx-auto">
            Tag @velmora to be featured
          </p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcPosts.map(post => (
            <div key={post.id} className="ugc-card snap-start">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              <div className="ugc-caption">
                <p className="font-serif text-sm text-velmora-cream italic">
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
