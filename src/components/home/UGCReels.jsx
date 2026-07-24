import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'r1', title: 'Layered gold necklaces for everyday elegance', query: 'gold layered necklaces on model warm editorial' },
  { id: 'r2', title: 'Huggie hoops catching the light', query: 'gold huggie earrings close up ear warm light' },
  { id: 'r3', title: 'Minimal ear stack inspiration', query: 'minimal gold ear stack earrings editorial' },
  { id: 'r4', title: 'A gift she will remember', query: 'gold jewelry gift box unboxing warm' },
  { id: 'r5', title: 'Statement drop moment', query: 'gold drop earrings on model portrait warm' },
]

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 mb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-velmora-gold">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-3xl font-medium text-velmora-espresso md:text-4xl">
          Styled by You
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide">
        {reels.map((reel, idx) => (
          <div
            key={reel.id}
            className="relative h-[360px] w-[210px] flex-shrink-0 overflow-hidden rounded-xl bg-velmora-espresso md:h-[420px] md:w-[250px]"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.title}
              data-strk-img-id={`reel-${reel.id}`}
              data-strk-img={`[reel-title-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
            <p
              id={`reel-title-${reel.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg italic leading-snug text-white"
            >
              {reel.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
