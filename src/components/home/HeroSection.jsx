import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Shield, CheckCircle, Globe } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-[#1A3C6E] overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-ssourcing-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A3C6E]/95 via-[#1A3C6E]/80 to-[#1A3C6E]/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Globe className="w-4 h-4 text-[#D4A017]" />
            <span className="text-white/90 text-sm font-medium">Trusted by buyers in 40+ countries</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            China Sourcing Agent<br />
            <span className="text-[#D4A017]">for Global Buyers</span>
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-[#CBD5E0] leading-relaxed mb-8 max-w-2xl">
            We help overseas businesses find verified Chinese suppliers, inspect product quality, follow production, and coordinate shipping — so you can import with confidence.
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { icon: Shield, text: 'Factory Verified' },
              { icon: CheckCircle, text: 'Quality Inspected' },
              { icon: Globe, text: 'Door-to-Door Shipping' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/80 text-sm">
                <Icon className="w-4 h-4 text-[#D4A017]" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-base"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-base"
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#1A1A2E]/80 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: '500+', label: 'Verified Suppliers' },
              { value: '40+', label: 'Countries Served' },
              { value: '8 Years', label: 'Industry Experience' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-[#D4A017]">{value}</div>
                <div className="text-xs md:text-sm text-[#A0AEC0]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
