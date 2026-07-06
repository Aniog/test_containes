import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', imgId: 'ugc-reel-1-f3g4h5', descId: 'ugc-caption-1' },
  { id: 'reel-2', caption: 'Layered & loved', imgId: 'ugc-reel-2-i6j7k8', descId: 'ugc-caption-2' },
  { id: 'reel-3', caption: 'Gift-worthy', imgId: 'ugc-reel-3-l9m0n1', descId: 'ugc-caption-3' },
  { id: 'reel-4', caption: 'Golden hour', imgId: 'ugc-reel-4-o2p3q4', descId: 'ugc-caption-4' },
  { id: 'reel-5', caption: 'Minimal luxe', imgId: 'ugc-reel-5-r5s6t7', descId: 'ugc-caption-5' },
  { id: 'reel-6', caption: 'Date night ready', imgId: 'ugc-reel-6-u8v9w0', descId: 'ugc-caption-6' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">As Seen On You</h2>
          <p className="mt-3 text-sm text-stone font-light">Real moments, real jewelry</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div ref={containerRef} className="overflow-x-auto pb-4 px-5 md:px-8 lg:px-12">
        <div className="flex gap-4 min-w-max">
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden bg-charcoal/10 flex-shrink-0 group cursor-pointer">
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.descId}] gold jewelry on woman`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={reel.descId} className="font-serif text-sm text-white italic">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
