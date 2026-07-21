import React from "react"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useReveal } from "@/hooks/useReveal"


export default function BrandStory() {
  const containerRef = useRef(null)
  const { ref, visible } = useReveal()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
        {/* Image */}
        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""} relative aspect-[4/5] overflow-hidden bg-sand/40`}
        >
          <img
            alt="Velmora atelier — hand-finishing gold jewelry"
            data-strk-img-id="brand-story-img-2c8f"
            data-strk-img="[brand-story-text] [brand-story-eyebrow] gold jewelry atelier hand finishing warm"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:pl-4">
          <p
            id="brand-story-eyebrow"
            className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold"
          >
            Our Story
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            Quietly luxurious,
            <br />
            made to be lived in.
          </h2>
          <div
            id="brand-story-text"
            className="mt-6 space-y-4 font-sans text-sm leading-relaxed text-stone"
          >
            <p>
              Velmora began with a simple belief: that fine jewelry should be
              worn, not locked away. We design demi-fine pieces in 18K gold
              plating and vermeil — warm, hand-finished, and made to move with
              you from morning to evening.
            </p>
            <p>
              Every piece is hypoallergenic, nickel-free, and finished by hand
              in small batches. No middlemen, no markups for the sake of it —
              just considered design at an honest price.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 font-sans text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:text-gold"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
