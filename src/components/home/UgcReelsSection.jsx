import { useRef, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { ugcReels } from '@/data/products'

export default function UgcReelsSection() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let isDown = false
    let startX
    let scrollLeft

    const onMouseDown = (e) => {
      isDown = true
      startX = e.pageX - el.offsetLeft
      scrollLeft = el.scrollLeft
    }
    const onMouseLeave = () => {
      isDown = false
    }
    const onMouseUp = () => {
      isDown = false
    }
    const onMouseMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - el.offsetLeft
      const walk = (x - startX) * 1.5
      el.scrollLeft = scrollLeft - walk
    }

    el.addEventListener('mousedown', onMouseDown)
    el.addEventListener('mouseleave', onMouseLeave)
    el.addEventListener('mouseup', onMouseUp)
    el.addEventListener('mousemove', onMouseMove)

    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      el.removeEventListener('mouseleave', onMouseLeave)
      el.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between md:mb-10">
          <div>
            <h2 className="font-serif text-3xl font-medium text-charcoal md:text-4xl">
              Styled by You
            </h2>
            <p className="mt-2 font-sans text-sm text-warmgray">
              Tag @velmora to be featured.
            </p>
          </div>
          <span className="hidden font-sans text-xs font-medium uppercase tracking-wide text-warmgray md:block">
            Scroll
          </span>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="hide-scroll flex cursor-grab gap-4 overflow-x-auto px-4 pb-4 active:cursor-grabbing sm:px-6 lg:px-8"
      >
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative aspect-[9/16] w-48 flex-shrink-0 overflow-hidden md:w-56"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-lg italic text-cream">{reel.caption}</p>
            </div>
            <button
              type="button"
              className="absolute right-3 top-3 text-cream/80 transition-colors hover:text-cream"
              aria-label="Like"
            >
              <Heart size={18} strokeWidth={1.5} />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
