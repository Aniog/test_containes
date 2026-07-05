import React from 'react'
import { ugcItems } from '../../data/products'

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-text-primary">
            As Seen On You
          </h2>
          <div className="w-12 h-px bg-muted-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="relative w-48 md:w-56 flex-shrink-0 group">
              <div className="aspect-9x16 bg-deep-brown rounded-sm overflow-hidden">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}] gold jewelry worn`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-warm-black/70 to-transparent p-4">
                <p id={item.titleId} className="font-serif text-sm text-text-light italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
