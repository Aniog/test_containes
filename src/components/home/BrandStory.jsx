import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          <img
            src={PLACEHOLDER}
            alt="Velmora atelier"
            data-strk-img-id="brand-story-velmora-8c3d"
            data-strk-img="[brand-story-text] [brand-story-title] gold jewelry atelier craftsmanship hands"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="md:pl-4">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">Our Story</p>
          <h2
            id="brand-story-title"
            className="font-serif text-3xl md:text-5xl text-ink leading-tight"
          >
            Jewelry made to be lived in.
          </h2>
          <p id="brand-story-text" className="mt-6 text-sm md:text-base text-stone leading-relaxed">
            Velmora began with a simple frustration: beautiful gold jewelry was either
            prohibitively expensive or cheaply made. We set out to close that gap —
            demi-fine pieces, hand-finished in 18K gold plate, designed to be worn every
            single day and to last for years, not weeks.
          </p>
          <p className="mt-4 text-sm md:text-base text-stone leading-relaxed">
            Every piece is hypoallergenic, nickel-free, and made in small batches by
            craftspeople we know by name.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink hover:text-gold transition-colors"
          >
            Read Our Story
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
