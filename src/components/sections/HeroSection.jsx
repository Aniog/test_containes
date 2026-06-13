import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Shield, Award, Clock } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/20 border border-amber-500/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-amber-400">Industry-Leading Precision</span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            Precision Metal
            <span className="block text-amber-500">Folding Solutions</span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
          >
            Engineered for accuracy. Built for durability. Artitect Machinery delivers
            world-class sheet metal folding machines that transform your production capabilities.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-all hover:shadow-lg hover:shadow-amber-600/25"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-500 text-white font-semibold rounded-xl hover:border-white hover:bg-white/5 transition-all"
            >
              Request a Quote
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-3 gap-6 md:gap-10 max-w-lg">
            <div className="text-center sm:text-left">
              <Shield className="w-8 h-8 text-amber-500 mx-auto sm:mx-0 mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-white">15+</p>
              <p className="text-xs md:text-sm text-slate-400">Years Experience</p>
            </div>
            <div className="text-center sm:text-left">
              <Award className="w-8 h-8 text-amber-500 mx-auto sm:mx-0 mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-white">500+</p>
              <p className="text-xs md:text-sm text-slate-400">Machines Delivered</p>
            </div>
            <div className="text-center sm:text-left">
              <Clock className="w-8 h-8 text-amber-500 mx-auto sm:mx-0 mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-white">24/7</p>
              <p className="text-xs md:text-sm text-slate-400">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
