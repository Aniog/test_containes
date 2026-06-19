import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [active])

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4" ref={containerRef}>
      {/* Thumbnails - vertical on desktop, horizontal row on mobile */}
      <div className="flex md:flex-col gap-2 overflow-x-auto scrollbar-hide md:overflow-visible md:min-w-[72px]">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 w-16 h-20 md:w-[72px] md:h-[90px] bg-velvet-100 rounded-sm overflow-hidden border-2 transition-all ${
              active === i ? 'border-gold-500' : 'border-transparent hover:border-velvet-300'
            }`}
          >
            <img
              alt={`${name} view ${i + 1}`}
              data-strk-img-id={`pdp-thumb-${img}`}
              data-strk-img={`[pdp-name]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] bg-velvet-100 rounded-sm overflow-hidden">
        <img
          alt={name}
          data-strk-img-id={`pdp-main-${images[active]}`}
          data-strk-img={`[pdp-name]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hidden name element for image query */}
      <p id="pdp-name" className="hidden">{name}</p>
    </div>
  )
}
