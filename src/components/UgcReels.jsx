import { useRef } from 'react'
import { ugcReels } from '@/data/products.js'

export default function UgcReels() {
  const scrollRef = useRef(null)

  return (
    <section className="py-16 md:py-24 bg-velmora-sand/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal text-center">
          Styled by You
        </h2>
        <p className="font-sans text-sm text-velmora-warmgray mt-3 text-center">
          Tag @velmorajewelry to be featured
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 md:px-10 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] relative rounded-sm overflow-hidden snap-start group cursor-pointer"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
            />
            <span id={`ugc-caption-${reel.id}`} className="sr-only">
              {reel.caption} gold jewelry
            </span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-sm md:text-base text-white italic">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}