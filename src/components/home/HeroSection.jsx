import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Search, Truck, CheckCircle } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-neutral-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-main-bg"
        data-strk-bg="[hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/85 to-neutral-900/60 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <span className="inline-block bg-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
            Trusted Sourcing Partner Since 2015
          </span>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            China Sourcing Agent
            <br />
            <span className="text-secondary">for Global Buyers</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl">
            We help international businesses find reliable suppliers, verify factories,
            inspect product quality, and coordinate shipping from China to your door.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg text-base transition-all shadow-lg hover:shadow-xl"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-neutral-500 text-white hover:border-white font-semibold px-8 py-4 rounded-lg text-base transition-all"
            >
              How It Works
            </Link>
          </div>

          {/* Trust Points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Search, text: 'Supplier Vetting' },
              { icon: Shield, text: 'Factory Audits' },
              { icon: CheckCircle, text: 'QC Inspection' },
              { icon: Truck, text: 'Door-to-Door Shipping' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-neutral-300">
                <item.icon className="w-4 h-4 text-secondary shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
