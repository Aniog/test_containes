import React from 'react'

const reels = [
  {
    id: 'r1',
    caption: 'Golden hour glow ✨',
    imgId: 'ugc-reel-1-a1b2c3',
    titleId: 'ugc-title-1',
  },
  {
    id: 'r2',
    caption: 'Layered necklaces for brunch',
    imgId: 'ugc-reel-2-d4e5f6',
    titleId: 'ugc-title-2',
  },
  {
    id: 'r3',
    caption: 'Huggies all day, every day',
    imgId: 'ugc-reel-3-g7h8i9',
    titleId: 'ugc-title-3',
  },
  {
    id: 'r4',
    caption: 'New favorite ear cuff',
    imgId: 'ugc-reel-4-j0k1l2',
    titleId: 'ugc-title-4',
  },
  {
    id: 'r5',
    caption: 'Gift-ready sets 🎁',
    imgId: 'ugc-reel-5-m3n4o5',
    titleId: 'ugc-title-5',
  },
  {
    id: 'r6',
    caption: 'Date night sparkle',
    imgId: 'ugc-reel-6-p6q7r8',
    titleId: 'ugc-title-6',
  },
]

export default function UGCReels() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-3">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide">
          Styled by You
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 snap-x snap-mandatory">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] rounded-sm overflow-hidden snap-start group"
          >
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] jewelry gold earring necklace huggie model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm md:text-base leading-snug"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
