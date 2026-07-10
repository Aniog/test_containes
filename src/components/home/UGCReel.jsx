import React from 'react'
import { ugcItems } from '@/data/products'

const UGCReel = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-warm">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <h2 className="text-center font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-base font-light mb-10 md:mb-14">
          As Seen On You
        </h2>
      </div>
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[200px] md:w-[220px] aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                alt={item.caption}
                data-strk-img-id={`ugc-${item.id}-img`}
                data-strk-img={`[ugc-${item.id}-caption] jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
              <p
                id={`ugc-${item.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream italic"
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

export default UGCReel
