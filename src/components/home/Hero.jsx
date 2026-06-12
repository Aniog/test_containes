import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, ChevronDown } from 'lucide-react'

const Hero = () => {
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
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x9k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(15, 27, 45, 0.75)' }} />

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center pt-20">
        <p className="font-semibold text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: '#C8A45C' }}>
          Precision Engineering Since 1998
        </p>
        <h1
          id="hero-title"
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
        >
          Industrial Sheet Metal
          <br />
          <span style={{ color: '#C8A45C' }}>Folding Machines</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          High-performance double folding machines engineered for precision,
          durability, and efficiency. Trusted by manufacturers worldwide.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-base flex items-center gap-2"
            style={{ backgroundColor: '#C8A45C', color: '#0F1B2D' }}
          >
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="border border-white/30 text-white font-medium px-8 py-4 rounded-lg hover:border-amber-400 hover:text-amber-400 transition-colors text-base"
          >
            Request a Quote
          </a>
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-amber-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}

export default Hero
