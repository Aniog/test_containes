import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Shield, Search, Ship } from 'lucide-react'

const HeroSection = () => {
  const features = [
    { icon: <Shield className="w-5 h-5" />, text: 'Verified Suppliers' },
    { icon: <Search className="w-5 h-5" />, text: 'Quality Inspection' },
    { icon: <Ship className="w-5 h-5" />, text: 'Shipping Support' },
  ]

  return (
    <section className="relative bg-gradient-to-br from-navy via-navy-800 to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-white/90">Trusted by 500+ Global Buyers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent
              <br />
              <span className="text-accent">for Global Buyers</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
              Find reliable suppliers, verify factories, inspect quality, and coordinate 
              shipping — all from one trusted partner in China.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/how-it-works" className="btn-white inline-flex items-center justify-center">
                How It Works
              </Link>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-white/80 text-sm">Global Clients</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">10K+</div>
                  <div className="text-white/80 text-sm">Suppliers Verified</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-white/80 text-sm">Quality Pass Rate</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-accent/20 rounded-lg border border-accent/30">
                <p className="text-white text-sm font-medium">
                  "We've helped businesses from 40+ countries source products from China 
                  with confidence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
