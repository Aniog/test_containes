import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Shield, Settings, Award } from 'lucide-react'

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <p id="hero-label" className="text-amber-500 font-semibold uppercase tracking-widest text-sm mb-4">
            Precision Engineering Solutions
          </p>
          <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Industrial Sheet Metal
            <span className="block text-amber-500">Folding Machines</span>
          </h1>
          <p id="hero-subtitle" className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            Delivering exceptional precision and reliability for double folding machines, 
            sheet metal folders, and metal folding solutions. Engineered for performance, 
            built to last.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Request Quote
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 lg:mt-16 grid grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Shield, label: 'Quality Certified' },
              { icon: Settings, label: 'Precision Built' },
              { icon: Award, label: 'Industry Leader' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="w-6 h-6 text-amber-500" />
                <span className="text-sm text-slate-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
