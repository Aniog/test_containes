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
    <div className="pt-20 md:pt-24 min-h-screen bg-velmora-cream">
      <section ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.05em] text-velmora-dark">Our Story</h1>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="about-hero-img-d4e5f6"
              data-strk-img="[about-subtitle] [about-title] artisan gold jewelry workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora workshop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:pl-8">
            <h2 id="about-title" className="font-serif text-2xl md:text-3xl tracking-[0.05em] text-velmora-dark">
              Crafted with Intention
            </h2>
            <p id="about-subtitle" className="font-sans text-sm md:text-base text-velmora-textSecondary mt-4 leading-relaxed">
              Velmora was founded on a simple yet powerful idea: that beautiful, well-crafted jewelry should be accessible 
              to every woman — not just reserved for special occasions or luxury budgets.
            </p>
            <p className="font-sans text-sm md:text-base text-velmora-textSecondary mt-4 leading-relaxed">
              Our journey began in a small studio where our founder, inspired by the timeless beauty of gold and the 
              modern woman's desire for everyday elegance, set out to create pieces that bridge the gap between fine 
              jewelry and everyday wearability.
            </p>
            <p className="font-sans text-sm md:text-base text-velmora-textSecondary mt-4 leading-relaxed">
              Every Velmora piece is crafted with 18K gold plating over sterling silver, ensuring durability and 
              beauty that lasts. We believe in slow, intentional design — each piece is considered, refined, and 
              tested before it reaches you.
            </p>
          </div>
        </div>

        <div className="border-t border-velmora-hairline pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-serif text-xl tracking-[0.05em] text-velmora-dark">18K Gold Plated</h3>
              <p className="font-sans text-sm text-velmora-textSecondary mt-2 leading-relaxed">
                Each piece features a thick layer of 18K gold over sterling silver for lasting warmth and beauty.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl tracking-[0.05em] text-velmora-dark">Hypoallergenic</h3>
              <p className="font-sans text-sm text-velmora-textSecondary mt-2 leading-relaxed">
                Nickel-free and gentle on sensitive skin. Designed to be worn comfortably all day long.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl tracking-[0.05em] text-velmora-dark">Sustainably Made</h3>
              <p className="font-sans text-sm text-velmora-textSecondary mt-2 leading-relaxed">
                We prioritize ethical sourcing and minimal waste in every step of our production process.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link
            to="/shop"
            className="inline-block font-sans text-sm tracking-[0.15em] uppercase bg-velmora-gold text-velmora-dark px-8 py-3 hover:bg-velmora-goldHover transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
