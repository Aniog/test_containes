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
    <section ref={containerRef} className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-bg-artitect-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/70" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-amber/10 border border-brand-amber/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-brand-amber rounded-full" />
            <span className="text-brand-amber-light text-sm font-medium">Precision Engineering Since 1998</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Industrial Sheet Metal Folding Machines
          </h1>

          <p id="hero-subtitle" className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
            High-performance double folding machines engineered for precision, speed, and durability. Transform your metal fabrication workflow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-brand-amber hover:bg-brand-amber-dark text-navy-900 font-semibold rounded-lg px-7 py-3.5 text-base transition-all duration-300 hover:shadow-lg hover:shadow-brand-amber/20"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-500 hover:border-brand-amber text-slate-200 hover:text-brand-amber font-semibold rounded-lg px-7 py-3.5 text-base transition-all duration-300"
            >
              Request a Quote
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-slate-700/50">
            <div>
              <p className="text-3xl font-bold text-white">25+</p>
              <p className="text-slate-400 text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-slate-400 text-sm mt-1">Machines Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">40+</p>
              <p className="text-slate-400 text-sm mt-1">Countries Served</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-brand-amber transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  )
}

export default Hero
