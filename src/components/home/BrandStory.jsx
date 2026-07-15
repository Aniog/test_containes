import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useStrkImages } from '@/hooks/useStrkImages'

export function BrandStory() {
  const containerRef = useRef(null)
  useStrkImages(containerRef)

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="container-vel">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[3/4] overflow-hidden bg-vel-cream">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-body]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col items-start">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-vel-accent">
              Since 2019
            </p>
            <h2
              id="brand-story-title"
              className="heading-serif mb-6 text-4xl md:text-5xl"
            >
              Made for Modern Heirlooms
            </h2>
            <p
              id="brand-story-body"
              className="mb-6 leading-relaxed text-vel-muted"
            >
              Velmora was born from a simple belief: fine-feeling jewelry should
              be part of your everyday, not saved for special occasions. We work
              with responsible ateliers to create demi-fine pieces in 18k gold
              plate — designed to layer, last, and become part of your story.
            </p>
            <p className="mb-8 leading-relaxed text-vel-muted">
              Every design is refined down to the smallest detail, then finished
              by hand and packaged in our signature boxes, ready for gifting or
              keeping.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 border-b border-vel-base pb-1 text-sm font-medium uppercase tracking-wide transition-colors hover:text-vel-accent"
            >
              Our Story
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
