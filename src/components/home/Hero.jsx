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
      className="relative min-h-screen flex items-center pt-20"
    >
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x9k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-1 bg-primary/75" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-accent font-semibold text-sm lg:text-base tracking-widest uppercase mb-4">
            Precision Engineering Since 1998
          </p>
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            Sheet Metal Folding Machines Built for Excellence
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg lg:text-xl text-text-on-dark/80 leading-relaxed mb-10 max-w-2xl"
          >
            Industry-leading double folding machines engineered for precision, durability, and unmatched performance. Transform your metalworking capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors no-underline"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-accent text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors no-underline"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-accent transition-colors animate-bounce no-underline"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}

export default Hero
