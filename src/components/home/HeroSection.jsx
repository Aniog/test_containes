import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" ref={containerRef}>
      <div className="absolute inset-0 opacity-10">
        <div
          data-strk-bg-id="hero-bg-texture-d8a1f2"
          data-strk-bg="[hero-eyebrow]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="w-full h-full"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <p id="hero-eyebrow" className="text-brand-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Trusted Sourcing Partner Since 2012
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="mt-6 text-lg text-navy-200 leading-relaxed max-w-lg">
              We help businesses worldwide find vetted suppliers, verify factories, inspect quality, and manage production — so you can source from China with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-base font-semibold text-white hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                How It Works
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-400" />
                <span className="text-sm text-navy-200">Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-400" />
                <span className="text-sm text-navy-200">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-400" />
                <span className="text-sm text-navy-200">On-Time Delivery</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-600/20 rounded-2xl blur-2xl" />
              <img
                alt="China factory quality inspection"
                data-strk-img-id="hero-factory-img-c8f3a1"
                data-strk-img="China factory floor quality control inspection manufacturing"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                className="relative rounded-xl shadow-2xl w-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}