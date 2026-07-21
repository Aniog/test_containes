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
    <div ref={containerRef} className="min-h-screen bg-velmora-cream pt-20 sm:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-1a2b3c"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] jewelry workshop artisan craftsmanship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 id="about-hero-title" className="font-serif text-4xl sm:text-5xl text-white tracking-wide">Our Story</h1>
          <p id="about-hero-subtitle" className="mt-3 text-base text-white/80 font-sans font-light max-w-lg mx-auto">
            Where craftsmanship meets accessibility
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="w-12 h-px bg-velmora-gold mx-auto mb-8" />
            <p className="font-serif text-2xl sm:text-3xl text-velmora-charcoal leading-relaxed">
              Velmora was born from a simple belief: that luxury shouldn't be exclusive.
            </p>
          </div>

          <div className="space-y-6 text-base text-velmora-muted font-sans leading-relaxed">
            <p>
              Founded in 2023, Velmora Fine Jewelry set out to redefine what demi-fine jewelry could be. We saw a gap in the market — between mass-produced fashion jewelry that tarnishes in weeks, and fine jewelry that remains out of reach for most.
            </p>
            <p>
              Every piece in our collection is crafted with the same care and attention as traditional fine jewelry — using 18K gold plating, hypoallergenic materials, and techniques passed down through generations of artisans. But we've made it accessible.
            </p>
            <p>
              We work directly with skilled craftspeople, cutting out the traditional retail markup so we can offer exceptional quality at fair prices. No middlemen, no inflated costs — just beautifully made jewelry that's meant to be worn and treasured.
            </p>
            <p>
              Our commitment extends beyond the jewelry itself. We use sustainable packaging, ethical sourcing practices, and stand behind every piece with a satisfaction guarantee. Because we believe that how your jewelry is made matters just as much as how it looks.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block px-10 py-3.5 bg-velmora-gold text-white text-sm tracking-wider uppercase font-sans hover:bg-velmora-gold-hover transition-colors"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
