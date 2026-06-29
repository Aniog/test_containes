import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-brand-dark"
        data-strk-bg-id="hero-bg-a7f3c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          <div className="inline-block border border-brand-gold/40 px-4 py-1.5 mb-6">
            <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">
              Precision Engineering Since 1998
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight"
          >
            Master the Art of{' '}
            <span className="text-brand-gold">Metal Folding</span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 text-lg md:text-xl text-brand-cream/70 leading-relaxed max-w-xl"
          >
            Industry-leading double folding machines engineered for precision,
            durability, and unmatched performance in sheet metal fabrication.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-base"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-gold/60 text-brand-gold hover:bg-brand-gold/10 font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-base"
            >
              Request a Quote
            </a>
          </div>

          <div className="mt-16 flex gap-12 md:gap-16">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-gold">25+</div>
              <div className="text-sm text-brand-cream/50 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-gold">50+</div>
              <div className="text-sm text-brand-cream/50 mt-1">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-gold">10K+</div>
              <div className="text-sm text-brand-cream/50 mt-1">Machines Delivered</div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-gold/60 hover:text-brand-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}

export default Hero
