import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-brand-950/85" />

      {/* Accent glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[120px] z-[2]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-600/8 rounded-full blur-[100px] z-[2]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
            <span className="text-accent-300 text-xs font-semibold tracking-wider uppercase">
              Industrial Precision Engineering
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            Double Folding{' '}
            <span className="text-accent-400">Machines</span>{' '}
            Built to Last
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-steel-300 leading-relaxed mb-10 max-w-2xl"
          >
            ARTITECT MACHINERY delivers precision sheet metal folding machines
            engineered for reliability, speed, and unmatched accuracy. From double
            folders to versatile metal folding systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-400 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/25 text-base"
            >
              Explore Products
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-base"
            >
              Request a Quote
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">25+</div>
              <div className="text-xs sm:text-sm text-steel-400 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">12K+</div>
              <div className="text-xs sm:text-sm text-steel-400 mt-1">Machines Delivered</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">98%</div>
              <div className="text-xs sm:text-sm text-steel-400 mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
