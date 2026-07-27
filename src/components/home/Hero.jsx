import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-neutral-900 text-white overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-neutral-900/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8">
            Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from one trusted partner in China.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg no-underline transition-colors text-base"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-medium px-6 py-3 rounded-lg no-underline transition-colors text-base"
            >
              See How It Works
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-neutral-300">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent-400" />
              500+ Verified Suppliers
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent-400" />
              10+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent-400" />
              Clients in 30+ Countries
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
