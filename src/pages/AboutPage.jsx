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
    <div ref={containerRef} className="bg-brand-cream pt-20 md:pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-brand-ivory"
          data-strk-bg-id="about-hero-bg-h1i2j3"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-brand-deep/40" />
        <div className="relative z-10 text-center px-4">
          <h1
            id="about-hero-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-4 text-sm md:text-base text-white/80 font-sans font-light tracking-wide max-w-md mx-auto"
          >
            Jewelry designed to be worn, loved, and lived in
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl tracking-wide text-brand-charcoal">The Velmora Philosophy</h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="space-y-6 text-sm md:text-base leading-relaxed text-brand-warm-gray font-sans">
          <p>
            Velmora was founded on a simple yet powerful idea: that fine jewelry should be an everyday luxury, not a rare indulgence. We believe every woman deserves to feel the weight of beautiful craftsmanship on her skin — the warmth of gold, the sparkle of a hand-set stone — without compromise.
          </p>
          <p>
            Our design studio in Copenhagen draws inspiration from the quiet elegance of Scandinavian design: clean lines, organic forms, and an unwavering attention to detail. Each piece begins as a hand-drawn sketch, evolves through dozens of iterations, and is brought to life by artisans who share our obsession with quality.
          </p>
          <p>
            We use only 18K gold plating over solid brass — never cheap alloys or flash plating that fades after a few wears. Our cubic zirconia stones are hand-set, not glued, ensuring they catch the light beautifully and stay secure for years to come.
          </p>
          <p>
            Every Velmora piece is hypoallergenic, nickel-free, and designed to be kind to sensitive skin. Because luxury should never come with discomfort.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-serif text-3xl text-brand-gold">18K</p>
            <p className="text-xs tracking-widest uppercase font-sans text-brand-warm-gray mt-2">Gold Plated</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-brand-gold">100%</p>
            <p className="text-xs tracking-widest uppercase font-sans text-brand-warm-gray mt-2">Hypoallergenic</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-brand-gold">30</p>
            <p className="text-xs tracking-widest uppercase font-sans text-brand-warm-gray mt-2">Day Returns</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/shop"
            className="inline-block bg-brand-charcoal text-brand-cream px-10 py-3.5 text-xs tracking-super-wide uppercase font-sans font-medium hover:bg-brand-gold transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
