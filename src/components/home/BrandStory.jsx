import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-sand">
      <div className="container-velmora">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <img
              alt="Velmora atelier — gold jewelry craftsmanship"
              data-strk-img-id="brand-story-img-6e2a"
              data-strk-img="[brand-story-body] [brand-story-title] gold jewelry craftsmanship atelier hands warm"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src={PLACEHOLDER}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-6">
            <p className="eyebrow mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif font-light text-4xl md:text-5xl text-ink leading-tight"
            >
              Jewelry made to be lived in.
            </h2>
            <div
              id="brand-story-body"
              className="mt-6 space-y-4 text-espresso/85 leading-relaxed"
            >
              <p>
                Velmora began with a simple frustration: beautiful gold jewelry
                was either heirloom-expensive or disposable. We set out to make
                demi-fine pieces that sit in between — 18K gold plated, made to
                last, and priced to be worn, not saved for special occasions.
              </p>
              <p>
                Every piece is designed in our studio and finished by hand. We
                choose hypoallergenic, nickel-free materials so you can wear
                them from morning to night, every day, without a second thought.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs uppercase tracking-widest2 text-espresso border-b border-espresso pb-1 hover:text-champagne-deep hover:border-champagne-deep transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
