import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, ChevronDown } from 'lucide-react'

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x9k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-1 bg-navy/75" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <p className="text-copper font-medium text-sm md:text-base tracking-widest uppercase mb-4">
            Precision Sheet Metal Solutions
          </p>
          <h1
            id="hero-title"
            className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Engineered for Perfect Folds, Every Time
          </h1>
          <p
            id="hero-subtitle"
            className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            Industry-leading double folding machines and sheet metal folders built with 
            uncompromising precision for professionals who demand excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-copper hover:bg-copper-dark text-white px-8 py-4 rounded-lg font-medium text-base transition-colors duration-200 no-underline"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-copper text-white hover:text-copper px-8 py-4 rounded-lg font-medium text-base transition-colors duration-200 no-underline"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-copper transition-colors animate-bounce no-underline"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}

export default HeroSection
