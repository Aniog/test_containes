import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-warm-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-stretch md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-body]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center bg-champagne px-6 py-16 md:px-12 lg:px-20">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.25em] text-stone">
                Our Story
              </p>
              <h2
                id="brand-story-title"
                className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl"
              >
                Made for Modern Heirlooms
              </h2>
              <p
                id="brand-story-body"
                className="mt-6 leading-relaxed text-stone"
              >
                Velmora was born from a belief that fine-feeling jewelry should
                belong to every day. We design demi-fine pieces in small
                batches, using 18k gold plating and hypoallergenic materials so
                you can wear them close, often, and without worry.
              </p>
              <p className="mt-4 leading-relaxed text-stone">
                Every curve, clasp, and finish is considered — because the best
                treasures are the ones you reach for again and again.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink hover:text-gold transition-colors"
              >
                Read our story
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
