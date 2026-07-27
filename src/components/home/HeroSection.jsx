import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Clock, Users } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed"
            >
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all with transparent pricing and on-the-ground expertise.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold text-base px-8 py-4 rounded-lg transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 text-slate-700 hover:border-brand hover:text-brand font-semibold text-base px-8 py-4 rounded-lg transition-colors"
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <Users className="w-5 h-5 text-brand" />
                <span className="text-2xl font-bold text-slate-900">500+</span>
                <span className="text-sm text-slate-500">Clients Served</span>
              </div>
              <div className="flex flex-col gap-2">
                <Shield className="w-5 h-5 text-brand" />
                <span className="text-2xl font-bold text-slate-900">12</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div className="flex flex-col gap-2">
                <Clock className="w-5 h-5 text-brand" />
                <span className="text-2xl font-bold text-slate-900">24h</span>
                <span className="text-sm text-slate-500">Avg. Response</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100"
              data-strk-bg-id="hero-bg-ssourcing-a1b2c3"
              data-strk-bg="[hero-subtitle] [hero-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="900"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
