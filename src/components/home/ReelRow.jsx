import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { reelCards } from '@/data/products'
import SectionHeader from './SectionHeader'
import { Play } from 'lucide-react'

export default function ReelRow() {
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollBy = (dir) => {
    if (!scrollerRef.current) return
    const amount = scrollerRef.current.clientWidth * 0.6
    scrollerRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      className="bg-cream py-20 md:py-28 lg:py-32 border-y border-hairline"
    >
      <div className="container-page">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            eyebrow="On the gram"
            title="Worn by you"
            italic
          />
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll reels left"
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 border border-hairline hover:border-espresso text-espresso flex items-center justify-center transition-colors"
            >
              <span aria-hidden>‹</span>
            </button>
            <button
              type="button"
              aria-label="Scroll reels right"
              onClick={() => scrollBy(1)}
              className="w-10 h-10 border border-hairline hover:border-espresso text-espresso flex items-center justify-center transition-colors"
            >
              <span aria-hidden>›</span>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-12 flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-10 lg:px-16 pb-4"
      >
        <div className="flex-shrink-0 w-2 md:w-6 lg:w-16" aria-hidden />
        {reelCards.map((card) => (
          <article
            key={card.id}
            className="relative flex-shrink-0 w-[68vw] sm:w-[280px] md:w-[260px] aspect-[9/16] overflow-hidden bg-noir snap-start group"
          >
            <img
              alt={card.caption}
              data-strk-img-id={card.imgId}
              data-strk-img={card.imgQuery}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-noir/10 via-transparent to-noir/85" aria-hidden />
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ivory/15 backdrop-blur-sm flex items-center justify-center text-ivory">
              <Play className="w-3.5 h-3.5 fill-ivory" strokeWidth={0} />
            </div>
            <div className="absolute left-5 right-5 bottom-5 text-ivory">
              <p className="font-serif italic text-2xl leading-tight">{card.caption}</p>
              <p className="mt-2 text-[10px] uppercase tracking-widest3 text-ivory/70">
                {card.handle}
              </p>
            </div>
          </article>
        ))}
        <div className="flex-shrink-0 w-2 md:w-6 lg:w-16" aria-hidden />
      </div>
    </section>
  )
}
