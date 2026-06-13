import { useEffect, useRef } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-brand-dark"
        data-strk-bg-id="hero-bg-industrial"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/50" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-[11px] font-semibold text-brand-gold tracking-[0.15em] uppercase">
              Precision Metal Folding Solutions
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
          >
            Industrial-Grade
            <br />
            <span className="text-brand-gold">Folding Machines</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed mb-8"
          >
            ARTITECT MACHINERY delivers precision-engineered double folding machines, 
            sheet metal folders, and metal folding solutions for modern manufacturing 
            facilities worldwide.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-white px-6 py-3 rounded-md font-semibold text-sm transition-all"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-md font-medium text-sm transition-all"
            >
              Request a Quote
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-14 pt-10 border-t border-white/10 max-w-lg">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Installed' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  )
}