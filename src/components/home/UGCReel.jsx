import React from 'react'
import { ugcItems } from '@/data/products'

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-surfaceAlt">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground">As Seen On You</h2>
          <p className="font-sans text-sm text-foregroundMuted mt-3 tracking-wide">Real style, real moments</p>
        </div>

        <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 md:-mx-10 md:px-10 snap-x snap-mandatory">
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 md:w-56 aspect-[9x16] bg-base rounded-none overflow-hidden snap-start group"
            >
              <img
                src={item.imageUrl}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p id={item.captionId} className="font-serif text-sm text-white tracking-wide italic">
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
