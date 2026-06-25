import { useEffect, useRef } from 'react'
import { ArrowRight, Shield, Zap } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center" ref={containerRef}>
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-artitect-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-1 bg-brand-navy/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-brand-accent" />
            <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
              Industrial Excellence
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            Precision Sheet Metal
            <span className="text-brand-accent block mt-2">Folding Machines</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg lg:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl"
          >
            Engineered for accuracy and built for durability. Our double folding machines
            deliver unmatched performance for professional metalworking operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-navy font-semibold px-7 py-3.5 rounded-lg text-base hover:bg-amber-400 transition-colors duration-200"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg text-base hover:border-brand-accent hover:text-brand-accent transition-colors duration-200"
            >
              Request a Quote
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-brand-accent" />
              <span className="text-white/70 text-sm">5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-brand-accent" />
              <span className="text-white/70 text-sm">High-Speed Operation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
