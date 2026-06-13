import React, { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

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
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a7f3c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-gold text-sm font-medium">Precision Engineering Since 1998</span>
          </div>

          <h1
            id="hero-title"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            Master the Art of{' '}
            <span className="text-gold">Metal Folding</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            Industry-leading double folding machines and sheet metal folders engineered for precision, efficiency, and unmatched durability. Transform your metalworking operations with ARTITECT.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault()
                scrollToProducts()
              }}
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full font-medium transition-colors text-base"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full font-medium transition-colors text-base"
            >
              Request a Quote
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToProducts}
            className="text-white/50 hover:text-gold transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
