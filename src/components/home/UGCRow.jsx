import React from 'react'

const ugcItems = [
  {
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
    caption: 'Everyday elegance',
  },
  {
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Stacked & styled',
  },
  {
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80',
    caption: 'Golden hour glow',
  },
  {
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    caption: 'Layered perfection',
  },
  {
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=80',
    caption: 'Minimal & bold',
  },
  {
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80',
    caption: 'Treasured moments',
  },
]

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-xs tracking-widest-xl uppercase text-velmora-muted mb-3">@velmora</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-base">Worn & Loved</h2>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map((item, index) => (
          <div
            key={index}
            className="flex-none w-40 sm:w-48 snap-start relative group"
          >
            <div className="aspect-[9/16] overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
              <p className="font-serif text-white text-sm italic">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
