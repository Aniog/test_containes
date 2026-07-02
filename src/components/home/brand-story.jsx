import React, { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export const BrandStory = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-cream">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-body]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl"
            >
              Jewelry for the Modern Romantic
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 leading-relaxed text-muted md:text-lg"
            >
              Velmora was founded on a simple belief: fine jewelry should feel personal, not precious. Our demi-fine pieces are crafted in small batches from 18k gold-plated brass, designed to transition effortlessly from morning coffee to evening plans.
            </p>
            <p className="mt-4 leading-relaxed text-muted md:text-lg">
              Every curve, clasp, and finish is considered — so you can wear your treasures daily and gift them with confidence.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-ink hover:text-gold"
            >
              Read Our Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
