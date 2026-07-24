import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-sand py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <img
            alt="The Velmora atelier"
            data-strk-img-id="story-img-velmora-4d5e"
            data-strk-img="[story-body] [story-title]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="md:pl-6">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">Our Story</p>
          <h2
            id="story-title"
            className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl"
          >
            Quiet luxury, made to be lived in.
          </h2>
          <p id="story-body" className="mt-6 text-base leading-relaxed text-charcoal">
            Velmora began in a small studio with a single belief: that fine gold jewelry should not
            be locked behind a velvet rope. We hand-finish every piece in 18K gold plating over solid
            brass, set each crystal by hand, and price it honestly — so the pieces you reach for every
            morning can be the ones you treasure for years.
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Hypoallergenic, nickel-free, and made to move with you from the desk to the dinner table.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block border border-ink px-10 py-4 text-[11px] uppercase tracking-widest3 text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
