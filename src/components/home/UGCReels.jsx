import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { UGC_REELS } from '@/data/products'
import { cn } from '@/lib/utils'
import ProductImage from '@/components/shared/ProductImage'

export default function UGCReels() {
  const scrollerRef = useRef(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  const updateButtons = () => {
    const el = scrollerRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 4)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateButtons()
    el.addEventListener('scroll', updateButtons, { passive: true })
    window.addEventListener('resize', updateButtons)
    return () => {
      el.removeEventListener('scroll', updateButtons)
      window.removeEventListener('resize', updateButtons)
    }
  }, [])

  const scrollBy = (delta) => {
    scrollerRef.current?.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section className="py-20 lg:py-28 bg-ivory-100">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
          <div>
            <span className="eyebrow">@velmora · On you</span>
            <h2 className="mt-3 font-serif text-ink-900 text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] text-balance">
              As worn, as loved.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-360)}
              disabled={!canLeft}
              aria-label="Scroll left"
              className="w-10 h-10 border border-ink-900/30 flex items-center justify-center hover:bg-ink-900 hover:text-ivory-50 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink-900 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(360)}
              disabled={!canRight}
              aria-label="Scroll right"
              className="w-10 h-10 border border-ink-900/30 flex items-center justify-center hover:bg-ink-900 hover:text-ivory-50 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink-900 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="container-x">
        <div
          ref={scrollerRef}
          className="no-scrollbar flex gap-4 lg:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory -mx-5 px-5 sm:mx-0 sm:px-0"
        >
          {UGC_REELS.map((reel, i) => (
            <article
              key={reel.id}
              className={cn(
                'snap-start shrink-0 relative overflow-hidden bg-ink-900 group cursor-pointer',
                'w-[60vw] sm:w-[280px] lg:w-[260px] aspect-[9/16]',
                i % 2 === 1 ? 'lg:translate-y-6' : '',
              )}
            >
              <ProductImage art={reel.art} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full border border-ivory-50/40 flex items-center justify-center text-ivory-50/90">
                <Play className="w-3 h-3 fill-current" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-ivory-50">
                <p className="font-serif italic text-[18px] leading-tight">
                  {reel.caption}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ivory-50/70">
                  {reel.handle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
