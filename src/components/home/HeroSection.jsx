import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white mb-6"
          >
            Precision Metal<br />
            Folding Solutions
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
          >
            Industry-leading double folding machines and sheet metal folders 
            engineered for accuracy, durability, and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="btn-primary">
              View Products <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-slate-900">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/60" />
      </div>
    </section>
  )
}
