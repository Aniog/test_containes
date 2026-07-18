import { useRef, useEffect, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reels = [
  { id: 'ugc-1', title: 'Morning light', caption: 'Golden hour with the Aura Cuff ✨' },
  { id: 'ugc-2', title: 'Stacked & styled', caption: 'Everyday stack, elevated' },
  { id: 'ugc-3', title: 'Necklace detail', caption: 'Flora Nectar catching the light' },
  { id: 'ugc-4', title: 'Night out', caption: 'Date night essentials' },
  { id: 'ugc-5', title: 'Gift unboxing', caption: 'The perfect gift moment' },
  { id: 'ugc-6', title: 'Close up', caption: 'Details that matter' },
]

export default function UGReel() {
  const scrollRef = useRef(null)
  const containerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollState, { passive: true })
    updateScrollState()
    return () => el.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <section className="py-20 md:py-28" ref={containerRef}>
      <div className="section-pad max-w-[1440px] mx-auto mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-velvet-800 mb-3">Styled by You</h2>
        <p className="text-velvet-500 font-sans text-sm max-w-md leading-relaxed">
          See how the Velmora community wears their favorite pieces.
        </p>
      </div>

      <div className="relative">
        {/* Left arrow */}
        <button
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream-50/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 ${
            canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-velvet-800" />
        </button>

        {/* Right arrow */}
        <button
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream-50/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 ${
            canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => scroll(1)}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-velvet-800" />
        </button>

        {/* Reels strip */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-12 lg:px-20 pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] snap-start group cursor-pointer"
            >
              <div className="relative aspect-[9/16] bg-velvet-100 overflow-hidden">
                <img
                  alt={reel.title}
                  data-strk-img-id={`ugc-${reel.id}`}
                  data-strk-img={`[ugc-caption-${reel.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="440"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/60 via-transparent to-transparent" />
                <p
                  id={`ugc-caption-${reel.id}`}
                  className="absolute bottom-4 left-4 right-4 text-cream-50 text-xs font-serif italic leading-snug"
                >
                  {reel.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
