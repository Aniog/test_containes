import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Everyday elegance',
    query: 'gold hoop earrings on woman ear close-up warm lighting',
    imgId: 'ugc-reel-1-everyday-elegance-8f2a',
  },
  {
    id: 'ugc-2',
    caption: 'Layered to perfection',
    query: 'gold necklace layering on woman collarbone warm lighting',
    imgId: 'ugc-reel-2-layered-3d7e',
  },
  {
    id: 'ugc-3',
    caption: 'The perfect huggie',
    query: 'gold huggie earrings on model ear profile close-up',
    imgId: 'ugc-reel-3-huggie-5c2f',
  },
  {
    id: 'ugc-4',
    caption: 'Glow up',
    query: 'gold crystal earrings on woman neck warm golden hour light',
    imgId: 'ugc-reel-4-glow-9b1d',
  },
  {
    id: 'ugc-5',
    caption: 'Gift her something golden',
    query: 'jewelry gift box open gold necklace earrings velvet',
    imgId: 'ugc-reel-5-gift-2a7f',
  },
  {
    id: 'ugc-6',
    caption: 'Date night ready',
    query: 'gold statement earrings woman evening look warm lighting',
    imgId: 'ugc-reel-6-datenight-6e8d',
  },
]

export default function UGCSlider() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-12 md:py-20 overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-10">
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-warm-gray-light mb-3">
            @VelmoraJewelry
          </p>
          <h2 className="font-serif text-2xl md:text-heading-lg text-charcoal">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2 snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[160px] sm:w-[180px] md:w-[200px] aspect-[9/16] rounded-lg overflow-hidden snap-start group"
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.caption.replace(/\s+/g, '-').toLowerCase()}] jewelry worn woman model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover"
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            {/* Caption */}
            <p className="absolute bottom-4 left-3 right-3 font-serif text-sm md:text-base text-white italic leading-snug">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
