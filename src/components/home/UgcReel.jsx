import React from 'react'
import { getImage } from '@/data/images'
import { ugcItems } from '@/data/products'

const ugcImageMap = {
  'ugc-1': 'ugc-1',
  'ugc-2': 'ugc-2',
  'ugc-3': 'ugc-3',
  'ugc-4': 'ugc-4',
  'ugc-5': 'ugc-5',
  'ugc-6': 'ugc-6',
}

const UgcReel = () => {
  return (
    <section className="py-16 md:py-24 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-charcoal text-center">
          As Seen On You
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-4" />
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 md:px-6 lg:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-48 md:w-56 aspect-[9/16] flex-shrink-0 overflow-hidden group"
            >
              <img
                src={getImage(ugcImageMap[item.id])}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white/90 italic"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UgcReel
