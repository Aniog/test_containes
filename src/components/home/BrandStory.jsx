import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <img
              alt="Velmora jewelry craftsmanship"
              data-strk-img-id="brand-story-img-2c8e"
              data-strk-img="[story-body] [story-title] gold jewelry craftsmanship studio"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="md:pl-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              Jewelry made to live in, not lock away.
            </h2>
            <p
              id="story-body"
              className="mt-6 text-base text-muted leading-relaxed"
            >
              Velmora began with a simple frustration: fine jewelry felt out of
              reach, and costume jewelry never lasted. We set out to make
              demi-fine pieces — 18K gold plating over sterling silver, finished
              by hand — that you could put on Monday and forget to take off.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed">
              Every piece is designed in-house, ethically made in small batches,
              and tested for real life. No green skin, no tarnish in a week, no
              compromise.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink border-b border-gold pb-1 hover:text-gold-deep transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
