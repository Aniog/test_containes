import { useRef, useEffect } from 'react'
import { StockImage } from '@/components/ui/StockImage'

const reels = [
  { id: 'ugc-1', caption: 'Golden hour essentials' },
  { id: 'ugc-2', caption: 'Stacked huggies, all day' },
  { id: 'ugc-3', caption: 'A little sparkle goes far' },
  { id: 'ugc-4', caption: 'Gifted & treasured' },
  { id: 'ugc-5', caption: 'Quiet luxury mood' },
  { id: 'ugc-6', caption: 'Everyday gold' },
]

export function UGCReels() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <section className="bg-[#F9F7F2] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#B9975B]">
          @velmorajewelry
        </p>
        <h2 className="mb-10 font-serif text-3xl font-light uppercase tracking-[0.08em] text-[#1A1614] md:text-4xl">
          Styled by You
        </h2>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide sm:px-6 lg:px-8"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {reels.map((reel, idx) => (
          <figure
            key={reel.id}
            className="relative h-[420px] w-[260px] flex-shrink-0 overflow-hidden scroll-snap-align-start sm:h-[480px] sm:w-[300px]"
            style={{ scrollSnapAlign: 'start' }}
          >
            <StockImage
              id={reel.id}
              query={`[ugc-caption-${idx}]`}
              ratio="9x16"
              width="400"
              alt={reel.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/70 via-transparent to-transparent" />
            <figcaption
              id={`ugc-caption-${idx}`}
              className="absolute bottom-6 left-6 right-6 font-serif text-lg font-light italic text-white"
            >
              {reel.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
