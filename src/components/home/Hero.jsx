import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Shield, Truck, ClipboardCheck } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-neutral-50 via-white to-primary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Trusted by 500+ Global Buyers
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              China Sourcing Agent for{' '}
              <span className="text-primary-600">Global Buyers</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl">
              Find verified suppliers, ensure product quality, and streamline your 
              China procurement with our professional sourcing services. From factory 
              verification to door-to-door delivery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto group">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900">500+</div>
                <div className="text-sm text-neutral-500">Verified Suppliers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900">50+</div>
                <div className="text-sm text-neutral-500">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900">98%</div>
                <div className="text-sm text-neutral-500">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-3">
              {/* Factory/QC Visual Illustration */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Factory Verified</div>
                    <div className="text-sm text-neutral-500">On-site inspection complete</div>
                  </div>
                  <CheckCircle className="w-6 h-6 text-accent-500 ml-auto" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                    <ClipboardCheck className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">QC Passed</div>
                    <div className="text-sm text-neutral-500">AQL 2.5 standards met</div>
                  </div>
                  <CheckCircle className="w-6 h-6 text-accent-500 ml-auto" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Truck className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Shipped</div>
                    <div className="text-sm text-neutral-500">On the way to destination</div>
                  </div>
                  <div className="ml-auto">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-primary-300 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-primary-400 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-primary-500 rounded-full border-2 border-white"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-600 text-white p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Order #ORD-2024-1234</div>
                      <div className="text-sm text-primary-200">12,500 units shipped</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-xs text-primary-200">Quality Score</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}