import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
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
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a7f3c1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-[#0F1B2D]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C8963E]" />
          <span className="text-xs font-medium text-white/80 tracking-wider uppercase">Precision Engineering Since 1998</span>
        </div>

        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
        >
          Metal Folding
          <br />
          <span className="text-[#C8963E]">Perfected</span>
        </h1>

        <p
          id="hero-subtitle"
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed mb-10"
        >
          Industry-leading double folding machines and sheet metal folders engineered for precision, durability, and unmatched performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            onClick={(e) => { e.preventDefault(); scrollToProducts() }}
            className="inline-flex items-center px-8 py-3.5 text-sm font-semibold rounded-lg bg-[#C8963E] text-white hover:bg-[#B07E2F] transition-colors duration-200 shadow-lg shadow-[#C8963E]/25"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center px-8 py-3.5 text-sm font-semibold rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors duration-200"
          >
            Request a Quote
          </a>
        </div>
      </div>

      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6 text-white/60" />
      </button>
    </section>
  )
}
