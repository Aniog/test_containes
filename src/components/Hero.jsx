import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-slate-900"
        data-strk-bg-id="hero-bg-9f3b2a"
        data-strk-bg="[hero-tagline] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          id="hero-tagline"
          className="text-amber-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4"
        >
          Precision Metal Folding Solutions
        </p>
        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Fold with{' '}
          <span className="text-amber-500">Precision</span>
          <br />
          Build with Confidence
        </h1>
        <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          From compact metal folders to advanced double folding machines — ARTITECT MACHINERY
          delivers industrial-grade folding equipment trusted by fabricators worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-200 hover:shadow-xl hover:scale-105"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-200 hover:bg-white/10"
          >
            Request a Quote
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-white/50 w-6 h-6" />
      </div>
    </section>
  )
}