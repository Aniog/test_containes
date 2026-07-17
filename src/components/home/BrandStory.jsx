import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <div
            className="absolute inset-0"
            data-strk-bg-id="story-bg-2b8e1d"
            data-strk-bg="[story-text] [story-heading] gold jewelry craftsmanship hands artisan workshop warm"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="800"
          />
        </div>

        <div className="md:pl-6">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
            Our Story
          </p>
          <h2
            id="story-heading"
            className="font-serif text-4xl md:text-5xl text-ink leading-tight"
          >
            Quiet Luxury, Honestly Priced
          </h2>
          <p
            id="story-text"
            className="mt-6 text-base text-charcoal font-light leading-relaxed"
          >
            Velmora was founded on a simple belief: fine-feeling jewelry should not require a
            fine-jewelry markup. We work directly with our ateliers, finishing each piece in
            genuine 18K gold over sterling silver, and pass the savings to you. No middlemen,
            no inflated price tags — only pieces crafted to be treasured, every day.
          </p>
          <div className="mt-8 flex items-center gap-8">
            <div>
              <div className="font-serif text-3xl text-gold">18K</div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted mt-1">Gold Plated</p>
            </div>
            <div className="h-10 w-px bg-sand" />
            <div>
              <div className="font-serif text-3xl text-gold">100%</div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted mt-1">Hypoallergenic</p>
            </div>
            <div className="h-10 w-px bg-sand" />
            <div>
              <div className="font-serif text-3xl text-gold">DTC</div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted mt-1">No Markup</p>
            </div>
          </div>
          <div className="mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-ink border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
