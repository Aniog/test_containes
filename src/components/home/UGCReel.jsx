import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-espresso">
          As Worn by You
        </h2>
        <p className="mt-2 text-sm text-brand-muted font-sans">
          Tag @velmora to be featured
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto px-5 md:px-10 lg:px-20 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] bg-brand-ivory overflow-hidden group"
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[ugc-caption-${item.id}] gold jewelry worn on model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p
              id={`ugc-caption-${item.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
