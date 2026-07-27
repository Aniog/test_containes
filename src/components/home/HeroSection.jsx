import { ArrowRight, Shield, CheckCircle, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          data-strk-bg-id="hero-bg-ssourcing"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
      </div>
      <div className="container mx-auto px-6 py-20 lg:py-28 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-accent/20 text-accent text-sm font-medium px-3 py-1 rounded-full">
              <Shield className="w-4 h-4" />
              Trusted by 500+ Global Buyers
            </span>
          </div>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            China Sourcing Agent for{' '}
            <span className="text-accent">Global Buyers</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
          >
            We find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white font-medium px-8 py-4 rounded-md transition-colors text-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-medium px-8 py-4 rounded-md transition-colors text-lg"
            >
              How It Works
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              No upfront fees
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Verified supplier network
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              48h response time
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
