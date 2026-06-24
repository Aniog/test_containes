import React from 'react'
import { ugcItems } from '@/lib/data'

const UGCReels = () => {
  const scrollRef = React.useRef(null)

  return (
    <section className="py-16 md:py-24">
      <div className="section-padding mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">As Seen On You</h2>
        <div className="w-12 h-px bg-brand-gold mt-4" />
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-6 md:px-12 lg:px-20 pb-4"
      >
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 w-48 md:w-56 relative rounded-sm overflow-hidden group cursor-pointer"
          >
            <div className="aspect-[9/16]">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white/90 italic">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UGCReels
