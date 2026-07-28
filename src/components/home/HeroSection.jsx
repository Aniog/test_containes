import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Search, CheckCircle, Truck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const trustBadges = [
  { icon: Shield, text: 'Verified Suppliers' },
  { icon: Search, text: 'Factory Audits' },
  { icon: CheckCircle, text: 'Quality Inspections' },
  { icon: Truck, text: 'Shipping Support' },
]

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-slate-900 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />

      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
            Find reliable suppliers, verify factories, inspect quality, and coordinate shipping — all handled by our experienced team based in China.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/contact" className="btn-primary text-center">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/how-it-works" className="btn-secondary text-center">
              See How It Works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-slate-300">
                <badge.icon className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
