import { useEffect, useRef } from 'react'
import { ArrowRight, Shield, Award, Zap } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollToProducts = (e) => {
    e.preventDefault()
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-artitect"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-brand-900/80 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-800/70 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-500/30 rounded-full px-4 py-1.5 mb-6">
            <Award className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium text-accent-400 tracking-wide">
              INDUSTRIAL PRECISION SINCE 1998
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6"
          >
            Precision Folding
            <span className="block text-accent-400">Machinery Solutions</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-brand-300 mb-10 max-w-2xl leading-relaxed"
          >
            Leading manufacturer of double folding machines, sheet metal folders,
            and metal bending equipment engineered for accuracy, durability, and
            efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-all text-sm tracking-wide"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all text-sm tracking-wide border border-white/20"
            >
              Request a Quote
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">ISO Certified</p>
                <p className="text-brand-400 text-xs">Quality Assured</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">High Efficiency</p>
                <p className="text-brand-400 text-xs">Up to 40% Faster</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Global Warranty</p>
                <p className="text-brand-400 text-xs">3 Years Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
