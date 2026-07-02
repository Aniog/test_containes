import { useRef, useEffect } from 'react'
import StrkImage from '@/components/ui/StrkImage'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  {
    id: 'reel-1',
    imgId: 'velmora-reel-1',
    query: 'gold huggie earrings worn on ear close up warm light editorial',
    caption: 'Everyday gold',
  },
  {
    id: 'reel-2',
    imgId: 'velmora-reel-2',
    query: 'layered gold necklaces on model neck editorial jewelry',
    caption: 'Layered moments',
  },
  {
    id: 'reel-3',
    imgId: 'velmora-reel-3',
    query: 'gold ear cuff crystal jewelry on ear editorial',
    caption: 'Effortless edge',
  },
  {
    id: 'reel-4',
    imgId: 'velmora-reel-4',
    query: 'woman wearing gold drop earrings portrait warm light',
    caption: 'Quiet luxury',
  },
  {
    id: 'reel-5',
    imgId: 'velmora-reel-5',
    query: 'gold ring stack and bracelet hand jewelry editorial close up',
    caption: 'Treasured details',
  },
]

export default function ReelStrip() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-[#1A1512] py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#C49A6C]">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-3xl text-[#F6F3EF] md:text-4xl">
          Styled by You
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide sm:px-6 lg:px-8">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="group relative aspect-[9/16] w-[170px] flex-shrink-0 overflow-hidden sm:w-[200px] md:w-[240px]"
          >
            <StrkImage
              id={reel.imgId}
              query={reel.query}
              ratio="9x16"
              width="400"
              alt={reel.caption}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1512]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-lg italic text-[#F6F3EF]">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
