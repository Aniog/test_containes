import { useRef } from 'react'
import { ugcItems } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function UGCReel() {
  const containerRef = useRef(null)

  return (
    <section className="py-14 md:py-20 bg-charcoal-950 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-white tracking-wide">@velmora</h2>
        <p className="mt-1 text-sm text-charcoal-400">See how our community styles their favorites.</p>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map((item, idx) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-md overflow-hidden snap-start group"
          >
            <img
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`[ugc-caption-${idx}] gold jewelry on woman ear neck closeup editorial warm`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${idx}`}
              className="absolute bottom-3 left-3 right-3 font-serif text-white text-sm md:text-base italic leading-snug"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
