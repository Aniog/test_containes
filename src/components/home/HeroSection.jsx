import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-navy-800">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-800/90 via-navy-800/80 to-navy-800/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-accent-500/20 text-accent-500 text-xs font-semibold px-3 py-1 rounded-full border border-accent-500/30">
              Trusted by 200+ Global Buyers
            </span>
          </div>
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl"
          >
            We help overseas businesses find reliable suppliers, verify factories, inspect product quality, and manage shipping from China. Save time, reduce risk, and source with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-base transition-colors shadow-lg shadow-accent-500/25"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold text-base transition-colors"
            >
              See How It Works
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              Verified Suppliers
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Factory Audited
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Quality Guaranteed
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}