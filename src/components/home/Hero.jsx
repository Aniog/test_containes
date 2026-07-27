import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CTAButton from '@/components/shared/CTAButton'
import { ArrowRight, Shield, Search, ClipboardCheck } from 'lucide-react'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-9f3c2a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Trusted China Sourcing Partner
          </p>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            We help overseas businesses find reliable Chinese suppliers, verify factories, inspect product quality, and coordinate shipping — so you can import with confidence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <CTAButton>
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </CTAButton>
            <CTAButton variant="white" to="/how-it-works">
              See How It Works
            </CTAButton>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Search className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm text-white/80 font-medium">Supplier Sourcing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm text-white/80 font-medium">Factory Verification</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <ClipboardCheck className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm text-white/80 font-medium">Quality Control</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
