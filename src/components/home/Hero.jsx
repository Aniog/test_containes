import { useEffect, useRef } from 'react'
import { ChevronDown, Cog, Shield, Zap } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a7f3c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-brand-900/85" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent-500/15 border border-accent-500/30 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-accent-400" />
              <span className="text-accent-300 text-sm font-medium tracking-wide">
                Precision Engineering Since 1998
              </span>
            </div>

            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-[var(--font-heading)]"
            >
              Master the Art of{' '}
              <span className="text-accent-400">Metal Folding</span>
            </h1>

            <p
              id="hero-subtitle"
              className="text-lg text-brand-200 leading-relaxed max-w-xl"
            >
              ARTITECT MACHINERY delivers world-class double folding machines
              and sheet metal folders engineered for precision, durability, and
              effortless operation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="bg-accent-500 hover:bg-accent-600 text-brand-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/25 text-center tracking-wide"
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="border-2 border-brand-300 hover:border-accent-400 text-white hover:text-accent-400 font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-center tracking-wide"
              >
                Request a Quote
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-brand-300">
                <Shield className="w-5 h-5 text-accent-500" />
                <span className="text-sm">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-brand-300">
                <Cog className="w-5 h-5 text-accent-500" />
                <span className="text-sm">50+ Countries Served</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent-500/10 rounded-2xl blur-xl" />
              <img
                data-strk-img-id="hero-machine-b8d4e1"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT double folding machine"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-accent-400 transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}
