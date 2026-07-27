import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Shield, CheckCircle } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="relative overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-surface-900"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-heading] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-900/90 via-surface-900/75 to-surface-900/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium text-white/90">Your Trusted China Sourcing Partner</span>
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
          >
            We help importers and businesses find reliable Chinese suppliers, verify factories, 
            inspect product quality, and manage shipping end-to-end. Save time, reduce risk, 
            and source with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-accent-500 text-white rounded-lg font-semibold text-base hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/25"
            >
              Get a Free Sourcing Quote
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium text-base hover:bg-white/20 transition-colors border border-white/20"
            >
              How It Works
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-12 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>500+ vetted suppliers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>1000+ shipments managed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>98% on-time delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}