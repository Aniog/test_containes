import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle, TrendingUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <p className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-gold-500/15 text-gold-400 border border-gold-500/20">
              Trusted by 500+ Global Buyers
            </p>
            <h1 id="hero-headline" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              China Sourcing Agent{' '}
              <span className="block text-gold-400">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg text-slate-300 max-w-xl leading-relaxed">
              We find verified suppliers, inspect quality, and manage your China supply chain
              end-to-end — so you can grow your business without the guesswork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-gold-500 text-white hover:bg-gold-600 transition-colors shadow-lg shadow-gold-500/25"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                See How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { icon: Shield, text: 'Verified Suppliers' },
                { icon: CheckCircle, text: '100% QC Inspection' },
                { icon: TrendingUp, text: '98% Client Retention' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-slate-300 text-sm">
                  <item.icon className="w-4 h-4 text-gold-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="China factory quality inspection"
                data-strk-img-id="hero-factory-qc-a1b2c3"
                data-strk-img="[hero-subtitle] [hero-headline]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Verified Factories</p>
                <p className="text-lg font-bold text-navy-800">3,200+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-navy-900/20 pointer-events-none" />
    </section>
  )
}
