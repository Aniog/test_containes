import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const AboutPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-charcoal">
            Our Story
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
          <div className="aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="about-hero-9i0j"
              data-strk-img="[about-mission-text] [about-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-4">
            <h2 id="about-heading" className="font-serif text-2xl md:text-3xl tracking-wide text-charcoal mb-6">
              Jewelry for the Way You Live
            </h2>
            <p id="about-mission-text" className="text-sm text-charcoal/60 font-sans leading-relaxed mb-4">
              Velmora was born from a simple frustration: fine jewelry shouldn't cost a fortune, and affordable jewelry shouldn't feel cheap. We set out to create demi-fine pieces that combine the craftsmanship of luxury maisons with accessibility for the modern woman.
            </p>
            <p className="text-sm text-charcoal/60 font-sans leading-relaxed mb-4">
              Every piece in our collection is 18K gold plated over brass, hypoallergenic, and designed to be worn every day — from morning coffee to evening dinner. We believe jewelry should keep up with your life, not sit in a box waiting for special occasions.
            </p>
            <p className="text-sm text-charcoal/60 font-sans leading-relaxed">
              From our design studio to your doorstep, we oversee every step of the process. No middlemen, no markups. Just beautifully crafted jewelry at a fair price.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="py-8">
            <p className="font-serif text-4xl text-gold mb-2">18K</p>
            <p className="text-xs tracking-product font-sans font-medium text-charcoal uppercase">Gold Plated</p>
          </div>
          <div className="py-8 border-y md:border-y-0 md:border-x border-divider">
            <p className="font-serif text-4xl text-gold mb-2">30</p>
            <p className="text-xs tracking-product font-sans font-medium text-charcoal uppercase">Day Returns</p>
          </div>
          <div className="py-8">
            <p className="font-serif text-4xl text-gold mb-2">0%</p>
            <p className="text-xs tracking-product font-sans font-medium text-charcoal uppercase">Nickel Free</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-10 py-3 bg-gold text-cream text-xs tracking-product font-sans font-medium hover:bg-gold-hover transition-colors duration-200"
          >
            SHOP THE COLLECTION
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
