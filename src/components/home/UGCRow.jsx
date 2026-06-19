import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcReels } from '@/data/products'

export default function UGCRow() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section className="py-20 md:py-28 bg-velvet-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-5 mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-gold-600 font-medium mb-2">Styled by You</p>
        <h2 className="font-serif text-2xl md:text-3xl text-velvet-950 tracking-wide">As Seen On</h2>
      </div>

      <div className="flex gap-5 overflow-x-auto scrollbar-hide px-5 max-w-7xl mx-auto pb-4">
        {ugcReels.map((reel, i) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[160px] md:w-[200px]"
          >
            {/* Reel card - 9:16 */}
            <div className="relative aspect-[9/16] bg-velvet-200 rounded-sm overflow-hidden">
              <img
                alt={reel.caption}
                data-strk-img-id={`ugc-${reel.id}-img-${i}`}
                data-strk-img={`[ugc-caption-${i}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p id={`ugc-caption-${i}`} className="font-serif text-sm text-white italic leading-snug">
                  {reel.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
