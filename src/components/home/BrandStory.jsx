import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section
      ref={containerRef}
      id="story"
      className="bg-velmora-cream py-20 lg:py-0"
    >
      <div className="mx-auto max-w-7xl lg:flex lg:min-h-[700px]">
        <div className="relative aspect-square w-full lg:aspect-auto lg:w-1/2">
          <div
            data-strk-bg-id="story-bg"
            data-strk-bg="[story-title] [story-body]"
            data-strk-bg-ratio="1x1"
            data-strk-bg-width="900"
            className="absolute inset-0 bg-velmora-ivory"
          />
        </div>

        <div className="flex items-center px-6 py-16 lg:w-1/2 lg:px-16 xl:px-24">
          <div className="max-w-lg">
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-velmora-gold">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl font-light uppercase tracking-[0.12em] text-velmora-charcoal md:text-4xl"
            >
              Quiet Luxury, Made Personal
            </h2>
            <p
              id="story-body"
              className="mt-6 font-sans text-base leading-[1.8] text-velmora-warm-gray"
            >
              Velmora was born from a love of heirloom details and the belief
              that beautiful jewelry shouldn't require a special occasion. Each
              piece is designed in-house, gold-plated to a warm, lasting finish,
              and made to become part of your daily ritual — your morning
              coffee, your evening out, the moments in between.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-velmora-charcoal transition-colors hover:text-velmora-gold"
            >
              Explore the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
