import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-velmora-stone py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cream">
            <img
              data-strk-img-id="story-img-8f2a9c"
              data-strk-img="[story-title] [story-body]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:py-8">
            <p className="mb-3 font-sans text-xs font-medium uppercase tracking-widest text-velmora-gold">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl text-velmora-espresso md:text-4xl lg:text-5xl"
            >
              Jewelry for the Moments That Matter
            </h2>
            <p
              id="story-body"
              className="mt-6 text-sm leading-relaxed text-velmora-taupe md:text-base"
            >
              Velmora was born from a simple belief: fine jewelry should feel
              attainable. We design demi-fine pieces in 18k gold plate and
              sterling silver, blending heirloom inspiration with modern
              wearability. Every piece is made to move with you — from morning
              coffee to candlelit evenings.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-espresso underline-offset-4 hover:underline"
            >
              Read Our Story <ArrowRight size={14} className="pointer-events-none" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
