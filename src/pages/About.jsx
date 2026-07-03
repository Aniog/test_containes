import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function AboutPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-1a2b"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-velmora-charcoal/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1
            id="about-hero-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide uppercase text-velmora-cream"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-4 font-sans text-sm md:text-base text-velmora-cream/80 max-w-lg"
          >
            Where craftsmanship meets accessibility
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-12 h-px bg-velmora-gold mx-auto mb-8" />
            <p className="font-serif text-xl md:text-2xl text-velmora-charcoal leading-relaxed italic">
              &ldquo;We believe every woman deserves to feel extraordinary — without the extraordinary price tag.&rdquo;
            </p>
          </div>

          <div className="space-y-6 font-sans text-sm md:text-base text-velmora-warm-gray leading-relaxed">
            <p>
              Velmora was founded with a singular vision: to bridge the gap between fine jewelry and everyday wear. We saw a market divided — mass-produced fashion jewelry that tarnished in weeks, and fine jewelry that cost thousands. We knew there had to be a better way.
            </p>
            <p>
              Every Velmora piece begins as a sketch in our design studio, inspired by architecture, nature, and the quiet elegance of everyday moments. We then work with skilled artisans who bring these designs to life using 18K gold plating over brass, ethically sourced crystals, and meticulous hand-finishing.
            </p>
            <p>
              The result is demi-fine jewelry that looks and feels luxurious — pieces you can wear from morning coffee to evening dinner, that age gracefully and become part of your personal story.
            </p>
            <p>
              We're proud to offer free worldwide shipping, a 30-day return policy, and packaging that makes every order feel like a gift — because treating yourself should always feel special.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block font-sans text-xs font-semibold tracking-ultra-wide uppercase bg-velmora-gold text-velmora-charcoal px-10 py-4 hover:bg-velmora-gold-light transition-colors duration-300"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
