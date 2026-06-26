import { ArrowRight, Shield, Zap, Award } from 'lucide-react'
import { useEffect, useRef } from 'react'
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
    <section ref={containerRef} className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-bg-main-a3f9c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/60" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-amber rounded-full animate-pulse" />
            <span className="text-white/80 text-xs font-medium tracking-wide uppercase">Industry-Leading Precision</span>
          </div>

          {/* Heading */}
          <h1 id="hero-title" className="text-white font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] mb-6">
            Precision Metal{' '}
            <span className="text-amber">Folding</span>{' '}
            Machines
          </h1>

          {/* Subtitle */}
          <p id="hero-subtitle" className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Engineered for professionals who demand accuracy, speed, and reliability. Our double folding machines deliver flawless bends on every sheet.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 bg-amber text-charcoal font-semibold px-8 py-4 rounded text-base hover:bg-amber-light transition-all duration-300 shadow-lg shadow-amber/20 hover:shadow-amber/30 hover:-translate-y-0.5"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white font-semibold px-8 py-4 rounded text-base hover:border-amber hover:text-amber transition-all duration-300"
            >
              Request a Quote
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 max-w-md">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber flex-shrink-0" />
              <span className="text-white/60 text-xs font-medium leading-tight">ISO 9001<br />Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber flex-shrink-0" />
              <span className="text-white/60 text-xs font-medium leading-tight">24/7<br />Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber flex-shrink-0" />
              <span className="text-white/60 text-xs font-medium leading-tight">10+ Year<br />Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber to-transparent" />
    </section>
  )
}
