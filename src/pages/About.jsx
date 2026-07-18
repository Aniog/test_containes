import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-5xl text-brand-charcoal tracking-wide">
            Our Story
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-6" />
        </div>

        <div className="aspect-[16x9] bg-brand-warm overflow-hidden mb-12">
          <img
            data-strk-img-id="about-hero-g1h2i3"
            data-strk-img="[about-mission] [about-title] jewelry workshop artisan"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora workshop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 id="about-title" className="font-serif text-2xl md:text-3xl text-brand-charcoal tracking-wide text-center mb-6">
            Jewelry Should Be Loved, Not Locked Away
          </h2>
          <p id="about-mission" className="font-sans text-sm text-brand-muted leading-relaxed mb-6">
            Velmora was founded on a simple belief: that beautifully crafted jewelry shouldn't come with a luxury markup that keeps it behind glass. We design demi-fine pieces that are meant to be worn — every day, everywhere — not saved for special occasions.
          </p>
          <p className="font-sans text-sm text-brand-muted leading-relaxed mb-6">
            Every piece begins as a hand-drawn sketch in our studio. Our designers draw inspiration from architecture, nature, and the quiet beauty of everyday moments. Each design goes through dozens of iterations before it reaches you — refined until every curve, every edge, every detail feels just right.
          </p>
          <p className="font-sans text-sm text-brand-muted leading-relaxed mb-6">
            We use 18K gold plating over hypoallergenic sterling silver, ensuring our jewelry is as gentle on your skin as it is on your wallet. No nickel, no lead, no compromises. Just pieces that look and feel luxurious, designed to be treasured for years.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <p className="font-serif text-3xl text-brand-gold">18K</p>
              <p className="font-sans text-xs tracking-wider uppercase text-brand-muted mt-2">Gold Plated</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-brand-gold">30</p>
              <p className="font-sans text-xs tracking-wider uppercase text-brand-muted mt-2">Day Returns</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-brand-gold">50+</p>
              <p className="font-sans text-xs tracking-wider uppercase text-brand-muted mt-2">Countries Shipped</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
