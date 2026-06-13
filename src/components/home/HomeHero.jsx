import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Factory, Ship, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-1.5 mb-6">
              <ShieldCheck className="w-4 h-4 text-brand-navy" />
              <span className="text-xs font-medium text-brand-navy">Trusted by 500+ Global Buyers</span>
            </div>

            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy tracking-tight leading-tight">
              China Sourcing Agent<br />
              <span className="text-brand-orange">for Global Buyers</span>
            </h1>

            <p id="hero-subtitle" className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">
              We help overseas businesses find verified Chinese suppliers, negotiate better prices, 
              inspect quality on-site, follow production progress, and coordinate international shipping — 
              so you can source from China with confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-medium rounded-lg transition-colors text-center"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-medium rounded-lg transition-colors text-center"
              >
                How We Work
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {[
                { icon: Factory, label: 'Factory Verification' },
                { icon: ShieldCheck, label: 'Quality Control' },
                { icon: Ship, label: 'Shipping Support' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-sm text-gray-600 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
              data-strk-bg-id="hero-image-bg-8f2a9c"
              data-strk-bg="[hero-subtitle] [hero-heading]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-md px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Verified Factories</p>
                <p className="text-sm font-semibold text-gray-800">2,000+ Audited</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}