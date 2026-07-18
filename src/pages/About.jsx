import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-charcoal">
            Our Story
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="aspect-[16/9] overflow-hidden mb-16">
          <img
            data-strk-img-id="about-hero-1d2e3f"
            data-strk-img="jewelry artisan workshop craftsmanship atelier"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora Atelier"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose max-w-none">
          <p className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed mb-8">
            Velmora was born from a simple belief: that beautiful, well-crafted jewelry
            shouldn't come with an extravagant price tag.
          </p>

          <p className="text-muted leading-relaxed mb-6">
            We work directly with artisans who share our passion for precision, using only
            the finest materials — 18K gold plating over sterling silver, hand-set crystals,
            and hypoallergenic finishes. Every piece is designed in our studio and brought to
            life by skilled hands that understand the difference between jewelry you wear and
            jewelry you treasure.
          </p>

          <p className="text-muted leading-relaxed mb-6">
            Our design philosophy is rooted in quiet luxury — pieces that speak softly but
            carry lasting presence. We believe the best jewelry is the kind you never want to
            take off, which is why every Velmora piece is crafted to be lived in: from morning
            coffee to evening out, from boardroom to weekend getaway.
          </p>

          <p className="text-muted leading-relaxed mb-12">
            Based in New York, we're proud to offer demi-fine jewelry at an accessible price
            point — without ever compromising on quality, ethics, or design integrity. Every
            piece is nickel-free, hypoallergenic, and backed by our 30-day return policy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-12 border-t border-hairline">
          <div>
            <p className="font-serif text-3xl text-gold">18K</p>
            <p className="text-xs tracking-[0.15em] uppercase text-muted mt-2">Gold Plated</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-gold">30</p>
            <p className="text-xs tracking-[0.15em] uppercase text-muted mt-2">Day Returns</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-gold">100%</p>
            <p className="text-xs tracking-[0.15em] uppercase text-muted mt-2">Hypoallergenic</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/shop"
            className="inline-block bg-gold text-white px-10 py-3.5 text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-hover transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
