import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import strkImgConfig from '../../strk-img-config.json'
import { getStrkImageSrc } from '../../lib/strk-image'

export default function BrandStory() {
  const storyRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, storyRef.current)
  }, [])

  return (
    <section ref={storyRef} id="story" className="bg-velmora-cream px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden border border-velmora-mist bg-velmora-ivory shadow-soft lg:grid-cols-2">
        <div className="min-h-[420px] bg-velmora-mist lg:min-h-[640px]">
          <img
            alt="Velmora atelier gold jewelry details"
            className="h-full w-full object-cover"
            data-strk-img-id="brand-story-atelier-velmora"
            data-strk-img="[story-copy] [story-title] [story-eyebrow]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            src={getStrkImageSrc('brand-story-atelier-velmora')}
          />
        </div>
        <div className="flex items-center px-6 py-12 sm:px-10 lg:px-16">
          <div>
            <p id="story-eyebrow" className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-umber">
              Our point of view
            </p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl font-medium leading-tight text-velmora-espresso sm:text-6xl">
              Fine feeling, without the traditional markup.
            </h2>
            <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-umber">
              Velmora designs demi-fine pieces for women who want jewelry to feel personal, wearable, and lasting. We source warm finishes, refined stones, and comfortable silhouettes, then sell directly so a meaningful piece can stay within reach.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-oxblood underline decoration-velmora-champagne underline-offset-8 transition hover:text-velmora-espresso">
              Our Story
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
