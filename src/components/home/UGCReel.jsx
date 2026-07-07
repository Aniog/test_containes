import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const REEL_ITEMS = [
  {
    id: 'reel-1',
    caption: 'Everyday gold moments',
    imgId: 'ugc-reel-1',
    titleId: 'reel-title-1',
  },
  {
    id: 'reel-2',
    caption: 'Layered huggies',
    imgId: 'ugc-reel-2',
    titleId: 'reel-title-2',
  },
  {
    id: 'reel-3',
    caption: 'Gift-ready sets',
    imgId: 'ugc-reel-3',
    titleId: 'reel-title-3',
  },
  {
    id: 'reel-4',
    caption: 'Soft light, fine gold',
    imgId: 'ugc-reel-4',
    titleId: 'reel-title-4',
  },
  {
    id: 'reel-5',
    caption: 'Styled by you',
    imgId: 'ugc-reel-5',
    titleId: 'reel-title-5',
  },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-20 bg-champagne/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-espresso">
          Styled by You
        </h2>
      </div>
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4"
      >
        {REEL_ITEMS.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] bg-charcoal overflow-hidden group"
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={PLACEHOLDER}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
            <p
              id={item.titleId}
              className="absolute bottom-5 left-4 right-4 font-serif text-lg md:text-xl text-cream leading-tight"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
