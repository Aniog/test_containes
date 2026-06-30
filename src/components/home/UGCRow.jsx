import React from 'react'

const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop',
    caption: '"These huggies are my everyday staple" — @sarahstyle',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=700&fit=crop',
    caption: '"The perfect gift for myself" — @emmajewels',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=700&fit=crop',
    caption: '"Obsessed with the quality" — @oliviar',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=700&fit=crop',
    caption: '"Looks even better in person" — @gracestyle',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=700&fit=crop',
    caption: '"My new favorite necklace" — @lilyjewelry',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=400&h=700&fit=crop',
    caption: '"Worth every penny" — @sophiagold',
  },
]

export default function UGCRow() {
  return (
    <section className="py-16 bg-[var(--velmora-bg-secondary)]">
      <div className="container-wide mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--velmora-text-muted)] mb-2 text-center">As Worn By You</p>
        <h2 className="font-serif-display text-3xl md:text-4xl text-center">#VelmoraJewelry</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-48 md:w-56 snap-start relative group"
          >
            <div className="aspect-[9/16] overflow-hidden rounded-sm">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white text-xs p-4 font-serif-display italic leading-relaxed">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
