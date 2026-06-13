import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronDown } from 'lucide-react'

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
        className="absolute inset-0 bg-brand-navy"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-brand-navy/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 border border-brand-gold/40 text-brand-gold-light text-xs uppercase tracking-[0.2em] font-medium mb-8">
          <span className="w-2 h-2 bg-brand-gold rounded-full" />
          Precision Metal Folding Solutions
        </div>

        <h1
          id="hero-title"
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Engineering the Future of{' '}
          <span className="text-brand-gold">Metal Folding</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          From double folding machines to precision sheet metal folders —
          ARTITECT MACHINERY delivers industrial-grade equipment trusted by
          manufacturers worldwide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="px-8 py-4 bg-brand-gold text-white font-medium uppercase tracking-wider text-sm hover:bg-brand-gold-light transition-all duration-200"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-white/40 text-white font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-brand-navy transition-all duration-200"
          >
            Request a Demo
          </a>
        </div>

        {/* Gold accent line */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <span className="w-16 h-0.5 bg-brand-gold/60" />
          <span className="w-3 h-3 border-2 border-brand-gold rotate-45" />
          <span className="w-16 h-0.5 bg-brand-gold/60" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  )
}