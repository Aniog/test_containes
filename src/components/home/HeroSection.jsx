import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle, Globe } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-[#1a2744] overflow-hidden">
      {/* Background overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a2744] via-[#1a2744]/95 to-[#1a2744]/80" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl py-20 md:py-28 lg:py-36">
          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
          >
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/contact" className="btn-primary text-base">
              Get a Free Sourcing Quote
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/how-it-works" className="btn-outline-light text-base">
              See How It Works
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <Shield className="text-[#d4a843] flex-shrink-0" size={24} />
              <span className="text-sm text-gray-300">Verified Suppliers</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#d4a843] flex-shrink-0" size={24} />
              <span className="text-sm text-gray-300">Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="text-[#d4a843] flex-shrink-0" size={24} />
              <span className="text-sm text-gray-300">Global Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
