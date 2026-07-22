import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-blush py-16 md:py-0">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-text] velmora jewelry craftsmanship gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center px-4 py-16 md:px-12 lg:px-20">
            <div className="max-w-md">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                Our Philosophy
              </p>
              <h2
                id="brand-story-title"
                className="mt-4 font-serif text-4xl font-light leading-tight md:text-5xl"
              >
                Designed for the Woman Who Knows
              </h2>
              <p
                id="brand-story-text"
                className="mt-6 leading-relaxed text-warm-gray"
              >
                Velmora was born from a simple belief: luxury should feel
                personal, not performative. Each piece is thoughtfully designed
                in small batches using 18K gold plating and hypoallergenic
                materials — so you can wear it from morning coffee to midnight
                toasts.
              </p>
              <p className="mt-4 leading-relaxed text-warm-gray">
                No fast trends. No compromises. Just jewelry that lives with you.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-espresso transition-colors hover:text-gold"
              >
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
