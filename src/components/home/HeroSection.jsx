import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Search, BarChart3 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { label: 'Factory Audits Conducted', value: '2,800+' },
  { label: 'Products Sourced', value: '15,000+' },
  { label: 'Suppliers Verified', value: '4,200+' },
  { label: 'Clients Served', value: '600+' },
]

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-slate-900"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-blue-200 mb-6 border border-white/10">
              <Shield className="w-4 h-4" />
              Trusted by 600+ buyers worldwide
            </div>

            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              China Sourcing Agent for Global Buyers
            </h1>

            <p
              id="hero-subtitle"
              className="text-lg md:text-xl text-blue-100/80 leading-relaxed mb-8 max-w-2xl"
            >
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, monitor production, and ship your orders — all under one roof.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="bg-accent-600 hover:bg-accent-700 text-white font-semibold px-8 py-3.5 rounded-lg text-lg inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-600/25"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-lg text-lg inline-flex items-center gap-2 transition-colors"
              >
                <BarChart3 className="w-5 h-5" />
                See How It Works
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-200/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}