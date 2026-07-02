import React from 'react'
import { ugcImages } from '@/data/images'

const ugcItems = [
  { id: '1', caption: 'Golden Hour' },
  { id: '2', caption: 'Everyday Elegance' },
  { id: '3', caption: 'Layered Looks' },
  { id: '4', caption: 'Statement Piece' },
  { id: '5', caption: 'Gift Ready' },
  { id: '6', caption: 'Date Night' },
  { id: '7', caption: 'Self Love' },
  { id: '8', caption: 'Stacked' },
]

export default function UGCReel() {
  return (
    <section className="py-16 md:py-20 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">@VelmoraJewelry</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Worn & Loved</h2>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
          {ugcItems.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[200px] md:w-[240px] relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
              style={{ scrollSnapAlign: 'start' }}
            >
              <img
                src={ugcImages[index]}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-base md:text-lg leading-snug">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
