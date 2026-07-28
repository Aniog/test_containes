import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ClipboardCheck, Globe, Shield, Truck } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
              <Globe className="h-4 w-4 mr-2" />
              Trusted by 500+ Global Buyers
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for{' '}
              <span className="text-secondary">Global Buyers</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Find reliable suppliers, verify factories, inspect quality, and coordinate 
              shipping — all with one trusted partner on the ground in China.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark transition-all shadow-lg hover:shadow-xl group"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span className="text-sm">Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-sm">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Truck className="h-5 w-5 text-secondary" />
                <span className="text-sm">Door-to-Door Shipping</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">Factory Audit</h3>
                  <p className="text-white/60 text-sm">On-site verification</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <ClipboardCheck className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">QC Inspection</h3>
                  <p className="text-white/60 text-sm">Pre-shipment checks</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Truck className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">Logistics</h3>
                  <p className="text-white/60 text-sm">Global shipping</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">Sourcing</h3>
                  <p className="text-white/60 text-sm">Best suppliers</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                10+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50L60 45C120 40 240 30 360 35C480 40 600 60 720 65C840 70 960 60 1080 50C1200 40 1320 30 1380 25L1440 20V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
