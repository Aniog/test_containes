import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, ShieldCheck, Truck, ClipboardCheck, Search } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-slate-900 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-bg-ssourcing-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-900/50 text-blue-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-blue-800">
              <ShieldCheck className="w-3.5 h-3.5" />
              Trusted by 500+ Buyers Worldwide
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl"
          >
            We help overseas businesses find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy from China with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors text-base"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-500 text-white font-medium rounded-md hover:bg-slate-800 transition-colors text-base"
            >
              See How It Works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Search, label: 'Supplier Sourcing' },
              { icon: ClipboardCheck, label: 'Factory Audit' },
              { icon: ShieldCheck, label: 'QC Inspection' },
              { icon: Truck, label: 'Shipping' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-slate-400 text-sm"
              >
                <item.icon className="w-5 h-5 text-blue-400 shrink-0" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
