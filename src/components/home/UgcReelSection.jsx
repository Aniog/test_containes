import { useRef, useEffect } from 'react'

const REELS = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3d3e6824?auto=format&fit=crop&w=600&q=80',
    caption: 'Everyday gold, elevated',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1602751584552-8ba420552259?auto=format&fit=crop&w=600&q=80',
    caption: 'Layered & loved',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=600&q=80',
    caption: 'Gift-worthy moments',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1617038224557-69d61629fd8e?auto=format&fit=crop&w=600&q=80',
    caption: 'Delicate details',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80',
    caption: 'Evening light',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80',
    caption: 'Styled by you',
  },
]

export function UgcReelSection() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let rafId
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      el.removeEventListener('wheel', onWheel)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-velvet overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10 mb-8 md:mb-10">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-3">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream">Styled by You</h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-10 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {REELS.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[160px] md:w-[200px] aspect-[9/16] snap-start overflow-hidden group cursor-pointer"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velvet/80 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-base md:text-lg text-cream leading-tight">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
