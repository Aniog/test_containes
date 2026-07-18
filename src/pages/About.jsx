import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="section-padding py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-heading md:text-5xl text-brand-charcoal font-light">
            Our Story
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4 mb-8" />

          <div className="aspect-[16/9] overflow-hidden bg-brand-warm mb-10">
            <img
              data-strk-img-id="about-hero-g4h5i6"
              data-strk-bg="[about-subtitle] [about-title] velmora studio craftsmanship"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora studio"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 id="about-title" className="font-serif text-subheading text-brand-charcoal font-light mb-4">
            Jewelry That Lives With You
          </h2>
          <p id="about-subtitle" className="font-sans text-sm text-brand-muted leading-relaxed mb-6">
            Velmora was born from a simple frustration: why should beautiful, well-made jewelry cost a fortune? We set out to create demi-fine pieces that feel luxurious, look timeless, and don't require a special occasion to wear.
          </p>
          <p className="font-sans text-sm text-brand-muted leading-relaxed mb-6">
            Every piece is crafted with 18K gold plating over a hypoallergenic brass base, designed to be worn daily — in the shower, at the gym, on date night. We skip the traditional retail markup and sell directly to you, so you get premium quality at an honest price.
          </p>
          <p className="font-sans text-sm text-brand-muted leading-relaxed mb-10">
            Based in New York, inspired by the quiet elegance of everyday women who believe that luxury should be lived in, not locked away.
          </p>

          <Link to="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
