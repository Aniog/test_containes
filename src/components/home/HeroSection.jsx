import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Truck, Search } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ opacity: 0.15 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy/95 to-navy/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-trust-green" />
            <span className="text-trust-green text-sm font-semibold">Trusted by 500+ Global Buyers</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
            We help you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import from China with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-sky-blue text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-sky-blue-dark transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/10 transition-colors"
            >
              See How It Works
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-blue/20 flex items-center justify-center flex-shrink-0">
                <Search className="w-5 h-5 text-sky-blue" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Supplier Sourcing</p>
                <p className="text-white/60 text-xs">Verified factories only</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-trust-green/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-trust-green" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Quality Control</p>
                <p className="text-white/60 text-xs">On-site inspections</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-warm-orange/20 flex items-center justify-center flex-shrink-0">
                <Truck className="w-5 h-5 text-warm-orange" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Shipping Coordination</p>
                <p className="text-white/60 text-xs">Door-to-door service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
