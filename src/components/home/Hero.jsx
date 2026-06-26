import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a7f3c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent text-sm font-medium">Industry-Leading Precision</span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            Precision Metal
            <br />
            <span className="text-accent">Folding Solutions</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-lg"
          >
            Engineered for accuracy. Built to last. ARTITECT MACHINERY delivers world-class double folding machines and sheet metal folders for demanding industrial applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-lg border border-white/20 transition-colors duration-200"
            >
              Request a Quote
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-white/60">
            <div>
              <span className="text-3xl font-bold text-white block">25+</span>
              <span className="text-sm">Years Experience</span>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <span className="text-3xl font-bold text-white block">50+</span>
              <span className="text-sm">Countries Served</span>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <span className="text-3xl font-bold text-white block">1000+</span>
              <span className="text-sm">Machines Delivered</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  )
}
