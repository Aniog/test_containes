import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Truck } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
            Find reliable suppliers. Verify factories. Inspect quality. Follow production. Coordinate shipping. We handle the entire sourcing process so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-600 transition-colors no-underline text-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-4 rounded-lg hover:bg-white/10 transition-colors no-underline text-lg"
            >
              See How It Works
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-10">
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-medium">Verified Suppliers</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Truck className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-medium">Shipping Coordination</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-medium">Quality Inspections</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
