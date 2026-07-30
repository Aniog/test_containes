import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const trustPoints = [
  'Verified supplier network',
  'On-site factory audits',
  'Production tracking',
  'QC inspections',
]

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        data-strk-bg-id="hero-bg-ssourcing-1a2b3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label text-brand-400">China Sourcing Agent</span>
            <h1 id="hero-title" className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-4 mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg lg:text-xl text-slate-300 mb-8 max-w-xl">
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary text-lg px-8 py-4 border-slate-600 text-white hover:bg-slate-800 hover:text-white">
                How It Works
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-brand-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <img
                alt="China sourcing agent factory visit"
                className="w-full h-auto object-cover"
                data-strk-img-id="hero-img-ssourcing-4d5e6f"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
