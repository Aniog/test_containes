import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title] industrial machinery"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-brand-950/80 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
            <span className="text-xs font-medium text-gold-400 tracking-wide uppercase">
              Precision Engineering Since 1995
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6"
          >
            ARTITECT
            <br />
            <span className="text-gold-400">MACHINERY</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-brand-200 leading-relaxed mb-8 max-w-xl"
          >
            Industry-leading metal folding solutions engineered for precision, durability, and performance. Trusted by manufacturers worldwide.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm rounded-sm transition-colors duration-200"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white hover:bg-white/10 font-medium text-sm rounded-sm transition-colors duration-200"
            >
              Get a Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f6f7f9] to-transparent z-[2]" />
    </section>
  )
}
