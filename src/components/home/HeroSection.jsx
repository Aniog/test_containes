import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle, Truck } from 'lucide-react'
import Button from '@/components/ui/Button'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-600 to-primary-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Trusted by 500+ Global Buyers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent for <span className="text-secondary">Global Buyers</span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-xl">
              We help you find reliable suppliers, verify factories, inspect quality, 
              follow production, and coordinate shipping — all under one roof.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary">500+</div>
                <div className="text-sm text-slate-300">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary">15+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary">98%</div>
                <div className="text-sm text-slate-300">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Factory inspection in China"
                className="w-full h-80 object-cover rounded-xl mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Factory Verified</div>
                    <div className="text-sm text-slate-300">On-site inspection complete</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Shipping Coordinated</div>
                    <div className="text-sm text-slate-300">Door-to-door delivery arranged</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8FAFC"/>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection