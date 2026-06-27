import { useRef, useEffect } from 'react'
import { ugcItems } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const UGCRow = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-20 md:py-28 border-t border-velmora-border" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-text tracking-wide">
          As Seen On You
        </h2>
        <div className="w-12 h-px bg-velmora-gold mt-5" />
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 px-5 md:px-8 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9x16] overflow-hidden snap-start group"
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-black/70 via-transparent to-transparent" />
            <p
              id={item.titleId}
              className="absolute bottom-4 left-4 right-4 font-serif text-sm text-velmora-cream tracking-wide"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UGCRow
