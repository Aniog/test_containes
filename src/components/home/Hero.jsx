import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, ChevronDown } from 'lucide-react'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollToProducts = () => {
    const el = document.querySelector('#products')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a7f3c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-32 md:py-0 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">Precision Engineering</span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6"
          >
            Metal Folding
            <br />
            <span className="text-gold">Machines</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
          >
            Industry-leading double folding machines and sheet metal folders engineered for precision, durability, and unmatched performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              onClick={(e) => { e.preventDefault(); scrollToProducts() }}
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-4 rounded transition-colors duration-200"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded transition-colors duration-200"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-gold transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}

export default Hero
