import { useEffect, useRef } from 'react'
import { ArrowRight, Shield, Award, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-primary-dark"
        data-strk-bg-id="hero-bg-7f3a2b"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary-dark/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/20">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-white/80 text-sm font-body font-medium">
              Precision Engineering Since 1995
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Precision Sheet Metal{' '}
            <span className="text-accent">Folding Machines</span>
          </h1>

          <p
            id="hero-subtitle"
            className="font-body text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
          >
            ARTITECT MACHINERY delivers industrial-grade double folding machines,
            sheet metal folders, and metal folding solutions engineered for
            accuracy, durability, and productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold py-3.5 px-8 rounded-md transition-all duration-300 text-base group"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-medium py-3.5 px-8 rounded-md transition-all duration-300 text-base"
            >
              Request Consultation
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">500+</p>
              <p className="font-body text-sm text-white/60 mt-1">Machines Delivered</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">98%</p>
              <p className="font-body text-sm text-white/60 mt-1">Satisfaction Rate</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">35+</p>
              <p className="font-body text-sm text-white/60 mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}