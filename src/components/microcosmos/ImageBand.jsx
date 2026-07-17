import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const bandImages = [
  { id: 'band-1', imgId: 'band-micro-1-p3k8j2', ratio: '1x1', width: '400' },
  { id: 'band-2', imgId: 'band-micro-2-s7c5n9', ratio: '1x1', width: '400' },
  { id: 'band-3', imgId: 'band-micro-3-r2f6w4', ratio: '1x1', width: '400' },
  { id: 'band-4', imgId: 'band-micro-4-k9b1t8', ratio: '1x1', width: '400' },
  { id: 'band-5', imgId: 'band-micro-5-m4h3v6', ratio: '1x1', width: '400' },
  { id: 'band-6', imgId: 'band-micro-6-d8g2x5', ratio: '1x1', width: '400' },
  { id: 'band-7', imgId: 'band-micro-7-a1l9p7', ratio: '1x1', width: '400' },
  { id: 'band-8', imgId: 'band-micro-8-c6e4q3', ratio: '1x1', width: '400' },
]

const ImageBand = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-8 overflow-hidden bg-cosmos-bg">
      <div className="flex gap-3 px-3">
        {bandImages.map((img) => (
          <div key={img.id} className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-xl overflow-hidden glow-card">
            <img
              data-strk-img-id={img.imgId}
              data-strk-img="microscopic organism electron microscope"
              data-strk-img-ratio={img.ratio}
              data-strk-img-width={img.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Microscopic organism"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ImageBand
