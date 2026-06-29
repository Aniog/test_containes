import { useEffect, useRef } from 'react'
import { ArrowRight, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

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
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-machinery-f3a2c1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundColor: '#1a2744' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/85 via-brand-navy/60 to-brand-navy/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Shield className="w-4 h-4 text-brand-accent-light" />
            <span className="text-sm font-medium text-white/90 tracking-wide">
              Precision Engineering Since 2005
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Precision Metal{' '}
            <span className="text-brand-accent-light">Folding</span>{' '}
            Solutions
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-white/80 max-w-2xl lg:mx-0 mx-auto leading-relaxed mb-10"
          >
            ARTITECT MACHINERY delivers world-class double folding machines,
            sheet metal folders, and metal folding equipment engineered for
            accuracy, durability, and seamless operation.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-accent text-white rounded-lg font-semibold text-base hover:bg-brand-accent-light transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-accent/25"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/40 text-white rounded-lg font-semibold text-base hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}