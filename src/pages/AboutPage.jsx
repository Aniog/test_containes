import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function AboutPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-brand-charcoal">
            Our Story
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="aspect-[16/9] overflow-hidden mb-12">
          <img
            data-strk-img-id="about-hero"
            data-strk-img="gold jewelry craftsmanship artisan workshop"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora workshop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6 text-center">
          <p className="font-serif text-xl md:text-2xl text-brand-charcoal leading-relaxed italic">
            Velmora was born from a simple belief: that fine-quality jewelry shouldn't come with a fine-jewelry price tag.
          </p>
          <p className="font-sans text-sm text-brand-muted leading-relaxed max-w-2xl mx-auto">
            Founded in 2023, we set out to create demi-fine jewelry that bridges the gap between fashion accessories and fine jewelry. Each piece is crafted with 18K gold plating over sterling silver, designed to be worn every day and treasured for years.
          </p>
          <p className="font-sans text-sm text-brand-muted leading-relaxed max-w-2xl mx-auto">
            From our studio to your doorstep, we oversee every detail — because the jewelry you reach for every morning should feel as special as the occasion you save it for. Our commitment to quality materials, hypoallergenic designs, and accessible pricing means you never have to choose between beauty and comfort.
          </p>
          <p className="font-sans text-sm text-brand-muted leading-relaxed max-w-2xl mx-auto">
            We believe in quiet luxury — pieces that speak softly but carry lasting beauty. Every curve, every clasp, every finish is intentional. This is jewelry crafted to be treasured.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { title: 'Quality First', text: '18K gold plating over sterling silver, crafted to last.' },
            { title: 'Hypoallergenic', text: 'Nickel and lead free — safe for sensitive skin.' },
            { title: 'Consciously Made', text: 'Ethical sourcing and sustainable packaging.' },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="font-serif text-lg tracking-wide text-brand-charcoal">{item.title}</h3>
              <div className="w-8 h-px bg-brand-gold mx-auto my-3" />
              <p className="font-sans text-sm text-brand-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
