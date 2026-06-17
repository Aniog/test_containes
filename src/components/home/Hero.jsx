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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a7f3c1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy-700/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-gold-400 rounded-full" />
          <span className="text-white/90 text-sm font-medium tracking-wide">
            Precision Metal Folding Solutions
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Master Every Fold<br />
          <span className="text-gold-400">With Precision</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Industry-leading double folding machines and sheet metal folders engineered 
          for unmatched accuracy, speed, and reliability in metal fabrication.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault()
              scrollToProducts()
            }}
            className="flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-700 font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-base px-8 py-4 rounded-full border border-white/20 transition-all duration-200"
          >
            Request a Quote
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '5000+', label: 'Machines Delivered' },
            { value: '60+', label: 'Countries Served' },
            { value: '99.8%', label: 'Customer Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold-400">{stat.value}</div>
              <div className="text-white/60 text-xs md:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}

export default Hero
