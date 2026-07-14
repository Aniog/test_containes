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
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24 bg-cream-50">
      <div className="max-w-container mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal tracking-tight">
            Our Story
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4 mb-6" />
          <p className="font-sans text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Velmora was born from a simple belief: luxury jewelry should be accessible, wearable, and made to last.
          </p>
        </div>

        {/* Image + text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
          <div className="aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="about-studio-1a2b3c"
              data-strk-img="[about-studio-text] [about-studio-heading] jewelry studio craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2
              id="about-studio-heading"
              className="font-serif text-2xl md:text-3xl font-semibold text-charcoal tracking-tight"
            >
              Crafted with Intention
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="about-studio-text"
              className="font-sans text-base text-stone-600 leading-relaxed mb-4"
            >
              Every Velmora piece begins with a sketch and ends with a story. Our design studio draws inspiration from architecture, nature, and the quiet beauty of everyday moments.
            </p>
            <p className="font-sans text-base text-stone-600 leading-relaxed">
              We work with skilled artisans who share our commitment to quality, using 18K gold plating over premium brass to create jewelry that looks and feels luxurious — without the luxury markup.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
          {[
            {
              title: 'Quality First',
              text: 'Every piece is crafted with 18K gold plating and rigorously tested for durability and wear. We never compromise on materials.',
            },
            {
              title: 'Accessible Luxury',
              text: 'By selling directly to you, we eliminate the middleman and pass the savings on. Premium jewelry, honest pricing.',
            },
            {
              title: 'Made to Last',
              text: 'Our hypoallergenic, nickel-free designs are built for everyday wear. We include a care guide with every order to keep your pieces shining.',
            },
          ].map((value) => (
            <div key={value.title} className="text-center">
              <h3 className="font-serif text-xl font-semibold text-charcoal tracking-wide">
                {value.title}
              </h3>
              <div className="w-8 h-px bg-gold mx-auto mt-3 mb-4" />
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal tracking-tight">
            Ready to Find Your Piece?
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4 mb-8" />
          <Link
            to="/shop"
            className="inline-block bg-gold text-white font-sans text-xs font-medium tracking-btn uppercase px-10 py-3.5 hover:bg-gold-light transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
