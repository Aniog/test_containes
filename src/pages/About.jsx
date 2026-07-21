import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div className="pt-20 lg:pt-24 bg-cream min-h-screen">
      <div ref={containerRef} className="max-w-content mx-auto px-6 lg:px-8 py-12 md:py-20">
        {/* Hero */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="font-sans text-xs font-semibold tracking-section uppercase text-gold mb-3">
            Our Story
          </h1>
          <p className="font-serif text-4xl md:text-5xl font-medium text-base max-w-2xl mx-auto">
            Where Craft Meets Conscious Beauty
          </p>
        </div>

        {/* Image + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <div className="aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="about-img-1-q3r4s5"
              data-strk-img="jewelry craftsmanship artisan workshop atelier"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-sans text-sm text-muted leading-relaxed mb-4">
              Born from a belief that luxury shouldn't cost the earth — or your conscience — Velmora creates demi-fine jewelry that bridges the gap between everyday wear and heirloom quality.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed mb-4">
              Founded in 2022, our Paris-based studio designs each piece with intention: clean lines, warm gold tones, and a commitment to materials that are kind to sensitive skin and the environment alike.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Every Velmora piece is 18K gold plated over 925 sterling silver, nickel-free, and hypoallergenic. We believe that the jewelry you reach for every day should feel as good as it looks.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Conscious Craft',
              text: 'We use recycled metals and sustainable packaging, because beauty should never come at a cost to the planet.',
            },
            {
              title: 'Skin-First Design',
              text: 'Every piece is nickel-free and hypoallergenic. Sensitive skin is our standard, not an afterthought.',
            },
            {
              title: 'Accessible Luxury',
              text: 'Demi-fine quality at a fair price. We cut out the middleman so you get more for less.',
            },
          ].map((value) => (
            <div key={value.title} className="text-center">
              <h3 className="font-serif text-xl font-medium text-base mb-3">{value.title}</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/shop"
            className="inline-block bg-gold text-base font-sans text-xs font-semibold tracking-section uppercase px-10 py-4 hover:bg-gold-dark transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
