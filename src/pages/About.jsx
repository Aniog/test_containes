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
    <div ref={containerRef} className="bg-velmora-cream pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-28">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1
            id="about-title"
            className="font-serif text-4xl md:text-5xl text-stone-800 tracking-wide"
          >
            Our Story
          </h1>
          <div className="w-16 h-px bg-velmora-gold mt-6 mx-auto" />
        </div>

        {/* Image */}
        <div className="aspect-[16x9] overflow-hidden mb-16">
          <img
            data-strk-img-id="about-hero-a1"
            data-strk-img="[about-subtitle] [about-title] jewelry artisan workshop craftsmanship"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora workshop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-2xl mx-auto">
          <p
            id="about-subtitle"
            className="font-serif italic text-xl md:text-2xl text-stone-700 leading-relaxed mb-8"
          >
            Velmora was founded on the conviction that beautiful, lasting jewelry should be accessible — not exclusive.
          </p>
          <p className="font-sans text-base text-stone-600 leading-relaxed mb-6">
            We started in 2024 with a simple question: why does quality jewelry cost so much? The answer, we discovered, was often markup — not materials. So we set out to create demi-fine pieces that rival luxury brands in craftsmanship, at a fraction of the price.
          </p>
          <p className="font-sans text-base text-stone-600 leading-relaxed mb-6">
            Every Velmora piece is 18K gold plated over solid sterling silver. We use nickel-free, hypoallergenic materials because we believe jewelry should be worn every day, not saved for special occasions. Our artisans hand-finish each piece, ensuring the weight, the clasp, the curve — every detail feels right.
          </p>
          <p className="font-sans text-base text-stone-600 leading-relaxed mb-6">
            We design for women who appreciate quiet luxury — pieces that complement, not compete. Whether it's a gift for someone special or a treat for yourself, Velmora jewelry is crafted to be treasured.
          </p>

          <div className="text-center mt-12">
            <Link to="/shop" className="btn-primary inline-block">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
