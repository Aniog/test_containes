import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function AboutPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-charcoal">
            Our Story
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="aspect-[16/9] overflow-hidden mb-16">
          <img
            data-strk-img-id="about-hero-n1o2p3"
            data-strk-img="[about-mission] [about-heading] jewelry workshop artisan craftsmanship"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora workshop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <h2
            id="about-heading"
            className="font-serif text-2xl md:text-3xl tracking-wide text-charcoal mb-6"
          >
            Jewelry With Intention
          </h2>
          <p
            id="about-mission"
            className="text-warm-gray leading-relaxed mb-6"
          >
            Velmora was founded on a simple premise: that beautifully crafted jewelry should be accessible, not exclusive. We work with skilled artisans who share our commitment to quality, using premium materials like 18K gold plating and hypoallergenic bases to create pieces that look and feel luxurious.
          </p>
          <p className="text-warm-gray leading-relaxed mb-6">
            Every design begins with a feeling — the quiet confidence of putting on something that was made to last, the warmth of gold against skin, the joy of finding a piece that feels like it was made for you. We believe that the best jewelry doesn't demand attention; it earns it.
          </p>
          <p className="text-warm-gray leading-relaxed mb-10">
            From our studio to your jewelry box, each piece passes through the hands of artisans who believe that the details matter. Because you do.
          </p>

          <div className="text-center">
            <Link
              to="/shop"
              className="inline-block bg-gold text-warm-black text-[11px] tracking-[0.15em] uppercase font-semibold px-10 py-4 hover:bg-gold-dark transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
