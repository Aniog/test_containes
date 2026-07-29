import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle } from 'lucide-react'

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-neutral-800 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            We help you find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-neutral-900 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              How It Works
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent" /> 500+ Verified Suppliers</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent" /> 12+ Years Experience</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent" /> 30+ Countries Served</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
