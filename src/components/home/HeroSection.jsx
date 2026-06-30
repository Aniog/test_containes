import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Search, Truck } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300 font-medium">Based in Guangzhou, China</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
            We help international businesses find reliable suppliers, verify factories,
            inspect product quality, and manage shipping across China. Save time, reduce
            risk, and import with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors shadow-lg shadow-brand-600/25"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-lg text-base font-medium transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-6 mt-16">
          <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <Search className="w-5 h-5 text-brand-300 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-white font-semibold text-sm">Supplier Sourcing</h3>
              <p className="text-gray-400 text-xs mt-1">Vetted suppliers matching your product requirements</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <Shield className="w-5 h-5 text-brand-300 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-white font-semibold text-sm">Factory Audits</h3>
              <p className="text-gray-400 text-xs mt-1">On-site verification of manufacturer capabilities</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <Truck className="w-5 h-5 text-brand-300 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-white font-semibold text-sm">Shipping & Logistics</h3>
              <p className="text-gray-400 text-xs mt-1">End-to-end coordination from factory to your door</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}