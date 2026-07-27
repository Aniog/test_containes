import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative bg-brand-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        data-strk-bg-id="hero-bg-9f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-brand-orange" />
              <span className="text-sm text-gray-200 font-medium">Trusted by 500+ Global Buyers</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              We help you find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-orange-600 transition text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition text-base"
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-green" />
                No upfront fees
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-green" />
                Factory-verified suppliers
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-green" />
                End-to-end support
              </span>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              data-strk-img-id="hero-factory-img-4b7e1d"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="China factory sourcing"
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
