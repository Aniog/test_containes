import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Shield, Truck, Search } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Trusted by 500+ Global Buyers</span>
            </div>
            
            <h1 className="heading-1 mb-6">
              China Sourcing Agent for{' '}
              <span className="text-accent">Global Buyers</span>
            </h1>
            
            <p className="body-large text-gray-300 mb-8 max-w-xl">
              Find reliable Chinese suppliers, verify factories, inspect quality, 
              and coordinate shipping — all with one trusted partner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="btn-accent text-lg px-8 py-4 group"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/how-it-works"
                className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                How It Works
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">Quality Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right content - Feature cards */}
          <div className="hidden lg:block animate-slide-up animation-delay-200">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl p-6">
                    <Search className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Supplier Search</h3>
                    <p className="text-sm text-gray-300">Find verified manufacturers</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6">
                    <Shield className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Factory Audit</h3>
                    <p className="text-sm text-gray-300">On-site verification</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6">
                    <CheckCircle className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Quality Control</h3>
                    <p className="text-sm text-gray-300">Inspection at every stage</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6">
                    <Truck className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Shipping</h3>
                    <p className="text-sm text-gray-300">Door-to-door delivery</p>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-accent text-white rounded-xl p-4 shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-primary rounded-xl p-4 shadow-xl">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
