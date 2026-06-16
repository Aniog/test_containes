import React, { useRef, useEffect } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollToProducts = (e) => {
    e.preventDefault()
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7a3f9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/60" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-gold-light to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-32 md:py-40 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 px-4 py-1.5 mb-8">
            <div className="w-2 h-2 bg-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold tracking-widest-plus uppercase">
              Precision Engineering Since 1998
            </span>
          </div>

          {/* Heading */}
          <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
            Double Folding
            <br />
            <span className="text-brand-gold">Machines</span>
          </h1>

          {/* Subtitle */}
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
            Industrial-grade double folding machines and sheet metal folders engineered for
            precision, durability, and unmatched performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold text-sm px-8 py-4 tracking-wide transition-colors group"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-brand-gold/50 text-white font-semibold text-sm px-8 py-4 tracking-wide transition-colors"
            >
              Contact Sales
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Installed' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-extrabold text-brand-gold">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-400 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-brand-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}

export default Hero
