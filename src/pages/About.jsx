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
    <div ref={containerRef} className="min-h-screen bg-warmCream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 id="about-title" className="font-serif text-4xl md:text-5xl font-light text-textDark tracking-wide">
            Our Story
          </h1>
          <p id="about-subtitle" className="font-sans text-base text-textMuted mt-4 max-w-xl mx-auto">
            Where craftsmanship meets intention — the story behind Velmora.
          </p>
        </div>

        {/* Split section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="about-img-1a2b3c"
              data-strk-img="[about-subtitle] [about-title] artisan jewelry workshop"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora workshop"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-textDark">Crafted with Care</h2>
            <div className="mt-6 space-y-4">
              <p className="font-sans text-base text-textDark leading-relaxed">
                Velmora was founded on a simple premise: beautiful jewelry shouldn't require compromise. We believe every woman deserves access to pieces that feel luxurious, wear beautifully, and stand the test of time — without the traditional luxury markup.
              </p>
              <p className="font-sans text-base text-textDark leading-relaxed">
                Our design process begins with intention. Each piece is conceived not as a trend to chase, but as a timeless form to refine. We draw inspiration from architecture, nature, and the quiet elegance of everyday life.
              </p>
              <p className="font-sans text-base text-textDark leading-relaxed">
                From the first sketch to the final polish, we work with skilled artisans who share our commitment to quality. Every detail — from the weight of a huggie to the clasp of a necklace — is considered and perfected.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="border-t border-divider pt-16">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-textDark text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="text-center">
              <h3 className="font-serif text-xl font-medium text-textDark">Quality First</h3>
              <p className="font-sans text-sm text-textMuted mt-3 leading-relaxed">
                18K gold plating over durable bases. Hypoallergenic, tarnish-resistant, and made for everyday wear.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl font-medium text-textDark">Accessible Luxury</h3>
              <p className="font-sans text-sm text-textMuted mt-3 leading-relaxed">
                Premium design and materials at a fair price. No middlemen, no inflated margins — just beautiful jewelry.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl font-medium text-textDark">Sustainable Practice</h3>
              <p className="font-sans text-sm text-textMuted mt-3 leading-relaxed">
                Responsible sourcing, minimal packaging, and pieces designed to last — not to be discarded.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 border-t border-divider pt-16">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-textDark">Explore the Collection</h2>
          <p className="font-sans text-sm text-textMuted mt-3">Discover pieces crafted to be treasured.</p>
          <Link
            to="/shop"
            className="inline-block mt-6 font-sans text-sm tracking-[0.1em] uppercase font-medium bg-gold text-deepCharcoal px-10 py-3.5 rounded-sm hover:bg-goldLight transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
