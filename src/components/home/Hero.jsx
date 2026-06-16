import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a7f3c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-gold text-xs font-semibold tracking-wider uppercase">
              Precision Engineering Since 2005
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Master the Art of
            <span className="text-gold"> Metal Folding</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-xl"
          >
            Industry-leading double folding machines and sheet metal folders engineered for precision, durability, and unmatched performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll('#products')}
              className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-lg text-base transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded-lg text-base transition-all duration-200"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            <div>
              <div className="text-3xl font-bold text-gold">18+</div>
              <div className="text-white/60 text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold">50+</div>
              <div className="text-white/60 text-sm mt-1">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold">5K+</div>
              <div className="text-white/60 text-sm mt-1">Machines Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
