import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Shield, Truck, Search } from 'lucide-react'

const features = [
  { icon: Search, text: 'Supplier Verification' },
  { icon: Shield, text: 'Quality Control' },
  { icon: Truck, text: 'Shipping Coordination' },
  { icon: CheckCircle, text: 'Factory Audits' },
]

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="container relative py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-700/50 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-blue-200">Trusted by 500+ Global Buyers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent for{' '}
              <span className="text-blue-300">Global Buyers</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, 
              follow production, and coordinate shipping from China.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                How It Works
              </Link>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-3">
                  <feature.icon className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-100">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              <div 
                className="rounded-2xl overflow-hidden shadow-2xl"
                data-strk-bg-id="hero-factory-bg"
                data-strk-bg="[hero-subtitle] [hero-title]"
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="800"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Truck className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-white/80 text-sm">Professional Factory & Logistics Imagery</p>
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Verified Suppliers</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-gray-600">Quality Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden elements for image interpolation */}
        <h1 id="hero-title" className="sr-only">China Sourcing Agent for Global Buyers</h1>
        <p id="hero-subtitle" className="sr-only">Professional sourcing services for overseas buyers</p>
      </div>
    </section>
  )
}
