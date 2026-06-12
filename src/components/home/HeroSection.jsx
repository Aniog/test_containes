import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-navy"
        data-strk-bg-id="hero-bg-am7x9k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
            Precision Engineering Since 1998
          </p>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Industrial Sheet Metal
            <span className="text-gold"> Folding Machines</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl"
          >
            High-performance double folding machines engineered for precision,
            durability, and efficiency. Trusted by manufacturers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-colors text-base"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:border-gold hover:text-gold transition-colors text-base"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}

export default HeroSection
