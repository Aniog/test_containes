import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Truck, ClipboardCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-slate-900 text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        data-strk-bg-id="hero-bg-ssourcing-7a3b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-sm md:text-base font-semibold tracking-wide uppercase text-brand-300 mb-4">
            Trusted China Sourcing Agent Since 2012
          </p>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed"
          >
            We help overseas businesses find reliable suppliers, verify
            factories, inspect quality, follow production, and coordinate
            shipping — so you can buy from China with confidence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-brand-700 text-white font-semibold hover:bg-brand-600 transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition"
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-300" />
              Supplier verification
            </span>
            <span className="flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5 text-brand-300" />
              Quality inspections
            </span>
            <span className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-brand-300" />
              Shipping coordination
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
