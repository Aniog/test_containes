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
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-18 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-2xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Precision Engineering Since 1998
          </p>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6"
          >
            Industrial Sheet Metal Folding Machines
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl"
          >
            High-performance double folding machines engineered for accuracy, speed, and durability. Built to transform your metal fabrication workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-light transition-colors no-underline text-base"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20 no-underline text-base"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce no-underline"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}

export default Hero
