import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowDown } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-brand-dark"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              Precision Engineering Since 1995
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Precision Metal
            <br />
            <span className="text-brand-accent">Folding Solutions</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Industry-leading double folding machines and sheet metal folders engineered for
            accuracy, durability, and unmatched productivity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="bg-brand-accent hover:bg-brand-accent-light text-white px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Products
            </a>
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  )
}