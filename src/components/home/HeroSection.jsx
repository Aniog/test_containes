import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Search, Ship, Factory, Star, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const trustBadges = [
  { icon: ShieldCheck, label: 'Verified Suppliers' },
  { icon: Factory, label: 'Factory Audits' },
  { icon: Search, label: 'QC Inspections' },
  { icon: Ship, label: 'Shipping Coordination' },
]

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-brand-800 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-9a3b7c"
        data-strk-bg="[hero-title] [hero-subtitle] China sourcing agent global trade warehouse shipping"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/92 via-brand-800/88 to-brand-700/82" />

      <div className="relative container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-accent-500/30">
              Trusted by 500+ Global Buyers
            </span>

            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight"
            >
              China Sourcing Agent
              <br />
              <span className="text-accent-400">for Global Buyers</span>
            </h1>

            <p
              id="hero-subtitle"
              className="text-lg md:text-xl text-steel-200 leading-relaxed mb-8 max-w-lg"
            >
              Find reliable suppliers, verify factories, inspect quality, and
              coordinate shipping — all managed by a local team you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/contact" className="btn-accent text-base px-8 py-4">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary border-white/30 text-white hover:bg-white/10 text-base px-8 py-4">
                See How It Works
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              {trustBadges.map((badge) => {
                const Icon = badge.icon
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10"
                  >
                    <Icon className="w-5 h-5 text-accent-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-steel-200">{badge.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right side - Stats/Visual Card */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/15">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-accent-400 flex items-center justify-center text-white text-sm font-bold border-2 border-brand-800">J</div>
                  <div className="w-10 h-10 rounded-full bg-brand-400 flex items-center justify-center text-white text-sm font-bold border-2 border-brand-800">M</div>
                  <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white text-sm font-bold border-2 border-brand-800">R</div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-steel-300">Trusted by buyers worldwide</span>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  { number: '500+', label: 'Verified Suppliers' },
                  { number: '50+', label: 'Countries Served' },
                  { number: '2,000+', label: 'Orders Managed' },
                  { number: '98%', label: 'Client Satisfaction' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                    <span className="text-steel-300 text-sm">{stat.label}</span>
                    <span className="text-2xl font-bold text-white">{stat.number}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
