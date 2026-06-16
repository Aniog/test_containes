import React, { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollToProducts = (e) => {
    e.preventDefault()
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
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-sm px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
            <span className="text-gold-500 text-xs font-semibold tracking-wider uppercase">
              Precision Engineering Since 1998
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Metal Folding
            <br />
            <span className="text-gold-500">Perfected</span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg"
          >
            Industry-leading double folding machines and sheet metal folders engineered for precision, durability, and unmatched performance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
            >
              Explore Products <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:bg-white/10"
            >
              Request a Quote
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>500+ Units Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>30+ Countries</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#products"
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  )
}

export default Hero
