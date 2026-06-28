import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary/95 to-primary/80 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, rgba(255,255,255,0.15) 0%, transparent 50%),
                            radial-gradient(circle at 75% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm">
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span className="text-white/90">Verified by 500+ global buyers</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
            We help importers, wholesalers, and brands find reliable Chinese suppliers, 
            verify factories, control product quality, and manage shipping — so you can 
            source with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-light hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-3.5 text-base transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-lg px-8 py-3.5 text-base transition-colors"
            >
              See How It Works
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-6 md:gap-10 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              Supplier Verification
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              Quality Inspection
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              Shipping Coordination
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}