import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

const UGCReel = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 lg:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-3xl lg:text-4xl text-text text-center">As Worn By You</h2>
        <p className="mt-2 text-sm text-text-muted text-center">Tag @velmora to be featured</p>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 sm:px-6 lg:px-8 min-w-max">
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative w-44 sm:w-52 aspect-[9/16] bg-accent-light rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <div
                data-strk-bg-id={`ugc-reel-${item.id}-bg-7d4e1a`}
                data-strk-bg={`[ugc-caption-${item.id}] gold jewelry on woman`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
                className="absolute inset-0"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={`ugc-caption-${item.id}`}
                  className="font-serif text-white text-sm italic"
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCReel
