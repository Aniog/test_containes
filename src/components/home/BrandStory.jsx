import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-cream-deep py-20 md:py-28">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16">
        <div className="relative aspect-[4x5] overflow-hidden bg-sand-deep">
          <img
            alt="Velmora atelier"
            data-strk-img-id="story-img-4d8e1b"
            data-strk-img="[story-body] [story-title] jewelry atelier craftsmanship warm editorial"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="lg:pl-4">
          <p className="text-[11px] uppercase tracking-widest3 text-gold">Our Story</p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl"
          >
            Quiet luxury, made to be lived in.
          </h2>
          <p
            id="story-body"
            className="mt-6 text-sm leading-relaxed text-ink-muted md:text-base"
          >
            Velmora began with a simple belief: that fine craftsmanship shouldn’t be reserved for
            rare occasions. Each piece is hand-finished in 18K gold plating over brass, designed in
            our studio and made to be worn every day — through mornings, meetings, and the moments
            worth marking.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
            We work in small batches, with hypoallergenic materials and a commitment to pieces that
            last. No noise, no shortcuts — just jewelry crafted to be treasured.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-[11px] uppercase tracking-widest2 text-gold transition-colors hover:text-gold-deep"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
