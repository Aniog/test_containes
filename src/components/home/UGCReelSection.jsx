import React from 'react'

const reels = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    caption: 'Everyday gold, effortless glow',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80',
    caption: 'Stacked and styled',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
    caption: 'Layered luxe',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Minimal, maximal impact',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80',
    caption: 'Gifts she will treasure',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    caption: 'From desk to dinner',
  },
]

export function UGCReelSection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-surface border-t border-velmora-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-center">
          @velmorajewelry
        </h2>
        <p className="text-center text-xs uppercase tracking-[0.2em] text-velmora-muted mt-2">
          Tag us to be featured
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-3 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative shrink-0 w-[220px] md:w-[260px] aspect-[9/16] rounded-lg overflow-hidden snap-start group cursor-pointer"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm md:text-base leading-snug">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
