import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcCards } from '@/data/products'

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground">Worn by You</h2>
          <p className="mt-3 text-sm text-muted-foreground">Tag @velmora to be featured</p>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 lg:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcCards.map(card => (
            <div
              key={card.id}
              className="relative w-48 md:w-56 aspect-[9/16] bg-foreground/10 overflow-hidden flex-shrink-0 group"
            >
              <img
                data-strk-img-id={card.imgId}
                data-strk-img={`[${card.id}-caption] gold jewelry worn on model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={card.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p
                id={`${card.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic"
              >
                {card.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
