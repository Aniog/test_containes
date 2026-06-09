import { useEffect, useRef } from 'react'
import { ArrowRight, ShieldCheck, Zap, Award } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center bg-charcoal-950 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-7f3a2e"
        data-strk-bg="[hero-subtitle-text] [hero-title-text]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/80 to-charcoal-950/60 z-[1]" />

      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 z-10" />

      <div className="relative z-10 container-wide px-4 md:px-8 lg:px-16 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-brand-500" />
            <span className="text-brand-400 text-sm font-semibold tracking-[0.25em] uppercase">
              Industrial Precision
            </span>
          </div>

          {/* Title */}
          <h1
            id="hero-title-text"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            Double Folding{' '}
            <span className="text-brand-400">Machines</span>{' '}
            Built to Last
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle-text"
            className="text-lg md:text-xl text-steel-300 leading-relaxed max-w-2xl mb-10"
          >
            Engineered for precision, durability, and performance. Our sheet metal folders and double folder machines deliver unmatched accuracy for every metalworking project.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => scrollTo('#products')}
              className="btn-primary text-base"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-secondary border-steel-500 text-steel-200 hover:bg-white hover:text-charcoal-950 hover:border-white text-base"
            >
              Request a Quote
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-400 flex-shrink-0" />
              <span className="text-steel-400 text-xs font-medium uppercase tracking-wide">2 Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-400 flex-shrink-0" />
              <span className="text-steel-400 text-xs font-medium uppercase tracking-wide">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-400 flex-shrink-0" />
              <span className="text-steel-400 text-xs font-medium uppercase tracking-wide">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[2]" />
    </section>
  )
}

export default Hero
