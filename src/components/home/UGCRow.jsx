import React from 'react'

const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=700&fit=crop',
    caption: 'Everyday elegance ✨',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop',
    caption: 'Stacked & styled 💫',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&h=700&fit=crop',
    caption: 'Golden hour glow',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop',
    caption: 'Layered perfection',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=700&fit=crop',
    caption: 'Gift of luxury 🎁',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&h=700&fit=crop',
    caption: 'Timeless beauty',
  },
]

export default function UGCRow() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            @velmora
          </p>
          <h2 className="serif-heading text-4xl md:text-5xl">
            As Worn By You
          </h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-none w-48 md:w-56 snap-start relative group"
            >
              <div className="aspect-[9/16] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="serif-heading text-white text-lg italic">
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
