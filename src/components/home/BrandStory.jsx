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
    <section ref={ref} className="bg-ink text-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-cream/5">
          <img
            alt="Velmora atelier"
            data-strk-img-id="story-img-velmora-7c3d"
            data-strk-img="[story-body] [story-title] jewelry maker atelier hands gold craft"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src={PLACEHOLDER}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:pl-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-5">
            Our Story
          </p>
          <h2
            id="story-title"
            className="font-serif text-4xl md:text-5xl leading-tight mb-6"
          >
            Quiet luxury, made to be lived in.
          </h2>
          <p id="story-body" className="text-cream/75 leading-relaxed mb-5">
            Velmora began with a simple frustration: demi-fine jewelry that looked
            beautiful for a week, then tarnished, irritated, or broke. We set out to
            make pieces with the warmth and weight of fine jewelry, at a price that
            did not require an occasion.
          </p>
          <p className="text-cream/75 leading-relaxed mb-8">
            Every piece is hand-finished in 18K gold over sterling silver,
            hypoallergenic by design, and made to be worn through work, weekends,
            and everything in between.
          </p>
          <Link
            to="/about"
            className="inline-block border border-cream text-cream text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-cream hover:text-ink transition-colors duration-300"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
