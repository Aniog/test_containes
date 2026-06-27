import React from 'react'
import { ugcItems } from '@/data/products'

export default function UGCStrip() {
  return (
    <section className="py-16 md:py-20 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="text-center">
          <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">As Seen On You</p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium">Styled by Our Community</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[9/16] h-[350px] md:h-[420px] shrink-0 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white text-sm font-serif italic leading-relaxed">
                  &ldquo;{item.caption}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}