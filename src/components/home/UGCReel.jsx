import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday sparkle', imgId: 'ugc-reel-1-a8f2c1', descId: 'ugc-caption-1' },
  { id: 'ugc-2', caption: 'Stacking gold', imgId: 'ugc-reel-2-b3d4e5', descId: 'ugc-caption-2' },
  { id: 'ugc-3', caption: 'Date night ready', imgId: 'ugc-reel-3-c6f7g8', descId: 'ugc-caption-3' },
  { id: 'ugc-4', caption: 'Gift of gold', imgId: 'ugc-reel-4-d9h0i1', descId: 'ugc-caption-4' },
  { id: 'ugc-5', caption: 'Morning ritual', imgId: 'ugc-reel-5-e2j3k4', descId: 'ugc-caption-5' },
  { id: 'ugc-6', caption: 'Layered looks', imgId: 'ugc-reel-6-f5l6m7', descId: 'ugc-caption-6' },
]

const UGCReel = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            Worn by You
          </h2>
          <p className="mt-3 text-sm text-muted font-sans">
            @velmora on Instagram
          </p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-48 md:w-56 flex-shrink-0">
              <div className="aspect-[9/16] bg-surface relative overflow-hidden">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] gold jewelry worn on model`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p id={item.descId} className="font-serif text-sm text-white italic">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}

export default UGCReel
