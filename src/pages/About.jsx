import React, { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal mb-3">Our Story</h1>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
          <div className="aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="about-hero-5t6u7v"
              data-strk-img="[about-hero-subtitle] [about-hero-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora workshop"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 id="about-hero-title" className="font-serif text-2xl md:text-3xl text-charcoal mb-4">Jewelry That Tells Your Story</h2>
            <p id="about-hero-subtitle" className="font-sans text-sm text-warm-gray leading-relaxed mb-4">
              Velmora was founded with a singular vision: to make beautifully crafted, demi-fine jewelry accessible to everyone. We believe that luxury shouldn&apos;t be exclusive — it should be everyday.
            </p>
            <p className="font-sans text-sm text-warm-gray leading-relaxed mb-4">
              Every piece in our collection is designed in-house and brought to life by skilled artisans who share our commitment to quality. We use 18K gold plating over durable bases, ensuring each piece stands the test of time without the luxury markup.
            </p>
            <p className="font-sans text-sm text-warm-gray leading-relaxed">
              From the initial sketch to the final polish, we obsess over every detail — because we know that the jewelry you wear becomes part of your story. And that story deserves to be beautiful.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center">
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <h3 className="font-serif text-xl text-charcoal mb-3">Craftsmanship</h3>
            <p className="font-sans text-sm text-warm-gray leading-relaxed">
              Each piece is hand-finished by artisans with decades of experience, ensuring every detail meets our exacting standards.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <h3 className="font-serif text-xl text-charcoal mb-3">Sustainability</h3>
            <p className="font-sans text-sm text-warm-gray leading-relaxed">
              We use recycled metals wherever possible and partner with responsible suppliers who share our commitment to the planet.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <h3 className="font-serif text-xl text-charcoal mb-3">Accessibility</h3>
            <p className="font-sans text-sm text-warm-gray leading-relaxed">
              By selling directly to you, we eliminate the middleman and pass the savings on — luxury quality, honest pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
