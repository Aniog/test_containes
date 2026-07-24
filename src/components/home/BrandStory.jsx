import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-velmora-cream-dark md:aspect-square">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] [story-body]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="900"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="md:py-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-velmora-gold">
              Our Philosophy
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl font-medium leading-tight text-velmora-espresso md:text-4xl lg:text-5xl"
            >
              Designed for the Modern Muse
            </h2>
            <p
              id="story-body"
              className="mt-6 text-base leading-relaxed text-velmora-taupe md:text-lg"
            >
              Velmora was born from a belief that fine jewelry should feel attainable. Each piece is
              thoughtfully crafted with 18K gold plating, hypoallergenic materials, and a quiet
              confidence that moves effortlessly from morning coffee to evening occasions.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-velmora-espresso hover:text-velmora-gold transition-colors"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
