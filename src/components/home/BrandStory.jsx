import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-stone py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-deep/5">
          <img
            alt="Velmora atelier crafting gold jewelry"
            data-strk-img-id="story-img-3b8c1d"
            data-strk-img="[story-heading] [story-body] gold jewelry atelier craftsmanship warm"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src={PLACEHOLDER}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:pl-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
            Our Story
          </p>
          <h2
            id="story-heading"
            className="mt-4 font-serif text-4xl leading-tight text-stone-deep md:text-5xl"
          >
            Quiet luxury,
            <br />
            <span className="italic text-gold-deep">honestly made.</span>
          </h2>
          <p
            id="story-body"
            className="mt-6 text-base leading-relaxed text-stone-muted"
          >
            Velmora was founded on a simple belief: fine jewelry shouldn't demand
            a fine-jewelry markup. We work directly with our atelier to bring you
            18K gold plated, hypoallergenic pieces — designed in-house, crafted
            to be worn daily, and priced to be treasured, not feared.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-muted">
            Every piece is tarnish-resistant and made to last, so the jewelry you
            love today stays with you for years to come.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-gold-deep pb-1 text-xs uppercase tracking-[0.2em] text-stone-deep transition-colors hover:text-gold-deep"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
