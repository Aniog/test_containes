import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-cream-deep py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-sand md:aspect-[5/6]">
          <img
            alt="Velmora atelier craftsmanship"
            data-strk-img-id="story-img-velmora-2b"
            data-strk-img="[story-text] [story-heading] gold jewelry craftsmanship atelier hands warm"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src={PLACEHOLDER}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:pl-6">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">
            Our Story
          </p>
          <h2
            id="story-heading"
            className="mt-3 font-serif text-3xl leading-tight text-ink md:text-5xl"
          >
            Jewelry made to be lived in
          </h2>
          <p
            id="story-text"
            className="mt-6 text-base leading-relaxed text-stone"
          >
            Velmora began with a simple belief: that fine-quality gold jewelry
            should be accessible enough to wear every day, not just on special
            occasions. Each piece is designed in our studio and hand-finished
            in 18K gold plating over sterling silver, using hypoallergenic
            materials that feel as good as they look.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone">
            From the first sketch to the final polish, we obsess over the
            details - the weight of a huggie, the curve of an ear cuff, the way
            light moves across a filigree drop. The result is jewelry you reach
            for again and again.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-xs uppercase tracking-widest2 text-ink transition-colors hover:text-gold"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
