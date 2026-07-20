import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ProductImage } from '@/components/ui/ProductImage'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const titleId = 'brand-story-title'
  const descId = 'brand-story-desc'

  return (
    <section ref={containerRef} className="bg-velmora-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-taupe/20">
            <ProductImage
              id={descId}
              imgId="brand-story-img"
              query={`[${descId}] [${titleId}]`}
              ratio="3x4"
              width="800"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="md:py-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
              Our Story
            </p>
            <h2
              id={titleId}
              className="font-serif text-4xl md:text-5xl"
            >
              Quiet Luxury, Made Personal
            </h2>
            <p
              id={descId}
              className="mt-6 text-base leading-relaxed text-velmora-stone"
            >
              Velmora was born from a simple belief: fine jewelry should feel
              attainable, wearable, and deeply personal. Each piece is sculpted
              in enduring silhouettes and finished in warm 18k gold plate —
              created for the moments you want to remember, and the ordinary
              days you want to elevate.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-colors hover:text-velmora-gold"
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
